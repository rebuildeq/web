package main

import (
	"bufio"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func TestBuildPull(t *testing.T) {
	err := run()
	if err != nil {
		t.Fatalf("failed to run: %v", err)
	}
}

type classEntry struct {
	name        string
	shortName   string
	monogram    int
	description string
	style0      string
	style1      string
	style2      string
	classIndex  int
}

var (
	dbstr   = make(map[string]string)
	classes = []classEntry{
		{
			name:        "Berserker",
			shortName:   "ber",
			monogram:    16,
			description: "Berserkers are a melee class, focused on utility.<br>They are able to go berserk, increasing their damage output.",
			style0:      "Berserker",
			style1:      "Berserker",
			style2:      "Berserker",
			classIndex:  16,
		},
		{
			name:        "Bard",
			shortName:   "brd",
			monogram:    8,
			description: "Bards are enhanced with their songs being more powerful, focused on utility.<br>Cassindra's Secret is a second form of mana song.<br>Many new combat enhancements assist bards in their usefulness.",
			style0:      "Virtuoso",
			style1:      "Swordsinger",
			style2:      "Maestro",
			classIndex:  8,
		}, {
			name:        "Beastlord",
			shortName:   "bst",
			monogram:    15,
			description: "Beastlords are a hybrid class, focused on utility.<br>They are able to charm animals and have a pet.",
			style0:      "Warder",
			style1:      "Beastlord",
			style2:      "Animist",
		}, {

			name:        "Cleric",
			shortName:   "clr",
			monogram:    2,
			description: "Clerics have adapted to be more combat ready, focused on healing.<br>Clerics focus on many procs",
			style0:      "Templar",
			style1:      "Bishop",
			style2:      "Archon",
			classIndex:  2,
		},
		{
			name:        "Druid",
			shortName:   "dru",
			monogram:    6,
			description: "Druids have been enhanced in their heal role, focused on healing.<br>DoTs can be built to do significant damage.",
			style0:      "Preserver",
			style1:      "Warden",
			style2:      "Hierophant",
			classIndex:  6,
		},
		{

			name:        "Enchanter",
			shortName:   "enc",
			monogram:    14,
			description: "Enchanters have mastered magic, focused on utility.<br>They are very effective at shutting down caster enemies with backfire.<br>Mesmerize only lasts 1 tick until you train Enthrall.<br>Shallow-breath line spells only last 1 tick until you train Drown.",
			style0:      "Illusionist",
			style1:      "Entrancer",
			style2:      "Beguiler",
			classIndex:  14,
		},
		{
			name:        "Magician",
			shortName:   "mag",
			monogram:    13,
			description: "Magicians specialize in conjuration of items, focused on utility.<br>Their pets are significantly weaker than live EQ, and do not hold aggro well.",
			style0:      "Conjurer",
			style1:      "Elementalist",
			style2:      "Geomancer",
			classIndex:  13,
		}, {
			name:        "Monk",
			shortName:   "mnk",
			monogram:    7,
			description: "Monks are disciplined fighters who help allies and pull enemies, focused on utility.<br>Monks do not compare to the damage of Rogues.<br>Monks do not need to worry about weight, their AC bonus always applies.",
			style0:      "Master",
			style1:      "Transcendant",
			style2:      "Ashenhand",
			classIndex:  7,
		},
		{
			name:        "Necromancer",
			shortName:   "nec",
			monogram:    11,
			description: "Necromancers have mastered the black arts manipulating both the living and dead, focused on utility.<br>Their pets are significantly weaker than live EQ, and do not hold aggro well.",
			style0:      "Heretic",
			style1:      "Lich",
			style2:      "Warlock",
			classIndex:  11,
		},
		{

			name:        "Paladin",
			shortName:   "pal",
			monogram:    3,
			description: "Paladins are a mix of warrior and cleric, focused on tank.<br>With the Protector line, they can nearly be a viable healer choice.<br>Tanks are able to unlock the Charm of Defense, giving Defensive Discipline.",
			style0:      "Protector",
			style1:      "Knight",
			style2:      "Crusader",
		},
		{
			name:        "Ranger",
			shortName:   "rng",
			monogram:    4,
			description: "Rangers are a mix between warrior and druid, focused on DPS.<br>Rangers are able to unlock the Charm of Defense, giving Defensive Discipline.",
			style0:      "Hunter",
			style1:      "Warden",
			style2:      "Stalker",
			classIndex:  4,
		},
		{

			name:        "Rogue",
			shortName:   "rog",
			monogram:    9,
			description: "Rogues are assassins who specialize in deception, focused on damage.<br>Rogues are the best damage dealers in the melee classification.",
			style0:      "Assassin",
			style1:      "Deceiver",
			style2:      "Bandit",
			classIndex:  9,
		},

		{
			name:        "Shadow Knight",
			shortName:   "shd",
			monogram:    5,
			description: "Shadow Knights are a mix between warrior and necromancer, focused on tank.<br>Tanks are able to unlock the Charm of Defense, giving Defensive Discipline.",
			style0:      "Bloodreaver",
			style1:      "Defiler",
			style2:      "Revenant",
			classIndex:  5,
		},
		{
			name:        "Shaman",
			shortName:   "shm",
			monogram:    10,
			description: "Shamans wield spiritual powers to bring aid to allies, focused on healing.",
			style0:      "Feral",
			style1:      "Mender",
			style2:      "Spiritbinder",
			classIndex:  10,
		},
		{
			name:        "Warrior",
			shortName:   "war",
			monogram:    1,
			description: "Warriors are masters of weapons, focused on tank.<br>Warriors are no longer the definitive best tank, competing with the Knights with defensive disciplines.<br>Tanks are able to unlock the Charm of Defense, giving Defensive Discipline",
			style0:      "Gladiator",
			style1:      "Brawler",
			style2:      "Champion",
			classIndex:  1,
		},
		{
			name:        "Wizard",
			shortName:   "wiz",
			monogram:    12,
			description: "Wizards are masters of the elements, focused on damage.<br>Wizards deal the highest damage of all magical users.",
			style0:      "Evoker",
			style1:      "Channeler",
			style2:      "Sage",
			classIndex:  12,
		},
	}
)

func run() error {

	fmt.Println("Generating build_db.js")
	err := parseAA()
	if err != nil {
		return fmt.Errorf("parseAA: %w", err)
	}

	out := `// This is auto-generated, do not edit

class Build {
    constructor(title, description, icon) {
        this.title = title
        this.description = description
        this.icon = icon
    }
}

const classInfos = new Map()
const builds = new Map()
// the map has a nested map, like builds[classID][buildID]
// create a const list like this in js:

function initBuilds() {
`

	abilityID := 1 // aa_ability
	rankID := 1    // aa_ranks
	titleSID := 1  //  dbstr category 1
	descSID := 1   //  dbstr category 4

	for class, classEntry := range classes {
		if class == 0 {
			out += "\n\tlet classInfo = new Map()\n"
		} else {
			out += "\n\tclassInfo = new Map()\n"
		}
		out += fmt.Sprintf(`
    classInfo.set("name", "%s")
    classInfo.set("short", "%s")
    classInfo.set("monogram", %d)
    classInfo.set("description", "%s")
    classInfo.set("style0", "%s")
    classInfo.set("style1", "%s")
    classInfo.set("style2", "%s")
    classInfos.set(%d, classInfo)

    %s = new Map()
`,
			classEntry.name,
			classEntry.shortName,
			classEntry.monogram,
			classEntry.description,
			classEntry.style0,
			classEntry.style1,
			classEntry.style2,
			classEntry.classIndex,
			classEntry.shortName,
		)

		for category := range 3 {
			webID := 0
			switch category {
			case 1:
				webID = 18
			case 2:
				webID = 36
			}
			for path := range 3 {
				if path > 0 {

				}

				for ability := range 6 {
					if ability > 0 {

					}
					description := ""
					icon := ""
					for aaRank := range 5 {

						if aaRank == 0 {
							buildName := fmt.Sprintf("RB_%s_C%dP%dA%dR%d", strings.ToUpper(classes[class].shortName), category, path, ability, aaRank)
							title := dbstr[fmt.Sprintf("%d^1", rankID)]
							description = dbstr[fmt.Sprintf("%d^4", descSID)]
							icon = dbstr[fmt.Sprintf("%d^7", rankID)]
							if icon == "" {
								icon = "rb-todo"
							}

							if title == buildName {
								title = "TODO"
								description = "TODO"

								//fmt.Println(webID, abilityID, buildName, title, description, icon)
							}
							out += fmt.Sprintf(`
    %s.set(%d, new Build(
        title = "%s",
        description = "%s",
        icon = "/builds/icons/%s.png"
    ))
`, classEntry.shortName, webID, title, description, icon)

						}
						rankID++
						titleSID++
						descSID++
					}

					webID += 3
					abilityID++
				}
			}
		}
		out += fmt.Sprintf(`	builds.set(%d, %s)`, classEntry.classIndex, classEntry.shortName)

	}

	out += `
}


function createSkillElement(classID, id, pushClass) {
    let build = builds.get(classID)
    if (!build) {
        console.log("Invalid class ID: " + classID)
        return ""
    }
    let skill = build.get(id)
    if (!skill) {
        //console.log("Invalid skill ID: " + id)
        return ""
    }
    return ` + "`" + `
      <div class="skill ${pushClass}" data-points="0" id="skill-${id}" data-max="5">
        <img src="${skill.icon}">
        <div class="description">
          <h2>${skill.title}</h2>
          ${skill.description}
        </div>
        <div class="points" style="visibility: visible;">0/5</div>
      </div>
    ` + "`" + `;
  }

function createTierElement(classID, treeID, level, startId) {
	let tierContent = '';
	let pushClass = '';

	for (let i = 0; i < 3; i++) {
		let offset = startId +i
		if (treeID > 1) {
			offset += (18*(treeID-1))
		}
		const skillElement = createSkillElement(classID, offset, pushClass);
		if (skillElement) {
			tierContent += skillElement;
			pushClass = '';
		} else {
			pushClass = 'push1';
		}
	}

	return ` + "`" + `
		<div class="tier" data-level="${level}" data-invested="0" data-total="0">
		${tierContent}
		</div>
	` + "`" + `;
	}

function generateTreeHTML(classID, treeID) {

	let html = '';
	for (let level = 0; level <= 5; level++) {
		html += createTierElement(classID, treeID, level, level * 3);
	}

	let classInfo = classInfos.get(classID)
	if (!classInfo) {
		console.log("Invalid class ID: " + classID)
		return
	}

	let style = classInfo.get("style" + (treeID-1))
	html += ` + "`" + `
	<div class="totalPoints">
		<span class="totalPoints">0</span>
	</div>
	<legend class="build-legend">${style}</legend>
	` + "`" + `;

	return html
}

initBuilds()
`

	fmt.Println("Writing assets/builds/js/build_db.js")
	err = os.WriteFile("../../assets/builds/js/build_db.js", []byte(out), 0644)
	if err != nil {
		return fmt.Errorf("write: %w", err)
	}
	return nil
}

func parseAA() error {
	fi, err := os.Stat("../../../server/base/expansion/aa/builds")
	if err != nil {
		return err
	}
	if !fi.IsDir() {
		return fmt.Errorf("expected directory, got %v", fi.Mode())
	}
	err = filepath.WalkDir("../../../server/base/expansion/aa/builds", func(path string, d os.DirEntry, err error) error {
		if d.IsDir() {
			return nil
		}

		ext := filepath.Ext(d.Name())
		if ext != ".sql" {
			return nil
		}

		data, err := os.ReadFile(path)
		if err != nil {
			return fmt.Errorf("read: %w", err)
		}

		r := strings.NewReader(string(data))
		lineNumber := 1
		scanner := bufio.NewScanner(r)
		for scanner.Scan() {
			line := strings.TrimSpace(scanner.Text())
			lineNumber++
			if len(line) < 4 {
				continue
			}
			if line[0:4] != "-- !" {
				continue
			}

			err = parseDBStrLine(line[4:])
			if err != nil {
				return fmt.Errorf("%s:%d %w", d.Name(), lineNumber, err)
			}
		}

		err = scanner.Err()
		if err != nil {
			return fmt.Errorf("scan: %w", err)
		}
		return nil
	})

	if err != nil {
		return fmt.Errorf("walk: %w", err)
	}

	return nil
}

func parseDBStrLine(line string) error {
	records := strings.Split(line, " ")
	if len(records) < 2 {
		return nil
	}

	key := ""
	value := ""

	switch strings.ToLower(records[0]) {
	case "title_sid":
		if len(records) < 3 {
			return fmt.Errorf("title_sid records less than 3")
		}
		key = fmt.Sprintf("%s^1", records[1])
		value = strings.Join(records[2:], " ")
	case "upper_hotkey_sid":
		if len(records) < 3 {
			return fmt.Errorf("upper_hotkey_sid records less than 3")
		}
		key = fmt.Sprintf("%s^2", records[1])
		value = strings.Join(records[2:], " ")
	case "lower_hotkey_sid":
		if len(records) < 3 {
			return fmt.Errorf("lower_hotkey_sid records less than 3")
		}
		key = fmt.Sprintf("%s^3", records[1])
		value = strings.Join(records[2:], " ")
	case "desc_sid":
		if len(records) < 3 {
			return fmt.Errorf("desc_sid records less than 3")
		}
		key = fmt.Sprintf("%s^4", records[1])
		value = strings.Join(records[2:], " ")
	case "spell_desc_sid":
		if len(records) < 3 {
			return fmt.Errorf("spell_desc_sid records less than 3")
		}
		key = fmt.Sprintf("%s^6", records[1])
		value = strings.Join(records[2:], " ")
	case "icon":
		if len(records) < 3 {
			return fmt.Errorf("icon records less than 3")
		}
		key = fmt.Sprintf("%s^7", records[1])
		value = strings.Join(records[2:], " ")
	default:
		return nil
	}

	dbstr[key] = value

	return nil
}
