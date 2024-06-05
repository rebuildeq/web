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
        icon = "images/builds/icons/rb-clr-believe.png"
    ))

    clr.set(2, new Build(
        title = "Ward of Vie",
        description = "All ward spells last an additional 20% more maximum hitpoints per rank.",
        icon = "images/builds/icons/rb-clr-wardofvie.png"
    ))

    clr.set(4, new Build(
        title = "Harken the Gods",
        description = "Yaulp now gives increased accuracy, attack, and mana regen per rank.",
        icon = "images/builds/icons/rb-clr-harkenthegods.png"
    ))


    clr.set(6, new Build(
        title = "Blessing of Haste",
        description = "All spell haste spells are 20% more effective on you per rank.",
        icon = "images/builds/icons/rb-clr-blessingofhaste.png"
    ))

    clr.set(8, new Build(
        title = "Divine Hammer",
        description = "The cleric gains a 60 mod proc that causes the Hand of the God spell, dealing 75-150 damage randomly.",
        icon = "images/builds/icons/rb-clr-divinehammer.png"
    ))

    clr.set(10, new Build(
        title = "Mark of Karn",
        description = "Healing an ally with a single target spell, while they target an enemy, will cause the target to be affected by the Mark of Karn, healing allies who hit the enemy, for 0 to 1 ticks randomly.",
        icon = "images/builds/icons/rb-clr-piouszealot.png"
    ))

    clr.set(13, new Build(
        title = "Augmented Retribution",
        description = "The cleric gains a 100 mod proc that deals a smite-like spell per rank.",
        icon = "images/builds/icons/rb-clr-augmentedretribution.png"
    ))

    clr.set(16, new Build(
        title = "Divine Avatar",
        description = "Passively grants a 10% increased chance to dodge as well as the Divine Avatar AA, allowing the cleric many statistic bonuses and longer duration per rank.",
        icon = "images/builds/icons/rb-clr-divineavatar.png"
    ))

    clr.set(18, new Build(
        title = "Instill Life",
        description = "When an ally is healed, there is a 2% chance to heal for a bonus of 2% the target's max health per rank.",
        icon = "images/builds/icons/rb-clr-instilllife.png"
    ))

    clr.set(20, new Build(
        title = "Divine Bash",
        description = "When the cleric uses bash, they heal for 4% of the cleric's max hp per rank to a group member with lowest health per rank. This does not heal the cleric.",
        icon = "images/builds/icons/rb-clr-divinebash.png"
    ))

    clr.set(22, new Build(
        title = "Intensity of the Resolute",
        description = "Courage now grants Cleric buffs<br>Rank 1: +Spell Haste<br>Rank 2: +AC<br>Rank 3: +HP<br>Rank 4: +Symbol<br>Rank 5: +Yaulp",
        icon = "images/builds/icons/rb-clr-intensifiedresolution.png"
    ))

    clr.set(24, new Build(
        title = "Celestial Regeneration",
        description = "Grants the Celestial Regeneration AA, restoring 36 hitpoints and 2 mana for 8 ticks per rank.",
        icon = "images/builds/icons/rb-clr-celestialbreeze.png"
    ))

    clr.set(26, new Build(
        title = "Divine Arbitration",
        description = "Grants the Divine Arbitration AA, balancing the damage each member of your group has taken, with a cooldown reduction of 30 seconds per rank.",
        icon = "images/builds/icons/rb-clr-divinearbitration.png"
    ))

    clr.set(28, new Build(
        title = "Divine Resurrection",
        description = "Grants the Divine Resurrection AA, reviving a fallen player. With a base of 24 hours, lowers cooldown by 4 hours per rank.",
        icon = "images/builds/icons/rb-clr-divineressurection.png"
    ))

    clr.set(31, new Build(
        title = "Promise",
        description = "All heals done by the cleric now have a 2% chance to have the mana cost reduced by 10% mana per rank.",
        icon = "images/builds/icons/rb-clr-promise.png"
    ))

    clr.set(34, new Build(
        title = "Harmonic Balance",
        description = "Grants the Lesson of the Devoted AA, balancing the group's hitpoints and healing them. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "images/builds/icons/rb-clr-harmonicbalance.png"
    ))

    clr.set(36, new Build(
        title = "Strike",
        description = "Increases the damage of all direct damage spells by 2% per rank.",
        icon = "images/builds/icons/rb-clr-strike.png"
    ))

    clr.set(38, new Build(
        title = "Ward of Rebuke",
        description = "Ward skills deal an additional 2% damage per rank and give 1% of the damage per rank back as mana.",
        icon = "images/builds/icons/rb-clr-wardofrebuke.png"
    ))

    clr.set(40, new Build(
        title = "Fist of the Gods",
        description = "Grants 1 bane damage versus undead per rank.",
        icon = "images/builds/icons/rb-clr-fistofthegods.png"
    ))

    clr.set(42, new Build(
        title = "Divine Retribution",
        description = "Grants the Divine Retribution AA with 20% per rank proc effectiveness.",
        icon = "images/builds/icons/rb-clr-divineretribution.png"
    ))

    clr.set(44, new Build(
        title = "Turn Undead",
        description = "Grants the Turn Undead AA dealing 500 damage per rank and a 1% chance per rank to deal 32000 damage.",
        icon = "images/builds/icons/rb-clr-turnundead.png"
    ))

    clr.set(46, new Build(
        title = "Exquisite Benediction",
        description = "While meleeing an undead creature, increases proc chance of all build procs by 20 per rank.",
        icon = "images/builds/icons/rb-clr-exquisitebenediction.png"
    ))

    clr.set(49, new Build(
        title = "Mark of Retribution",
        description = "Increases the damage of Mark of Retribution by 20% per rank.",
        icon = "images/builds/icons/rb-clr-markofretribution.png"
    ))

    clr.set(52, new Build(
        title = "Death Pact",
        description = "Healing an ally with a single target spell gives them a 0 to 1 tick duration random death pact buff per rank.",
        icon = "images/builds/icons/rb-clr-avatarsboon.png"
    ))
    builds.set(classCleric, clr)

    classInfo = new Map()
    classInfo.set("name", "Paladin")
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
        icon = "images/builds/icons/rb-pal-rodcetsgift.png"
    ))

    pal.set(2, new Build(
        title = "Hand of Piety",
        description = "Grants the Hand of Piety AA, allowing the user to heal the group for 2% of their max health per rank.",
        icon = "images/builds/icons/rb-pal-handofpiety.png"
    ))

    pal.set(4, new Build(
        title = "Instill Purpose",
        description = "Divine Purpose and Breath of Tunare now grant 20% more hitpoint regeneration per rank.",
        icon = "images/builds/icons/rb-pal-instillpurpose.png"
    ))

    pal.set(6, new Build(
        title = "Refreshing Breeze",
        description = "All healing except Hand of Piety give healed targets 0.5% of amount healed as mana per rank. Does not work when healing yourself.",
        icon = "images/builds/icons/rb-pal-refreshingbreeze.png"
    ))

    pal.set(8, new Build(
        title = "Brell's Blessing",
        description = "Courage now grants Paladin buffs<br>Rank 1: AC<br>Rank 2: HP Line 1<br>Rank 3: HP Symbol Line<br>Rank 4: HP Line 2 (Brell)<br>Rank 5: Double duration.",
        icon = "images/builds/icons/rb-pal-brellsblessing.png"
    ))

    pal.set(10, new Build(
        title = "Soul Cleansing",
        description = "Cleansing heal over time spells now have a 2% chance to cure an ailment per rank.",
        icon = "images/builds/icons/rb-pal-soulcleansing.png"
    ))

    pal.set(13, new Build(
        title = "Wave of Marr",
        description = "All wave-based group spells cost 10% less mana to cast per rank.",
        icon = "images/builds/icons/rb-pal-waveofmarr.png"
    ))

    pal.set(16, new Build(
        title = "Ward of Tunare",
        description = "Passively grants the Paladin a 6% bonus when healed by other allies per rank.",
        icon = "images/builds/icons/rb-pal-wardoftunare.png"
    ))

    pal.set(18, new Build(
        title = "Shield of Nife",
        description = "Grants an Undead-only damage shield that deals 7 damage per rank.",
        icon = "images/builds/icons/rb-pal-shieldofnife.png"
    ))

    pal.set(20, new Build(
        title = "Armor of Faith",
        description = "Damage taken from Undead is reduced by 2.5% per rank.",
        icon = "images/builds/icons/rb-pal-armoroffaith.png"
    ))

    pal.set(22, new Build(
        title = "Purification",
        description = "Grants the Purification AA, curing 1 detrimental effect on the paladin per rank.",
        icon = "images/builds/icons/rb-pal-purification.png"
    ))

    pal.set(24, new Build(
        title = "Holy Servant",
        description = "When a group member within 2m is attacked, 2.5% of the dealt damage is redirected to the paladin and is reduced by 2% per rank.",
        icon = "images/builds/icons/rb-pal-holyservant.png"
    ))

    pal.set(26, new Build(
        title = "Divine Stun",
        description = "Grants the Divine Stun AA, causing a target to be stunned and marked with divine anger. Any time the Paladin casts a heal spell on a group member, the marked enemy gains an additional 200 hatred per rank.",
        icon = "images/builds/icons/rb-pal-divinestun.png"
    ))

    pal.set(28, new Build(
        title = "Act of Valor",
        description = "Grants the Act of Valor AA, summoning a squire that will dutifully assist the Paladin, casting stuns and healing themself. Each rank increases his stats and power by 20% efficiency per rank.",
        icon = "images/builds/icons/rb-pal-actofvalor.png"
    ))

    pal.set(31, new Build(
        title = "Elixir of Might",
        description = "Instrument of Nife and Divine Might proc effects now heal the Paladin for 10% of damage dealt as well as gain 2 mana per rank.",
        icon = "images/builds/icons/rb-pal-elixirofmight.png"
    ))

    pal.set(34, new Build(
        title = "Flames of Redemption",
        description = "Grants the Lesson of the Devoted AA, causing flames of redemption buff improving healing effectiveness by 25% and the flames of redemption DD proc. 10 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "images/builds/icons/rb-pal-flamesofredemption.png"
    ))

    pal.set(36, new Build(
        title = "Zealot's Fervor",
        description = "When a heal is cast by the paladin on another character, up to 1 nearby enemies of the target are dealt 1% of the healing as damage per rank.",
        icon = "images/builds/icons/rb-pal-zealotsfervor.png"
    ))

    pal.set(38, new Build(
        title = "Knight's Advantage",
        description = "2 handed weapons deal an additional 5% damage per rank.",
        icon = "images/builds/icons/rb-pal-knightsadvantage.png"
    ))

    pal.set(40, new Build(
        title = "Chosen",
        description = "All self proc buffs deal 25% more damage per rank.",
        icon = "images/builds/icons/rb-pal-chosen.png"
    ))

    pal.set(42, new Build(
        title = "Purpose of Marr",
        description = "Valor of Marr now grants 10% additional attack speed per rank.",
        icon = "images/builds/icons/rb-pal-purposeofmarr.png"
    ))

    pal.set(44, new Build(
        title = "Flame of Light",
        description = "Flame of Light now deals an additional 20% damage per rank.",
        icon = "images/builds/icons/rb-pal-flameoflight.png"
    ))

    pal.set(46, new Build(
        title = "Dismiss Evil",
        description = "When attacking an evil creature, gives a 1% chance to critical hit per rank.",
        icon = "images/builds/icons/rb-pal-dismissevil.png"
    ))

    pal.set(49, new Build(
        title = "Frail",
        description = "Stun spells also cripple the target for 0 to 1 ticks per rank.",
        icon = "images/builds/icons/rb-pal-frail.png"
    ))

    pal.set(52, new Build(
        title = "Slayer",
        description = "Grants an ability to cleanse the target, similar to Slay Undead, but works on ALL creature types, up to the level of the paladin, with a 100 mod proc per rank.",
        icon = "images/builds/icons/rb-pal-slayer.png"
    ))
    builds.set(classPaladin, pal)

    classInfo = new Map()
    classInfo.set("name", "Druid")
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
        icon = "images/builds/icons/rb-dru-entrap.png"
    ))

    dru.set(2, new Build(
        title = "One With Nature",
        description = "Grants a passive where each time you are hit, 2% of the damage is converted into mana per rank.",
        icon = "images/builds/icons/rb-dru-treeform.png"
    ))

    dru.set(4, new Build(
        title = "Teleport Bind",
        description = "Grants the teleport bind AA. Costs 85% of maximum mana. Each additional rank decreases the mana cost by 15%.",
        icon = "images/builds/icons/rb-dru-teleportbind.png"
    ))

    dru.set(6, new Build(
        title = "Exodus",
        description = "Grants the Exodus AA, which has a base 5 second cast time. Each rank reduces casting time by 1 second.",
        icon = "images/builds/icons/rb-dru-exodus.png"
    ))

    dru.set(8, new Build(
        title = "Call of the Wild",
        description = "Grants the Call of the Wild AA, causing enemies nearby to be stunned. Each rank reduces recast time by 300 seconds.",
        icon = "images/builds/icons/rb-dru-callofthewild.png"
    ))

    dru.set(10, new Build(
        title = "Secondary Recall",
        description = "Grants Secondary Recall AA. Each rank reduces the recast time substantially, 1: 24hrs, 2: 18 hrs, 3: 12hrs, 4: 6hrs, 5: 3hrs.",
        icon = "images/builds/icons/rb-dru-secondaryrecall.png"
    ))

    dru.set(13, new Build(
        title = "Ring Affinity",
        description = "Ring spells cast 5% faster and cost 10% less mana.",
        icon = "images/builds/icons/rb-dru-ringaffinity.png"
    ))

    dru.set(16, new Build(
        title = "Dire Charm",
        description = "Charm animals from -10 to -5 of your level, based on rank. They get a pet-like adjusted stats, this is an experiment for future mage pet AI improvements.",
        icon = "images/builds/icons/rb-dru-direcharm.png"
    ))

    dru.set(18, new Build(
        title = "Regeneration",
        description = "Grants the druid an innate hp regeneration of Level * 0.2 hitpoints (minimum 2) per tick, a self only damage shield of 2, as well as any duration regeneration spells casted by the druid give 20% additional hitpoint regeneration per tick while in the same zone as the druid per rank.",
        icon = "images/builds/icons/rb-dru-regeneration.png"
    ))

    dru.set(20, new Build(
        title = "Convergence of Spirits",
        description = "Grants the Convergence of Spirits AA, giving a heal over time that heals for 0.5% of the target's max health per tick for 6 seconds. This also causes normal heals to be boosted by 5% per rank.",
        icon = "images/builds/icons/rb-dru-convergenceofspirits.png"
    ))

    dru.set(22, new Build(
        title = "Lifeflow",
        description = "While an ally has Covergence of Spirits or Nature's Boon buff on them, they are granted a 1% death save chance, healing when triggered for 8000 hitpoints per rank.",
        icon = "images/builds/icons/rb-dru-lifeflow.png"
    ))

    dru.set(24, new Build(
        title = "Spirit of the Wood",
        description = "Grants the Spirit of the Wood AA, which casts buffs scaled based on your level and the target's level.<br>Rank 1: STR<br>Rank 2: HP Regen<br>Rank 3: HP<br>Rank 4: Damage Shield<br>Rank 5: Doubles Duration",
        icon = "images/builds/icons/rb-dru-spiritofthewood.png"
    ))

    dru.set(26, new Build(
        title = "Spiritual Awakening",
        description = "The druid gains a 300 mod proc that deals (level * 1.5 * 0.2) magic damage and melee hits tap 1 mana from the target.",
        icon = "images/builds/icons/rb-dru-spiritualawakening.png"
    ))

    dru.set(28, new Build(
        title = "Nature's Boon",
        description = "Grants the Nature's Boon AA, where the target receives a buff that lasts 84 seconds, duration reduced by 12 seconds due to rank. When the buff fades, the target is healed for 20% of the druid's max mana. If Nature's Boon is removed early, it will heal for a portion based on duration buff lasted. This also causes normal heals to be boosted by 5% per rank.",
        icon = "images/builds/icons/rb-dru-naturesboon.png"
    ))

    dru.set(31, new Build(
        title = "Nature's Whisper",
        description = "While a target is affected by Nature's Boon or Convergence of Spirits, the druid as well as the target regain 2% of any healing done from these spells as mana per rank.",
        icon = "images/builds/icons/rb-dru-natureswhisper.png"
    ))

    dru.set(34, new Build(
        title = "Nature's Guardian",
        description = "Grants the Nature's Guardian AA, where 3% of the caster's max mana is infused by nature and can be transferred to a target or to the caster per rank.",
        icon = "images/builds/icons/rb-dru-naturesguardian.png"
    ))

    dru.set(36, new Build(
        title = "Intensity",
        description = "When an enemy is affected by a DoT, it deals 0.7% more damage for each ally in group.",
        icon = "images/builds/icons/rb-dru-intensity.png"
    ))

    dru.set(38, new Build(
        title = "Lingering Pain",
        description = "When a direct spell is casted, a 0 to 1 tick duration DoT will also affect the target if the spell casted was obtained within 15 levels of your current level per rank.",
        icon = "images/builds/icons/rb-dru-lingeringpain.png"
    ))

    dru.set(40, new Build(
        title = "Focused Swarm",
        description = "When standing nearby a mob, DoTs now deal 1% more damage for each ally in group. This damage bonus reduces by 10% for every 20m you're away from an enemy per rank.",
        icon = "images/builds/icons/rb-dru-focusedswarm.png"
    ))

    dru.set(42, new Build(
        title = "Blessing of Ro",
        description = "All Ro debuffs now spread to 0 to 1 additional enemies within 5m of an affected target if they are on the aggro list of the druid.",
        icon = "images/builds/icons/rb-dru-blessingofro.png"
    ))

    dru.set(44, new Build(
        title = "Whirling Disaster",
        description = "Direct Damage spells now also stun for (0 to 1/2) seconds if the target is at least 5 levels below the druid.",
        icon = "images/builds/icons/rb-dru-whirlingdisaster.png"
    ))

    dru.set(46, new Build(
        title = "Stinging Affliction",
        description = "DoTs and Direct Damage spells have a 1% chance to critical hit per rank.",
        icon = "images/builds/icons/rb-dru-stingingaffliction.png"
    ))

    dru.set(49, new Build(
        title = "Deep Roots",
        description = "When a root wears off, there is a 3% chance the target will be snared if it is not already per rank.",
        icon = "images/builds/icons/rb-dru-deeproots.png"
    ))

    dru.set(52, new Build(
        title = "Nature's Blight",
        description = "Grants the Lesson of the Devoted AA, causing the target to take 5% increased spell damage. 5 minute recast time, each rank reduces recast by 30 seconds.",
        icon = "images/builds/icons/rb-dru-naturesblight.png"
    ))

    builds.set(classDruid, dru)
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
          ${skill.desc}
        </div>
        <div class="points" style="visibility: visible;">0/5</div>
      </div>
    `;
  }

function createTierElement(classID, treeID, level, startId) {
    let tierContent = '';
    let pushClass = '';

    for (let i = 0; i < 3; i++) {
      const skillElement = createSkillElement(classID, startId + i+((treeID-1)*17), pushClass);
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
    console.log(style)
    html += `
    <div class="totalPoints">
        <span class="totalPoints">0</span>
    </div>
    <legend class="build-legend">${style}</legend>
    `;

    return html
}

initBuilds()