export const basicItems = {
  bfsword: {
    name: "B.F. Sword",
    stats: "+15 Attack Damage",
    effect: "",
    assetLocation: "/images/items/bfsword.png",
    components: []
  },
  chainvest: {
    name: "Chain Vest",
    stats: "+25 Armor",
    effect: "",
    assetLocation: "/images/items/chainvest.png",
    components: []
  },
  giantsbelt: {
    name: "Giants Belt",
    stats: "+20% Spell Damage",
    effect: "",
    assetLocation: "/images/items/giantsbelt.png",
    components: []
  },
  needlesslylargerod: {
    name: "Needlessly Large Rod",
    stats: "+20% Spell Damage",
    effect: "",
    assetLocation: "/images/items/needlesslylargerod.png",
    components: []
  },
  negatroncloak: {
    name: "Negatron Cloak",
    stats: "+25 Magic Resist",
    effect: "",
    assetLocation: "/images/items/negatroncloak.png",
    components: []
  },
  recurvebow: {
    name: "Recurve Bow",
    stats: "+15% Attack Speed",
    effect: "",
    assetLocation: "/images/items/recurvebow.png",
    components: []
  },
  tearofthegoddess: {
    name: "Tear of the Goddess",
    stats: "+20 Starting Mana",
    effect: "",
    assetLocation: "/images/items/tearofthegoddess.png",
    components: []
  },
  sparringgloves: {
    name: "Sparring Glove",
    stats: "+10% Dodge, +10% Crit Chance",
    effect: "",
    assetLocation: "/images/items/sparringglove.png",
    components: []
  },
  spatula: {
    name: "Spatula",
    stats: "???",
    effect: "",
    assetLocation: "/images/items/spatula.png",
    components: []
  }
};

export const items = [
  { //1
    name: "B.F. Sword",
    stats: "+15 Attack Damage",
    effect: "",
    assetLocation: "/images/items/bfsword.png",
    components: []
  },
  {//2
    name: "Chain Vest",
    stats: "+25 Armor",
    effect: "",
    assetLocation: "/images/items/chainvest.png",
    components: []
  },
  {//3
    name: "Giants Belt",
    stats: "+20% Spell Damage",
    effect: "",
    assetLocation: "/images/items/giantsbelt.png",
    components: []
  },
  {//4
    name: "Needlessly Large Rod",
    stats: "+20% Spell Damage",
    effect: "",
    assetLocation: "/images/items/needlesslylargerod.png",
    components: []
  },
  {//5
    name: "Negatron Cloak",
    stats: "+25 Magic Resist",
    effect: "",
    assetLocation: "/images/items/negatroncloak.png",
    components: []
  },
  {//6
    name: "Recurve Bow",
    stats: "+15% Attack Speed",
    effect: "",
    assetLocation: "/images/items/recurvebow.png",
    components: []
  },
  {//7
    name: "Tear of the Goddess",
    stats: "+20 Starting Mana",
    effect: "",
    assetLocation: "/images/items/tearofthegoddess.png",
    components: []
  },
  {//8
    name: "Sparring Glove",
    stats: "+10% Dodge, +10% Crit Chance",
    effect: "",
    assetLocation: "/images/items/sparringglove.png",
    components: []
  },
  {//9
    name: "Spatula",
    stats: "???",
    effect: "",
    assetLocation: "/images/items/spatula.png",
    components: []
  },
  {//10
    name: "Deathblade",
    stats: "+30 Attack Damage",
    effect: "On kill or assist, gain +15 attack damage, stacks infinitely",
    assetLocation: "/images/items/deathblade.png",
    components: [basicItems.bfsword, basicItems.bfsword]
  },
  {//11
    name: "Guardian Angel",
    stats: "+15 Attack Damage, +25 Armor",
    effect: "Revives champ with 400 HP after 2 seconds",
    assetLocation: "/images/items/guardianangel.png",
    components: [basicItems.bfsword, basicItems.chainvest]
  },
  {//12
    name: "Zeke's Herald",
    stats: "",
    effect: "",
    assetLocation: "/images/items/zekesherald.png",
    components: []
  },
  {//13
    name: "Hextech Gunblade",
    stats: "",
    effect: "",
    assetLocation: "/images/items/hextechgunblade.png",
    components: []
  },
  {//14
    name: "Bloodthirster",
    stats: "",
    effect: "",
    assetLocation: "/images/items/bloodthirster.png",
    components: []
  },
  {//15
    name: "Giant Slayer",
    stats: "",
    effect: "",
    assetLocation: "/images/items/giantslayer.png",
    components: []
  },
  {//16
    name: "Spear of Shojon",
    stats: "",
    effect: "",
    assetLocation: "/images/items/spearofshojin.png",
    components: []
  },
  {//17
    name: "Infinity Edge",
    stats: "",
    effect: "",
    assetLocation: "/images/items/infinityedge.png",
    components: []
  },
  {//18
    name: "Yomuu's Ghostblade",
    stats: "",
    effect: "",
    assetLocation: "/images/items/yomuusghostblade.png",
    components: []
  },
  {//19
    name: "Thornmail",
    stats: "",
    effect: "",
    assetLocation: "/images/items/thornmail.png",
    components: []
  },
  {//20
    name: "Red Buff",
    stats: "",
    effect: "",
    assetLocation: "/images/items/redbuff.png",
    components: []
  },
  {
    name: "Locket of the Iron Solari",
    stats: "",
    effect: "",
    assetLocation: "/images/items/locketoftheironsolari.png",
    components: []
  },
  {
    name: "Swordbreaker",
    stats: "",
    effect: "",
    assetLocation: "/images/items/swordbreaker.png",
    components: []
  },
  {
    name: "Phantom Dancer",
    stats: "",
    effect: "",
    assetLocation: "/images/items/phantomdancer.png",
    components: []
  },
  {
    name: "Frozen Heart",
    stats: "",
    effect: "",
    assetLocation: "/images/items/frozenheart.png",
    components: []
  },
  {
    name: "Iceborn Gauntlet",
    stats: "",
    effect: "",
    assetLocation: "/images/items/iceborngauntlet.png",
    components: []
  },
  {
    name: "Warden's Mail",
    stats: "",
    effect: "",
    assetLocation: "/images/items/wardensmail.png",
    components: []
  },
  {
    name: "Warmogs Armor",
    stats: "",
    effect: "",
    assetLocation: "/images/items/warmogsarmor.png",
    components: []
  },
  {
    name: "Morellonomicon",
    stats: "",
    effect: "",
    assetLocation: "/images/items/morellonomicon.png",
    components: []
  },
  {
    name: "Zephyr",
    stats: "",
    effect: "",
    assetLocation: "/images/items/zephyr.png",
    components: []
  },
  {
    name: "Titanic Hydra",
    stats: "",
    effect: "",
    assetLocation: "/images/items/titanichydra.png",
    components: []
  },
  {
    name: "Redemption",
    stats: "",
    effect: "",
    assetLocation: "/images/items/redemption.png",
    components: []
  },
  {
    name: "Trap Claw",
    stats: "",
    effect: "",
    assetLocation: "/images/items/trapclaw.png",
    components: []
  },
  {
    name: "Frozen Mallet",
    stats: "",
    effect: "",
    assetLocation: "/images/items/frozenmallet.png",
    components: []
  },
  {
    name: "Rabadon's Deathcap",
    stats: "",
    effect: "",
    assetLocation: "/images/items/rabadonsdeathcap.png",
    components: []
  },
  {
    name: "Ionic Spark",
    stats: "",
    effect: "",
    assetLocation: "/images/items/ionicspark.png",
    components: []
  },
  {
    name: "Guinsoo's Rageblade",
    stats: "",
    effect: "",
    assetLocation: "/images/items/guinsoosrageblade.png",
    components: []
  },
  {
    name: "Luden's Echo",
    stats: "",
    effect: "",
    assetLocation: "/images/items/ludensecho.png",
    components: []
  },
  {
    name: "Jeweled Gauntlet",
    stats: "",
    effect: "",
    assetLocation: "/images/items/jeweledgauntlet.png",
    components: []
  },
  {
    name: "Inferno Cinder",
    stats: "",
    effect: "",
    assetLocation: "/images/items/infernocinder.png",
    components: []
  },
  {
    name: "Dragon's Claw",
    stats: "",
    effect: "",
    assetLocation: "/images/items/dragonsclaw.png",
    components: []
  },
  {
    name: "Runaan's Hurricane",
    stats: "",
    effect: "",
    assetLocation: "/images/items/runaanshurricane.png",
    components: []
  },
  {
    name: "Hush",
    stats: "",
    effect: "",
    assetLocation: "/images/items/hush.png",
    components: []
  },
  {
    name: "Quicksilver",
    stats: "",
    effect: "",
    assetLocation: "/images/items/quicksilver.png",
    components: []
  },
  {
    name: "Talisman of Light",
    stats: "",
    effect: "",
    assetLocation: "/images/items/talismanoflight.png",
    components: []
  },
  {
    name: "Rapid Firecannon",
    stats: "",
    effect: "",
    assetLocation: "/images/items/rapidfirecannon.png",
    components: []
  },
  {
    name: "Statikk Shiv",
    stats: "",
    effect: "",
    assetLocation: "/images/items/statikkshiv.png",
    components: []
  },
  {
    name: "Repeating Crossbow",
    stats: "",
    effect: "",
    assetLocation: "/images/items/repeatingcrossbow.png",
    components: []
  },
  {
    name: "Blade of the Ruined King",
    stats: "",
    effect: "",
    assetLocation: "/images/items/bladeoftheruinedking.png",
    components: []
  },
  {
    name: "Seraph's Embrace",
    stats: "",
    effect: "",
    assetLocation: "/images/items/seraphsembrace.png",
    components: []
  },
  {
    name: "Hand of Justice",
    stats: "",
    effect: "",
    assetLocation: "/images/items/handofjustice.png",
    components: []
  },
  {
    name: "Mage's Cap",
    stats: "",
    effect: "",
    assetLocation: "/images/items/magescap.png",
    components: []
  },
  {
    name: "Thief's Glove",
    stats: "",
    effect: "",
    assetLocation: "/images/items/thiefsglove.png",
    components: []
  },
  {
    name: "Berserker Axe",
    stats: "",
    effect: "",
    assetLocation: "/images/items/berserkeraxe.png",
    components: []
  },
  {
    name: "Force of Nature",
    stats: "",
    effect: "",
    assetLocation: "/images/items/forceofnature.png",
    components: []
  }
];
