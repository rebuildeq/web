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

    war.set(0, new Build( // tree 1 row 1 left
        "Jarring Strike",
        "Slam, Bash, and Kick have a <em data-base='1'>1</em>% chance<span class='perLevel'> per rank</span> to stun the target for <em data-base='0.5'>0.5</em> seconds.",
        "/builds/icons/rb-war-jarringstrike.png"
    )) // RB_WAR_JARRINGSTRIKE

    war.set(2, new Build( // tree 1 row 1 right
        "Defy Pain",
        "Your chosen god grants you the use of the Defy Pain Ankh item summoned by Warrior Guildmasters.<br>This item grants a buff where when you reach below <em data-base='2'>2</em>% health, you heal for <em data-base='10'>10</em>% of your maximum health and the effect ends. This item has a 10 minute reuse cooldown.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(4, new Build( // tree 1 row 2 middle
        "War Cry",
        "Increases your group's attack power by 2% per rank for 10 seconds.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(6, new Build( // tree 1 row 3 left
        "Intimidate",
        "Has a 5% chance per rank to stun the target for 2 seconds.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(8, new Build( // tree 1 row 3 right
        "Battle Frenzy",
        "Increases your attack speed by 2% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(10, new Build( // tree 1 row 4 middle
        "Endurance",
        "Increases your stamina by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(13, new Build( // tree 1 row 5 middle
        "Defensive Stance",
        "Reduces damage taken by 2% per rank when in a defensive stance.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(16, new Build( // tree 1 row 6 middle
        "Offensive Stance",
        "Increases damage dealt by 2% per rank when in an offensive stance.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(18, new Build( // tree 2 row 1 left
        "Battle Hardened",
        "Increases your armor by 3% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(20, new Build( // tree 2 row 1 right
        "Weapon Mastery",
        "Increases your weapon damage by 2% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(22, new Build( // tree 2 row 2 middle
        "Resilience",
        "Reduces the duration of crowd control effects on you by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(24, new Build( // tree 2 row 3 left
        "Commanding Shout",
        "Increases the health of your group by 2% per rank for 10 seconds.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(26, new Build( // tree 2 row 3 right
        "Unyielding",
        "Increases your chance to resist debuffs by 2% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(28, new Build( // tree 2 row 4 middle
        "Iron Will",
        "Increases your maximum health by 2% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(31, new Build( // tree 2 row 5 middle
        "Revenge",
        "Has a 5% chance per rank to deal double damage when attacked.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(34, new Build( // tree 2 row 6 middle
        "Determination",
        "Increases your chance to resist fear effects by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(36, new Build( // tree 3 row 1 left
        "Heroic Strike",
        "Increases the critical hit chance of your attacks by 2% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(38, new Build( // tree 3 row 1 right
        "Tactical Mastery",
        "Increases your threat generation by 3% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(40, new Build( // tree 3 row 2 middle
        "Victory Rush",
        "Heals you for 2% of your maximum health per rank when you kill an enemy.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(42, new Build( // tree 3 row 3 left
        "Shield Slam",
        "Increases the damage of your shield slam ability by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(44, new Build( // tree 3 row 3 right
        "Berserker Rage",
        "Increases your damage dealt by 5% per rank when your health is below 20%.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(46, new Build( // tree 3 row 4 middle
        "Indomitable",
        "Reduces the duration of stun effects on you by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(49, new Build( // tree 3 row 5 middle
        "Last Stand",
        "Increases your maximum health by 10% per rank for 20 seconds when activated.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    war.set(52, new Build( // tree 3 row 6 middle
        "Battle Command",
        "Increases the damage dealt by your group by 2% per rank for 10 seconds.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    builds.set(classWarrior, war)

    classInfo = new Map()
    classInfo.set("name", "Cleric")
    classInfo.set("short", "clr")
    classInfo.set("monogram", 2)
    classInfo.set("description", "Clerics have adapted to be more combat ready, focused on healing.<br>Clerics focus on many procs.<br>Clerics no longer have complete heal.<br>Healer classes have an innate mana tap when they melee.")
    classInfo.set("style0", "Templar")
    classInfo.set("style1", "Bishop")
    classInfo.set("style2", "Archon")
    classInfos.set(classCleric, classInfo)

    clr = new Map()
    clr.set(0, new Build( // tree 1 row 1 left
        title = "Believe",
        description = "The cleric gains a 300 mod proc that deals (level * 0.75 * 0.2) magic damage, and half the damage is health back to the cleric.",
        icon = "/builds/icons/rb-clr-believe.png"
    )) // RB_CLR_BELIEVE

    clr.set(2, new Build( // tree 1 row 1 right
        title = "Ward of Vie",
        description = "All ward spells last an additional 20% more maximum hitpoints per rank.",
        icon = "/builds/icons/rb-clr-wardofvie.png"
    )) // RB_CLR_WARDOFVIE

    clr.set(4, new Build( // tree 1 row 2 middle
        title = "Harken the Gods",
        description = "Yaulp now gives increased accuracy, attack, and mana regen per rank.",
        icon = "/builds/icons/rb-clr-harkenthegods.png"
    )) // RB_CLR_HARKENTHEGODS


    clr.set(6, new Build( // tree 1 row 3 left
        title = "Blessing of Haste",
        description = "All spell haste spells are 20% more effective on you per rank.",
        icon = "/builds/icons/rb-clr-blessingofhaste.png"
    )) // RB_CLR_BLESSINGOFHASTE

    clr.set(8, new Build( // tree 1 row 3 right
        title = "Divine Hammer",
        description = "The cleric gains a 60 mod proc that causes the Hand of the God spell, dealing 75-150 damage randomly.",
        icon = "/builds/icons/rb-clr-divinehammer.png"
    )) // RB_CLR_DIVINEHAMMER

    clr.set(10, new Build( // tree 1 row 4 middle
        title = "Mark of Karn",
        description = "Healing an ally with a single target spell, while they target an enemy, will cause the target to be affected by the Mark of Karn, healing allies who hit the enemy, for 0 to 1 ticks randomly.",
        icon = "/builds/icons/rb-clr-piouszealot.png"
    )) // RB_CLR_MARKOFKARN

    clr.set(13, new Build( // tree 1 row 5 middle
        title = "Augmented Retribution",
        description = "The cleric gains a 100 mod proc that deals a smite-like spell per rank.",
        icon = "/builds/icons/rb-clr-augmentedretribution.png"
    )) // RB_CLR_AUGMENTEDRETRIBUTION

    clr.set(16, new Build( // tree 1 row 6 middle
        title = "Divine Avatar",
        description = "Passively grants a 10% increased chance to dodge as well as the Divine Avatar AA, allowing the cleric many statistic bonuses and longer duration per rank.",
        icon = "/builds/icons/rb-clr-divineavatar.png"
    )) // RB_CLR_DIVINEAVATAR

    clr.set(18, new Build( // tree 2 row 1 left
        title = "Instill Life",
        description = "When an ally is healed, there is a 2% chance to heal for a bonus of 2% the target's max health per rank.",
        icon = "/builds/icons/rb-clr-instilllife.png"
    )) // RB_CLR_INSTILLLIFE

    clr.set(20, new Build( // tree 2 row 1 right
        title = "Divine Bash",
        description = "When the cleric uses bash, they heal for 4% of the cleric's max hp per rank to a group member with lowest health per rank. This does not heal the cleric.",
        icon = "/builds/icons/rb-clr-divinebash.png"
    )) // RB_CLR_DIVINEBASH

    clr.set(22, new Build( // tree 2 row 2 middle
        title = "Intensity of the Resolute",
        description = "Courage now grants Cleric buffs<br>Rank 1: +Spell Haste<br>Rank 2: +AC<br>Rank 3: +HP<br>Rank 4: +Symbol<br>Rank 5: +Yaulp",
        icon = "/builds/icons/rb-clr-intensifiedresolution.png"
    )) // RB_CLR_INTENSIFIEDRESOLUTION

    clr.set(24, new Build( // tree 2 row 3 left
        title = "Celestial Regeneration",
        description = "Grants the Celestial Regeneration AA, restoring 36 hitpoints and 2 mana for 8 ticks per rank.",
        icon = "/builds/icons/rb-clr-celestialbreeze.png"
    )) // RB_CLR_CELESTIALBREEZE

    clr.set(26, new Build( // tree 2 row 3 right
        title = "Divine Arbitration",
        description = "Grants the Divine Arbitration AA, balancing the damage each member of your group has taken, with a cooldown reduction of 30 seconds per rank.",
        icon = "/builds/icons/rb-clr-divinearbitration.png"
    )) // RB_CLR_DIVINEARBITRATION

    clr.set(28, new Build( // tree 2 row 4 middle
        title = "Divine Resurrection",
        description = "Grants the Divine Resurrection AA, reviving a fallen player. With a base of 24 hours, lowers cooldown by 4 hours per rank.",
        icon = "/builds/icons/rb-clr-divineressurection.png"
    )) // RB_CLR_DIVINERESSURECTION

    clr.set(31, new Build( // tree 2 row 5 middle
        title = "Promise",
        description = "All heals done by the cleric now have a 2% chance to have the mana cost reduced by 10% mana per rank.",
        icon = "/builds/icons/rb-clr-promise.png"
    )) // RB_CLR_PROMISE

    clr.set(34, new Build( // tree 2 row 6 middle
        title = "Harmonic Balance",
        description = "Grants the Lesson of the Devoted AA, balancing the group's hitpoints and healing them. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/icons/rb-clr-harmonicbalance.png"
    )) // RB_CLR_HARMONICBALANCE

    clr.set(36, new Build( // tree 3 row 1 left
        title = "Strike",
        description = "Increases the damage of all direct damage spells by 2% per rank.",
        icon = "/builds/icons/rb-clr-strike.png"
    )) // RB_CLR_STRIKE

    clr.set(38, new Build( // tree 3 row 1 right
        title = "Ward of Rebuke",
        description = "Ward skills deal an additional 2% damage per rank and give 1% of the damage per rank back as mana.",
        icon = "/builds/icons/rb-clr-wardofrebuke.png"
    )) // RB_CLR_WARDOFREBUKE

    clr.set(40, new Build( // tree 3 row 2 middle
        title = "Fist of the Gods",
        description = "Grants 1 bane damage versus undead per rank.",
        icon = "/builds/icons/rb-clr-fistofthegods.png"
    )) // RB_CLR_FISTOFTHEGODS

    clr.set(42, new Build( // tree 3 row 3 left
        title = "Divine Retribution",
        description = "Grants the Divine Retribution AA with 20% per rank proc effectiveness.",
        icon = "/builds/icons/rb-clr-divineretribution.png"
    )) // RB_CLR_DIVINERETRIBUTION

    clr.set(44, new Build( // tree 3 row 3 right
        title = "Turn Undead",
        description = "Grants the Turn Undead AA dealing 500 damage per rank and a 1% chance per rank to deal 32000 damage.",
        icon = "/builds/icons/rb-clr-turnundead.png"
    )) // RB_CLR_TURNUNDEAD

    clr.set(46, new Build( // tree 3 row 4 middle
        title = "Exquisite Benediction",
        description = "While meleeing an undead creature, increases proc chance of all build procs by 20 per rank.",
        icon = "/builds/icons/rb-clr-exquisitebenediction.png"
    )) // RB_CLR_EXQUISITEBENEDICTION

    clr.set(49, new Build( // tree 3 row 5 middle
        title = "Mark of Retribution",
        description = "Increases the damage of Mark of Retribution by 20% per rank.",
        icon = "/builds/icons/rb-clr-markofretribution.png"
    )) // RB_CLR_MARKOFRETRIBUTION

    clr.set(52, new Build( // tree 3 row 6 middle
        title = "Death Pact",
        description = "Healing an ally with a single target spell gives them a 0 to 1 tick duration random death pact buff per rank.",
        icon = "/builds/icons/rb-clr-avatarsboon.png"
    )) // RB_CLR_AVATARSBOON
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

    pal.set(0, new Build( // tree 1 row 1 left
        title = "Rodcet's Gift",
        description = "Single target healing spells now spread to allies within 10m of the healed target, healing them for 2% the original heal amount per rank.",
        icon = "/builds/icons/rb-pal-rodcetsgift.png"
    )) // RB_PAL_RODCETSGIFT

    pal.set(2, new Build( // tree 1 row 1 right
        title = "Hand of Piety",
        description = "Grants the Hand of Piety AA, allowing the user to heal the group for 2% of their max health per rank.",
        icon = "/builds/icons/rb-pal-handofpiety.png"
    )) // RB_PAL_HANDOFPIETY

    pal.set(4, new Build( // tree 1 row 2 middle
        title = "Instill Purpose",
        description = "Divine Purpose and Breath of Tunare now grant 20% more hitpoint regeneration per rank.",
        icon = "/builds/icons/rb-pal-instillpurpose.png"
    )) // RB_PAL_INSTILLPURPOSE

    pal.set(6, new Build( // tree 1 row 3 left
        title = "Refreshing Breeze",
        description = "All healing except Hand of Piety give healed targets 0.5% of amount healed as mana per rank. Does not work when healing yourself.",
        icon = "/builds/icons/rb-pal-refreshingbreeze.png"
    )) // RB_PAL_REFRESHINGBREEZE

    pal.set(8, new Build( // tree 1 row 3 right
        title = "Brell's Blessing",
        description = "Courage now grants Paladin buffs<br>Rank 1: AC<br>Rank 2: HP Line 1<br>Rank 3: HP Symbol Line<br>Rank 4: HP Line 2 (Brell)<br>Rank 5: Double duration.",
        icon = "/builds/icons/rb-pal-brellsblessing.png"
    )) // RB_PAL_BRELLSBLESSING

    pal.set(10, new Build( // tree 1 row 4 middle
        title = "Soul Cleansing",
        description = "Cleansing heal over time spells now have a 2% chance to cure an ailment per rank.",
        icon = "/builds/icons/rb-pal-soulcleansing.png"
    )) // RB_PAL_SOULCLEANSING

    pal.set(13, new Build( // tree 1 row 5 middle
        title = "Wave of Marr",
        description = "All wave-based group spells cost 10% less mana to cast per rank.",
        icon = "/builds/icons/rb-pal-waveofmarr.png"
    )) // RB_PAL_WAVEOFMARR

    pal.set(16, new Build( // tree 1 row 6 middle
        title = "Ward of Tunare",
        description = "Passively grants the Paladin a 6% bonus when healed by other allies per rank.",
        icon = "/builds/icons/rb-pal-wardoftunare.png"
    )) // RB_PAL_WARDOFTUNARE

    pal.set(18, new Build( // tree 2 row 1 left
        title = "Shield of Nife",
        description = "Grants an Undead-only damage shield that deals 7 damage per rank.",
        icon = "/builds/icons/rb-pal-shieldofnife.png"
    )) // RB_PAL_SHIELDOFNIFE

    pal.set(20, new Build( // tree 2 row 1 right
        title = "Armor of Faith",
        description = "Damage taken from Undead is reduced by 2.5% per rank.",
        icon = "/builds/icons/rb-pal-armoroffaith.png"
    )) // RB_PAL_ARMOROFFAITH

    pal.set(22, new Build( // tree 2 row 2 middle
        title = "Purification",
        description = "Grants the Purification AA, curing 1 detrimental effect on the paladin per rank.",
        icon = "/builds/icons/rb-pal-purification.png"
    )) // RB_PAL_PURIFICATION

    pal.set(24, new Build( // tree 2 row 3 left
        title = "Holy Servant",
        description = "When a group member within 2m is attacked, 2.5% of the dealt damage is redirected to the paladin and is reduced by 2% per rank.",
        icon = "/builds/icons/rb-pal-holyservant.png"
    )) // RB_PAL_HOLYSERVANT

    pal.set(26, new Build( // tree 2 row 3 right
        title = "Divine Stun",
        description = "Grants the Divine Stun AA, causing a target to be stunned and marked with divine anger. Any time the Paladin casts a heal spell on a group member, the marked enemy gains an additional 200 hatred per rank.",
        icon = "/builds/icons/rb-pal-divinestun.png"
    )) // RB_PAL_DIVINESTUN

    pal.set(28, new Build( // tree 2 row 4 middle
        title = "Act of Valor",
        description = "Grants the Act of Valor AA, summoning a squire that will dutifully assist the Paladin, casting stuns and healing themself. Each rank increases his stats and power by 20% efficiency per rank.",
        icon = "/builds/icons/rb-pal-actofvalor.png"
    )) // RB_PAL_ACTOFVALOR

    pal.set(31, new Build( // tree 2 row 5 middle
        title = "Elixir of Might",
        description = "Instrument of Nife and Divine Might proc effects now heal the Paladin for 10% of damage dealt as well as gain 2 mana per rank.",
        icon = "/builds/icons/rb-pal-elixirofmight.png"
    )) // RB_PAL_ELIXIROFMIGHT

    pal.set(34, new Build( // tree 2 row 6 middle
        title = "Flames of Redemption",
        description = "Grants the Lesson of the Devoted AA, causing flames of redemption buff improving healing effectiveness by 25% and the flames of redemption DD proc. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/icons/rb-pal-flamesofredemption.png"
    )) // RB_PAL_FLAMESOFREDEMPTION

    pal.set(36, new Build( // tree 3 row 1 left
        title = "Zealot's Fervor",
        description = "When a heal is cast by the paladin on another character, up to 1 nearby enemies of the target are dealt 1% of the healing as damage per rank.",
        icon = "/builds/icons/rb-pal-zealotsfervor.png"
    )) // RB_PAL_ZEALOTSFERVOR

    pal.set(38, new Build( // tree 3 row 1 right
        title = "Knight's Advantage",
        description = "2 handed weapons deal an additional 5% damage per rank.",
        icon = "/builds/icons/rb-pal-knightsadvantage.png"
    )) // RB_PAL_KNIGHTSADVANTAGE

    pal.set(40, new Build( // tree 3 row 2 middle
        title = "Chosen",
        description = "All self proc buffs deal 25% more damage per rank.",
        icon = "/builds/icons/rb-pal-chosen.png"
    )) // RB_PAL_CHOSEN

    pal.set(42, new Build( // tree 3 row 3 left
        title = "Purpose of Marr",
        description = "Valor of Marr now grants 10% additional attack speed per rank.",
        icon = "/builds/icons/rb-pal-purposeofmarr.png"
    )) // RB_PAL_PURPOSEOFMARR

    pal.set(44, new Build( // tree 3 row 3 right
        title = "Flame of Light",
        description = "Flame of Light now deals an additional 20% damage per rank.",
        icon = "/builds/icons/rb-pal-flameoflight.png"
    )) // RB_PAL_FLAMEOFLIGHT

    pal.set(46, new Build( // tree 3 row 4 middle
        title = "Dismiss Evil",
        description = "When attacking an evil creature, gives a 1% chance to critical hit per rank.",
        icon = "/builds/icons/rb-pal-dismissevil.png"
    )) // RB_PAL_DISMISSEVIL

    pal.set(49, new Build( // tree 3 row 5 middle
        title = "Frail",
        description = "Stun spells also cripple the target for 0 to 1 ticks per rank.",
        icon = "/builds/icons/rb-pal-frail.png"
    )) // RB_PAL_FRAIL

    pal.set(52, new Build( // tree 3 row 6 middle
        title = "Slayer",
        description = "Grants an ability to cleanse the target, similar to Slay Undead, but works on ALL creature types, up to the level of the paladin, with a 100 mod proc per rank.",
        icon = "/builds/icons/rb-pal-slayer.png"
    )) // RB_PAL_SLAYER
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

    rng.set(0, new Build( // tree 1 row 1 left
        title = "Fletching",
        description = "Grants the Fletching AA, allowing the ranger to craft arrows and bolts.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(2, new Build( // tree 1 row 1 right
        title = "Archery",
        description = "Grants the Archery AA, increasing the ranger's bow and crossbow damage by 5% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(4, new Build( // tree 1 row 2 middle
        title = "Tracking",
        description = "Grants the Tracking AA, allowing the ranger to track creatures.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(6, new Build( // tree 1 row 3 left
        title = "Foraging",
        description = "Grants the Foraging AA, allowing the ranger to forage for food and drink.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(8, new Build( // tree 1 row 3 right
        title = "Sneak",
        description = "Grants the Sneak AA, allowing the ranger to sneak around.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(10, new Build( // tree 1 row 4 middle
        title = "Hide",
        description = "Grants the Hide AA, allowing the ranger to hide.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(13, new Build( // tree 1 row 5 middle
        title = "Dual Wield",
        description = "Grants the Dual Wield AA, allowing the ranger to dual wield weapons.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(16, new Build( // tree 1 row 6 middle
        title = "Evasion",
        description = "Grants the Evasion AA, increasing the ranger's dodge chance by 5% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(18, new Build( // tree 2 row 1 left
        title = "Critical Strike",
        description = "Grants the Critical Strike AA, increasing the ranger's critical hit chance by 5% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(20, new Build( // tree 2 row 1 right
        title = "Rapid Shot",
        description = "Grants the Rapid Shot AA, increasing the ranger's attack speed by 5% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(22, new Build( // tree 2 row 2 middle
        title = "Fletching Mastery",
        description = "Grants the Fletching Mastery AA, allowing the ranger to craft more powerful arrows and bolts.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(24, new Build( // tree 2 row 3 left
        title = "Archery Mastery",
        description = "Grants the Archery Mastery AA, increasing the ranger's bow and crossbow damage by 10% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(26, new Build( // tree 2 row 3 right
        title = "Tracking Mastery",
        description = "Grants the Tracking Mastery AA, allowing the ranger to track more powerful creatures.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(28, new Build( // tree 2 row 4 middle
        title = "Foraging Mastery",
        description = "Grants the Foraging Mastery AA, allowing the ranger to forage for more powerful food and drink.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(31, new Build( // tree 2 row 5 middle
        title = "Sneak Mastery",
        description = "Grants the Sneak Mastery AA, allowing the ranger to sneak around more effectively.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(34, new Build( // tree 2 row 6 middle
        title = "Hide Mastery",
        description = "Grants the Hide Mastery AA, allowing the ranger to hide more effectively.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(36, new Build( // tree 3 row 1 left
        title = "Dual Wield Mastery",
        description = "Grants the Dual Wield Mastery AA, allowing the ranger to dual wield more effectively.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(38, new Build( // tree 3 row 1 right

        title = "Evasion Mastery",
        description = "Grants the Evasion Mastery AA, increasing the ranger's dodge chance by 10% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(40, new Build( // tree 3 row 2 middle
        title = "Critical Strike Mastery",
        description = "Grants the Critical Strike Mastery AA, increasing the ranger's critical hit chance by 10% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(42, new Build( // tree 3 row 3 left
        title = "Rapid Shot Mastery",
        description = "Grants the Rapid Shot Mastery AA, increasing the ranger's attack speed by 10% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(44, new Build( // tree 3 row 3 right
        title = "Fletching Grand Mastery",
        description = "Grants the Fletching Grand Mastery AA, allowing the ranger to craft the most powerful arrows and bolts.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(46, new Build( // tree 3 row 4 middle
        title = "Archery Grand Mastery",
        description = "Grants the Archery Grand Mastery AA, increasing the ranger's bow and crossbow damage by 15% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(49, new Build( // tree 3 row 5 middle
        title = "Tracking Grand Mastery",
        description = "Grants the Tracking Grand Mastery AA, allowing the ranger to track the most powerful creatures.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    rng.set(52, new Build( // tree 3 row 6 middle
        title = "Foraging Grand Mastery",
        description = "Grants the Foraging Grand Mastery AA, allowing the ranger to forage for the most powerful food and drink.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO


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

    shd.set(0, new Build( // tree 1 row 1 left
        title = "Life Sap",
        description = "Your melee attacks have a <em data-base='1'>1</em>% chance to return <em data-base='4'>4</em>% of damage dealt as health<span class='perLevel'> per rank</span>.",
        icon = "/builds/icons/rb-shd-lifesap.png"
    )) // RB_SHD_LIFESAP

    shd.set(2, new Build( // tree 1 row 1 right
        title = "Gouging Skin",
        description = "When your current target attacks you, deals <em data-base='4'>4</em> damage<span class='perLevel'> per rank</span> to them as a damage shield.",
        icon = "/builds/icons/rb-shd-gougingskin.png"
    )) // RB_SHD_GOUGINGSKIN

    shd.set(4, new Build( // tree 1 row 2 middle
        title = "Hungering Aura",
        description = "Improves lifetaps casted by Leech Touch or Innate Procs by 5% healing for each enemy attacking you with a maximum of 1 enemies or group size, whichever is lower per rank.",
        icon = "/builds/icons/rb-shd-hungeringaura.png"
    )) // RB_SHD_HUNGERINGAURA

    shd.set(6, new Build( // tree 1 row 3 left
        title = "Steadfast Servant",
        description = "Grants the Steadfast Servant AA, summoning a pet at 20% effectiveness per rank.",
        icon = "/builds/icons/rb-shd-steadfastservant.png"
    )) // RB_SHD_STEADFASTSERVANT

    shd.set(8, new Build( // tree 1 row 3 right
        title = "Zevfeer's Feast",
        description = "While in a group, you and your allies gain (group size * level * 0.028) mana regen per tick, capped at maximum group size 3 per rank.",
        icon = "/builds/icons/rb-shd-zevfeersfeast.png"
    )) // RB_SHD_ZEVFEERSFEAST

    shd.set(10, new Build( // tree 1 row 4 middle
        title = "Sworn Enemy",
        description = "When you use taunt, you mark a target as your sworn enemy. For the next 3 ticks, any spell damage dealt to target causes (mana * 0.5) hate per rank.",
        icon = "/builds/icons/rb-shd-swornenemy.png"
    )) // RB_SHD_SWORNENEMY

    shd.set(13, new Build( // tree 1 row 5 middle
        title = "Banshee's Mirror",
        description = "Passively grants the Shadow Knight a 6% bonus when healed by other allies per rank.",
        icon = "/builds/icons/rb-shd-bansheesmirror.png"
    )) // RB_SHD_BANSHEESMIRROR

    shd.set(16, new Build( // tree 1 row 6 middle
        title = "Reaper's Strike",
        description = "Grants the Lesson of the Devoted AA, improving accuracy by 50% and gain lifetap from weapon damage. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/icons/rb-shd-reapersstrike.png"
    )) // RB_SHD_REAPERSSTRIKE

    shd.set(18, new Build( // tree 2 row 1 left
        title = "Festering Spear",
        description = "Improve spear type spells by (level * 1) bonus damage per rank. Also gives a 1% chance to cause quad damage.",
        icon = "/builds/icons/rb-shd-festeringspear.png"
    )) // RB_SHD_FESTERINGSPEAR

    shd.set(20, new Build( // tree 2 row 1 right
        title = "Festering Wound",
        description = "Improves DoT damage by 1% for each ally in group per rank.",
        icon = "/builds/icons/rb-shd-festeringwound.png"
    )) // RB_SHD_FESTERINGWOUND

    shd.set(22, new Build( // tree 2 row 2 middle
        title = "Rotten Core",
        description = "Each time a creature is successfully killed, the knight gains a rotten core counter. For 60 seconds, each counter adds 3% damage per rank to attacks, with a cap of 1 counters. Getting a kill resets the counter.",
        icon = "/builds/icons/rb-shd-rottencore.png"
    )) // RB_SHD_ROTTENCORE

    shd.set(24, new Build( // tree 2 row 3 left
        title = "Lingering Pain",
        description = "All direct damage spells cause a DoT effect for 0 to 1 ticks per rank.",
        icon = "/builds/icons/rb-shd-lingeringpain.png"
    )) // RB_SHD_LINGERINGPAIN

    shd.set(26, new Build( // tree 2 row 3 right
        title = "Blood Oath",
        description = "Grants the Blood Oath AA, causing the target to be affected by a DoT that heals the caster for 2% of the damage dealt per rank.",
        icon = "/builds/icons/rb-shd-bloodoath.png"
    )) // RB_SHD_BLOODOATH

    shd.set(28, new Build( // tree 2 row 4 middle
        title = "Gift of Urash",
        description = "Increases all skill damage by 5% per rank.",
        icon = "/builds/icons/rb-shd-giftofurash.png"
    )) // RB_SHD_GIFTOFURASH

    shd.set(31, new Build( // tree 2 row 5 middle
        title = "Unholy Focus",
        description = "Enables use of the #focus command, transferring lifetaps to the focused ally for 4% of the recourse given per rank.",
        icon = "/builds/icons/rb-shd-unholyfocus.png"
    )) // RB_SHD_UNHOLYFOCUS

    shd.set(34, new Build( // tree 2 row 6 middle
        title = "Bash of Death",
        description = "When you bash a target that is equal to your level or lower and the enemy is at 10% or less total health you deal an additional (level * 1) per rank.",
        icon = "/builds/icons/rb-shd-bashofdeath.png"
    )) // RB_SHD_BASHOFDEATH

    shd.set(36, new Build( // tree 3 row 1 left
        title = "Embrace Death",
        description = "Grants you the Death Peace AA, giving the ability to feign death as well as heal you for 1% of missing health per rank.",
        icon = "/builds/icons/rb-shd-embracedeath.png"
    )) // RB_SHD_EMBRACEDEATH

    shd.set(38, new Build( // tree 3 row 1 right
        title = "Darkness",
        description = "Darkness-based and Terror spells now cause 40% more hate per rank.",
        icon = "/builds/icons/rb-shd-darkness.png"
    )) // RB_SHD_DARKNESS

    shd.set(40, new Build( // tree 3 row 2 middle
        title = "Empathetic Soul",
        description = "Improves Dark Empathy by granting an additional 40 hitpoints healed and 0.5% max mana per rank.",
        icon = "/builds/icons/rb-shd-empatheticsoul.png"
    )) // RB_SHD_EMPATHETICSOUL

    shd.set(42, new Build( // tree 3 row 3 left
        title = "Embrace Shadow",
        description = "Each time you feign death, you are instantly be invisible to both living and undead creatures for 1 tick per rank.",
        icon = "/builds/icons/rb-shd-embraceshadow.png"
    )) // RB_SHD_EMBRACESHADOW

    shd.set(44, new Build( // tree 3 row 3 right
        title = "Siphon of Death",
        description = "Vampiric Embrace, Scream of Death and Shroud of Death now also grant a mana tap for 5% of damage dealt per rank.",
        icon = "/builds/icons/rb-shd-siphonofdeath.png"
    )) // RB_SHD_SIPHONOFDEATH

    shd.set(46, new Build( // tree 3 row 4 middle
        title = "Nightmare",
        description = "Fear now causes target to be stunned in panic for 0 to 1 seconds per rank before fleeing.",
        icon = "/builds/icons/rb-shd-nightmare.png"
    )) // RB_SHD_NIGHTMARE

    shd.set(49, new Build( // tree 3 row 5 middle
        title = "Mental Resistance",
        description = "Gives a 2% chance to resist stun effects per rank.",
        icon = "/builds/icons/rb-shd-mentalresistance.png"
    )) // RB_SHD_MENTALRESISTANCE

    shd.set(52, new Build( // tree 3 row 6 middle
        title = "Cloak of Shadows",
        description = "Grants the Cloak of the Shadows AA, allowing you to step into the shadows, causing a 5% chance that all targets will forget your actions.",
        icon = "/builds/icons/rb-shd-cloakofshadows.png"
    )) // RB_SHD_CLOAKOFSHADOWS

    builds.set(classShadowKnight, shd)

    classInfo = new Map()
    classInfo.set("name", "Druid")
    classInfo.set("short", "dru")
    classInfo.set("monogram", 6)
    classInfo.set("description", "Druids have been enhanced in their heal role, focused on healing.<br>DoTs can be built to do significant damage.<br>Healer classes have an innate mana tap when they melee.")
    classInfo.set("style0", "Preserver")
    classInfo.set("style1", "Warden")
    classInfo.set("style2", "Hierophant")
    classInfos.set(classDruid, classInfo)

    let dru = new Map()

    dru.set(0, new Build( // tree 1 row 1 left
        title = "Entrap",
        description = "Grants the Entrap AA, snaring the target. Mana cost increases across levels. <br>Rank 1 Snares by 41%-96%, 0 resist adjustment, 0.4% mana cost reduction.<br>Rank 2 Snares by 57%-121%, -50 resist adjustment, 0.8% mana cost reduction.<br>Rank 3 Snares by 57%-141%, -50 resist adjustment, 1.2% mana cost reduction.<br>Rank 4 Snares by 57%-141%, -85 resist adjustment, 1.6% mana cost reduction.<br>Rank 5 Snares by 57%-141%, -85 resist adjustment, 3.2% mana cost reduction.<br>",
        icon = "/builds/icons/rb-dru-entrap.png"
    )) // RB_DRU_ENTRAP

    dru.set(2, new Build( // tree 1 row 1 right
        title = "One With Nature",
        description = "Grants a passive where each time you are hit, 2% of the damage is converted into mana per rank.",
        icon = "/builds/icons/rb-dru-treeform.png"
    )) // RB_DRU_TREEFORM

    dru.set(4, new Build( // tree 1 row 2 middle
        title = "Teleport Bind",
        description = "Grants the teleport bind AA. Costs 85% of maximum mana. Each additional rank decreases the mana cost by 15%.",
        icon = "/builds/icons/rb-dru-teleportbind.png"
    )) // RB_DRU_TELEPORTBIND

    dru.set(6, new Build( // tree 1 row 3 left
        title = "Exodus",
        description = "Grants the Exodus AA, which has a base 5 second cast time. Each rank reduces casting time by 1 second.",
        icon = "/builds/icons/rb-dru-exodus.png"
    )) // RB_DRU_EXODUS

    dru.set(8, new Build( // tree 1 row 3 right
        title = "Call of the Wild",
        description = "Grants the Call of the Wild AA, causing enemies nearby to be stunned. Each rank reduces recast time by 300 seconds.",
        icon = "/builds/icons/rb-dru-callofthewild.png"
    )) // RB_DRU_CALLOFTHEWILD

    dru.set(10, new Build( // tree 1 row 4 middle
        title = "Secondary Recall",
        description = "Grants Secondary Recall AA. Each rank reduces the recast time substantially, 1: 24hrs, 2: 18 hrs, 3: 12hrs, 4: 6hrs, 5: 3hrs.",
        icon = "/builds/icons/rb-dru-secondaryrecall.png"
    )) // RB_DRU_SECONDARYRECALL

    dru.set(13, new Build( // tree 1 row 5 middle
        title = "Ring Affinity",
        description = "Ring spells cast 5% faster and cost 10% less mana.",
        icon = "/builds/icons/rb-dru-ringaffinity.png"
    )) // RB_DRU_RINGAFFINITY

    dru.set(16, new Build( // tree 1 row 6 middle
        title = "Dire Charm",
        description = "Charm animals from -10 to -5 of your level, based on rank. They get a pet-like adjusted stats, this is an experiment for future mage pet AI improvements.",
        icon = "/builds/icons/rb-dru-direcharm.png"
    )) // RB_DRU_DIRECHARM

    dru.set(18, new Build( // tree 2 row 1 left
        title = "Regeneration",
        description = "Grants the druid an innate hp regeneration of Level * 0.2 hitpoints (minimum 2) per tick, a self only damage shield of 2, as well as any duration regeneration spells casted by the druid give 20% additional hitpoint regeneration per tick while in the same zone as the druid per rank.",
        icon = "/builds/icons/rb-dru-regeneration.png"
    )) // RB_DRU_REGENERATION

    dru.set(20, new Build( // tree 2 row 1 right
        title = "Convergence of Spirits",
        description = "Grants the Convergence of Spirits AA, giving a heal over time that heals for 0.5% of the target's max health per tick for 6 seconds. This also causes normal heals to be boosted by 5% per rank.",
        icon = "/builds/icons/rb-dru-convergenceofspirits.png"
    )) // RB_DRU_CONVERGENCEOFSPIRITS

    dru.set(22, new Build( // tree 2 row 2 middle
        title = "Lifeflow",
        description = "While an ally has Covergence of Spirits or Nature's Boon buff on them, they are granted a 1% death save chance, healing when triggered for 8000 hitpoints per rank.",
        icon = "/builds/icons/rb-dru-lifeflow.png"
    )) // RB_DRU_LIFEFLOW

    dru.set(24, new Build( // tree 2 row 3 left
        title = "Spirit of the Wood",
        description = "Grants the Spirit of the Wood AA, which casts buffs scaled based on your level and the target's level.<br>Rank 1: STR<br>Rank 2: HP Regen<br>Rank 3: HP<br>Rank 4: Damage Shield<br>Rank 5: Doubles Duration",
        icon = "/builds/icons/rb-dru-spiritofthewood.png"
    )) // RB_DRU_SPIRITOFTHEWOOD

    dru.set(26, new Build( // tree 2 row 3 right
        title = "Spiritual Awakening",
        description = "The druid gains a 300 mod proc that deals (level * 1.5 * 0.2) magic damage and melee hits tap 1 mana from the target.",
        icon = "/builds/icons/rb-dru-spiritualawakening.png"
    )) // RB_DRU_SPIRITUALAWAKENING

    dru.set(28, new Build( // tree 2 row 4 middle
        title = "Nature's Boon",
        description = "Grants the Nature's Boon AA, where the target receives a buff that lasts 84 seconds, duration reduced by 12 seconds due to rank. When the buff fades, the target is healed for 20% of the druid's max mana. If Nature's Boon is removed early, it will heal for a portion based on duration buff lasted. This also causes normal heals to be boosted by 5% per rank.",
        icon = "/builds/icons/rb-dru-naturesboon.png"
    )) // RB_DRU_NATURESBOON

    dru.set(31, new Build( // tree 2 row 5 middle
        title = "Nature's Whisper",
        description = "While a target is affected by Nature's Boon or Convergence of Spirits, the druid as well as the target regain 2% of any healing done from these spells as mana per rank.",
        icon = "/builds/icons/rb-dru-natureswhisper.png"
    )) // RB_DRU_NATURESWHISPER

    dru.set(34, new Build( // tree 2 row 6 middle
        title = "Nature's Guardian",
        description = "Grants the Nature's Guardian AA, where 3% of the caster's max mana is infused by nature and can be transferred to a target or to the caster per rank.",
        icon = "/builds/icons/rb-dru-naturesguardian.png"
    )) // RB_DRU_NATURESGUARDIAN

    dru.set(36, new Build( // tree 3 row 1 left
        title = "Intensity",
        description = "When an enemy is affected by a DoT, it deals 0.7% more damage for each ally in group.",
        icon = "/builds/icons/rb-dru-intensity.png"
    )) // RB_DRU_INTENSITY

    dru.set(38, new Build( // tree 3 row 1 right
        title = "Lingering Pain",
        description = "When a direct spell is casted, a 0 to 1 tick duration DoT will also affect the target if the spell casted was obtained within 15 levels of your current level per rank.",
        icon = "/builds/icons/rb-dru-lingeringpain.png"
    )) // RB_DRU_LINGERINGPAIN

    dru.set(40, new Build( // tree 3 row 2 middle
        title = "Focused Swarm",
        description = "When standing nearby a mob, DoTs now deal 1% more damage for each ally in group. This damage bonus reduces by 10% for every 20m you're away from an enemy per rank.",
        icon = "/builds/icons/rb-dru-focusedswarm.png"
    )) // RB_DRU_FOCUSEDSWARM

    dru.set(42, new Build( // tree 3 row 3 left
        title = "Blessing of Ro",
        description = "All Ro debuffs now spread to 0 to 1 additional enemies within 5m of an affected target if they are on the aggro list of the druid.",
        icon = "/builds/icons/rb-dru-blessingofro.png"
    )) // RB_DRU_BLESSINGOFRO

    dru.set(44, new Build( // tree 3 row 3 right
        title = "Whirling Disaster",
        description = "Direct Damage spells now also stun for (0 to 1/2) seconds if the target is at least 5 levels below the druid.",
        icon = "/builds/icons/rb-dru-whirlingdisaster.png"
    )) // RB_DRU_WHIRLINGDISASTER

    dru.set(46, new Build( // tree 3 row 4 middle
        title = "Stinging Affliction",
        description = "DoTs and Direct Damage spells have a 1% chance to critical hit per rank.",
        icon = "/builds/icons/rb-dru-stingingaffliction.png"
    )) // RB_DRU_STINGINGAFFLICTION

    dru.set(49, new Build( // tree 3 row 5 middle
        title = "Deep Roots",
        description = "When a root wears off, there is a 3% chance the target will be snared if it is not already per rank.",
        icon = "/builds/icons/rb-dru-deeproots.png"
    ))  // RB_DRU_DEEPROOTS

    dru.set(52, new Build( // tree 3 row 6 middle
        title = "Nature's Blight",
        description = "Grants the Lesson of the Devoted AA, causing the target to take 5% increased spell damage. 5 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/icons/rb-dru-naturesblight.png"
    )) // RB_DRU_NATURESBLIGHT


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

    mnk.set(0, new Build( // tree 1 row 1 left
        title = "Intensified Training",
        description = "The monk gains a 300 mod proc that deals (level * 1.25 * 0.2) magic damage per rank.",
        icon = "/builds/icons/rb-mnk-intensifiedtraining.png"
    )) // RB_MNK_INTENSIFIEDTRAINING

    mnk.set(2, new Build( // tree 1 row 1 right
        title = "Familiarity",
        description = "Every time a special attack lands on an enemy, the monk gains 2 armor against the target per rank.",
        icon = "/builds/icons/rb-mnk-familiarity.png"
    )) // RB_MNK_FAMILIARITY

    mnk.set(4, new Build( // tree 1 row 2 middle
        title = "Block",
        description = "Increases block by 2% per rank.",
        icon = "/builds/icons/rb-mnk-block.png"
    )) // RB_MNK_BLOCK

    mnk.set(6, new Build( // tree 1 row 3 left
        title = "Relentless Training",
        description = "Increases damage of Tiger Claw, Eagle Strike, Tail Whip and other special attacks by 10% per rank.",
        icon = "/builds/icons/rb-mnk-relentlesstraining.png"
    )) // RB_MNK_RELENTLESSTRAINING

    mnk.set(8, new Build( // tree 1 row 3 right
        title = "Expose Weakness",
        description = "When using Tiger Claw, Eagle Strike, Tail Whip and other special attacks, increases accuracy of all attacking allies by 0 to 2 per rank vs that enemy.",
        icon = "/builds/icons/rb-mnk-exposeweakness.png"
    )) // RB_MNK_EXPOSEWEAKNESS

    mnk.set(10, new Build( // tree 1 row 4 middle
        title = "Destiny",
        description = "When you have an enemy targeted, increases avoidance by 1% per rank",
        icon = "/builds/icons/rb-mnk-destiny.png"
    )) // RB_MNK_DESTINY

    mnk.set(13, new Build( // tree 1 row 5 middle
        title = "Wu's Quickening",
        description = "Reduces delay of your primary weapon by 1 per rank, to a minimum of 7.",
        icon = "/builds/icons/rb-mnk-wusquickening.png"
    )) // RB_MNK_WUSQUICKENING

    mnk.set(16, new Build( // tree 1 row 6 middle
        title = "Grace of the Order",
        description = "Grants the Lesson of the Devoted AA, increasing max health by 15% and a 250dd stun. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/icons/rb-mnk-graceoftheorder.png"
    )) // RB_MNK_GRACEOFTHEORDER

    mnk.set(18, new Build( // tree 2 row 1 left
        title = "Partial Mending",
        description = "When mend fails, the monk still heals for 10% of the mending amount per rank.",
        icon = "/builds/icons/rb-mnk-partialmending.png"
    )) // RB_MNK_PARTIALMENDING

    mnk.set(20, new Build( // tree 2 row 1 right
        title = "Inner Chakra",
        description = "Heals received while using feign death, including mend, heal for an additional 4% per rank.",
        icon = "/builds/icons/rb-mnk-innerchakra.png"
    )) // RB_MNK_INNERCHAKRA

    mnk.set(22, new Build( // tree 2 row 2 middle
        title = "Channel Chakra",
        description = "While your health is less than 10%, and no enemy is actively attacking you, your normal melee attacks lifetap for 2% damage per rank.",
        icon = "/builds/icons/rb-mnk-channelchakra.png"
    )) // RB_MNK_CHANNELCHAKRA

    mnk.set(24, new Build( // tree 2 row 3 left
        title = "Mending Aura",
        description = "When you use Mend, you now heal the rest of the group within 5 meters for 20% the mend heal amount per rank.",
        icon = "/builds/icons/rb-mnk-mendingaura.png"
    )) // RB_MNK_MENDINGAURA

    mnk.set(26, new Build( // tree 2 row 3 right
        title = "Divine Surge",
        description = "While in a group, you and your allies gain (group size * level * 0.028) mana regen per tick, capped at maximum group size 3 per rank",
        icon = "/builds/icons/rb-mnk-divinesurge.png"
    )) // RB_MNK_DIVINESURGE

    mnk.set(28, new Build( // tree 2 row 4 middle
        title = "Improved Mend",
        description = "When you use Mend, you heal an additional 5% to 10% hitpoints per rank.",
        icon = "/builds/icons/rb-mnk-improvedmend.png"
    )) // RB_MNK_IMPROVEDMEND

    mnk.set(31, new Build( // tree 2 row 5 middle
        title = "Purify Body",
        description = "Grants the Purify Body AA, curing 1 detrimental effect on the monk per rank.",
        icon = "/builds/icons/rb-mnk-purifybody.png"
    )) // RB_MNK_PURIFYBODY

    mnk.set(34, new Build( // tree 2 row 6 middle
        title = "Tranquility",
        description = "When you are not affected by negative effects, not under feign death, nor are engaged by an enemy, and in a full group, you regenerate 2% of your total missing health per tick per rank. Lesser group sizes give reduced healing.",
        icon = "/builds/icons/rb-mnk-tranquility.png"
    )) // RB_MNK_TRANQUILITY

    mnk.set(36, new Build( // tree 3 row 1 left
        title = "Agile Feet",
        description = "Increases your chance to resist snares by 2% per rank.",
        icon = "/builds/icons/rb-mnk-agilefeet.png"
    )) // RB_MNK_AGILEFEET

    mnk.set(38, new Build( // tree 3 row 1 right
        title = "Cowardly Stance",
        description = "Increases your movement speed by up to 10% based on missing health. Does not stack with movement buffs per rank.",
        icon = "/builds/icons/rb-mnk-cowardlystance.png"
    )) // RB_MNK_COWARDLYSTANCE

    mnk.set(40, new Build( // tree 3 row 2 middle
        title = "Thunderfoot",
        description = "Grants a passive spell block that returns when used after (level - 6) seconds per rank.",
        icon = "/builds/icons/rb-mnk-thunderfoot.png"
    )) // RB_MNK_THUNDERFOOT

    mnk.set(42, new Build( // tree 3 row 3 left
        title = "Stoic Mind",
        description = "While your health is not below 2%, your resistance to spells is increased by 3% per rank.",
        icon = "/builds/icons/rb-mnk-stoicmind.png"
    )) // RB_MNK_STOICMIND

    mnk.set(44, new Build( // tree 3 row 3 right
        title = "Grounded Essence",
        description = "Gives a 2% to resist an attempt at being summoned by an enemy per rank.",
        icon = "/builds/icons/rb-mnk-groundedessence.png"
    )) // RB_MNK_GROUNDEDESSENCE

    mnk.set(46, new Build( // tree 3 row 4 middle
        title = "Slow Heart Rate",
        description = "When you feign death with health below 2%, your feign death will cause all enemies to immediately forget you per rank.",
        icon = "/builds/icons/rb-mnk-slowheartrate.png"
    )) // RB_MNK_SLOWHEARTRATE

    mnk.set(49, new Build( // tree 3 row 5 middle
        title = "Mirror",
        description = "While your health is at 99% or higher, your chance to evade attacks is increased by 2% per rank.",
        icon = "/builds/icons/rb-mnk-mirror.png"
    )) // RB_MNK_MIRROR

    mnk.set(52, new Build( // tree 3 row 6 middle
        title = "Moving Mountains",
        description = "When you use the throw stone ability against an enemy lower level than you, you now knockback the enemy 1m per rank.",
        icon = "/builds/icons/rb-mnk-movingmountains.png"
    )) // RB_MNK_MOVINGMOUNTAINS

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

    brd.set(0, new Build( // tree 1 row 1 left
        title = "Elemental Harmony",
        description = "Resistant songs (lvl 9) now grant an additional 10 resistance to each resistance type per rank.",
        icon = "/builds/icons/rb-brd-elementalharmony.png"
    )) // RB_BRD_ELEMENTALHARMONY

    brd.set(2, new Build( // tree 1 row 1 right
        title = "Healing Treble",
        description = "Healing effects on songs (lvl 6) are 10% more effective per rank.",
        icon = "/builds/icons/rb-brd-healingtreble.png"
    )) // RB_BRD_HEALINGTREBLE

    brd.set(4, new Build( // tree 1 row 2 middle
        title = "Psalm of Norrath",
        description = "Damage shield effects on songs (lvl 25) are 20% more effective per rank.",
        icon = "/builds/icons/rb-brd-psalmofnorrath.png"
    )) // RB_BRD_PSALMOFNORRATH

    brd.set(6, new Build( // tree 1 row 3 left
        title = "Cassindra's Chorus",
        description = "Mana effects on songs (lvl 20) are 26% more effective per rank.",
        icon = "/builds/icons/rb-brd-cassindraschorus.png"
    )) // RB_BRD_CASSINDRASCHORUS

    brd.set(8, new Build( // tree 1 row 3 right
        title = "Shield of Songs",
        description = "Rune effects on songs (lvl 49) are 20% more effective per rank.",
        icon = "/builds/icons/rb-brd-shieldofsongs.png"
    )) // RB_BRD_SHIELDOFSONGS

    brd.set(10, new Build( // tree 1 row 4 middle
        title = "Katta's Concord",
        description = "Katta's Song of Sword (lvl 39) now also gives a 100 proc chance to those with the buff that deals (level * 0.4) damage per rank.",
        icon = "/builds/icons/rb-brd-kattasconcord.png"
    )) // RB_BRD_KATTASCONCORD

    brd.set(13, new Build( // tree 1 row 5 middle
        title = "Cassindra's Secret",
        description = "Enhances Cassindra's Elegy (lvl 44) to also give 3 mana per rank.",
        icon = "/builds/icons/rb-brd-rizlonaspurpose.png"
    )) // RB_BRD_RIZLONASPURPOSE

    brd.set(16, new Build( // tree 1 row 6 middle
        title = "Kinsong",
        description = "Grants the Lesson of the Devoted AA, increasing spell crit chance for nukes and DoTs and melee accuracy for the group. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/icons/rb-brd-kinsong.png"
    )) // RB_BRD_KINSONG

    brd.set(18, new Build( // tree 2 row 1 left
        title = "Jonthon's Whistle",
        description = "Grants the bard a passive 300 mod proc that deals (level * 2 * 0.2) magic damage.",
        icon = "/builds/icons/rb-brd-jonathonswhistle.png"
    )) // RB_BRD_JONATHONSWHISTLE

    brd.set(20, new Build( // tree 2 row 1 right
        title = "Offhand Attack",
        description = "All offhand attacks (lvl 17) have 5% additional chance to hit per rank.",
        icon = "/builds/icons/rb-brd-offhandattack.png"
    )) // RB_BRD_OFFHANDATTACK

    brd.set(22, new Build( // tree 2 row 2 middle
        title = "Innate Songblade",
        description = "Increases chance to hit and damage by 2% per rank.",
        icon = "/builds/icons/rb-brd-innatesongblade.png"
    )) // RB_BRD_INNATESONGBLADE

    brd.set(24, new Build( // tree 2 row 3 left
        title = "Warsong of Zek",
        description = "Increases bard's melee damage by 2% per rank.",
        icon = "/builds/icons/rb-brd-warsongofzek.png"
    )) // RB_BRD_WARSONGOFZEK


    brd.set(26, new Build( // tree 2 row 3 right
        title = "Dance of Blades",
        description = "Grants the Dance of Blades AA, increasing chance to dual wield and double attack as well as proc Bladewhirl at 20% effectiveness per rank.",
        icon = "/builds/icons/rb-brd-danceofblades.png"
    )) // RB_BRD_DANCEOFBLADES

    brd.set(28, new Build( // tree 2 row 4 middle
        title = "Blade Dancer",
        description = "When a bard is attacked while in a group, increases chance to dodge by 2% per rank per player in group.",
        icon = "/builds/icons/rb-brd-cacophony.png"
    )) // RB_BRD_BLADEDANCER

    brd.set(31, new Build( // tree 2 row 5 middle
        title = "Harmonic Affinity",
        description = "Increases proc chance modifier by 5% per rank.",
        icon = "/builds/icons/rb-brd-harmonicaffinity.png"
    )) // RB_BRD_HARMONICAFFINITY

    brd.set(34, new Build( // tree 2 row 6 middle
        title = "Bard's Wish",
        description = "When rank 5, all beneficial songs last an additional tick.",
        icon = "/builds/icons/rb-brd-bardswish.png"
    )) // RB_BRD_BARDSWISH

    brd.set(36, new Build( // tree 3 row 1 left
        title = "Chant Cycle",
        description = "Chants with DoT effects now deal 1% more damage per ally in group per rank.",
        icon = "/builds/icons/rb-brd-chantcycle.png"
    )) // RB_BRD_CHANTCYCLE

    brd.set(38, new Build( // tree 3 row 1 right
        title = "Boastful Bellow",
        description = "Grants the Boastful Bellow AA which causes damage and briefly stuns the enemy, and lowers the reuse time by 2 seconds per rank.",
        icon = "/builds/icons/rb-brd-boastfulbellow.png"
    )) // RB_BRD_BOASTFULBELLOW

    brd.set(40, new Build( // tree 3 row 2 middle
        title = "Selo's Crescendo",
        description = "Selo's movement songs now work indoors while you are equal or below level 12 per rank.",
        icon = "/builds/icons/rb-brd-seloscrescendo.png"
    )) // RB_BRD_SELOSCRESCENDO

    brd.set(42, new Build( // tree 3 row 3 left
        title = "Soothing Melody",
        description = "When the bard uses a song with a healing effect on themselves, reduces hate of their target by (heal amount * 2) per rank.",
        icon = "/builds/icons/rb-brd-shieldofnotes.png"
    )) // RB_BRD_SOOTHINGMELODY

    brd.set(44, new Build( // tree 3 row 3 right
        title = "Shout",
        description = "Increases range of PB AE songs by 20% per rank.",
        icon = "/builds/icons/rb-brd-shout.png"
    )) // RB_BRD_SHOUT

    brd.set(46, new Build( // tree 3 row 4 middle
        title = "Siren's Song",
        description = "Charm songs (lvl 27) now cost 10% less mana per rank.",
        icon = "/builds/icons/rb-brd-songofstone.png"
    )) // RB_BRD_SIRENSSONG

    brd.set(49, new Build( // tree 3 row 5 middle
        title = "Lingering Twilight",
        description = "Mesmerizing songs last 0.6 ticks longer per rank.",
        icon = "/builds/icons/rb-brd-lingeringtwilight.png"
    )) // RB_BRD_LINGERINGTWILIGHT

    brd.set(52, new Build( // tree 3 row 6 middle
        title = "Fading Memories",
        description = "Grants the Fading Memories AA, allowing you to escape all aggressions towards you, By default this costs 50% of your max mana, reduced by 5% per rank.",
        icon = "/builds/icons/rb-brd-fadingmemories.png"
    )) // RB_BRD_FADINGMEMORIES

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

    rog.set(0, new Build( // tree 1 row 1 left
        title = "Appraisal",
        description = "The rogue gains a 400 mod proc that deals (level * 3 * 0.2) magic damage as well as a fleeting fury buff.",
        icon = "/builds/icons/rb-rog-appraisal.png"
    )) // RB_ROG_APPRAISAL

    rog.set(2, new Build( // tree 1 row 1 right
        title = "Killing Spree",
        description = "Each time a creature is successfully killed, the rogue gains a killing spree counter. For a limited time, attacks deal an additional 5% damage per counter, with a cap of 2 counters per rank.",
        icon = "/builds/icons/rb-rog-killingspree.png"
    )) // RB_ROG_KILLINGSPREE

    rog.set(4, new Build( // tree 1 row 2 middle
        title = "Thief's Eyes",
        description = "Increases accuracy by 2% with all skills per rank.",
        icon = "/builds/icons/rb-rog-thiefseyes.png"
    )) // RB_ROG_THIEFSEYES

    rog.set(6, new Build( // tree 1 row 3 left
        title = "Sinister Strikes",
        description = "Increases offhand damage bonus by 10% per rank.",
        icon = "/builds/icons/rb-rog-sinisterstrikes.png"
    )) // RB_ROG_SINISTERSTRIKES

    rog.set(8, new Build( // tree 1 row 3 right
        title = "Sneak Attack",
        description = "If a rogue is sneaking and uses a backstab while an enemy is greater than 70% hp, improves chance to hit with a backstab by 2000% and critical chance increases by 10% per rank.",
        icon = "/builds/icons/rb-rog-sneakattack.png"
    )) // RB_ROG_SNEAKATTACK

    rog.set(10, new Build( // tree 1 row 4 middle
        title = "Focused Stab",
        description = "Backstab has a 5% better chance to hit per rank and when maxxed, allows a chance to backstabs from front.",
        icon = "/builds/icons/rb-rog-focusedstab.png"
    )) // RB_ROG_FOCUSEDSTAB

    rog.set(13, new Build( // tree 1 row 5 middle
        title = "Vital Organs",
        description = "The base damage for Backstab increases by 10% per rank.",
        icon = "/builds/icons/rb-rog-vitalorgans.png"
    )) // RB_ROG_VITALORGANS

    rog.set(16, new Build( // tree 1 row 6 middle
        title = "Assassin's Taint",
        description = "Grants the Lesson of the Devoted AA, granting the assassins taint buff that grants triple backstab and a proc that causes skill taken damage to be increased by 7%. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/icons/rb-rog-assassinstaint.png"
    )) // RB_ROG_ASSASSINSTAINT

    rog.set(18, new Build( // tree 2 row 1 left
        title = "Sleight Distraction",
        description = "When the rogue successfully pick pockets an enemy (even if they do not obtain an item) while in a group, the enemy becomes mesmerized for 0 to 1 ticks. The next time the enemy attacks the rogue it has a very high chance of missing.",
        icon = "/builds/icons/rb-rog-sleightdistraction.png"
    )) // RB_ROG_SLEIGHTDISTRACTION

    rog.set(20, new Build( // tree 2 row 1 right
        title = "Jarring Stab",
        description = "When the rogue successfully backstabs an enemy, all enemies that are hated by the rogue have a reduction of (0.2 * damage) hate per rank.",
        icon = "/builds/icons/rb-rog-jarringstab.png"
    )) // RB_ROG_JARRINGSTAB

    rog.set(22, new Build( // tree 2 row 2 middle
        title = "Untapped Potential",
        description = "While in a group, you and your allies gain (group size * level * 0.019) mana regen per tick, capped at maximum group size 3 per rank.",
        icon = "/builds/icons/rb-rog-untappedpotential.png"
    )) // RB_ROG_UNTAPPEDPOTENTIAL

    rog.set(24, new Build( // tree 2 row 3 left
        title = "Confuse",
        description = "When a rogue uses Beg on an enemy, there is a 0.5% chance to cause the enemy to be mesmerized for 6 ticks.",
        icon = "/builds/icons/rb-rog-confuse.png"
    )) // RB_ROG_CONFUSE

    rog.set(26, new Build( // tree 2 row 3 right
        title = "Gangster's Paradise",
        description = "Rogue melee attacks passively cause 10 less hate per attack, and when a rogue is out of combat and does not move for some time, they have a chance to gain a Shroud of Stealth like state. The chances of gaining Shroud of Stealth is increased when two rogues are grouped and near each other.",
        icon = "/builds/icons/rb-rog-gangstersparadise.png"
    )) // RB_ROG_GANGSTERSPARADISE

    rog.set(28, new Build( // tree 2 row 4 middle
        title = "Moss Stone",
        description = "When throw stone is used on a creature with less than 20% health and is not snared, it has a 20% chance to ensnare the enemy.",
        icon = "/builds/icons/rb-rog-mossstone.png"
    )) // RB_ROG_MOSSSTONE

    rog.set(31, new Build( // tree 2 row 5 middle
        title = "Duelist",
        description = "While engaged with a single enemy who is lesser level than the rogue, the rogue gains improved evasion. Many factors decrease the effectiveness of this skill, such as the level of the enemy and how much health they have.",
        icon = "/builds/icons/rb-rog-duelist.png"
    )) // RB_ROG_DUELIST

    rog.set(34, new Build( // tree 2 row 6 middle
        title = "Escape",
        description = "Grants the Escape AA, allowing the rogue to escape combat instantly for 50% of your endurance bar. Endurance cost is reduced by 10% per rank.",
        icon = "/builds/icons/rb-rog-escape.png"
    )) // RB_ROG_ESCAPE

    rog.set(36, new Build( // tree 3 row 1 left
        title = "Sleight of Strength",
        description = "When the rogue successfully pick pockets, they gain a random beneficial buff for 0 to 1 ticks per rank.",
        icon = "/builds/icons/rb-rog-sleightofstrength.png"
    )) // RB_ROG_SLEIGHTOFSTRENGTH

    rog.set(38, new Build( // tree 3 row 1 right
        title = "Haggle",
        description = "When a rogue sells or buys items, the price is improved by 2% per rank.",
        icon = "/builds/icons/rb-rog-haggle.png"
    )) // RB_ROG_HAGGLE

    rog.set(40, new Build( // tree 3 row 2 middle
        title = "Hidden Stash",
        description = "When a rogue pickpockets, they dive deeper into the enemy's pockets to discover a hidden stash of coin per rank.",
        icon = "/builds/icons/rb-rog-hiddenstash.png"
    )) // RB_ROG_HIDDENSTASH

    rog.set(42, new Build( // tree 3 row 3 left
        title = "Throwing Precision",
        description = "Increases the minimum damage of throwing daggers by 10% per rank.",
        icon = "/builds/icons/rb-rog-throwingprecision.png"
    )) // RB_ROG_THROWINGPRECISION

    rog.set(44, new Build( // tree 3 row 3 right
        title = "Mugging Shot",
        description = "Adds a special proc based on the offhand wielded by the rogue, has a 100 proc rate per rank.<br>Mace: Lowers aggro by 50 hate and interrupts foe.<br>	Sword: Deals 5 damage. Dagger: Drains mana by 100 and deals 2 damage.",
        icon = "/builds/icons/rb-rog-muggingshot.png"
    )) // RB_ROG_MUGGINGSHOT

    rog.set(46, new Build( // tree 3 row 4 middle
        title = "Deadly Dagger",
        description = "Increases the maximum damage of throwing daggers by 20% per rank.",
        icon = "/builds/icons/rb-rog-deadlydagger.png"
    )) // RB_ROG_DEADLYDAGGER

    rog.set(49, new Build( // tree 3 row 5 middle
        title = "Thieves' Affinity",
        description = "Increases proc chance of innate and card weapon procs by 2.5% per rank.",
        icon = "/builds/icons/rb-rog-thievesaffinity.png"
    )) // RB_ROG_THIEVESAFFINITY

    rog.set(52, new Build( // tree 3 row 6 middle
        title = "Hidden Dagger",
        description = "If an enemy is not engaged, and is hit by a dagger thrown by a rogue sneaking, it will break sneak, and has a 15% chance to not be social per rank.",
        icon = "/builds/icons/rb-rog-hiddendagger.png"
    )) // RB_ROG_HIDDENDAGGER

    builds.set(classRogue, rog)

    classInfo = new Map()
    classInfo.set("name", "Shaman")
    classInfo.set("short", "shm")
    classInfo.set("monogram", 10)
    classInfo.set("description", "Shamans wield spiritual powers to bring aid to allies, focused on healing.<br>Healer classes have an innate mana tap when they melee.")
    classInfo.set("style0", "Prophet")
    classInfo.set("style1", "Oracle")
    classInfo.set("style2", "Elder")

    classInfos.set(classShaman, classInfo)

    let shm = new Map()

    shm.set(0, new Build( // tree 1 row 1 left
        title = "Spirit of Speed",
        description = "Spirit of Wolf lasts 20% longer per rank.",
        icon = "/builds/icons/rb-shm-spiritofspeed.png"
    )) // RB_SHM_SPIRITOFSPEED

    shm.set(2, new Build( // tree 1 row 1 right
        title = "Purify Soul",
        description = "Grants the Purify Soul AA, which cures target of disease, poison, as well as gives a 10% chance to heal the target by 1% max HP per tick regen per rank.",
        icon = "/builds/icons/rb-shm-purifysoul.png"
    )) // RB_SHM_PURIFYSOUL

    shm.set(4, new Build( // tree 1 row 2 middle
        title = "Ancestral Aid",
        description = "Grants the Ancestral Aid AA, which casts focus line buff scaled to your level.<br>Rank 1: STR<br>Rank 2: DEX and AGI<br>Rank 3: STA<br>Rank 4: HP<br>Rank 5: Haste",
        icon = "/builds/icons/rb-shm-ancestralaid.png"
    )) // RB_SHM_ANCESTRALAID

    shm.set(6, new Build( // tree 1 row 3 left
        title = "Extended Haste",
        description = "Improves attack speed spells used by the caster by increasing their duration by 30% per rank.",
        icon = "/builds/icons/rb-shm-extendedhaste.png"
    )) // RB_SHM_EXTENDEDHASTE

    shm.set(8, new Build( // tree 1 row 3 right
        title = "Spiritual Healing",
        description = "Heals to allies also heal the shaman 5% health per rank.",
        icon = "/builds/icons/rb-shm-spiritualhealing.png"
    )) // RB_SHM_SPIRITUALHEALING

    shm.set(10, new Build( // tree 1 row 4 middle
        title = "Covenant of Spirit",
        description = "Grants the Covenent of Spirit AA, which imbues divine intervention on the target with a 2% death save success per rank.<b>NOT IMPLEMENTED</b>",
        icon = "/builds/icons/rb-shm-covenantofspirit.png"
    )) // RB_SHM_COVENANTOFSPRIT

    shm.set(13, new Build( // tree 1 row 5 middle
        title = "Reinforce Torpor",
        description = "Stoicism and Torpor heal for an additional 10% per rank.",
        icon = "/builds/icons/rb-shm-reinforcetorpor.png"
    )) // RB_SHM_REINFORCETORPOR

    shm.set(16, new Build( // tree 1 row 6 middle
        title = "Fateseer's Boon",
        description = "Grants the Lesson of the Devoted AA, giving a group buff that increases critical damage by 70% with all skills, chance to critical hit by 50% with all skills, as well as a 400 hitpoint per tick regen. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/icons/rb-shm-fateseersboon.png"
    )) // RB_SHM_FATESEERSBOON

    shm.set(18, new Build( // tree 2 row 1 left
        title = "Cannibalize",
        description = "Grants the Cannibalization AA, causing 5% current HP loss in exchange for mana at 10% per rank.",
        icon = "/builds/icons/rb-shm-cannibalize.png"
    )) // RB_SHM_CANNIBALIZE

    shm.set(20, new Build( // tree 2 row 1 right
        title = "Spirit Call",
        description = "Grants the Spirit Call AA, summoning a racial pet with 10% effectiveness per rank.",
        icon = "/builds/icons/rb-shm-spiritcall.png"
    )) // RB_SHM_SPIRITCALL

    shm.set(22, new Build( // tree 2 row 2 middle
        title = "Virulent Paralysis",
        description = "Grants the Virulent Paralysis AA, causing a target to be immobilized. Each rank increases duration by 6 seconds per rank.",
        icon = "/builds/icons/rb-shm-virulentparalysis.png"
    )) // RB_SHM_VIRULENTPARALYSIS

    shm.set(24, new Build( // tree 2 row 3 left
        title = "Poison",
        description = "All poison-based DoTs now deal 1% additional damage per ally in group per rank.",
        icon = "/builds/icons/rb-shm-poison.png"
    )) // RB_SHM_POISON

    shm.set(26, new Build( // tree 2 row 3 right
        title = "Extended Turgur",
        description = "Increases duration of slow by 5% as well as penetrates magic defense by 5% per rank.",
        icon = "/builds/icons/rb-shm-extendedturgur.png"
    )) // RB_SHM_EXTENDEDTURGUR

    shm.set(28, new Build( // tree 2 row 4 middle
        title = "Ancient Wrath",
        description = "All direct damage spells now deal 7.5% more damage as well as 1% chance to critical hit per rank.",
        icon = "/builds/icons/rb-shm-ancientwrath.png"
    )) // RB_SHM_ANCIENTWRATH

    shm.set(31, new Build( // tree 2 row 5 middle
        title = "Turgur's Echo",
        description = "When a slow-based spell is resisted, the spell will try to land again with 2 less resistance per rank.",
        icon = "/builds/icons/rb-shm-turgursecho.png"
    )) // RB_SHM_TURGURSECHO

    shm.set(34, new Build( // tree 2 row 6 middle
        title = "Spiritual Channeling",
        description = "While this ability is active, all spells cost HP rather than mana. Cooldown of reuse is reduced by 6seconds per rank.",
        icon = "/builds/icons/rb-shm-spiritualchanneling.png"
    )) // RB_SHM_SPIRITUALCHANNELING

    shm.set(36, new Build( // tree 3 row 1 left
        title = "Fury",
        description = "The shaman gains a 400 mod proc that deals (level * 1.5 * 0.2) magic damage.",
        icon = "/builds/icons/rb-shm-fury.png"
    )) // RB_SHM_FURY

    shm.set(38, new Build( // tree 3 row 1 right
        title = "Rabid Bear",
        description = "Grants the Rabid Bear AA, granting 2% attack speed and the tainted bite proc line with 20% effectiveness per rank.",
        icon = "/builds/icons/rb-shm-rabidbear.png"
    )) // RB_SHM_RABIDBEAR

    shm.set(40, new Build( // tree 3 row 2 middle
        title = "Ancestral Guard",
        description = "Grants the Ancestral Guard AA, granting 2% evasion per rank.",
        icon = "/builds/icons/rb-shm-ancestralguard.png"
    )) // RB_SHM_ANCESTRALGUARD

    shm.set(42, new Build( // tree 3 row 3 left
        title = "Call of the Ancients",
        description = "Grants the Call of the Ancients AA, summoning a spirit that deals (level * 1.5 * 1) damage per hit for 60 seconds (maximum level * 12 *1) damage per rank.",
        icon = "/builds/icons/rb-shm-calloftheancients.png"
    )) // RB_SHM_CALLOFTHEANCIENTS

    shm.set(44, new Build( // tree 3 row 3 right
        title = "Spiritual Wrath",
        description = "While you have an active pet, all direct damage spells now deal 2.5% more damage.",
        icon = "/builds/icons/rb-shm-spiritualwrath.png"
    )) // RB_SHM_SPIRITUALWRATH

    shm.set(46, new Build( // tree 3 row 4 middle
        title = "Mark of Sloth",
        description = "On each attack, grants a chance to trigger a sloth effect, causing the next direct damage spell to deal 5% bonus damage per rank.",
        icon = "/builds/icons/rb-shm-markofsloth.png"
    )) // RB_SHM_MARKOFSLOTH

    shm.set(49, new Build( // tree 3 row 5 middle
        title = "Feral Swipe",
        description = "Grants the Feral Swipe AA, giving a bonus attack ability with 5% effectiveness per rank.",
        icon = "/builds/icons/rb-shm-feralswipe.png"
    )) // RB_SHM_FERALSWIPE

    shm.set(52, new Build( // tree 3 row 6 middle
        title = "Paragon of Spirit",
        description = "Grants the Paragon of Spirit AA, giving a mana and hp regen ability 20% effectiveness per rank.",
        icon = "/builds/icons/rb-shm-paragonofspirit.png"
    )) // RB_SHM_PARAGONOFSPRIT

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

    nec.set(0, new Build( // tree 1 row 1 left
        title = "Corruption",
        description = "DoT damage is increased by 1% per ally in group per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(2, new Build( // tree 1 row 1 right
        title = "Cavorting Bones",
        description = "Empowers your pet to dynamically level with you at 20% effectiveness per rank. At 59+, the pet will be a spectre.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(4, new Build( // tree 1 row 2 middle
        title = "Shocking Bolt",
        description = "When a poison-based DoT with bolt in it's name (or venom of the snake) lands on an enemy, the instant damage is increased by 5% per rank. It also has a 1% chance to hit for quad damage.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(6, new Build( // tree 1 row 3 left
        title = "Burning Soul",
        description = "When an enemy is affected by a fire-based DoT, it deals 1% more damage for each ally in group.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(8, new Build( // tree 1 row 3 right
        title = "Lingering Curse",
        description = "Increases DoT duration by 1 tick per rank, the duration is lowered the closer the enemy is to your level. Minimum 1 tick per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(10, new Build( // tree 1 row 4 middle
        title = "Decay",
        description = "While a DoT affects an enemy, mana is returned to the necromancer at a rate of 1% of cost per tick per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(13, new Build( // tree 1 row 5 middle
        title = "Splurt",
        description = "Splurt now deals 10% more damage per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(16, new Build( // tree 1 row 6 middle
        title = "Venom Strike",
        description = "Poison-based direct damage spells such as Torbas line of spells, now have a 1% chance to also apply a poison damage over time per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(18, new Build( // tree 2 row 1 left
        title = "Shroud of Death",
        description = "Your pet gains a 400 mod proc DD that deals (level * 0.2) magic damage and if Spirit Focus is trained and a focus target is set, a recourse heal for 100% of damage dealt is given per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(20, new Build( // tree 2 row 1 right
        title = "Life Burn",
        description = "Unlocks the Life Burn AA, dealing 2% of the necromancer's current health in damage to the target per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(22, new Build( // tree 2 row 2 middle
        title = "Pact of Hate",
        description = "Dark Pact line spells now regenerate an additional 10% mana based on damage dealt per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(24, new Build( // tree 2 row 3 left
        title = "Blood Magic",
        description = "Grants the Blood Magic AA, giving the necromancer the ability to cast spells at the cost of health. With a base of 10 minutes, each rank reduces cooldown by 30 seconds.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(26, new Build( // tree 2 row 3 right
        title = "Life Blood",
        description = "Increases amount healed by lifetaps by (2% * group size) per rank and increases chance to critical heal by 2%.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(28, new Build( // tree 2 row 4 middle
        title = "Spirit Focus",
        description = "Enables use of the #focus command, transferring recourses such as life taps to the focused ally for 16% of the recourse given per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(31, new Build( // tree 2 row 5 middle
        title = "Dying Grasp",
        description = "Grants the Dying Grasp AA, a high damage, fast casting lifetap. Base cooldown of 360 seconds, each rank reduces cooldown by 30 seconds.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(34, new Build( // tree 2 row 6 middle
        title = "Servant of Blood",
        description = "Grants the Lesson of the Devoted AA, summoning a blood skeleton that lifetaps health to the group for 30 seconds. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(36, new Build( // tree 3 row 1 left
        title = "Soul Siphon",
        description = "Grants the Soul Siphon AA, causing a target to be drained of 10% of their current mana and health per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(38, new Build( // tree 3 row 1 right
        title = "Soul Leech",
        description = "Grants the Soul Leech AA, causing a target to be drained of 10% of their current mana and health per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(40, new Build( // tree 3 row 2 middle
        title = "Soul Bind",
        description = "Grants the Soul Bind AA, causing a target to be drained of 10% of their current mana and health per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(42, new Build( // tree 3 row 3 left
        title = "Soul Drain",
        description = "Grants the Soul Drain AA, causing a target to be drained of 10% of their current mana and health per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(44, new Build( // tree 3 row 3 right
        title = "Soul Harvest",
        description = "Grants the Soul Harvest AA, causing a target to be drained of 10% of their current mana and health per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(46, new Build( // tree 3 row 4 middle
        title = "Soul Reap",
        description = "Grants the Soul Reap AA, causing a target to be drained of 10% of their current mana and health per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(49, new Build( // tree 3 row 5 middle
        title = "Soul Suck",
        description = "Grants the Soul Suck AA, causing a target to be drained of 10% of their current mana and health per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    nec.set(52, new Build( // tree 3 row 6 middle
        title = "Soul Tap",
        description = "Grants the Soul Tap AA, causing a target to be drained of 10% of their current mana and health per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

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

    wiz.set(0, new Build( // tree 1 row 1 left
        title = "Elemental Fury",
        description = "Increases the damage of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(2, new Build( // tree 1 row 1 right
        title = "Elemental Mastery",
        description = "Increases the critical chance of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(4, new Build( // tree 1 row 2 middle
        title = "Elemental Precision",
        description = "Increases the critical damage of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(6, new Build( // tree 1 row 3 left
        title = "Elemental Focus",
        description = "Increases the chance to resist spell interruption by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(8, new Build( // tree 1 row 3 right
        title = "Elemental Power",
        description = "Increases the damage of all DoTs by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(10, new Build( // tree 1 row 4 middle
        title = "Elemental Wrath",
        description = "Increases the critical chance of all DoTs by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(13, new Build( // tree 1 row 5 middle
        title = "Elemental Rage",

        description = "Increases the critical damage of all DoTs by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(16, new Build( // tree 1 row 6 middle
        title = "Elemental Fury",
        description = "Increases the damage of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(18, new Build( // tree 2 row 1 left
        title = "Elemental Mastery",
        description = "Increases the critical chance of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(20, new Build( // tree 2 row 1 right
        title = "Elemental Precision",
        description = "Increases the critical damage of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(22, new Build( // tree 2 row 2 middle
        title = "Elemental Focus",
        description = "Increases the chance to resist spell interruption by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(24, new Build( // tree 2 row 3 left
        title = "Elemental Power",
        description = "Increases the damage of all DoTs by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(26, new Build( // tree 2 row 3 right
        title = "Elemental Wrath",
        description = "Increases the critical chance of all DoTs by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(28, new Build( // tree 2 row 4 middle
        title = "Elemental Rage",
        description = "Increases the critical damage of all DoTs by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(31, new Build( // tree 2 row 5 middle
        title = "Elemental Fury",
        description = "Increases the damage of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(34, new Build( // tree 2 row 6 middle
        title = "Elemental Mastery",
        description = "Increases the critical chance of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(36, new Build( // tree 3 row 1 left
        title = "Elemental Precision",
        description = "Increases the critical damage of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(38, new Build( // tree 3 row 1 right
        title = "Elemental Focus",
        description = "Increases the chance to resist spell interruption by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO


    wiz.set(40, new Build( // tree 3 row 2 middle
        title = "Elemental Power",
        description = "Increases the damage of all DoTs by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(42, new Build( // tree 3 row 3 left
        title = "Elemental Wrath",
        description = "Increases the critical chance of all DoTs by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(44, new Build( // tree 3 row 3 right
        title = "Elemental Rage",
        description = "Increases the critical damage of all DoTs by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(46, new Build( // tree 3 row 4 middle
        title = "Elemental Fury",
        description = "Increases the damage of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(49, new Build( // tree 3 row 5 middle
        title = "Elemental Mastery",
        description = "Increases the critical chance of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    wiz.set(52, new Build( // tree 3 row 6 middle
        title = "Elemental Precision",
        description = "Increases the critical damage of all direct damage spells by 1% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

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

    mag.set(0, new Build( // tree 1 row 1 left
        title = "Summoning Focus",
        description = "Items summoned by the magician are reinforced, giving better stats. Additional ranks increase the level of spells affected.",
        icon = "/builds/icons/rb-mag-summoningfocus.png"
    )) // RB_MAG_SUMMONINGFOCUS

    mag.set(2, new Build( // tree 1 row 1 right
        title = "Quick Summoning",
        description = "Reduces the cast time of pet summoning spells by 10% per rank.",
        icon = "/builds/icons/rb-mag-quicksummoning.png"
    )) // RB_MAG_QUICKSUMMONING

    mag.set(4, new Build( // tree 1 row 2 middle
        title = "Improved Reclaim Energy",
        description = "Increases the amount of mana returned by Reclaim Energy by 5% per rank.",
        icon = "/builds/icons/rb-mag-improvedreclaimenergy.png"
    )) // RB_MAG_IMPROVEDRECLAIMENERGY

    mag.set(6, new Build( // tree 1 row 3 left
        title = "Modulation Shard",
        description = "Summons a modulation rod with 1 charge per rank.",
        icon = "/builds/icons/rb-mag-modulationshard.png"
    )) // RB_MAG_MODULATIONSHARD

    mag.set(8, new Build( // tree 1 row 3 right
        title = "Companion's Intensity",
        description = "Increases your pet's damage melee damage by 2% per rank.",
        icon = "/builds/icons/rb-mag-companionsdurability.png"
    )) // RB_MAG_COMPANIONSDURABILITY

    mag.set(10, new Build( // tree 1 row 4 middle
        title = "Suspended Minion",
        description = "Grants the Suspended Minion AA, allowing you to suspend a minion to be recalled later. Further ranks allow preserving buffs and items while suspended.",
        icon = "/builds/icons/rb-mag-suspendedminion.png"
    )) // RB_MAG_SUSPENDEDMINION

    mag.set(13, new Build( // tree 1 row 5 middle
        title = "Mend Companion",
        description = "Grants the Mend Companion AA, healing 20% of your pet's HP per rank",
        icon = "/builds/icons/rb-mag-mendcompanion.png"
    )) // RB_MAG_MENDCOMPANION

    mag.set(16, new Build( // tree 1 row 6 middle
        title = "Companion of Necessity",
        description = "Grants the Companion of Necessity AA, summoning a temporary pet that will gain the attention of one creature and cause that creature to forget all anger when the pet dies. Each rank grants 20% of maximum duration.",
        icon = "/builds/icons/rb-mag-companionofnecessity.png"
    )) // RB_MAG_COMPANIONOFNECESSITY

    mag.set(18, new Build( // tree 2 row 1 left
        title = "Shared Health",
        description = "Grants the Shared Health AA, causing 10% of your incoming damage per rank to be sent to your pet instead.",
        icon = "/builds/icons/rb-mag-sharedhealth.png"
    )) // RB_MAG_SHAREDHEALTH

    mag.set(20, new Build( // tree 2 row 1 right
        title = "Host in the Shell",
        description = "Grants the Host in the Shell AA, creating a rune effect on your pet with 20% of the rune's maximum value per rank.",
        icon = "/builds/icons/rb-mag-hostintheshell.png"
    )) // RB_MAG_HOSTINTHESHELL

    mag.set(22, new Build( // tree 2 row 2 middle
        title = "Turn Summoned",
        description = "Grants the Turn Summoned AA, inflicting a DoT for 500 damage per rank per tick for 4 ticks with a 1% chance per rank to cause 32000 damage.",
        icon = "/builds/icons/rb-mag-turnsummoned.png"
    )) // RB_MAG_TURNSUMMONED

    mag.set(24, new Build( // tree 2 row 3 left
        title = "Frenzied Burnout",
        description = "Reduces the mana cost of direct damage spells by 10% per rank.",
        icon = "/builds/icons/rb-mag-frenziedburnout.png"
    )) // RB_MAG_FRENZIEDBURNOUT

    mag.set(26, new Build( // tree 2 row 3 right
        title = "Elemental Alacrity",
        description = "Improves element-based direct damage spells by 4% damage per rank.",
        icon = "/builds/icons/rb-mag-elementalalacrity.png"
    )) // RB_MAG_ELEMENTALALACRITY

    mag.set(28, new Build( // tree 2 row 4 middle
        title = "Call of the Hero",
        description = "Grants the Call of the Hero AA with reduced cast time and cooldown timer per rank.",
        icon = "/builds/icons/rb-mag-callofthehero.png"
    )) // RB_MAG_CALLOFTHEHERO

    mag.set(31, new Build( // tree 2 row 5 middle
        title = "Clockwork Merchant",
        description = "Grants the Clockwork Banker AA that summons a merchant. Ranks decrease the cooldown substantially.",
        icon = "/builds/icons/rb-mag-clockworkmerchant.png"
    )) // RB_MAG_CLOCKWORKMERCHANT

    mag.set(34, new Build( // tree 2 row 6 middle
        title = "Servant of Ro",
        description = "Grants the Servant of Ro AA that calls a loyal servant into being who will repeatedly hurl fire at your target. Ranks increase the duration of this temporary pet.",
        icon = "/builds/icons/rb-mag-servantofro.png"
    )) // RB_MAG_SERVANTOFRO

    mag.set(36, new Build( // tree 3 row 1 left
        title = "Dimensional Shield",
        description = "Grants Dimensional Shield AA that allows a chance to shadow step away from the attacking target. Ranks increase the chance of the defensive proc by 20% per rank.",
        icon = "/builds/icons/rb-mag-dimensionalshield.png"
    )) // RB_MAG_DIMENSIONALSHIELD

    mag.set(38, new Build( // tree 3 row 1 right
        title = "Heart of Stone",
        description = "Grants Heart of Stone AA that provides a melee guard. The melee guard is scaled at 10% per rank.",
        icon = "/builds/icons/rb-mag-heartofstone.png"
    )) // RB_MAG_HEARTOFSTONE

    mag.set(40, new Build( // tree 3 row 2 middle
        title = "Heart of Vapor",
        description = "Grants Heart of Vapor AA that reduces hate generated. The effectiveness of the spell is 20% per rank.",
        icon = "/builds/icons/rb-mag-heartofvapor.png"
    )) // RB_MAG_HEARTOFVAPOR

    mag.set(42, new Build( // tree 3 row 3 left
        title = "Shock of Swords",
        description = "Increases the damage caused by sword and blade spells by 4% per rank.",
        icon = "/builds/icons/rb-mag-shockofswords.png"
    )) // RB_MAG_SHOCKOFSWORDS

    mag.set(44, new Build( // tree 3 row 3 right
        title = "Heart of Ice",
        description = "Grants Heart of Ice AA that provides a spell guard. The spell guard is scaled at 10% per rank.",
        icon = "/builds/icons/rb-mag-heartofice.png"
    )) // RB_MAG_HEARTOFICE

    mag.set(46, new Build( // tree 3 row 4 middle
        title = "Quick Damage",
        description = "Reduces the cast time of direct damage spells that have casting times longer than 3 seconds. Each rank further decreases the cast time.",
        icon = "/builds/icons/rb-mag-quickdamage.png"
    )) // RB_MAG_QUICKDAMAGE

    mag.set(49, new Build( // tree 3 row 5 middle
        title = "Heart of Flames",
        description = "Grants Heart of Flames AA that provides a massive damage shield. The effectiveness of the spell is scaled at 20% per rank.",
        icon = "/builds/icons/rb-mag-heartofflames.png"
    )) // RB_MAG_HEARTOFFLAMES

    mag.set(52, new Build( // tree 3 row 6 middle
        title = "Primal Fusion",
        description = "When you attack with a direct damage spell, your pet will also cast the spell dealing 5 of it's damage per rank.",
        icon = "/builds/icons/rb-mag-primalfusion.png"
    )) // RB_MAG_PRIMALFUSION

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

    enc.set(0, new Build( // tree 1 row 1 left
        title = "Nightmare",
        description = "DoT spells do an additional 1% damage per ally in group per rank.",
        icon = "/builds/icons/rb-enc-nightmare.png"
    )) // RB_ENC_NIGHTMARE

    enc.set(2, new Build( // tree 1 row 1 right
        title = "Crippling Presence",
        description = "When an enemy is affected by a disempowering spell, they deal 2% less damage per rank.",
        icon = "/builds/icons/rb-enc-cripplingpresence.png"
    )) // RB_ENC_CRIPPLINGPRESENCE

    enc.set(4, new Build( // tree 1 row 2 middle
        title = "Soothing Words",
        description = "Grants the Soothing Words AA, reducing your target's hatred for their current target by 5000 points if that creature's target is a member of your group or raid. Each rank reduces cooldown by 30 seconds per rank.",
        icon = "/builds/icons/rb-enc-soothingwords.png"
    )) // RB_ENC_SOOTHINGWORDS

    enc.set(6, new Build( // tree 1 row 3 left
        title = "Mind over Matter",
        description = "Grants the Mind over Matter AA, absorbing damage in mana before hitpoints. Each rank improves reduction by 2% per rank.",
        icon = "/builds/icons/rb-enc-mindovermatter.png"
    )) // RB_ENC_MINDOVERMATTER

    enc.set(8, new Build( // tree 1 row 3 right
        title = "Beneficial Dispell",
        description = "When using a spell with a cancel magic effect, increases chance by 20% per rank that a beneficial buff will not be affected.",
        icon = "/builds/icons/rb-enc-beneficialdispell.png"
    )) // RB_ENC_BENEFICIALDISPELL

    enc.set(10, new Build( // tree 1 row 4 middle
        title = "Persuasion",
        description = "Increases buy and sell price to merchants by 3% per rank.",
        icon = "/builds/icons/rb-enc-persuasion.png"
    )) // RB_ENC_PERSUASION

    enc.set(13, new Build( // tree 1 row 5 middle
        title = "Choke",
        description = "While an enemy is under the effect of a shallow-breath line debuff, the enemy takes (level * 1/4) damage per rank when they land an attack.",
        icon = "/builds/icons/rb-enc-choke.png"
    )) // RB_ENC_CHOKE

    enc.set(16, new Build( // tree 1 row 6 middle
        title = "Drown",
        description = "Lowers mana cost of DoTs by 3% tick per rank.",
        icon = "/builds/icons/rb-enc-drown.png"
    )) // RB_ENC_DROWN

    enc.set(18, new Build( // tree 2 row 1 left
        title = "Enthrall",
        description = "Each rank reduces mana cost of mesmerize spells by 1%, at max rank increases duration by 1 tick per rank.",
        icon = "/builds/icons/rb-enc-enthrall.png"
    )) // RB_ENC_ENTHRALL

    enc.set(20, new Build( // tree 2 row 1 right
        title = "Tash",
        description = "While an enemy is tashed, other group members are granted a 300 mod (enemy level * 0.2) damage proc while attacking per rank.",
        icon = "/builds/icons/rb-enc-tash.png"
    )) // RB_ENC_TASH

    enc.set(22, new Build( // tree 2 row 2 middle
        title = "Backfire",
        description = "Wandering Mind, Scryer's Bypass, and Torment of Argli now have the backfire effect. If an enemy successfully channels a spell, they are interrupted, this spell effect is removed, and the enemy takes (enemy level * 25 * 0.2) damage per rank.",
        icon = "/builds/icons/rb-enc-backfire.png"
    )) // RB_ENC_BACKFIRE

    enc.set(24, new Build( // tree 2 row 3 left
        title = "Energy Burn",
        description = "When you use a spell that takes mana from an enemy, you now deal (mana taken * 0.4) damage per rank.",
        icon = "/builds/icons/rb-enc-energyburn.png"
    )) // RB_ENC_ENERGYBURN

    enc.set(26, new Build( // tree 2 row 3 right
        title = "Feedback",
        description = "When you use a detrimental spell, you deal 10 bonus damage per rank.",
        icon = "/builds/icons/rb-enc-feedback.png"
    )) // RB_ENC_FEEDBACK

    enc.set(28, new Build( // tree 2 row 4 middle
        title = "Focus",
        description = "When you use a spell with a stun component, reduces hate generated by 7% per rank.",
        icon = "/builds/icons/rb-enc-focus.png"
    )) // RB_ENC_FOCUS

    enc.set(31, new Build( // tree 2 row 5 middle
        title = "Lifeflow",
        description = "When you use a spell that takes mana from an enemy with mana, you heal for (mana taken * 0.4) hitpoints per rank.",
        icon = "/builds/icons/rb-enc-lifeflow.png"
    )) // RB_ENC_LIFEFLOW

    enc.set(34, new Build( // tree 2 row 6 middle
        title = "Extended Charm",
        description = "When you charm an enemy, increases the minimum duration by 0 to 1 ticks per rank.",
        icon = "/builds/icons/rb-enc-direcharm.png"
    )) // RB_ENC_DIRECHARM

    enc.set(36, new Build( // tree 3 row 1 left
        title = "Mind Devorour",
        description = "When you cast a detrimental spell against a monster with mana, you have a 2% chance to recover 10% mana per rank.",
        icon = "/builds/icons/rb-enc-entropy.png"
    )) // RB_ENC_ENTROPY

    enc.set(38, new Build( // tree 3 row 1 right
        title = "Color Shock",
        description = "Grants the Color Shock AA, causing a chance to stun when attacked. Chance increases by 1% per rank.",
        icon = "/builds/icons/rb-enc-colorshock.png"
    )) // RB_ENC_COLORSHOCK

    enc.set(40, new Build( // tree 3 row 2 middle
        title = "Mana Spear",
        description = "When you use a spell that takes mana from an enemy, increases chance to land by 2% per rank.",
        icon = "/builds/icons/rb-enc-manaspear.png"
    )) // RB_ENC_MANASPEAR

    enc.set(42, new Build( // tree 3 row 3 left
        title = "Flowing Thought",
        description = "Breeze now grants the enchanter many of their buffs.<br>Rank 1: Breeze (to mana users)<br>Rank 2: Visage Line (+to tanks, -to rest)<br>Rank 3: Gift Line and Brilliance/Insight (to mana users)<br>Rank 4: Haste (to non-casters)<br>Rank 5: Doubles duration of buffs",
        icon = "/builds/icons/rb-enc-flowingthought.png"
    )) // RB_ENC_FLOWINGTHOUGHT

    enc.set(44, new Build( // tree 3 row 3 right
        title = "Subtle Casting",
        description = "Lowers aggression when casting a spell by 2% per rank.",
        icon = "/builds/icons/rb-enc-subtlecasting.png"
    )) // RB_ENC_SUBTLECASTING

    enc.set(46, new Build( // tree 3 row 4 middle
        title = "Bad Moon",
        description = "While grouped with an enchanter, all allies gain an innate 100 proc that deals a (level * 0.2) lifetap per rank",
        icon = "/builds/icons/rb-enc-badmoon.png"
    )) // RB_ENC_BADMOON

    enc.set(49, new Build( // tree 3 row 5 middle
        title = "Tranquility",
        description = "While in a group, you and your allies gain (group size * level * 0.04) mana regen per tick, capped at maximum group size 3 per rank",
        icon = "/builds/icons/rb-enc-tranquility.png"
    )) // RB_ENC_TRANQUILITY

    enc.set(52, new Build( // tree 3 row 6 middle
        title = "Reclaim",
        description = "When you tell your pet to leave, you will gain (mana * 0.2) of back of it's mana cost with ratio of current to max hitpoints per rank",
        icon = "/builds/icons/rb-enc-reclaim.png"
    )) // RB_ENC_RECLAIM

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

    bst.set(0, new Build( // tree 1 row 1 left
        title = "Animal Bond",
        description = "Increases the damage of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(2, new Build( // tree 1 row 1 right
        title = "Animal Training",
        description = "Increases the health of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(4, new Build( // tree 1 row 2 middle
        title = "Animal Focus",
        description = "Increases the chance for your pet to critical hit by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(6, new Build( // tree 1 row 3 left
        title = "Animal Mastery",
        description = "Increases the critical damage of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(8, new Build( // tree 1 row 3 right
        title = "Animal Power",
        description = "Increases the damage of your pet's special attacks by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(10, new Build( // tree 1 row 4 middle
        title = "Animal Wrath",
        description = "Increases the critical chance of your pet's special attacks by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(13, new Build( // tree 1 row 5 middle
        title = "Devoid of Guilt",
        description = "Offhand attacks have a 2% chance per rank to trigger a 10 damage proc per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(16, new Build( // tree 1 row 6 middle
        title = "Spirit of Seru",
        description = "Kicks have a 2% chance per rank to trigger a 10 damage proc per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(18, new Build( // tree 2 row 1 left
        title = "Spirit of the Wolf",
        description = "Increases the movement speed of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(20, new Build( // tree 2 row 1 right
        title = "Spirit of the Bear",
        description = "Increases the armor class of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(22, new Build( // tree 2 row 2 middle
        title = "Spirit of the Owl",
        description = "Increases the mana of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(24, new Build( // tree 2 row 3 left
        title = "Spirit of the Tiger",
        description = "Increases the strength of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(26, new Build( // tree 2 row 3 right
        title = "Spirit of the Monkey",
        description = "Increases the agility of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(28, new Build( // tree 2 row 4 middle
        title = "Spirit of the Elephant",
        description = "Increases the stamina of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(31, new Build( // tree 2 row 5 middle
        title = "Spirit of the Rhino",
        description = "Increases the dexterity of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(34, new Build( // tree 2 row 6 middle
        title = "Spirit of the Lion",
        description = "Increases the charisma of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO


    bst.set(36, new Build( // tree 3 row 1 left
        title = "Spirit of the Wolf",
        description = "Increases the movement speed of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(38, new Build( // tree 3 row 1 right
        title = "Spirit of the Bear",
        description = "Increases the armor class of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(40, new Build( // tree 3 row 2 middle
        title = "Spirit of the Owl",
        description = "Increases the mana of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(42, new Build( // tree 3 row 3 left
        title = "Spirit of the Tiger",
        description = "Increases the strength of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(44, new Build( // tree 3 row 3 right
        title = "Spirit of the Monkey",
        description = "Increases the agility of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(46, new Build( // tree 3 row 4 middle
        title = "Spirit of the Elephant",
        description = "Increases the stamina of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(49, new Build( // tree 3 row 5 middle
        title = "Spirit of the Rhino",
        description = "Increases the dexterity of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

    bst.set(52, new Build( // tree 3 row 6 middle
        title = "Spirit of the Lion",
        description = "Increases the charisma of your pet by 2% per rank.",
        icon = "/builds/icons/rb-todo.png"
    )) // TODO

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

    ber.set(0, new Build( // tree 1 row 1 left
        "Blood Rage",
        "Increases your attack speed by 2% per rank when below 50% health.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(2, new Build( // tree 1 row 1 right
        "Frenzied Strikes",
        "Increases your critical hit chance by 2% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(4, new Build( // tree 1 row 2 middle
        "Savage Roar",
        "Increases your group's attack power by 3% per rank for 10 seconds.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(6, new Build( // tree 1 row 3 left
        "Unleashed Fury",
        "Increases your damage dealt by 2% per rank when your health is above 75%.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(8, new Build( // tree 1 row 3 right
        "Berserk",
        "Increases your damage dealt by 3% per rank when below 20% health.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(10, new Build( // tree 1 row 4 middle
        "Reckless Abandon",
        "Reduces the cooldown of your abilities by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(13, new Build( // tree 1 row 5 middle
        "Bloodthirst",
        "Heals you for 2% of your maximum health per rank when you deal a critical hit.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(16, new Build( // tree 1 row 6 middle
        "Raging Storm",
        "Increases your damage dealt by 2% per rank in a rage stance.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(18, new Build( // tree 2 row 1 left
        "Endless Fury",
        "Increases your maximum rage by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(20, new Build( // tree 2 row 1 right
        "Ferocious Assault",
        "Increases your attack power by 3% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(22, new Build( // tree 2 row 2 middle
        "Relentless",
        "Reduces the duration of stun effects on you by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(24, new Build( // tree 2 row 3 left
        "Wrath",
        "Increases your critical strike damage by 3% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(26, new Build( // tree 2 row 3 right
        "Unstoppable",
        "Reduces the duration of crowd control effects on you by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(28, new Build( // tree 2 row 4 middle
        "Titanic Rage",
        "Increases your strength by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(31, new Build( // tree 2 row 5 middle
        "Savage Blow",
        "Increases the damage of your melee attacks by 2% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(34, new Build( // tree 2 row 6 middle
        "Fury's Embrace",
        "Increases your health regeneration by 2% per rank when in combat.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(36, new Build( // tree 3 row 1 left
        "Rage of the Berserker",
        "Increases your damage dealt by 3% per rank when in a berserk state.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(38, new Build( // tree 3 row 1 right
        "Reckless Fury",
        "Increases your chance to deal a critical hit by 2% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(40, new Build( // tree 3 row 2 middle
        "Bloodletting",
        "Increases your bleed damage by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(42, new Build( // tree 3 row 3 left
        "Savage Instinct",
        "Increases your dodge chance by 2% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(44, new Build( // tree 3 row 3 right
        "Relentless Assault",
        "Increases your damage dealt by 3% per rank when below 50% health.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(46, new Build( // tree 3 row 4 middle
        "Unyielding Rage",
        "Reduces the duration of debuffs on you by 5% per rank.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(49, new Build( // tree 3 row 5 middle
        "Frenzy",
        "Increases your attack speed by 5% per rank when in a frenzy state.",
        "/builds/icons/rb-todo.png"
    )) // TODO

    ber.set(52, new Build( // tree 3 row 6 middle
        "Berserker's Might",
        "Increases your damage dealt by 2% per rank when using a two-handed weapon.",
        "/builds/icons/rb-todo.png"
    )) // TODO

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