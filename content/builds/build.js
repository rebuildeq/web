let mousedownbegin
let lastTouched
let touchtimer
let isLocked = false
let classLevel = 0
let currentClassID = 0

function setClass(classID) {
	console.log("Setting class to "+classID)
	currentClassID = 0
	let classInfo = classInfos.get(classID)
	if (!classInfo) {
		console.log("Invalid class ID: "+classID)
		return
	}
	let buildInfo = builds.get(classID)
	if (!buildInfo) {
		console.log("Builds not found for class ID: "+classID)
		return
	}


	Array.from(document.querySelectorAll('#class-list.a')).forEach(classButton => {
		let classButtonID = parseInt(classButton.getAttribute("data-class"))

		let classIcon = classButton.querySelector("img")
		if (!classIcon) {
			console.log("Class icon not found for class ID: "+classButtonID)
			return
		}

		if (classButtonID === classID) {
			classButton.classList.add("classicon-active")
		}
		else {
			classButton.classList.remove("classicon-active")
		}
	})

	let classDescElement = document.getElementById("class-description")
	if (!classDescElement) {
		console.log("Class description element not found")
		return
	}

	classDescElement.innerHTML = classInfo.get("description")

	for (let i = 1; i < 4; i++) {
		let tree = document.getElementById("tree-"+i)
		if (!tree) {
			console.log("Tree "+i+" not found")
			return
		}
		tree.innerHTML = generateTreeHTML(classID, i)
	}


	let buildList = document.getElementById("build-list")
	if (!buildList) {
		console.log("Build list not found")
		return
	}

	let build = builds.get(classID)
	if (!build) {
		console.log("Builds not found for class ID: "+classID)
		return
	}

	html = ''
	for (let i = 0; i < 53; i++) {
		let skill = build.get(i)
		if (!skill) {
			continue
		}
		html += `<li><a href="/builds/${classID}/skill/${i}"><img src="${skill.icon}"> <b>${skill.title}</b> - ${skill.description.replace(/<[^>]*>?/gm, '').substring(0, 150)}</a></li>`
	}
	buildList.innerHTML = html

	let classNameElement = document.getElementById("class-name")
	if (!classNameElement) {
		console.log("Class name element not found")
		return
	}
	classNameElement.innerHTML = classInfo.get("name")


	let titleElement = document.querySelector("h1.title")
	if (!titleElement) {
		console.log("Title element not found")
		return
	}
	titleElement.innerHTML = classInfo.get("name")

	let monogramElement = document.getElementById("monogram")
	if (!monogramElement) {
		console.log("Monogram element not found")
		return
	}
	monogramElement.innerHTML = classInfo.get("monogram")

	currentClassID = classID
}


function handleClassMouseDown(event) {
	event.preventDefault()
	setClass(parseInt(event.currentTarget.getAttribute("data-class")))
}

function handleClassMouseUp(event) {
	event.preventDefault()
}

function handleSkillMouseDown(event) {
	event.preventDefault()
	switch (event.which) {
		case 1: //left mouse button
			clearTimeout(touchtimer)
			mousedownbegin = (new Date()).getTime()
			lastTouched = event.currentTarget
			touchtimer = setTimeout(() => checkLongTouch(true), 500)
			break
	}
}

function handleSkillMouseUp(event) {
	event.preventDefault()
	switch (event.which) {
		case 1: //left mouse button
			clearTimeout(touchtimer)
			checkLongTouch(false)
			break
		case 3: //right mouse button
			updatePoints(event.currentTarget, -1)
			break
	}
}

function checkLongTouch(fromTimer) {
	if (lastTouched !== null) {
		if (fromTimer === true) {
			updatePoints(lastTouched, -1)
			updatePoints(lastTouched, -1)
			updatePoints(lastTouched, -1)
			updatePoints(lastTouched, -1)
			updatePoints(lastTouched, -1)
		} else {
			updatePoints(lastTouched, 1)
		}
		lastTouched = null
	}
}

function updatePoints(skillHandle, change) {
	if (isLocked) {
		return
	}
	if (currentClassID == 0) {
		return
	}
	const tree = skillHandle.closest(".tree")
	const thisLevel = parseInt(skillHandle.parentElement.getAttribute("data-level"))
	const invested = parseInt(skillHandle.parentElement.getAttribute("data-invested"))
	const tierTotal = parseInt(skillHandle.parentElement.getAttribute("data-total"))
	const treeTotal = parseInt(tree.querySelector("#totalPoints").textContent)
	let points = parseInt(skillHandle.getAttribute("data-points"))
	const max = parseInt(skillHandle.getAttribute("data-max"))
	let grandTotal = parseInt(document.querySelector("#tree-1 span.totalPoints").textContent)
	grandTotal += parseInt(document.querySelector("#tree-2 span.totalPoints").textContent)
	grandTotal += parseInt(document.querySelector("#tree-3 span.totalPoints").textContent)
	const charLevel = parseInt(document.querySelector("span.charLevel").textContent)
	let buildIndex = skillHandle.id
	if (buildIndex.length < 6) {
		console.log("Invalid build index")
		return
	}
	buildIndex = parseInt(buildIndex.substring(6))
	if (buildIndex < 0 || buildIndex > 53) {
		return
	}

	if (change == -1 && !isTest) { //ignore right clicks
		return
	}

	if (typeof classLevel == 'number' && grandTotal >= classLevel) { //stop spending once they hit max
		return
	}

	document.querySelector("span.charPointsLeft").textContent = (classLevel - grandTotal)

	if (change > 0) {
		if (points < max && treeTotal >= 5 * thisLevel && charLevel < 60) {
			points++
		}
	} else {
		if (points > 0) {
			let ok = true
			Array.from(tree.querySelectorAll("div.tier")).forEach(tier => {
				const level = parseInt(tier.getAttribute("data-level"))
				const total = parseInt(tier.getAttribute("data-total")) - (level == thisLevel ? 1 : 0)
				const invested = parseInt(tier.getAttribute("data-invested")) - (level > thisLevel ? 1 : 0)
				ok &= (
					(level == thisLevel && total == 0 && treeTotal >= invested + total) ||
					(level != thisLevel && total == 0) ||
					(total > 0 && (level * 5 <= invested))
				)
			})
			if (ok) {
				points--
			}
		}
	}
	console.log(change+","+points+","+max)

	if (!isTest && points <= max) { //Request change to server
		isLocked = true
		const session = "" // Add the session variable appropriately
		fetch("/rest/builds/update", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `session=${session}&buildIndex=${buildIndex}`
		})
		.then(response => response.json())
		.then(result => {
			if (result.Status == 1) {
				console.log("Success:"+result)
				skillHandle.setAttribute("data-points", points)
				updateTree(tree)
				updateStats()
			} else {
				console.log("Failure:"+result)
				console.log(result.Message)
			}
			isLocked = false
		})
		.catch(error => {
			console.log("Error:"+error)
			isLocked = false
		})
	} else {
		skillHandle.setAttribute("data-points", points)
		updateTree(tree)
		updateStats()
	}
}

function updateTree(treeHandle) {
	if (currentClassID == 0) {
		return
	}
	let totalPoints = 0
	Array.from(treeHandle.querySelectorAll("div.tier")).forEach(tier => {
		tier.setAttribute("data-invested", totalPoints) //the PREVIOUS tier running total
		const tierLevel = parseInt(tier.getAttribute("data-level"))
		let tierTotal = 0
		Array.from(tier.querySelectorAll("div.skill")).forEach(skill => {
			const p = parseInt(skill.getAttribute("data-points"))
			const m = parseInt(skill.getAttribute("data-max"))
			totalPoints += p
			tierTotal += p
			const pointsElement = skill.querySelector("div.points")
			pointsElement.innerHTML = `${p}/${m}`
			pointsElement.style.visibility = (totalPoints < 5 * tierLevel) ? "hidden" : "visible"
			skill.classList.remove("partial", "full")
			if (p != 0) {
				skill.classList.add(p < m ? "partial" : "full")
			}
			Array.from(skill.querySelectorAll("em")).forEach(em => {
				let mod = parseFloat(em.getAttribute("data-mod"))
				if (isNaN(mod)) mod = 0
				const base = parseFloat(em.getAttribute("data-base"))
				const sum = Math.round((Math.max(p,1) * base + mod)*100)/100 //Math.round to eliminate goofy float errors
				const plus = (em.getAttribute("data-base").substring(0,1) === "+" ? "+" : "")
				em.innerHTML = (sum > 0 ? plus : (sum == 0 ? "" : "-")) + sum
			})
		})
		tier.setAttribute("data-total", tierTotal)
	})
	treeHandle.querySelector("span.totalPoints").textContent = totalPoints
	treeHandle.parentElement.querySelector(".color").style.height = Math.min(80 + totalPoints * 59.0 / 5 + (totalPoints > 25 ? 21 : 0), 396) + "px"
}

function updateStats() {
	let total = 0
	Array.from(document.querySelectorAll("span.totalPoints")).forEach(span => {
		total += parseInt(span.textContent)
	})
	document.querySelector("span.charLevel").textContent = total
	let descriptions = ""
	Array.from(document.querySelectorAll("div.skill")).forEach(skill => {
		const p = parseInt(skill.getAttribute("data-points"))
		if (p > 0) {
			descriptions += `<div class='skillText'>${skill.querySelector("div.description").innerHTML.replace("<h2>","<strong>").replace("</h2>", ` ${p}:</strong><div class='descriptionText'>`)}</div></div>`
		}
	})

	let grandTotal = parseInt(document.querySelector("#tree-1 span.totalPoints").textContent)
	grandTotal += parseInt(document.querySelector("#tree-2 span.totalPoints").textContent)
	grandTotal += parseInt(document.querySelector("#tree-3 span.totalPoints").textContent)
	document.querySelector("span.charPointsLeft").textContent = (classLevel - grandTotal)
}

function loadHash(hash) {
	hash = hash.toString().replace("#","")
	console.log("Loading hash"+hash)

	for (let i = 0; i < 53; i++) {
		const skill = document.getElementById(`skill-${i}`)
		if (skill && skill.getAttribute("data-points")) {
			console.log(i+":"+hash.charAt(i))
			skill.setAttribute("data-points", Math.min(hash.charAt(i), parseInt(skill.getAttribute("data-max"))))
		}
	}
	updateStats()
}

function getHash() {
	let hash = ""
	for (let i = 0; i < 53; i++) {
		const skill = document.getElementById(`skill-${i}`)
		if (skill) {
			hash += skill.getAttribute("data-points")
		} else {
			hash += "0"
		}
	}
	return hash
}

function getHashFromParams() {
	const hashParams = {}
	const a = /\+/g  // Regex for replacing addition symbol with a space
	const r = /([^&=]+)=?([^&]*)/g
	const d = s => decodeURIComponent(s.replace(a, " "))
	const q = window.location.hash.substring(1)

	let e
	while ((e = r.exec(q))) {
		hashParams[d(e[1])] = d(e[2])
	}
	//console.log(hashParams->build)
	//console.log(hashParams)
	return hashParams
}



document.addEventListener("DOMContentLoaded", function() {
	if (typeof initialHash === 'string' || typeof initialHash === 'number') {
		loadHash(initialHash)
	} else if (getHashFromParams()) {
		// Handle case where hash params are present
	}

	Array.from(document.querySelectorAll('#class-list.a')).forEach(skill => {
		skill.addEventListener('mousedown', handleClassMouseDown)
		skill.addEventListener('mouseup', handleClassMouseUp)
	})


	Array.from(document.querySelectorAll('div.skill')).forEach(skill => {
		skill.addEventListener('mousedown', handleSkillMouseDown)
		skill.addEventListener('mouseup', handleSkillMouseUp)
	})
	// let treeWrapperElement = document.querySelector("div.treewrapper")
	// if (!treeWrapperElement) {
	// 	console.log("Tree wrapper not found")
	// 	return
	// }
	// treeWrapperElement.addEventListener("contextmenu", function() { return false })


	Array.from(document.querySelectorAll("div.tree")).forEach(tree => {
		updateTree(tree)
	})
	updateStats()
})

setClass(2)