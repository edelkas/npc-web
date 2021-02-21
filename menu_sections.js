var sections = [
  {
      sectionId: "Objects_Items" ,
      listId: "list_objects",
      items: [
          { label: "Background",       filename: "background" },
          { label: "Ninja",            filename: "ninja" },
          { label: "Gold",             filename: "entityGold" },
          { label: "Exit Door",        filename: "entityDoorExit" },
          { label: "Exit Switch",      filename: "entityDoorExitSwitch" },
          { label: "Regular Door",     filename: "entityDoorRegular" },
          { label: "Locked Door",      filename: "entityDoorLocked", indices: [0, 1, 2, 4, 7, 3, 5, 6] },
          { label: "Trap Door",        filename: "entityDoorTrap", indices: [0, 1, 4, 6, 5, 7, 2, 3] },
          { label: "Bounce Block",     filename: "entityBounceBlock" },
          { label: "One-way Platform", filename: "entityOneWayPlatform" },
          { label: "Launchpad",        filename: "entityLaunchPad" },
          { label: "Boost Pad",        filename: "entityBoostPad" },
          { label: "Mine",             filename: "entityMine" },
          { label: "Zap Drones",       filename: "entityDroneZap" },
          { label: "Chaser Drone",     filename: "entityDroneChaser" },
          { label: "Chaingun Drone",   filename: "entityDroneChaingun" },
          { label: "Laser Drone",      filename: "entityDroneLaser" },
          { label: "Floorguard",       filename: "entityFloorGuard" },
          { label: "Rocket Turret",    filename: "entityRocket" },
          { label: "Gauss Turret",     filename: "entityTurret" },
          { label: "Laser Turret",     filename: "entityDualLaser" },
          { label: "Evil Ninja",       filename: "entityEvilNinja" },
          { label: "Thwump",           filename: "entityThwomp" },
          { label: "Shove Thwump",     filename: "entityShoveThwomp" },
          { label: "Deathball",        filename: "entityBat" },
          { label: "Mini (Eyebat)",    filename: "entityEyeBat" },
      ]
  },
  {
      sectionId: "Menu_Items",
      listId: "list_menu",
      items: [
          { label: "Basic Menus",      filename: "menu", indices: [0, 3, 17, 29, 4, 10] },
          { label: "Menu Tabs",        filename: "menu", indices: [8, 12, 25, 26, 27, 31, 33, 37] },
          { label: "Leaderboards",     filename: "menu", indices: [1, 2, 13, 16, 32] },
          { label: "Episode Grid",     filename: "menu", indices: [5, 23, 7, 30, 9, 22] },
          { label: "Pause Menu",       filename: "menu", indices: [18, 19, 20, 21] },
          { label: "Profile",          filename: "menu", indices: [14, 15] },
          { label: "Other Texts",      filename: "menu", indices: [24, 28, 34, 35, 38, 40, 41] },
          { label: "Unknown",          filename: "menu", indices: [6, 11, 36, 39] },
      ]
  },
  {
      sectionId: "Editor_Items",
      listId: "list_editor",
      items: [
          { label: "Lines",            filename: "editor", indices: [0, 2, 5] },
          { label: "Selections",       filename: "editor", indices: [3, 6, 7, 8] },
          { label: "Other",            filename: "editor", indices: [4, 1, 9] },
      ]
  },
  {
      sectionId: "Timebar_Items",
      listId: "list_timebar",
      items: [
          { label: "Basic Timebar",        filename: "timeBar",     indices: [0, 2, 1, 4, 6] },
          { label: "Race Timebar (P1)*",   filename: "timeBarRace", indices: [0, 1, 5, 6, 7] },
          { label: "Race Timebar (P2)",    filename: "timeBarRace", indices: [2, 8, 9, 10] },
          { label: "Race Timebar (P3)",    filename: "timeBarRace", indices: [3, 11, 12, 13] },
          { label: "Race Timebar (P4)",    filename: "timeBarRace", indices: [4, 14, 15, 16] },
          { label: "Unknown",              filename: "timeBar",     indices: [3, 5, 7] },
      ]
  },
  {
      sectionId: "Headbands_Items",
      listId: "list_headbands",
      items: [
          { label: "Headbands",        filename: "headbands", indices: [0, 2, 4, 6] },
          { label: "Unknown",          filename: "headbands", indices: [1, 3, 5, 7] },
          { label: "Unknowner",        filename: "headbands", indices: [8, 9, 10, 11] },
          { label: "Unknownest",       filename: "headbands", indices: [12, 13, 14, 15, 16] },
      ]
  },
  {
      sectionId: "Effects_Items",
      listId: "list_effects",
      items: [
          { label: "Explosions",       filename: "explosions" },
          { label: "Drone BZZT",       filename: "fxDroneZap" },
          { label: "Floorguard BZZT",  filename: "fxFloorguardZap" },
          { label: "Ground Dust",      filename: "fxNinja" }
      ]
  }
]
