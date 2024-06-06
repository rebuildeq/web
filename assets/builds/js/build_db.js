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
    clr.set(0, new Build(
        title = "Believe",
        description = "The cleric gains a 300 mod proc that deals (level * 0.75 * 0.2) magic damage, and half the damage is health back to the cleric.",
        icon = "/builds/images/builds/icons/rb-clr-believe.png"
    )) // RB_CLR_BELIEVE

    clr.set(2, new Build(
        title = "Ward of Vie",
        description = "All ward spells last an additional 20% more maximum hitpoints per rank.",
        icon = "/builds/images/builds/icons/rb-clr-wardofvie.png"
    )) // RB_CLR_WARDOFVIE

    clr.set(4, new Build(
        title = "Harken the Gods",
        description = "Yaulp now gives increased accuracy, attack, and mana regen per rank.",
        icon = "/builds/images/builds/icons/rb-clr-harkenthegods.png"
    )) // RB_CLR_HARKENTHEGODS


    clr.set(6, new Build(
        title = "Blessing of Haste",
        description = "All spell haste spells are 20% more effective on you per rank.",
        icon = "/builds/images/builds/icons/rb-clr-blessingofhaste.png"
    )) // RB_CLR_BLESSINGOFHASTE

    clr.set(8, new Build(
        title = "Divine Hammer",
        description = "The cleric gains a 60 mod proc that causes the Hand of the God spell, dealing 75-150 damage randomly.",
        icon = "/builds/images/builds/icons/rb-clr-divinehammer.png"
    )) // RB_CLR_DIVINEHAMMER

    clr.set(10, new Build(
        title = "Mark of Karn",
        description = "Healing an ally with a single target spell, while they target an enemy, will cause the target to be affected by the Mark of Karn, healing allies who hit the enemy, for 0 to 1 ticks randomly.",
        icon = "/builds/images/builds/icons/rb-clr-piouszealot.png"
    )) // RB_CLR_MARKOFKARN

    clr.set(13, new Build(
        title = "Augmented Retribution",
        description = "The cleric gains a 100 mod proc that deals a smite-like spell per rank.",
        icon = "/builds/images/builds/icons/rb-clr-augmentedretribution.png"
    )) // RB_CLR_AUGMENTEDRETRIBUTION

    clr.set(16, new Build(
        title = "Divine Avatar",
        description = "Passively grants a 10% increased chance to dodge as well as the Divine Avatar AA, allowing the cleric many statistic bonuses and longer duration per rank.",
        icon = "/builds/images/builds/icons/rb-clr-divineavatar.png"
    )) // RB_CLR_DIVINEAVATAR

    clr.set(18, new Build(
        title = "Instill Life",
        description = "When an ally is healed, there is a 2% chance to heal for a bonus of 2% the target's max health per rank.",
        icon = "/builds/images/builds/icons/rb-clr-instilllife.png"
    )) // RB_CLR_INSTILLLIFE

    clr.set(20, new Build(
        title = "Divine Bash",
        description = "When the cleric uses bash, they heal for 4% of the cleric's max hp per rank to a group member with lowest health per rank. This does not heal the cleric.",
        icon = "/builds/images/builds/icons/rb-clr-divinebash.png"
    )) // RB_CLR_DIVINEBASH

    clr.set(22, new Build(
        title = "Intensity of the Resolute",
        description = "Courage now grants Cleric buffs<br>Rank 1: +Spell Haste<br>Rank 2: +AC<br>Rank 3: +HP<br>Rank 4: +Symbol<br>Rank 5: +Yaulp",
        icon = "/builds/images/builds/icons/rb-clr-intensifiedresolution.png"
    )) // RB_CLR_INTENSIFIEDRESOLUTION

    clr.set(24, new Build(
        title = "Celestial Regeneration",
        description = "Grants the Celestial Regeneration AA, restoring 36 hitpoints and 2 mana for 8 ticks per rank.",
        icon = "/builds/images/builds/icons/rb-clr-celestialbreeze.png"
    )) // RB_CLR_CELESTIALBREEZE

    clr.set(26, new Build(
        title = "Divine Arbitration",
        description = "Grants the Divine Arbitration AA, balancing the damage each member of your group has taken, with a cooldown reduction of 30 seconds per rank.",
        icon = "/builds/images/builds/icons/rb-clr-divinearbitration.png"
    )) // RB_CLR_DIVINEARBITRATION

    clr.set(28, new Build(
        title = "Divine Resurrection",
        description = "Grants the Divine Resurrection AA, reviving a fallen player. With a base of 24 hours, lowers cooldown by 4 hours per rank.",
        icon = "/builds/images/builds/icons/rb-clr-divineressurection.png"
    )) // RB_CLR_DIVINERESSURECTION

    clr.set(31, new Build(
        title = "Promise",
        description = "All heals done by the cleric now have a 2% chance to have the mana cost reduced by 10% mana per rank.",
        icon = "/builds/images/builds/icons/rb-clr-promise.png"
    )) // RB_CLR_PROMISE

    clr.set(34, new Build(
        title = "Harmonic Balance",
        description = "Grants the Lesson of the Devoted AA, balancing the group's hitpoints and healing them. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/images/builds/icons/rb-clr-harmonicbalance.png"
    )) // RB_CLR_HARMONICBALANCE

    clr.set(36, new Build(
        title = "Strike",
        description = "Increases the damage of all direct damage spells by 2% per rank.",
        icon = "/builds/images/builds/icons/rb-clr-strike.png"
    )) // RB_CLR_STRIKE

    clr.set(38, new Build(
        title = "Ward of Rebuke",
        description = "Ward skills deal an additional 2% damage per rank and give 1% of the damage per rank back as mana.",
        icon = "/builds/images/builds/icons/rb-clr-wardofrebuke.png"
    )) // RB_CLR_WARDOFREBUKE

    clr.set(40, new Build(
        title = "Fist of the Gods",
        description = "Grants 1 bane damage versus undead per rank.",
        icon = "/builds/images/builds/icons/rb-clr-fistofthegods.png"
    )) // RB_CLR_FISTOFTHEGODS

    clr.set(42, new Build(
        title = "Divine Retribution",
        description = "Grants the Divine Retribution AA with 20% per rank proc effectiveness.",
        icon = "/builds/images/builds/icons/rb-clr-divineretribution.png"
    )) // RB_CLR_DIVINERETRIBUTION

    clr.set(44, new Build(
        title = "Turn Undead",
        description = "Grants the Turn Undead AA dealing 500 damage per rank and a 1% chance per rank to deal 32000 damage.",
        icon = "/builds/images/builds/icons/rb-clr-turnundead.png"
    )) // RB_CLR_TURNUNDEAD

    clr.set(46, new Build(
        title = "Exquisite Benediction",
        description = "While meleeing an undead creature, increases proc chance of all build procs by 20 per rank.",
        icon = "/builds/images/builds/icons/rb-clr-exquisitebenediction.png"
    )) // RB_CLR_EXQUISITEBENEDICTION

    clr.set(49, new Build(
        title = "Mark of Retribution",
        description = "Increases the damage of Mark of Retribution by 20% per rank.",
        icon = "/builds/images/builds/icons/rb-clr-markofretribution.png"
    )) // RB_CLR_MARKOFRETRIBUTION

    clr.set(52, new Build(
        title = "Death Pact",
        description = "Healing an ally with a single target spell gives them a 0 to 1 tick duration random death pact buff per rank.",
        icon = "/builds/images/builds/icons/rb-clr-avatarsboon.png"
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

    pal.set(0, new Build(
        title = "Rodcet's Gift",
        description = "Single target healing spells now spread to allies within 10m of the healed target, healing them for 2% the original heal amount per rank.",
        icon = "/builds/images/builds/icons/rb-pal-rodcetsgift.png"
    )) // RB_PAL_RODCETSGIFT

    pal.set(2, new Build(
        title = "Hand of Piety",
        description = "Grants the Hand of Piety AA, allowing the user to heal the group for 2% of their max health per rank.",
        icon = "/builds/images/builds/icons/rb-pal-handofpiety.png"
    )) // RB_PAL_HANDOFPIETY

    pal.set(4, new Build(
        title = "Instill Purpose",
        description = "Divine Purpose and Breath of Tunare now grant 20% more hitpoint regeneration per rank.",
        icon = "/builds/images/builds/icons/rb-pal-instillpurpose.png"
    )) // RB_PAL_INSTILLPURPOSE

    pal.set(6, new Build(
        title = "Refreshing Breeze",
        description = "All healing except Hand of Piety give healed targets 0.5% of amount healed as mana per rank. Does not work when healing yourself.",
        icon = "/builds/images/builds/icons/rb-pal-refreshingbreeze.png"
    )) // RB_PAL_REFRESHINGBREEZE

    pal.set(8, new Build(
        title = "Brell's Blessing",
        description = "Courage now grants Paladin buffs<br>Rank 1: AC<br>Rank 2: HP Line 1<br>Rank 3: HP Symbol Line<br>Rank 4: HP Line 2 (Brell)<br>Rank 5: Double duration.",
        icon = "/builds/images/builds/icons/rb-pal-brellsblessing.png"
    )) // RB_PAL_BRELLSBLESSING

    pal.set(10, new Build(
        title = "Soul Cleansing",
        description = "Cleansing heal over time spells now have a 2% chance to cure an ailment per rank.",
        icon = "/builds/images/builds/icons/rb-pal-soulcleansing.png"
    )) // RB_PAL_SOULCLEANSING

    pal.set(13, new Build(
        title = "Wave of Marr",
        description = "All wave-based group spells cost 10% less mana to cast per rank.",
        icon = "/builds/images/builds/icons/rb-pal-waveofmarr.png"
    )) // RB_PAL_WAVEOFMARR

    pal.set(16, new Build(
        title = "Ward of Tunare",
        description = "Passively grants the Paladin a 6% bonus when healed by other allies per rank.",
        icon = "/builds/images/builds/icons/rb-pal-wardoftunare.png"
    )) // RB_PAL_WARDOFTUNARE

    pal.set(18, new Build(
        title = "Shield of Nife",
        description = "Grants an Undead-only damage shield that deals 7 damage per rank.",
        icon = "/builds/images/builds/icons/rb-pal-shieldofnife.png"
    )) // RB_PAL_SHIELDOFNIFE

    pal.set(20, new Build(
        title = "Armor of Faith",
        description = "Damage taken from Undead is reduced by 2.5% per rank.",
        icon = "/builds/images/builds/icons/rb-pal-armoroffaith.png"
    )) // RB_PAL_ARMOROFFAITH

    pal.set(22, new Build(
        title = "Purification",
        description = "Grants the Purification AA, curing 1 detrimental effect on the paladin per rank.",
        icon = "/builds/images/builds/icons/rb-pal-purification.png"
    )) // RB_PAL_PURIFICATION

    pal.set(24, new Build(
        title = "Holy Servant",
        description = "When a group member within 2m is attacked, 2.5% of the dealt damage is redirected to the paladin and is reduced by 2% per rank.",
        icon = "/builds/images/builds/icons/rb-pal-holyservant.png"
    )) // RB_PAL_HOLYSERVANT

    pal.set(26, new Build(
        title = "Divine Stun",
        description = "Grants the Divine Stun AA, causing a target to be stunned and marked with divine anger. Any time the Paladin casts a heal spell on a group member, the marked enemy gains an additional 200 hatred per rank.",
        icon = "/builds/images/builds/icons/rb-pal-divinestun.png"
    )) // RB_PAL_DIVINESTUN

    pal.set(28, new Build(
        title = "Act of Valor",
        description = "Grants the Act of Valor AA, summoning a squire that will dutifully assist the Paladin, casting stuns and healing themself. Each rank increases his stats and power by 20% efficiency per rank.",
        icon = "/builds/images/builds/icons/rb-pal-actofvalor.png"
    )) // RB_PAL_ACTOFVALOR

    pal.set(31, new Build(
        title = "Elixir of Might",
        description = "Instrument of Nife and Divine Might proc effects now heal the Paladin for 10% of damage dealt as well as gain 2 mana per rank.",
        icon = "/builds/images/builds/icons/rb-pal-elixirofmight.png"
    )) // RB_PAL_ELIXIROFMIGHT

    pal.set(34, new Build(
        title = "Flames of Redemption",
        description = "Grants the Lesson of the Devoted AA, causing flames of redemption buff improving healing effectiveness by 25% and the flames of redemption DD proc. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/images/builds/icons/rb-pal-flamesofredemption.png"
    )) // RB_PAL_FLAMESOFREDEMPTION

    pal.set(36, new Build(
        title = "Zealot's Fervor",
        description = "When a heal is cast by the paladin on another character, up to 1 nearby enemies of the target are dealt 1% of the healing as damage per rank.",
        icon = "/builds/images/builds/icons/rb-pal-zealotsfervor.png"
    )) // RB_PAL_ZEALOTSFERVOR

    pal.set(38, new Build(
        title = "Knight's Advantage",
        description = "2 handed weapons deal an additional 5% damage per rank.",
        icon = "/builds/images/builds/icons/rb-pal-knightsadvantage.png"
    )) // RB_PAL_KNIGHTSADVANTAGE

    pal.set(40, new Build(
        title = "Chosen",
        description = "All self proc buffs deal 25% more damage per rank.",
        icon = "/builds/images/builds/icons/rb-pal-chosen.png"
    )) // RB_PAL_CHOSEN

    pal.set(42, new Build(
        title = "Purpose of Marr",
        description = "Valor of Marr now grants 10% additional attack speed per rank.",
        icon = "/builds/images/builds/icons/rb-pal-purposeofmarr.png"
    )) // RB_PAL_PURPOSEOFMARR

    pal.set(44, new Build(
        title = "Flame of Light",
        description = "Flame of Light now deals an additional 20% damage per rank.",
        icon = "/builds/images/builds/icons/rb-pal-flameoflight.png"
    )) // RB_PAL_FLAMEOFLIGHT

    pal.set(46, new Build(
        title = "Dismiss Evil",
        description = "When attacking an evil creature, gives a 1% chance to critical hit per rank.",
        icon = "/builds/images/builds/icons/rb-pal-dismissevil.png"
    )) // RB_PAL_DISMISSEVIL

    pal.set(49, new Build(
        title = "Frail",
        description = "Stun spells also cripple the target for 0 to 1 ticks per rank.",
        icon = "/builds/images/builds/icons/rb-pal-frail.png"
    )) // RB_PAL_FRAIL

    pal.set(52, new Build(
        title = "Slayer",
        description = "Grants an ability to cleanse the target, similar to Slay Undead, but works on ALL creature types, up to the level of the paladin, with a 100 mod proc per rank.",
        icon = "/builds/images/builds/icons/rb-pal-slayer.png"
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

    rng.set(0, new Build(
        title = "Fletching",
        description = "Grants the Fletching AA, allowing the ranger to craft arrows and bolts.",
        icon = "/builds/images/builds/icons/rb-rng-fletching.png"
    )) // RB_RNG_FLETCHING

    rng.set(2, new Build(
        title = "Archery",
        description = "Grants the Archery AA, increasing the ranger's bow and crossbow damage by 5% per rank.",
        icon = "/builds/images/builds/icons/rb-rng-archery.png"
    )) // RB_RNG_ARCHERY

    rng.set(4, new Build(
        title = "Tracking",
        description = "Grants the Tracking AA, allowing the ranger to track creatures.",
        icon = "/builds/images/builds/icons/rb-rng-tracking.png"
    )) // RB_RNG_TRACKING

    rng.set(6, new Build(
        title = "Foraging",
        description = "Grants the Foraging AA, allowing the ranger to forage for food and drink.",
        icon = "/builds/images/builds/icons/rb-rng-foraging.png"
    )) // RB_RNG_FORAGING

    rng.set(8, new Build(
        title = "Sneak",
        description = "Grants the Sneak AA, allowing the ranger to sneak around.",
        icon = "/builds/images/builds/icons/rb-rng-sneak.png"
    )) // RB_RNG_SNEAK

    rng.set(10, new Build(
        title = "Hide",
        description = "Grants the Hide AA, allowing the ranger to hide.",
        icon = "/builds/images/builds/icons/rb-rng-hide.png"
    )) // RB_RNG_HIDE

    rng.set(13, new Build(
        title = "Dual Wield",
        description = "Grants the Dual Wield AA, allowing the ranger to dual wield weapons.",
        icon = "/builds/images/builds/icons/rb-rng-dualwield.png"
    )) // RB_RNG_DUALWIELD

    rng.set(16, new Build(
        title = "Evasion",
        description = "Grants the Evasion AA, increasing the ranger's dodge chance by 5% per rank.",
        icon = "/builds/images/builds/icons/rb-rng-evasion.png"
    )) // RB_RNG_EVASION

    rng.set(18, new Build(
        title = "Critical Strike",
        description = "Grants the Critical Strike AA, increasing the ranger's critical hit chance by 5% per rank.",
        icon = "/builds/images/builds/icons/rb-rng-criticalstrike.png"
    )) // RB_RNG_CRITICALSTRIKE

    rng.set(20, new Build(
        title = "Rapid Shot",
        description = "Grants the Rapid Shot AA, increasing the ranger's attack speed by 5% per rank.",
        icon = "/builds/images/builds/icons/rb-rng-rapidshot.png"
    )) // RB_RNG_RAPIDSHOT

    rng.set(22, new Build(
        title = "Fletching Mastery",
        description = "Grants the Fletching Mastery AA, allowing the ranger to craft more powerful arrows and bolts.",
        icon = "/builds/images/builds/icons/rb-rng-fletchingmastery.png"
    )) // RB_RNG_FLETCHINGMASTERY

    rng.set(24, new Build(
        title = "Archery Mastery",
        description = "Grants the Archery Mastery AA, increasing the ranger's bow and crossbow damage by 10% per rank.",
        icon = "/builds/images/builds/icons/rb-rng-archerymastery.png"
    )) // RB_RNG_ARCHERYMASTERY

    rng.set(26, new Build(
        title = "Tracking Mastery",
        description = "Grants the Tracking Mastery AA, allowing the ranger to track more powerful creatures.",
        icon = "/builds/images/builds/icons/rb-rng-trackingmastery.png"
    )) // RB_RNG_TRACKINGMASTERY

    rng.set(28, new Build(
        title = "Foraging Mastery",
        description = "Grants the Foraging Mastery AA, allowing the ranger to forage for more powerful food and drink.",
        icon = "/builds/images/builds/icons/rb-rng-foragingmastery.png"
    )) // RB_RNG_FORAGINGMASTERY

    rng.set(31, new Build(
        title = "Sneak Mastery",
        description = "Grants the Sneak Mastery AA, allowing the ranger to sneak around more effectively.",
        icon = "/builds/images/builds/icons/rb-rng-sneakmastery.png"
    )) // RB_RNG_SNEAKMASTERY

    rng.set(34, new Build(
        title = "Hide Mastery",
        description = "Grants the Hide Mastery AA, allowing the ranger to hide more effectively.",
        icon = "/builds/images/builds/icons/rb-rng-hidemastery.png"
    )) // RB_RNG_HIDEMASTERY

    rng.set(36, new Build(
        title = "Dual Wield Mastery",
        description = "Grants the Dual Wield Mastery AA, allowing the ranger to dual wield more effectively.",
        icon = "/builds/images/builds/icons/rb-rng-dualwieldmastery.png"
    )) // RB_RNG_DUALWIELDMASTERY

    rng.set(38, new Build(

        title = "Evasion Mastery",
        description = "Grants the Evasion Mastery AA, increasing the ranger's dodge chance by 10% per rank.",
        icon = "/builds/images/builds/icons/rb-rng-evasionmastery.png"
    )) // RB_RNG_EVASIONMASTERY

    rng.set(40, new Build(
        title = "Critical Strike Mastery",
        description = "Grants the Critical Strike Mastery AA, increasing the ranger's critical hit chance by 10% per rank.",
        icon = "/builds/images/builds/icons/rb-rng-criticalstrikemastery.png"
    )) // RB_RNG_CRITICALSTRIKEMASTERY

    rng.set(42, new Build(
        title = "Rapid Shot Mastery",
        description = "Grants the Rapid Shot Mastery AA, increasing the ranger's attack speed by 10% per rank.",
        icon = "/builds/images/builds/icons/rb-rng-rapidshotmastery.png"
    )) // RB_RNG_RAPIDSHOTMASTERY

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
        title = "Leech Touch",
        description = "Grants the Leech Touch AA, causing the target to be affected by a DoT that heals the caster for 2% of the damage dealt per rank.",
        icon = "/builds/images/builds/icons/rb-shd-leechtouch.png"
    )) // RB_SHD_LEECHTOUCH

    shd.set(2, new Build(
        title = "Gouging Skin",
        description = "When attacked, causes a 4 point damage shield and 30 hate per rank.",
        icon = "/builds/images/builds/icons/rb-shd-gougingskin.png"
    )) // RB_SHD_GOUGINGSKIN

    shd.set(4, new Build(
        title = "Hungering Aura",
        description = "Improves lifetaps casted by Leech Touch or Innate Procs by 5% healing for each enemy attacking you with a maximum of 1 enemies or group size, whichever is lower per rank.",
        icon = "/builds/images/builds/icons/rb-shd-hungeringaura.png"
    )) // RB_SHD_HUNGERINGAURA

    shd.set(6, new Build(
        title = "Steadfast Servant",
        description = "Grants the Steadfast Servant AA, summoning a pet at 20% effectiveness per rank.",
        icon = "/builds/images/builds/icons/rb-shd-steadfastservant.png"
    )) // RB_SHD_STEADFASTSERVANT

    shd.set(8, new Build(
        title = "Zevfeer's Feast",
        description = "While in a group, you and your allies gain (group size * level * 0.028) mana regen per tick, capped at maximum group size 3 per rank.",
        icon = "/builds/images/builds/icons/rb-shd-zevfeersfeast.png"
    )) // RB_SHD_ZEVFEERSFEAST

    shd.set(10, new Build(
        title = "Sworn Enemy",
        description = "When you use taunt, you mark a target as your sworn enemy. For the next 3 ticks, any spell damage dealt to target causes (mana * 0.5) hate per rank.",
        icon = "/builds/images/builds/icons/rb-shd-swornenemy.png"
    )) // RB_SHD_SWORNENEMY

    shd.set(13, new Build(
        title = "Banshee's Mirror",
        description = "Passively grants the Shadow Knight a 6% bonus when healed by other allies per rank.",
        icon = "/builds/images/builds/icons/rb-shd-bansheesmirror.png"
    )) // RB_SHD_BANSHEESMIRROR

    shd.set(16, new Build(
        title = "Reaper's Strike",
        description = "Grants the Lesson of the Devoted AA, improving accuracy by 50% and gain lifetap from weapon damage. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/images/builds/icons/rb-shd-reapersstrike.png"
    )) // RB_SHD_REAPERSSTRIKE

    shd.set(18, new Build(
        title = "Festering Spear",
        description = "Improve spear type spells by (level * 1) bonus damage per rank. Also gives a 1% chance to cause quad damage.",
        icon = "/builds/images/builds/icons/rb-shd-festeringspear.png"
    )) // RB_SHD_FESTERINGSPEAR

    shd.set(20, new Build(
        title = "Festering Wound",
        description = "Improves DoT damage by 1% for each ally in group per rank.",
        icon = "/builds/images/builds/icons/rb-shd-festeringwound.png"
    )) // RB_SHD_FESTERINGWOUND

    shd.set(22, new Build(
        title = "Rotten Core",
        description = "Each time a creature is successfully killed, the knight gains a rotten core counter. For 60 seconds, each counter adds 3% damage per rank to attacks, with a cap of 1 counters. Getting a kill resets the counter.",
        icon = "/builds/images/builds/icons/rb-shd-rottencore.png"
    )) // RB_SHD_ROTTENCORE

    shd.set(24, new Build(
        title = "Lingering Pain",
        description = "All direct damage spells cause a DoT effect for 0 to 1 ticks per rank.",
        icon = "/builds/images/builds/icons/rb-shd-lingeringpain.png"
    )) // RB_SHD_LINGERINGPAIN

    shd.set(26, new Build(
        title = "Blood Oath",
        description = "Grants the Blood Oath AA, causing the target to be affected by a DoT that heals the caster for 2% of the damage dealt per rank.",
        icon = "/builds/images/builds/icons/rb-shd-bloodoath.png"
    )) // RB_SHD_BLOODOATH

    shd.set(28, new Build(
        title = "Gift of Urash",
        description = "Increases all skill damage by 5% per rank.",
        icon = "/builds/images/builds/icons/rb-shd-giftofurash.png"
    )) // RB_SHD_GIFTOFURASH

    shd.set(31, new Build(
        title = "Unholy Focus",
        description = "Enables use of the #focus command, transferring lifetaps to the focused ally for 4% of the recourse given per rank.",
        icon = "/builds/images/builds/icons/rb-shd-unholyfocus.png"
    )) // RB_SHD_UNHOLYFOCUS

    shd.set(34, new Build(
        title = "Bash of Death",
        description = "When you bash a target that is equal to your level or lower and the enemy is at 10% or less total health you deal an additional (level * 1) per rank.",
        icon = "/builds/images/builds/icons/rb-shd-bashofdeath.png"
    )) // RB_SHD_BASHOFDEATH

    shd.set(36, new Build(
        title = "Embrace Death",
        description = "Grants you the Death Peace AA, giving the ability to feign death as well as heal you for 1% of missing health per rank.",
        icon = "/builds/images/builds/icons/rb-shd-embracedeath.png"
    )) // RB_SHD_EMBRACEDEATH

    shd.set(38, new Build(
        title = "Darkness",
        description = "Darkness-based and Terror spells now cause 40% more hate per rank.",
        icon = "/builds/images/builds/icons/rb-shd-darkness.png"
    )) // RB_SHD_DARKNESS

    shd.set(40, new Build(
        title = "Empathetic Soul",
        description = "Improves Dark Empathy by granting an additional 40 hitpoints healed and 0.5% max mana per rank.",
        icon = "/builds/images/builds/icons/rb-shd-empatheticsoul.png"
    )) // RB_SHD_EMPATHETICSOUL

    shd.set(42, new Build(
        title = "Embrace Shadow",
        description = "Each time you feign death, you are instantly be invisible to both living and undead creatures for 1 tick per rank.",
        icon = "/builds/images/builds/icons/rb-shd-embraceshadow.png"
    )) // RB_SHD_EMBRACESHADOW

    shd.set(44, new Build(
        title = "Siphon of Death",
        description = "Vampiric Embrace, Scream of Death and Shroud of Death now also grant a mana tap for 5% of damage dealt per rank.",
        icon = "/builds/images/builds/icons/rb-shd-siphonofdeath.png"
    )) // RB_SHD_SIPHONOFDEATH

    shd.set(46, new Build(
        title = "Nightmare",
        description = "Fear now causes target to be stunned in panic for 0 to 1 seconds per rank before fleeing.",
        icon = "/builds/images/builds/icons/rb-shd-nightmare.png"
    )) // RB_SHD_NIGHTMARE

    shd.set(49, new Build(
        title = "Mental Resistance",
        description = "Gives a 2% chance to resist stun effects per rank.",
        icon = "/builds/images/builds/icons/rb-shd-mentalresistance.png"
    )) // RB_SHD_MENTALRESISTANCE

    shd.set(52, new Build(
        title = "Cloak of Shadows",
        description = "Grants the Cloak of the Shadows AA, allowing you to step into the shadows, causing a 5% chance that all targets will forget your actions.",
        icon = "/builds/images/builds/icons/rb-shd-cloakofshadows.png"
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

    dru.set(0, new Build(
        title = "Entrap",
        description = "Grants the Entrap AA, snaring the target. Mana cost increases across levels. <br>Rank 1 Snares by 41%-96%, 0 resist adjustment, 0.4% mana cost reduction.<br>Rank 2 Snares by 57%-121%, -50 resist adjustment, 0.8% mana cost reduction.<br>Rank 3 Snares by 57%-141%, -50 resist adjustment, 1.2% mana cost reduction.<br>Rank 4 Snares by 57%-141%, -85 resist adjustment, 1.6% mana cost reduction.<br>Rank 5 Snares by 57%-141%, -85 resist adjustment, 3.2% mana cost reduction.<br>",
        icon = "/builds/images/builds/icons/rb-dru-entrap.png"
    )) // RB_DRU_ENTRAP

    dru.set(2, new Build(
        title = "One With Nature",
        description = "Grants a passive where each time you are hit, 2% of the damage is converted into mana per rank.",
        icon = "/builds/images/builds/icons/rb-dru-treeform.png"
    )) // RB_DRU_TREEFORM

    dru.set(4, new Build(
        title = "Teleport Bind",
        description = "Grants the teleport bind AA. Costs 85% of maximum mana. Each additional rank decreases the mana cost by 15%.",
        icon = "/builds/images/builds/icons/rb-dru-teleportbind.png"
    )) // RB_DRU_TELEPORTBIND

    dru.set(6, new Build(
        title = "Exodus",
        description = "Grants the Exodus AA, which has a base 5 second cast time. Each rank reduces casting time by 1 second.",
        icon = "/builds/images/builds/icons/rb-dru-exodus.png"
    )) // RB_DRU_EXODUS

    dru.set(8, new Build(
        title = "Call of the Wild",
        description = "Grants the Call of the Wild AA, causing enemies nearby to be stunned. Each rank reduces recast time by 300 seconds.",
        icon = "/builds/images/builds/icons/rb-dru-callofthewild.png"
    )) // RB_DRU_CALLOFTHEWILD

    dru.set(10, new Build(
        title = "Secondary Recall",
        description = "Grants Secondary Recall AA. Each rank reduces the recast time substantially, 1: 24hrs, 2: 18 hrs, 3: 12hrs, 4: 6hrs, 5: 3hrs.",
        icon = "/builds/images/builds/icons/rb-dru-secondaryrecall.png"
    )) // RB_DRU_SECONDARYRECALL

    dru.set(13, new Build(
        title = "Ring Affinity",
        description = "Ring spells cast 5% faster and cost 10% less mana.",
        icon = "/builds/images/builds/icons/rb-dru-ringaffinity.png"
    )) // RB_DRU_RINGAFFINITY

    dru.set(16, new Build(
        title = "Dire Charm",
        description = "Charm animals from -10 to -5 of your level, based on rank. They get a pet-like adjusted stats, this is an experiment for future mage pet AI improvements.",
        icon = "/builds/images/builds/icons/rb-dru-direcharm.png"
    )) // RB_DRU_DIRECHARM

    dru.set(18, new Build(
        title = "Regeneration",
        description = "Grants the druid an innate hp regeneration of Level * 0.2 hitpoints (minimum 2) per tick, a self only damage shield of 2, as well as any duration regeneration spells casted by the druid give 20% additional hitpoint regeneration per tick while in the same zone as the druid per rank.",
        icon = "/builds/images/builds/icons/rb-dru-regeneration.png"
    )) // RB_DRU_REGENERATION

    dru.set(20, new Build(
        title = "Convergence of Spirits",
        description = "Grants the Convergence of Spirits AA, giving a heal over time that heals for 0.5% of the target's max health per tick for 6 seconds. This also causes normal heals to be boosted by 5% per rank.",
        icon = "/builds/images/builds/icons/rb-dru-convergenceofspirits.png"
    )) // RB_DRU_CONVERGENCEOFSPIRITS

    dru.set(22, new Build(
        title = "Lifeflow",
        description = "While an ally has Covergence of Spirits or Nature's Boon buff on them, they are granted a 1% death save chance, healing when triggered for 8000 hitpoints per rank.",
        icon = "/builds/images/builds/icons/rb-dru-lifeflow.png"
    )) // RB_DRU_LIFEFLOW

    dru.set(24, new Build(
        title = "Spirit of the Wood",
        description = "Grants the Spirit of the Wood AA, which casts buffs scaled based on your level and the target's level.<br>Rank 1: STR<br>Rank 2: HP Regen<br>Rank 3: HP<br>Rank 4: Damage Shield<br>Rank 5: Doubles Duration",
        icon = "/builds/images/builds/icons/rb-dru-spiritofthewood.png"
    )) // RB_DRU_SPIRITOFTHEWOOD

    dru.set(26, new Build(
        title = "Spiritual Awakening",
        description = "The druid gains a 300 mod proc that deals (level * 1.5 * 0.2) magic damage and melee hits tap 1 mana from the target.",
        icon = "/builds/images/builds/icons/rb-dru-spiritualawakening.png"
    )) // RB_DRU_SPIRITUALAWAKENING

    dru.set(28, new Build(
        title = "Nature's Boon",
        description = "Grants the Nature's Boon AA, where the target receives a buff that lasts 84 seconds, duration reduced by 12 seconds due to rank. When the buff fades, the target is healed for 20% of the druid's max mana. If Nature's Boon is removed early, it will heal for a portion based on duration buff lasted. This also causes normal heals to be boosted by 5% per rank.",
        icon = "/builds/images/builds/icons/rb-dru-naturesboon.png"
    )) // RB_DRU_NATURESBOON

    dru.set(31, new Build(
        title = "Nature's Whisper",
        description = "While a target is affected by Nature's Boon or Convergence of Spirits, the druid as well as the target regain 2% of any healing done from these spells as mana per rank.",
        icon = "/builds/images/builds/icons/rb-dru-natureswhisper.png"
    )) // RB_DRU_NATURESWHISPER

    dru.set(34, new Build(
        title = "Nature's Guardian",
        description = "Grants the Nature's Guardian AA, where 3% of the caster's max mana is infused by nature and can be transferred to a target or to the caster per rank.",
        icon = "/builds/images/builds/icons/rb-dru-naturesguardian.png"
    )) // RB_DRU_NATURESGUARDIAN

    dru.set(36, new Build(
        title = "Intensity",
        description = "When an enemy is affected by a DoT, it deals 0.7% more damage for each ally in group.",
        icon = "/builds/images/builds/icons/rb-dru-intensity.png"
    )) // RB_DRU_INTENSITY

    dru.set(38, new Build(
        title = "Lingering Pain",
        description = "When a direct spell is casted, a 0 to 1 tick duration DoT will also affect the target if the spell casted was obtained within 15 levels of your current level per rank.",
        icon = "/builds/images/builds/icons/rb-dru-lingeringpain.png"
    )) // RB_DRU_LINGERINGPAIN

    dru.set(40, new Build(
        title = "Focused Swarm",
        description = "When standing nearby a mob, DoTs now deal 1% more damage for each ally in group. This damage bonus reduces by 10% for every 20m you're away from an enemy per rank.",
        icon = "/builds/images/builds/icons/rb-dru-focusedswarm.png"
    )) // RB_DRU_FOCUSEDSWARM

    dru.set(42, new Build(
        title = "Blessing of Ro",
        description = "All Ro debuffs now spread to 0 to 1 additional enemies within 5m of an affected target if they are on the aggro list of the druid.",
        icon = "/builds/images/builds/icons/rb-dru-blessingofro.png"
    )) // RB_DRU_BLESSINGOFRO

    dru.set(44, new Build(
        title = "Whirling Disaster",
        description = "Direct Damage spells now also stun for (0 to 1/2) seconds if the target is at least 5 levels below the druid.",
        icon = "/builds/images/builds/icons/rb-dru-whirlingdisaster.png"
    )) // RB_DRU_WHIRLINGDISASTER

    dru.set(46, new Build(
        title = "Stinging Affliction",
        description = "DoTs and Direct Damage spells have a 1% chance to critical hit per rank.",
        icon = "/builds/images/builds/icons/rb-dru-stingingaffliction.png"
    )) // RB_DRU_STINGINGAFFLICTION

    dru.set(49, new Build(
        title = "Deep Roots",
        description = "When a root wears off, there is a 3% chance the target will be snared if it is not already per rank.",
        icon = "/builds/images/builds/icons/rb-dru-deeproots.png"
    ))  // RB_DRU_DEEPROOTS

    dru.set(52, new Build(
        title = "Nature's Blight",
        description = "Grants the Lesson of the Devoted AA, causing the target to take 5% increased spell damage. 5 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/images/builds/icons/rb-dru-naturesblight.png"
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

    mnk.set(0, new Build(
        title = "Intensified Training",
        description = "The monk gains a 300 mod proc that deals (level * 1.25 * 0.2) magic damage per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-intensifiedtraining.png"
    )) // RB_MNK_INTENSIFIEDTRAINING

    mnk.set(2, new Build(
        title = "Familiarity",
        description = "Every time a special attack lands on an enemy, the monk gains 2 armor against the target per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-familiarity.png"
    )) // RB_MNK_FAMILIARITY

    mnk.set(4, new Build(
        title = "Block",
        description = "Increases block by 2% per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-block.png"
    )) // RB_MNK_BLOCK

    mnk.set(6, new Build(
        title = "Relentless Training",
        description = "Increases damage of Tiger Claw, Eagle Strike, Tail Whip and other special attacks by 10% per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-relentlesstraining.png"
    )) // RB_MNK_RELENTLESSTRAINING

    mnk.set(8, new Build(
        title = "Expose Weakness",
        description = "When using Tiger Claw, Eagle Strike, Tail Whip and other special attacks, increases accuracy of all attacking allies by 0 to 2 per rank vs that enemy.",
        icon = "/builds/images/builds/icons/rb-mnk-exposeweakness.png"
    )) // RB_MNK_EXPOSEWEAKNESS

    mnk.set(10, new Build(
        title = "Destiny",
        description = "When you have an enemy targeted, increases avoidance by 1% per rank",
        icon = "/builds/images/builds/icons/rb-mnk-destiny.png"
    )) // RB_MNK_DESTINY

    mnk.set(13, new Build(
        title = "Wu's Quickening",
        description = "Reduces delay of your primary weapon by 1 per rank, to a minimum of 7.",
        icon = "/builds/images/builds/icons/rb-mnk-wusquickening.png"
    )) // RB_MNK_WUSQUICKENING

    mnk.set(16, new Build(
        title = "Grace of the Order",
        description = "Grants the Lesson of the Devoted AA, increasing max health by 15% and a 250dd stun. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/images/builds/icons/rb-mnk-graceoftheorder.png"
    )) // RB_MNK_GRACEOFTHEORDER

    mnk.set(18, new Build(
        title = "Partial Mending",
        description = "When mend fails, the monk still heals for 10% of the mending amount per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-partialmending.png"
    )) // RB_MNK_PARTIALMENDING

    mnk.set(20, new Build(
        title = "Inner Chakra",
        description = "Heals received while using feign death, including mend, heal for an additional 4% per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-innerchakra.png"
    )) // RB_MNK_INNERCHAKRA

    mnk.set(22, new Build(
        title = "Channel Chakra",
        description = "While your health is less than 10%, and no enemy is actively attacking you, your normal melee attacks lifetap for 2% damage per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-channelchakra.png"
    )) // RB_MNK_CHANNELCHAKRA

    mnk.set(24, new Build(
        title = "Mending Aura",
        description = "When you use Mend, you now heal the rest of the group within 5 meters for 20% the mend heal amount per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-mendingaura.png"
    )) // RB_MNK_MENDINGAURA

    mnk.set(26, new Build(
        title = "Divine Surge",
        description = "While in a group, you and your allies gain (group size * level * 0.028) mana regen per tick, capped at maximum group size 3 per rank",
        icon = "/builds/images/builds/icons/rb-mnk-divinesurge.png"
    )) // RB_MNK_DIVINESURGE

    mnk.set(28, new Build(
        title = "Improved Mend",
        description = "When you use Mend, you heal an additional 5% to 10% hitpoints per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-improvedmend.png"
    )) // RB_MNK_IMPROVEDMEND

    mnk.set(31, new Build(
        title = "Purify Body",
        description = "Grants the Purify Body AA, curing 1 detrimental effect on the monk per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-purifybody.png"
    )) // RB_MNK_PURIFYBODY

    mnk.set(34, new Build(
        title = "Tranquility",
        description = "When you are not affected by negative effects, not under feign death, nor are engaged by an enemy, and in a full group, you regenerate 2% of your total missing health per tick per rank. Lesser group sizes give reduced healing.",
        icon = "/builds/images/builds/icons/rb-mnk-tranquility.png"
    )) // RB_MNK_TRANQUILITY

    mnk.set(36, new Build(
        title = "Agile Feet",
        description = "Increases your chance to resist snares by 2% per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-agilefeet.png"
    )) // RB_MNK_AGILEFEET

    mnk.set(38, new Build(
        title = "Cowardly Stance",
        description = "Increases your movement speed by up to 10% based on missing health. Does not stack with movement buffs per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-cowardlystance.png"
    )) // RB_MNK_COWARDLYSTANCE

    mnk.set(40, new Build(
        title = "Thunderfoot",
        description = "Grants a passive spell block that returns when used after (level - 6) seconds per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-thunderfoot.png"
    )) // RB_MNK_THUNDERFOOT

    mnk.set(42, new Build(
        title = "Stoic Mind",
        description = "While your health is not below 2%, your resistance to spells is increased by 3% per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-stoicmind.png"
    )) // RB_MNK_STOICMIND

    mnk.set(44, new Build(
        title = "Grounded Essence",
        description = "Gives a 2% to resist an attempt at being summoned by an enemy per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-groundedessence.png"
    )) // RB_MNK_GROUNDEDESSENCE

    mnk.set(46, new Build(
        title = "Slow Heart Rate",
        description = "When you feign death with health below 2%, your feign death will cause all enemies to immediately forget you per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-slowheartrate.png"
    )) // RB_MNK_SLOWHEARTRATE

    mnk.set(49, new Build(
        title = "Mirror",
        description = "While your health is at 99% or higher, your chance to evade attacks is increased by 2% per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-mirror.png"
    )) // RB_MNK_MIRROR

    mnk.set(52, new Build(
        title = "Moving Mountains",
        description = "When you use the throw stone ability against an enemy lower level than you, you now knockback the enemy 1m per rank.",
        icon = "/builds/images/builds/icons/rb-mnk-movingmountains.png"
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

    brd.set(0, new Build(
        title = "Elemental Harmony",
        description = "Resistant songs (lvl 9) now grant an additional 10 resistance to each resistance type per rank.",
        icon = "/builds/images/builds/icons/rb-brd-elementalharmony.png"
    )) // RB_BRD_ELEMENTALHARMONY

    brd.set(2, new Build(
        title = "Healing Treble",
        description = "Healing effects on songs (lvl 6) are 10% more effective per rank.",
        icon = "/builds/images/builds/icons/rb-brd-healingtreble.png"
    )) // RB_BRD_HEALINGTREBLE

    brd.set(4, new Build(
        title = "Psalm of Norrath",
        description = "Damage shield effects on songs (lvl 25) are 20% more effective per rank.",
        icon = "/builds/images/builds/icons/rb-brd-psalmofnorrath.png"
    )) // RB_BRD_PSALMOFNORRATH

    brd.set(6, new Build(
        title = "Cassindra's Chorus",
        description = "Mana effects on songs (lvl 20) are 26% more effective per rank.",
        icon = "/builds/images/builds/icons/rb-brd-cassindraschorus.png"
    )) // RB_BRD_CASSINDRASCHORUS

    brd.set(8, new Build(
        title = "Shield of Songs",
        description = "Rune effects on songs (lvl 49) are 20% more effective per rank.",
        icon = "/builds/images/builds/icons/rb-brd-shieldofsongs.png"
    )) // RB_BRD_SHIELDOFSONGS

    brd.set(10, new Build(
        title = "Katta's Concord",
        description = "Katta's Song of Sword (lvl 39) now also gives a 100 proc chance to those with the buff that deals (level * 0.4) damage per rank.",
        icon = "/builds/images/builds/icons/rb-brd-kattasconcord.png"
    )) // RB_BRD_KATTASCONCORD

    brd.set(13, new Build(
        title = "Cassindra's Secret",
        description = "Enhances Cassindra's Elegy (lvl 44) to also give 3 mana per rank.",
        icon = "/builds/images/builds/icons/rb-brd-rizlonaspurpose.png"
    )) // RB_BRD_RIZLONASPURPOSE

    brd.set(16, new Build(
        title = "Kinsong",
        description = "Grants the Lesson of the Devoted AA, increasing spell crit chance for nukes and DoTs and melee accuracy for the group. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "/builds/images/builds/icons/rb-brd-kinsong.png"
    )) // RB_BRD_KINSONG

    brd.set(18, new Build(
        title = "Jonthon's Whistle",
        description = "Grants the bard a passive 300 mod proc that deals (level * 2 * 0.2) magic damage.",
        icon = "/builds/images/builds/icons/rb-brd-jonathonswhistle.png"
    )) // RB_BRD_JONATHONSWHISTLE

    brd.set(20, new Build(
        title = "Offhand Attack",
        description = "All offhand attacks (lvl 17) have 5% additional chance to hit per rank.",
        icon = "/builds/images/builds/icons/rb-brd-offhandattack.png"
    )) // RB_BRD_OFFHANDATTACK

    brd.set(22, new Build(
        title = "Innate Songblade",
        description = "Increases chance to hit and damage by 2% per rank.",
        icon = "/builds/images/builds/icons/rb-brd-innatesongblade.png"
    )) // RB_BRD_INNATESONGBLADE

    brd.set(24, new Build(
        title = "Warsong of Zek",
        description = "Increases bard's melee damage by 2% per rank.",
        icon = "/builds/images/builds/icons/rb-brd-warsongofzek.png"
    )) // RB_BRD_WARSONGOFZEK


    brd.set(26, new Build(
        title = "Dance of Blades",
        description = "Grants the Dance of Blades AA, increasing chance to dual wield and double attack as well as proc Bladewhirl at 20% effectiveness per rank.",
        icon = "/builds/images/builds/icons/rb-brd-danceofblades.png"
    )) // RB_BRD_DANCEOFBLADES

    brd.set(28, new Build(
        title = "Blade Dancer",
        description = "When a bard is attacked while in a group, increases chance to dodge by 2% per rank per player in group.",
        icon = "/builds/images/builds/icons/rb-brd-cacophony.png"
    )) // RB_BRD_BLADEDANCER

    brd.set(31, new Build(
        title = "Harmonic Affinity",
        description = "Increases proc chance modifier by 5% per rank.",
        icon = "/builds/images/builds/icons/rb-brd-harmonicaffinity.png"
    )) // RB_BRD_HARMONICAFFINITY

    brd.set(34, new Build(
        title = "Bard's Wish",
        description = "When rank 5, all beneficial songs last an additional tick.",
        icon = "/builds/images/builds/icons/rb-brd-bardswish.png"
    )) // RB_BRD_BARDSWISH

    brd.set(36, new Build(
        title = "Chant Cycle",
        description = "Chants with DoT effects now deal 1% more damage per ally in group per rank.",
        icon = "/builds/images/builds/icons/rb-brd-chantcycle.png"
    )) // RB_BRD_CHANTCYCLE

    brd.set(38, new Build(
        title = "Boastful Bellow",
        description = "Grants the Boastful Bellow AA which causes damage and briefly stuns the enemy, and lowers the reuse time by 2 seconds per rank.",
        icon = "/builds/images/builds/icons/rb-brd-boastfulbellow.png"
    )) // RB_BRD_BOASTFULBELLOW

    brd.set(40, new Build(
        title = "Selo's Crescendo",
        description = "Selo's movement songs now work indoors while you are equal or below level 12 per rank.",
        icon = "/builds/images/builds/icons/rb-brd-seloscrescendo.png"
    )) // RB_BRD_SELOSCRESCENDO

    brd.set(42, new Build(
        title = "Soothing Melody",
        description = "When the bard uses a song with a healing effect on themselves, reduces hate of their target by (heal amount * 2) per rank.",
        icon = "/builds/images/builds/icons/rb-brd-shieldofnotes.png"
    )) // RB_BRD_SOOTHINGMELODY

    brd.set(44, new Build(
        title = "Shout",
        description = "Increases range of PB AE songs by 20% per rank.",
        icon = "/builds/images/builds/icons/rb-brd-shout.png"
    )) // RB_BRD_SHOUT

    brd.set(46, new Build(
        title = "Siren's Song",
        description = "Charm songs (lvl 27) now cost 10% less mana per rank.",
        icon = "/builds/images/builds/icons/rb-brd-songofstone.png"
    )) // RB_BRD_SIRENSSONG

    brd.set(49, new Build(
        title = "Lingering Twilight",
        description = "Mesmerizing songs last 0.6 ticks longer per rank.",
        icon = "/builds/images/builds/icons/rb-brd-lingeringtwilight.png"
    )) // RB_BRD_LINGERINGTWILIGHT

    brd.set(52, new Build(
        title = "Fading Memories",
        description = "Grants the Fading Memories AA, allowing you to escape all aggressions towards you, By default this costs 50% of your max mana, reduced by 5% per rank.",
        icon = "/builds/images/builds/icons/rb-brd-fadingmemories.png"
    )) // RB_BRD_FADINGMEMORIES

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