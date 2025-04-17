const classWarrior = 1
const classCleric = 2
const classPaladin = 3
const classRanger = 4
const classShadowKnight = 5
const classDruid = 6
const classMonk = 7
const classBard = 8
const classRogue = 9
const classShaman = 10
const classNecromancer = 11
const classWizard = 12
const classMagician = 13
const classEnchanter = 14
const classBeastlord = 15
const classBerserker = 16


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

    let classInfo = new Map()
    classInfo.set("name", "Warrior")
    classInfo.set("short", "war")
    classInfo.set("monogram", 1)
    classInfo.set("description", "Warriors are masters of weapons, focused on tank.<br>Warriors are no longer the definitive best tank, competing with the Knights with defensive disciplines.<br>Tanks are able to unlock the Charm of Defense, giving Defensive Discipline")
    classInfo.set("style0", "Gladiator")
    classInfo.set("style1", "Brawler")
    classInfo.set("style2", "Champion")
    classInfos.set(classWarrior, classInfo)

    war = new Map()

    war.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    war.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    war.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    war.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    builds.set(classWarrior, war)

    classInfo = new Map()
    classInfo.set("name", "Cleric")
    classInfo.set("short", "clr")
    classInfo.set("monogram", 2)
    classInfo.set("description", "Clerics have adapted to be more combat ready, focused on healing.<br>Clerics focus on many procs")
    classInfo.set("style0", "Templar")
    classInfo.set("style1", "Bishop")
    classInfo.set("style2", "Archon")
    classInfos.set(classCleric, classInfo)

    clr = new Map()

    clr.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    clr.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    clr.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    clr.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))
    builds.set(classCleric, clr)

    classInfo = new Map()
    classInfo.set("name", "Paladin")
    classInfo.set("short", "pal")
    classInfo.set("monogram", 3)
    classInfo.set("description", "Paladins are a mix of warrior and cleric, focused on tank.<br>With the Protector line, they can nearly be a viable healer choice.<br>Tanks are able to unlock the Charm of Defense, giving Defensive Discipline.")
    classInfo.set("style0", "Protector")
    classInfo.set("style1", "Knight")
    classInfo.set("style2", "Crusader")
    classInfos.set(classPaladin, classInfo)

    let pal = new Map()


    pal.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    pal.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    pal.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    pal.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))
    builds.set(classPaladin, pal)

    classInfo = new Map()
    classInfo.set("name", "Ranger")
    classInfo.set("short", "rng")
    classInfo.set("monogram", 4)
    classInfo.set("description", "Rangers are a mix between warrior and druid, focused on DPS.<br>Rangers are able to unlock the Charm of Defense, giving Defensive Discipline.")
    classInfo.set("style0", "Hunter")
    classInfo.set("style1", "Warden")
    classInfo.set("style2", "Stalker")
    classInfos.set(classRanger, classInfo)

    let rng = new Map()


    rng.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    rng.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rng.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    rng.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    builds.set(classRanger, rng)

    classInfo = new Map()
    classInfo.set("name", "Shadow Knight")
    classInfo.set("short", "shd")
    classInfo.set("monogram", 5)
    classInfo.set("description", "Shadow Knights are a mix between warrior and necromancer, focused on tank.<br>Tanks are able to unlock the Charm of Defense, giving Defensive Discipline.")
    classInfo.set("style0", "Bloodreaver")
    classInfo.set("style1", "Defiler")
    classInfo.set("style2", "Revenant")
    classInfos.set(classShadowKnight, classInfo)

    let shd = new Map()


    shd.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    shd.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    shd.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    shd.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classShadowKnight, shd)

    classInfo = new Map()
    classInfo.set("name", "Druid")
    classInfo.set("short", "dru")
    classInfo.set("monogram", 6)
    classInfo.set("description", "Druids have been enhanced in their heal role, focused on healing.<br>DoTs can be built to do significant damage.")
    classInfo.set("style0", "Preserver")
    classInfo.set("style1", "Warden")
    classInfo.set("style2", "Hierophant")
    classInfos.set(classDruid, classInfo)

    let dru = new Map()


    dru.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    dru.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    dru.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    dru.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    builds.set(classDruid, dru)

    classInfo = new Map()
    classInfo.set("name", "Monk")
    classInfo.set("short", "mnk")
    classInfo.set("monogram", 7)
    classInfo.set("description", "Monks are disciplined fighters who help allies and pull enemies, focused on utility.<br>Monks do not compare to the damage of Rogues.<br>Monks do not need to worry about weight, their AC bonus always applies.")
    classInfo.set("style0", "Master")
    classInfo.set("style1", "Transcendant")
    classInfo.set("style2", "Ashenhand")


    classInfos.set(classMonk, classInfo)

    let mnk = new Map()


    mnk.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    mnk.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mnk.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    mnk.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classMonk, mnk)

    classInfo = new Map()
    classInfo.set("name", "Bard")
    classInfo.set("short", "brd")
    classInfo.set("monogram", 8)
    classInfo.set("description", "Bards are enhanced with their songs being more powerful, focused on utility.<br>Cassindra's Secret is a second form of mana song.<br>Many new combat enhancements assist bards in their usefulness.")
    classInfo.set("style0", "Virtuoso")
    classInfo.set("style1", "Swordsinger")
    classInfo.set("style2", "Maestro")

    classInfos.set(classBard, classInfo)

    let brd = new Map()


    brd.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    brd.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    brd.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    brd.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classBard, brd)

    classInfo = new Map()
    classInfo.set("name", "Rogue")
    classInfo.set("short", "rog")
    classInfo.set("monogram", 9)
    classInfo.set("description", "Rogues are assassins who specialize in deception, focused on damage.<br>Rogues are the best damage dealers in the melee classification.")
    classInfo.set("style0", "Assassin")
    classInfo.set("style1", "Deceiver")
    classInfo.set("style2", "Bandit")

    classInfos.set(classRogue, classInfo)

    let rog = new Map()


    rog.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    rog.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    rog.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    rog.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classRogue, rog)

    classInfo = new Map()
    classInfo.set("name", "Shaman")
    classInfo.set("short", "shm")
    classInfo.set("monogram", 10)
    classInfo.set("description", "Shamans wield spiritual powers to bring aid to allies, focused on healing.")
    classInfo.set("style0", "Feral")
    classInfo.set("style1", "Mender")
    classInfo.set("style2", "Spiritbinder")

    classInfos.set(classShaman, classInfo)

    let shm = new Map()


    shm.set(0, new Build(
        title = "Spiritveil",
        description = "TODO",
        icon = "/builds/icons/rb-shm-ancientwrath.png"
    ))

    shm.set(3, new Build(
        title = "Group Shrink",
        description = "TODO",
        icon = "/builds/icons/rb-shm-covenantofspirit.png"
    ))

    shm.set(6, new Build(
        title = "Max HP 1%",
        description = "TODO",
        icon = "/builds/icons/rb-shm-extendedhaste.png"
    ))

    shm.set(9, new Build(
        title = "Spirit Guardian",
        description = "TODO",
        icon = "/builds/icons/rb-shm-spiritualhealing.png"
    ))

    shm.set(12, new Build(
        title = "Feral Infusion",
        description = "TODO",
        icon = "/builds/icons/rb-shm-spiritualinfusion.png"
    ))

    shm.set(15, new Build(
        title = "Rabid Bear",
        description = "TODO",
        icon = "/builds/icons/rb-shm-rabidbear.png"
    ))


    shm.set(18, new Build(
        title = "Max Mana 2%",
        description = "TODO",
        icon = "/builds/icons/rb-shm-paragonofspirit.png"
    ))

    shm.set(21, new Build(
        title = "Ancestral Guard",
        description = "TODO",
        icon = "/builds/icons/rb-shm-ancestralguard.png"
    ))

    shm.set(24, new Build(
        title = "Communion of the Cheetah",
        description = "TODO",
        icon = "/builds/icons/rb-shm-spiritofspeed.png"
    ))

    shm.set(27, new Build(
        title = "Call of the Ancients",
        description = "TODO",
        icon = "/builds/icons/rb-shm-spiritcall.png"
    ))

    shm.set(30, new Build(
        title = "Spiritual Blessing",
        description = "TODO",
        icon = "/builds/icons/rb-shm-spiritualchanneling.png"
    ))

    shm.set(33, new Build(
        title = "Ancestral Aid",
        description = "TODO",
        icon = "/builds/icons/rb-shm-ancestralaid.png"
    ))

    shm.set(36, new Build(
        title = "Extended Slow",
        description = "TODO",
        icon = "/builds/icons/rb-shm-turgursecho.png"
    ))

    shm.set(39, new Build(
        title = "Call of the Wild",
        description = "TODO",
        icon = "/builds/icons/rb-shm-spiritualwrath.png"
    ))

    shm.set(42, new Build(
        title = "Virulent Paralysis",
        description = "TODO",
        icon = "/builds/icons/rb-shm-virulentparalysis.png"
    ))

    shm.set(45, new Build(
        title = "Critical Affliction",
        description = "TODO",
        icon = "/builds/icons/rb-shm-reinforcetorpor.png"
    ))

    shm.set(48, new Build(
        title = "Cannibalize",
        description = "TODO",
        icon =  "/builds/icons/rb-shm-cannibalize.png"
    ))

    shm.set(51, new Build(
        title = "Wind of Malo",
        description = "TODO",
        icon = "/builds/icons/rb-shm-fateseersboon.png"
    ))

    builds.set(classShaman, shm)

    classInfo = new Map()
    classInfo.set("name", "Necromancer")
    classInfo.set("short", "nec")
    classInfo.set("monogram", 11)
    classInfo.set("description", "Necromancers have mastered the black arts manipulating both the living and dead, focused on utility.<br>Their pets are significantly weaker than live EQ, and do not hold aggro well.")
    classInfo.set("style0", "Heretic")
    classInfo.set("style1", "Lich")
    classInfo.set("style2", "Warlock")

    classInfos.set(classNecromancer, classInfo)

    let nec = new Map()


    nec.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    nec.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    nec.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    nec.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classNecromancer, nec)


    classInfo = new Map()
    classInfo.set("name", "Wizard")
    classInfo.set("short", "wiz")
    classInfo.set("monogram", 12)
    classInfo.set("description", "Wizards are masters of the elements, focused on damage.<br>Wizards deal the highest damage of all magical users.")
    classInfo.set("style0", "Evoker")
    classInfo.set("style1", "Channeler")
    classInfo.set("style2", "Sage")

    classInfos.set(classWizard, classInfo)

    let wiz = new Map()


    wiz.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    wiz.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    wiz.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    wiz.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classWizard, wiz)

    classInfo = new Map()
    classInfo.set("name", "Magician")
    classInfo.set("short", "mag")
    classInfo.set("monogram", 13)
    classInfo.set("description", "Magicians specialize in conjuration of items, focused on utility.<br>Their pets are significantly weaker than live EQ, and do not hold aggro well.")
    classInfo.set("style0", "Conjurer")
    classInfo.set("style1", "Elementalist")
    classInfo.set("style2", "Geomancer")

    classInfos.set(classMagician, classInfo)

    let mag = new Map()


    mag.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    mag.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    mag.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    mag.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classMagician, mag)

    classInfo = new Map()
    classInfo.set("name", "Enchanter")
    classInfo.set("short", "enc")
    classInfo.set("monogram", 14)
    classInfo.set("description", "Enchanters have mastered magic, focused on utility.<br>They are very effective at shutting down caster enemies with backfire.<br>Mesmerize only lasts 1 tick until you train Enthrall.<br>Shallow-breath line spells only last 1 tick until you train Drown.")
    classInfo.set("style0", "Illusionist")
    classInfo.set("style1", "Entrancer")
    classInfo.set("style2", "Beguiler")

    classInfos.set(classEnchanter, classInfo)

    let enc = new Map()


    enc.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    enc.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    enc.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    enc.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classEnchanter, enc)

    classInfo = new Map()
    classInfo.set("name", "Beastlord")
    classInfo.set("short", "bst")
    classInfo.set("monogram", 15)
    classInfo.set("description", "Beastlords are a hybrid class, focused on utility.<br>They are able to charm animals and have a pet.")
    classInfo.set("style0", "Warder")
    classInfo.set("style1", "Beastlord")
    classInfo.set("style2", "Animist")

    classInfos.set(classBeastlord, classInfo)

    let bst = new Map()


    bst.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    bst.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    bst.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    bst.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classBeastlord, bst)

    classInfo = new Map()
    classInfo.set("name", "Berserker")
    classInfo.set("short", "ber")
    classInfo.set("monogram", 16)
    classInfo.set("description", "Berserkers are a melee class, focused on utility.<br>They are able to go berserk, increasing their damage output.")
    classInfo.set("style0", "Berserker")
    classInfo.set("style1", "Berserker")
    classInfo.set("style2", "Berserker")

    classInfos.set(classBerserker, classInfo)

    let ber = new Map()


    ber.set(0, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(3, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(6, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(9, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(12, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(15, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))


    ber.set(18, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(21, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(24, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(27, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(30, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(33, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(36, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(39, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(42, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(45, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    ber.set(48, new Build(
        title = "TODO",
        description = "TODO",
        icon =  "/builds/icons/rb-todo.png"
    ))

    ber.set(51, new Build(
        title = "TODO",
        description = "TODO",
        icon = "/builds/icons/rb-todo.png"
    ))

    builds.set(classBerserker, ber)

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
    return `
      <div class="skill ${pushClass}" data-points="0" id="skill-${id}" data-max="5">
        <img src="${skill.icon}">
        <div class="description">
          <h2>${skill.title}</h2>
          ${skill.description}
        </div>
        <div class="points" style="visibility: visible;">0/5</div>
      </div>
    `;
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

    return `
      <div class="tier" data-level="${level}" data-invested="0" data-total="0">
        ${tierContent}
      </div>
    `;
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
    html += `
    <div class="totalPoints">
        <span class="totalPoints">0</span>
    </div>
    <legend class="build-legend">${style}</legend>
    `;

    return html
}

initBuilds()