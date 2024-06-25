---
title: "Affinity"
summary: "Learn about the affinity system in RebuildEQ"
---

The affinity system in RebuildEQ impacts your incoming and outgoing damage with multipliers

## Strength and Weakness

If you hover over your resists in game, you can see strengths and weaknesses as well for quick reference.

{{<mermaid>}}
graph LR;
    Spirit --> Water;
    Water --> Fire;
    Fire --> Earth;
    Earth --> Air;
    Air --> Spirit;

    classDef spiritClass fill:#FF0000,stroke:#333,stroke-width:2px;
    classDef waterClass fill:#0033BB,stroke:#333,stroke-width:2px;
    classDef fireClass fill:#FFFF00,stroke:#333,stroke-width:2px;
    classDef earthClass fill:#008000,stroke:#333,stroke-width:2px;
    classDef airClass fill:#FFFFFF,stroke:#333,stroke-width:2px;

    class Spirit spiritClass;
    class Water waterClass;
    class Fire fireClass;
    class Earth earthClass;
    class Air airClass;
{{</mermaid>}}

- Spirit is strong to water, weak to air
- Water is strong to fire, weak to spirit
- Fire is strong to earth, weak to water
- Earth is strong to air, weak to fire
- Air is strong to spirit, weak to earth
- Every other mixture at this time has no effect

Strong currently implies a 50% increase in damage, while weak implies a 50% decrease in damage.

## Spells

Offensive spells have their own affinity, you can read their descriptions in game to learn them or look at the [spells](/spells) page for more information

Augments can modify affinity for offensive spells based on their tags, also found in a spell description

## Deities

- Your deity choice impacts what affinity you deal with melee, as well as what receiving damage is converted to
- There are quests to change your deity, but they are difficult and expensive
- There are augments available to change both your melee, as well as receiving damage affinity

Deity|Affinity
--|--|
Innoruuk|Earth

## Named Mobs

- NPCs always use the same affinity for both melee and receiving damage
- NPCs have tags when you consider them for affinity
- Logic for what affinity they use is based on:
    - If they're a named, they may have a unique affinity to them. Known NPCs are listed below
    - If they're a certain special race, such as water elemental, you can assume their affinity will always be water, even if in a fire zone
    - If neither above apply, they will be what the rest of the zone is aligned to

Name|Affinity
--|--|
Trakanon|Earth

## Zone Affinity

This is a fallback logic for non-special race or named affinities


Zone|Affinity
--|--|
ecommons|Water