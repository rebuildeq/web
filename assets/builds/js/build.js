let skillMouseDownBegin
let lastTouched
let skillTouchTimer
let isLocked = false
let classClickCooldown = (new Date()).getTime()+500
let maxCharLevel = 60

function setClass(classID) {
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

	let classListElement = document.getElementById("class-list")
	if (!classListElement) {
		console.log("Class list element not found")
		return
	}

	Array.from(classListElement.querySelectorAll('span')).forEach(classButton => {
		let classButtonID = parseInt(classButton.getAttribute("data-class"))

		let classIcon = classButton.querySelector("img")
		if (!classIcon) {
			console.log("Class icon not found for class ID: "+classButtonID)
			return
		}

		console.log("Checking class ID: "+classButtonID)
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

	// let monogramElement = document.getElementById("monogram")
	// if (!monogramElement) {
	// 	console.log("Monogram element not found")
	// 	return
	// }
	// monogramElement.innerHTML = classInfo.get("monogram")

	baseURL = window.location.href
	// remove all data after builds/
	baseURL = baseURL.replace(/\/builds\/[^\/]+\/?/g, "/builds/")
	baseURL += classInfo.get("short")+"/"

	let url = new URL(baseURL)
	window.history.pushState({}, "", url)

	currentClassID = classID

	subscribeToEvents()

	console.log("Class is now "+classInfo.get("name"))
}


function handleClassClick(event) {
	event.preventDefault()
	if (classClickCooldown > (new Date()).getTime()) {
		return
	}
	classID = event.currentTarget.getAttribute("id")
	classID = classID.replace("class-","")
	setClass(parseInt(classID))
	classClickCooldown = (new Date()).getTime()+500
}


function handleSkillMouseDown(event) {
	event.preventDefault()
	switch (event.which) {
		case 1: //left mouse button
			clearTimeout(skillTouchTimer)
			skillMouseDownBegin = (new Date()).getTime()
			lastTouched = event.currentTarget
			skillTouchTimer = setTimeout(() => checkLongTouch(true), 500)
			break
	}
}

function handleSkillMouseUp(event) {
	event.preventDefault()
	switch (event.which) {
		case 1: //left mouse button
			clearTimeout(skillTouchTimer)
			checkLongTouch(false)
			break
		case 3: //right mouse button
			updatePoints(event.currentTarget, -1)
			break
	}
}

function checkLongTouch(fromTimer) {
	if (!lastTouched) {
		console.log("No last touched")
		return
	}
	if (fromTimer !== true) {
		updatePoints(lastTouched, 1)
		return
	}
	updatePoints(lastTouched, -1)
	updatePoints(lastTouched, -1)
	updatePoints(lastTouched, -1)
	updatePoints(lastTouched, -1)
	updatePoints(lastTouched, -1)
}

function updatePoints(skillHandle, change) {
	if (isLocked) {
		console.log("Locked")
		return
	}
	if (currentClassID == 0) {
		console.log("No class selected")
		return
	}
	tree = skillHandle.closest(".tree")
	if (!tree) {
		console.log("Tree not found")
		return
	}
	treeLevel = parseInt(skillHandle.parentElement.getAttribute("data-level"))
	invested = parseInt(skillHandle.parentElement.getAttribute("data-invested"))
	tierTotal = parseInt(skillHandle.parentElement.getAttribute("data-total"))
	let totalPointsElement = tree.querySelector(".totalPoints")
	treeTotal = 0
	if (totalPointsElement) {
		treeTotal = parseInt(totalPointsElement.textContent)
	}
	let dataPoints = parseInt(skillHandle.getAttribute("data-points"))
	let max = parseInt(skillHandle.getAttribute("data-max"))
	let grandTotal = parseInt(document.querySelector("#tree-1 span.totalPoints").textContent)
	grandTotal += parseInt(document.querySelector("#tree-2 span.totalPoints").textContent)
	grandTotal += parseInt(document.querySelector("#tree-3 span.totalPoints").textContent)
	let charLevel = parseInt(document.querySelector("span.charLevel").textContent)
	let buildIndex = skillHandle.id
	if (buildIndex.length < 6) {
		console.log("Invalid build index")
		return
	}
	buildIndex = parseInt(buildIndex.substring(6))
	if (buildIndex < 0 || buildIndex > 53) {
		console.log("Out of range build index")
		return
	}

	if (change == -1 && !isTest) { //ignore right clicks
		console.log("Ignoring right click")
		return
	}

	if (typeof maxLevel == 'number' && grandTotal >= maxLevel) { //stop spending once they hit max
		console.log("Max level reached")
		return
	}

	let charPointsElement = document.querySelector("span.charPointsLeft")
	if (charPointsElement) {
		charPointsElement.textContent = (maxLevel - grandTotal)
	}

	if (change > 0) {
		if (dataPoints < max && treeTotal >= 5 * treeLevel && charLevel < maxCharLevel) {
			dataPoints++
		}
	} else {
		if (dataPoints > 0) {
			let ok = true
			Array.from(tree.querySelectorAll("div.tier")).forEach(tier => {
				let iterTreelevel = parseInt(tier.getAttribute("data-level"))
				let total = parseInt(tier.getAttribute("data-total")) - (iterTreelevel == treeLevel ? 1 : 0)
				let invested = parseInt(tier.getAttribute("data-invested")) - (iterTreelevel > treeLevel ? 1 : 0)
				ok &= (
					(iterTreelevel == treeLevel && total == 0 && treeTotal >= invested + total) ||
					(iterTreelevel != treeLevel && total == 0) ||
					(total > 0 && (iterTreelevel * 5 <= invested))
				)
				console.log("Tier "+iterTreelevel+" total:"+total+" invested:"+invested+" ok:"+ok)
			})
			if (ok) {
				dataPoints--
			}
		}
	}
	console.log("Changed "+change+","+dataPoints+","+max)
	console.log("Total Spent: "+grandTotal)
	if (isTest) {
		skillHandle.setAttribute("data-points", dataPoints)
		updateTree(tree)
		updateStats()
		return
	}

	if (dataPoints > max) {
		console.log("Max points reached")
		return
	}
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
			skillHandle.setAttribute("data-points", dataPoints)
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
	let charPointsElement = document.querySelector("span.charPointsLeft")
	if (charPointsElement) {
		charPointsElement.textContent = (maxLevel - grandTotal)
	}

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


function subscribeToEvents() {

	if (typeof initialHash === 'string' || typeof initialHash === 'number') {
		loadHash(initialHash)
	} else if (getHashFromParams()) {
		// Handle case where hash params are present
	}
	classListElement = document.getElementById("class-list")
	if (!classListElement) {
		console.log("Class list element not found")
		return
	}

	Array.from(classListElement.querySelectorAll('span')).forEach(classButton => {
		if (!classButton.classList.contains("class-button")) {
			return
		}
		classButton.addEventListener('click', handleClassClick)
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
}


setClass(currentClassID)
