const objects = {
  background: [
    { text: "Tiles", color: "4F564D" },
    { text: "Tile outline", color: "4F564D" },
    { text: "Background", color: "8C9487", sprite: "outlineTester.png", outline: true },
    { text: "?", color: "8C9487" },
    { text: "?", color: "8C9487" },
    { text: "Entity outline", color: "8C9487" }
  ],

  editor: [
    { text: "Regular grid lines", color: "A6AAA3", sprite: "editor0.png" },
    { text: "?", color: "FFFFFF" },
    { text: "Fine grid lines", color: "949B8F", sprite: "editor2.png" },
    { text: "Rectangular tile selection and crosshair", color: "FFFFFF" },
    { text: "Direction arrows for entity movement", color: "FBC902" },
    { text: "Door-switch connections", color: "FFFFFF", sprite: "editor5.png" },
    { text: "Circular entity selection", color: "000000" },
    { text: "Cut mode outline", color: "FFFFFF" },
    { text: "Selected tile", color: "C2CEB1" },
    { text: "?", color: "323323" }
  ],

  explosions: [
    { text: "Light thin particles", color: "ECFFE2" },
    { text: "Light dust", color: "4F564D" },
    { text: "Heavy dust", color: "778073" },
    { text: "Blood", color: "910A46" }
  ],

  fxDroneZap: [
    { text: "Ray 1", color: "B9FFFF" },
    { text: "Ray 2", color: "FFFFFF" }
  ],

  fxFloorguardZap: [
    { text: "Ray 1", color: "B9FFFF" },
    { text: "Ray 2", color: "FFFFFF" }
  ],

  fxNinja: [
    { text: "Jumping dust", color: "454944" },
    { text: "Falling dust", color: "798076" }
  ],

  headbands: [
    { text: "Headband, standard", color: "9A3763" },
    { text: "?", color: "FFFFFF" },
    { text: "Headband, x type. \"Ready\" for player 1 in race mode.", color: "9100A4" },
    { text: "?", color: "8B9CF7" },
    { text: "Headband, y type", color: "B9C3B2" },
    { text: "?", color: "000000" },
    { text: "Headband, z type", color: "6B7367" },
    { text: "?", color: "FFFFFF" },
    { text: "?", color: "EDDC54" },
    { text: "?", color: "FDF4B7" },
    { text: "?", color: "000000" },
    { text: "?", color: "5068E4" },
    { text: "?", color: "8B9CF7" },
    { text: "?", color: "FFFFFF" },
    { text: "?", color: "D0306C" },
    { text: "?", color: "EA6899" },
    { text: "?", color: "FFFFFF" }
  ],

  menu: [
    { text: "General UI background.", color: "323323" },
    { text: "Leaderboard: Background. Editor: Side panel background (darkened later).", color: "889382" },
    { text: "Leaderboard: Other player's scores, your rank (see 14, 17). Also, race options text. Editor side panel: Unselected text.", color: "323323" },
    { text: "\"Color / Music\" and \"Social\" menu panels background.", color: "666E62" },
    { text: "Main menu: Text, unselected (see 11). Help: Directional arrows. Also, uncompleted challenges (both requirements text and brackets) while playing the level (see 11, also see timeBarRace 1 and 2).", color: "ECFFDF" },
    { text: "Uncompleted episode background (see 8). Profile: Uncompleted episode. Editor: Level name when not being played.", color: "CBDCC1" },
    { text: "?", color: "323323" },
    { text: "Completed episode background (see 6). Profile: Completed episode.", color: "666E62" },
    { text: "Episode tabs background, unselected (see 13).", color: "889382" },
    { text: "Episode box outline (see 33).", color: "737C6E" },
    { text: "Main menu: Text, selected (see 5). Logo color. Cursor color. Also, completed challenges (brackets) when playng the level (see 5, also see timeBarRace 1 and 2).", color: "FECC04" },
    { text: "?", color: "FECC04" },
    { text: "Episode tabs background, selected (see 9).", color: "FECC04" },
    { text: "Leaderboards: Other player's names, your score (see 3, 17). Profile: Header text in side panel (see 15, 16).", color: "000000" },
    { text: "Profile: Numbers and some text (see 14, 16). Options: Unselected text, scrollbar triangles, upper dividing line. Credits: Regular text. Story: Upper dividing line.", color: "666E62" },
    { text: "Profile: Remaining text and percentages (see 14, 15). Story: Text. Options: Selected text, little bar in scrollbar. Credits: Header text.", color: "ECFFDF" },
    { text: "Leaderboards: Other player's ranks, your name (see 3, 14). Also, messages that appear in the leaderboard (\"Server error\", \"Player 2 needed for score submission\", race options header, etc). Profile: Death count bars. Editor: Header text in side panel, messages when publishing, naming, etc.", color: "ECFFDF" },
    { text: "\"Color / Music\" and \"Social\" menus header text (see 30). The other text is the same, but more transparent.", color: "323323" },
    { text: "Pause menu and editor panels unselected text (see 20).", color: "323323" },
    { text: "Pause menu and editor panels selected text (see 19).", color: "CBDCC1" },
    { text: "Pause menu and editor panels background.", color: "8C9487" },
    { text: "Pause menu and editor panels outline.", color: "4F564D" },
    { text: "Outline for selected episode / level / panel. Separator between level name and info. Level loading spiral. Scroll bar and its triangle in level view and in the editor level list. Also \"Server error\" when loading userlevels.", color: "ECFFDF" },
    { text: "Uncompleted episode text (see 31).", color: "000000" },
    { text: "Bottom info text (key controls, \"paint tiles\" in editor, etc.).", color: "889382" },
    { text: "Leaderboard tabs background, unselected (see 27).", color: "889382" },
    { text: "Leaderboard tabs background, selected (see 26). Also leaderboard tabs text, selected (see 28).", color: "FECC04" },
    { text: "Leaderboard tabs text, unselected (see 27).", color: "000000" },
    { text: "Level name when playing.", color: "ECFFDF" },
    { text: "\"Color / Music\" selected option; \"Social\" menu option names (see 18).", color: "FECC04" },
    { text: "Completed episode text (see 24).", color: "ECFFDF" },
    { text: "Tabs text (episodes and userlevels), unselected (see 34).", color: "000000" },
    { text: "Leaderboard entry selection box (see 10).", color: "000000" },
    { text: "Tabs text (episodes and userlevels), selected (see 32). Sub-tab text, selected (e.g. \"By Date\" in the userlevels) (see 38).", color: "323323" },
    { text: "Soundtrack name.", color: "CBDCC1" },
    { text: "Level information text (level name, author, success rate...). Also, upper big header text in every submenu. Game messages: \"Press X to start replay\", \"Success!\", \"Oops!\", \"Press X to continue\", \"Press X to try again\", \"submitting...\", etc.", color: "ECFFDF" },
    { text: "?", color: "C2CEB1" },
    { text: "Sub-tab text, unselected (e.g. \"By Date\" in the userlevels) (see 34).", color: "FECC04" },
    { text: "Text after level / episode completion (\"Your Global Rank\", level times, etc.).", color: "C2CEB1" },
    { text: "?", color: "FF00FF" },
    { text: "Help menu header text.", color: "FECC04" },
    { text: "Help menu text.", color: "ECFFDF" }
  ],

  timeBar: [
    { text: "Background of the bar with the time left.", color: "FECC04" },
    { text: "Hardcore timebar portion that shows extra time on completion.", color: "DF9B43" },
    { text: "Background of the rest of the bar.", color: "707A6B" },
    { text: "?", color: "707A6B" },
    { text: "Numbers.", color: "444B43" },
    { text: "?", color: "444B43" },
    { text: "Little triangle that separates both sections of the time bar.", color: "C2CEB1" },
    { text: "?", color: "C2CEB1" }
  ],

  timeBarRace: [
    { text: "Text \"Player 2/3/4 press X\" in the menu. Uncompleted challenges (both requirements text and brackets) in level view (see menu 5 and 11).", color: "889382" },
    { text: "Text \"Player 1\" in the menu (the \"ready\" is controlled by #3 in headbands.tga). Completed challenges (brackets) in level view (see menu 5 and 11).", color: "EDDC54" },
    { text: "Text \"Player 2 ready\" in the menu.", color: "FFFFFF" },
    { text: "Text \"Player 3 ready\" in the menu.", color: "8B9CF7" },
    { text: "Text \"Player 4 ready\" in the menu.", color: "EA6899" },
    { text: "Player 1 timebar outline.", color: "5068E4" },
    { text: "Player 1 timebar background.", color: "8B9CF7" },
    { text: "Player 1 timebar numbers.", color: "FFFFFF" },
    { text: "Player 2 timebar outline.", color: "000000" },
    { text: "Player 2 timebar background.", color: "7C7B7B" },
    { text: "Player 2 timebar numbers.", color: "FFFFFF" },
    { text: "Player 3 timebar outline.", color: "EDDC54" },
    { text: "Player 3 timebar background.", color: "FDF4B7" },
    { text: "Player 3 timebar numbers.", color: "000000" },
    { text: "Player 4 timebar outline.", color: "D0306C" },
    { text: "Player 4 timebar background.", color: "EA6899" },
    { text: "Player 4 timebar numbers.", color: "FFFFFF" }
  ],

  ninja: [
    { text: "Ninja 1. Also, replay inputs.", color: "000000", sprite: "ninja0.png", outline: true },
    { text: "Ninja 2.", color: "EDDC54", sprite: "ninja1.png", outline: true },
    { text: "Ninja 3.", color: "3F1CB2", sprite: "ninja2.png", outline: true },
    { text: "Ninja 4.", color: "910A46", sprite: "ninja3.png", outline: true }
  ],

  entityMine: [
    { text: "Mine exterior.", color: "910A46", sprite: "entityMine0.png", outline: true },
    { text: "Mine interior.", color: "9A3763", sprite: "entityMine1.png" },
    { text: "Toggle mine (untoggled).", color: "6B7367", sprite: "entityMine2.png", outline: true },
    { text: "Toggle mine (toggling).", color: "000000", sprite: "entityMine3.png", outline: true }
  ],

  entityGold: [
    { text: "Gold interior.", color: "EDDC54", sprite: "entityGold0.png" },
    { text: "Gold exterior.", color: "DF9B43", sprite: "entityGold1.png", outline: true },
    { text: "Gold shine.", color: "FFFEFB", sprite: "entityGold2.png" }
  ],

  entityDoorExit: [
    { text: "Closed exit door interior.", color: "B9C3B2", sprite: "entityDoorExit0.png" },
    { text: "Closed exit door border.", color: "323323", sprite: "entityDoorExit1.png", outline: true },
    { text: "Opened exit door interior.", color: "EDDC54", sprite: "entityDoorExit2.png" },
    { text: "Opened exit door details.", color: "DF9B43", sprite: "entityDoorExit3.png" },
    { text: "Opened exit door interior after challenge.", color: "DF9B43", sprite: "entityDoorExit4.png" },
    { text: "Opened exit door details after challenge.", color: "EDDC54", sprite: "entityDoorExit5.png" },
    { text: "[!?] text in episode view.", color: "EDDC54", sprite: "entityDoorExit6.png" },
    { text: "[!?] text in level view.", color: "EDDC54", sprite: "entityDoorExit7.png" }
  ],

  entityDoorExitSwitch: [
    { text: "Exit switch border (untoggled).", color: "323323", sprite: "entityDoorExitSwitch0.png", outline: true },
    { text: "Exit switch border (toggled).", color: "C2CEB1", sprite: "entityDoorExitSwitch1.png", outline: true },
    { text: "Exit switch center.", color: "FFFFFF", sprite: "entityDoorExitSwitch2.png" },
    { text: "Exit switch background (untoggled).", color: "8C9487", sprite: "entityDoorExitSwitch3.png" },
    { text: "Exit switch background (toggled).", color: "8C9487", sprite: "entityDoorExitSwitch4.png" }
  ],

  entityDoorRegular: [
    { text: "Regular door.", color: "C2CEB1", sprite: "05-0.png" }
  ],

  entityDoorLocked: [
    { text: "Locked door bar.", color: "323323", sprite: "06-0.png" },
    { text: "Locked door center.", color: "C2CEB1", sprite: "06-1.png" },
    { text: "Untoggled switch button.", color: "000000", sprite: "07-0.png" },
    { text: "Toggled switch button.", color: "323323", sprite: "07-0b.png" },
    { text: "Untoggled switch border.", color: "323323", sprite: "07-1.png" },
    { text: "Toggled switch border.", color: "798076", sprite: "07-1b.png" },
    { text: "Toggled switch background.", color: "8C9487", sprite: "07-4b.png" },
    { text: "Untoggled switch background.", color: "8C9487", sprite: "07-4.png" }
  ],

  entityDoorTrap: [
    { text: "Trap door bar.", color: "323323", sprite: "08-1.png" },
    { text: "Trap door bulges.", color: "C2CEB1", sprite: "08-2.png" },
    { text: "?", color: "323323" },
    { text: "?", color: "323323" },
    { text: "Untoggled switch border.", color: "323323", sprite: "09-2.png" },
    { text: "Toggled switch border.", color: "798076", sprite: "09-2b.png" },
    { text: "Untoggled switch background.", color: "8C9487", sprite: "09-4.png" },
    { text: "Toggled switch background.", color: "8C9487", sprite: "09-4b.png" }
  ],

  entityLaunchPad: [
    { text: "Launchpad long pad.", color: "999999", sprite: "0A-0.png" },
    { text: "Launchpad short pad.", color: "000000", sprite: "0A-1.png" }
  ],

  entityOneWayPlatform: [
    { text: "Oneway platform long platform.", color: "3C413B", sprite: "0B-0.png" },
    { text: "Oneway platform short platform.", color: "6D7668", sprite: "0B-1.png" }
  ],

  entityDroneChaingun: [
    { text: "Chaingun drone background.", color: "707070", sprite: "0C-0.png" },
    { text: "Chaingun drone border, chaingun bullets.", color: "000000", sprite: "0C-1.png" }
  ],

  entityDroneLaser: [
    { text: "Laser drone interior, firing. Also, laser 1.", color: "910A46" },
    { text: "Laser drone laser 2.", color: "670732" },
    { text: "Laser drone border.", color: "000000", sprite: "0D-2.png" },
    { text: "Laser drone aiming line.", color: "910A46" }
  ],

  entityDroneZap: [
    { text: "Zap drone and micro drone background.", color: "48C1C8", sprite: "0E-0.png" },
    { text: "Zap drone and micro drone border.", color: "202020", sprite: "0E-1.png" }
  ],

  entityDroneChaser: [
    { text: "Chaser drone background.", color: "48C1C8", sprite: "0F-0.png" },
    { text: "Chaser drone border.", color: "202020", sprite: "0F-1.png" }
  ],

  entityFloorGuard: [
    { text: "Floorguard main color.", color: "000000", sprite: "10-0.png" },
    { text: "Floorguard eye.", color: "910A46", sprite: "10-1.png" }
  ],

  entityBounceBlock: [
    { text: "Bounceblock interior.", color: "798076", sprite: "11-0.png" },
    { text: "Bounceblock border.", color: "000000", sprite: "11-1.png" }
  ],

  entityRocket: [
    { text: "Rocket turret center.", color: "910A46", sprite: "12-0.png" },
    { text: "Rocket turret border.", color: "000000", sprite: "12-1.png" },
    { text: "Rocket color.", color: "000000" },
    { text: "Rocket fumes.", color: "778073" }
  ],

  entityTurret: [
    { text: "Gauss turret interior.", color: "910A46", sprite: "13-0.png"  },
    { text: "Gauss turret border.", color: "000000", sprite: "13-1.png"  },
    { text: "Gauss turret aiming cross.", color: "000000"  },
    { text: "Gauss turret bullet.", color: "910A46" },
    { text: "Gauss turret squiggly lines.", color: "000000" }
  ],

  entityThwomp: [
    { text: "Thwump border.", color: "4D4D4D", sprite: "entityThwomp0.png"},
    { text: "Thwump interior.", color: "798076", sprite: "entityThwomp1.png" },
    { text: "Thwump ray.", color: "48C1C8" }
  ],

  entityEvilNinja: [
    { text: "Evil ninja spawn.", color: "000000", sprite: "entityEvilNinja0.png" },
    { text: "Evil ninja.", color: "000000" }
  ],

  entityDualLaser: [
    { text: "Laser turrets turret.", color: "000000", sprite: "entityDualLaser0.png" },
    { text: "Laser turrets laser.", color: "910A46", sprite: "entityDualLaser1.png" }
  ],

  entityBoostPad: [
    { text: "Boost pad (inactive).", color: "000000", sprite: "18-0.png" },
    { text: "Boost pad (active).", color: "C2CEB1", sprite: "18-0b.png" }
  ],

  entityBat: [
    { text: "Deathball inner dot.", color: "3F1CB2", sprite: "19-0.png" },
    { text: "Deathball middle circle.", color: "5F0D6B", sprite: "19-1.png" },
    { text: "Deathball outer circle.", color: "9100A4", sprite: "19-2.png" }
  ],

  entityEyeBat: [
    { text: "Mini background.", color: "FFFFFF", sprite: "1A-1.png" },
    { text: "Mini eye.", color: "FFFFFF", sprite: "1A-0.png" }
  ],

  entityShoveThwomp: [
    { text: "Shove thwump interior.", color: "4F564D", sprite: "1C-0.png"  },
    { text: "Shove thwump ray.", color: "48C1C8", sprite: "1C-1.png" },
    { text: "Shove thwump armor.", color: "000000", sprite: "1C-2.png"}
  ]
}

function cget (filename, indices) {
  const file = objects[filename]
  if (!indices) {
    return file
  }
  return indices.map(i => file[i])
}
