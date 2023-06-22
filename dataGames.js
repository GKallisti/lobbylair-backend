const allGames =[
  {
    id: "csgo",
    name: "Counter-Strike: Global Offensive",
    gameMode: ["PvP", "Team PvP"],
    genres: ["FPS", "Competitive"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/01.webp?alt=media&token=f81e3e74-864d-4bba-a11e-bf65ad3794ce"
  },
  {
    id: "lol",
    name: "League of Legends",
    gameMode: ["PvP", "Team PvP"],
    genres: ["MOBA", "Competitive"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/02.webp?alt=media&token=ef95d577-0278-4c2a-aba2-7a7afc7d3ef4"
  },
  {
    id: "dota2",
    name: "Dota 2",
    gameMode: ["PvP", "Team PvP"],
    genres: ["MOBA","Competitive"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/03.webp?alt=media&token=7ddd0f22-192f-4760-abd4-0be4d570c07e"
  },
  {
    id: "lostark",
    name: "Lost Ark",
    gameMode: ["PvP", "Co-op"],
    genres: ["MMORPG", "Action"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/04.webp?alt=media&token=6a1a0d40-9e58-4933-acf2-558b31c7cdc7"
  },
  {
    id: "apexlegends",
    name: "Apex Legends",
    gameMode: ["PvP", "Co-op"],
    genres: ["FPS", "Battle Royale"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/05.webp?alt=media&token=65542f0b-264e-45e8-af04-431cc35aa5bc"
  },
  {
    id: "codwarfare2",
    name: "Call of Duty: Modern Warfare® II",
    gameMode: ["PvP", "Co-op"],
    genres: ["FPS", "Action"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/06.webp?alt=media&token=822374c4-5e73-4a9b-b618-bf0074154a21"
  },
  {
    id: "fortnite",
    name: "Fortnite",
    gameMode: ["PvP", "Team PvP"],
    genres: ["FPS", "Battle Royale"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/07.webp?alt=media&token=fef0dddb-8d4d-43a3-a090-6035a04b9d25"
  },
  {
    id: "minecraft",
    name: "Minecraft",
    gameMode: ["PvP", "PvE"],
    genres: ["Sandbox", "Adventure"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/08.webp?alt=media&token=c8a6ea5d-3684-4243-9e26-7f1d4ac87e91"
  },
  {
    id: "stardewvalley",
    name: "Stardew Valley",
    gameMode: ["Co-op"],
    genres: ["Farming Sim", "RPG", "Sandbox"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/09.webp?alt=media&token=243caf55-1594-48ff-9a22-e2c61a2c9511"
  },
  {
    id: "conanexiles",
    name: "Conan Exiles",
    gameMode: ["PvP", "Co-op", "PvE"],
    genres: ["Survival", "Adventure", "RPG"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/010.webp?alt=media&token=08a41eb7-a99c-47f8-9d6e-3a8b3f9c918f"
  },
  {
    id: "7daystodie",
    name: "7 Days to Die",
    gameMode: ["PvP", "Co-op", "PvE"],
    genres: ["Survival", "RPG","Zombies" ],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/011.webp?alt=media&token=ab7f58af-be39-43ee-ac0f-c80797ab4a19"
  },
  {
    id: "rocketleague",
    name: "Rocket League",
    gameMode: ["PvP","Team PvP" ],
    genres: ["Competitive", "Racing", "Platformer"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/012.webp?alt=media&token=30945f41-311c-4aae-aa6b-d536460e8e8a"
  },
  {
    id: "rust",
    name: "Rust",
    gameMode: ["PvP", "Co-op"],
    genres: ["Survival", "Adventure"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/013.webp?alt=media&token=e5d7cac7-107b-4dbe-98f0-ff0de3f99f9a"
  },
  {
    id: "overwatch2",
    name: "Overwatch 2",
    gameMode: ["PvP", "Team PvP"],
    genres: ["FPS"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/014.webp?alt=media&token=dfcfbe33-2af7-4155-b7ce-f13d96b45438"
  },
  
  {
    id: "pubg",
    name: "PUBG: Battlegrounds",
    gameMode: ["PvP", "Team PvP"],
    genres: ["Battle Royale", "FPS"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/015.webp?alt=media&token=17414985-2ac3-4e85-9624-d1ea4cc9544d"
  },
  {
    id: "gtaonline",
    name: "Grand Theft Auto Online",
    gameMode: ["PvP", "Co-op"],
    genres: ["Action", "Adventure", "Sandbox"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/016.webp?alt=media&token=523fc4d1-3881-47c9-a037-bd9cfe7d7fc7"
  },
  {
    id: "valorant",
    name: "Valorant",
    gameMode:["PvP", "Team PvP"],
    genres: ["FPS"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/017.webp?alt=media&token=709b9bd4-21a7-45a6-b61e-22134240cc64"
  },
  {
    id: "fallguys",
    name: "Fall Guys",
    gameMode: ["PvP", "Team PvP"],
    genres: ["Battle Royale", "Platformer"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/018.webp?alt=media&token=7312b1d2-26f1-4090-bf06-c5c91f515693"
  },
  {
    id: "rainbowsixsiege",
    name: "Tom Clancy's Rainbow Six Siege",
    gameMode: ["PvP", "Co-op"],
    genres: ["FPS", "Action"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/019.webp?alt=media&token=5262312e-6dc9-4722-b472-9dffdf0f5ee9"
  },
  
  {
    id: "deadbydaylight",
    name: "Dead by Daylight",
    gameMode: ["PvP", "Co-op"],
    genres: ["Horror", "Survival"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/020.webp?alt=media&token=f99b9385-ee1d-4e32-b935-77dc85818d87"
  },
  {
    id: "left4dead2",
    name: "Left 4 Dead 2",
    gameMode: ["PvP", "Co-op", "Team PvP" ],
    genres: ["FPS", "Survival", "Zombies"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/021.webp?alt=media&token=29449f4b-1040-46ba-9e39-4f4703a45a10"
  },
  {
    id: "rdr2",
    name: "Red Dead Redemption II",
    gameMode: ["PvP", "Co-op"],
    genres: ["Action", "Adventure", "Sandbox"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/022.webp?alt=media&token=ea637604-28fe-4fe6-aad7-73f396c654d6"
  },
  {
    id: "vrising",
    name: "V Rising",
    gameMode: ["PvP", "Co-op"],
    genres: ["Survival", "Sandbox"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/023.webp?alt=media&token=46936112-4943-42b7-b19f-0b8759e88e9c"
  },
  {
    id: "seaofthieves",
    name: "Sea Of Thieves",
    gameMode: ["PvP", "Co-op"],
    genres: ["Action", "Adventure"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/024.webp?alt=media&token=676c4700-4591-44bc-819b-46e31040904a"
  },
  {
    id: "projectzomboid",
    name: "Project Zomboid",
    gameMode: ["PvP", "Co-op"],
    genres: ["Survival", "Zombies"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/025.webp?alt=media&token=d7894779-6821-49a8-90f2-f441dcb90032"
  },
  {
    id: "raft",
    name: "Raft",
    gameMode: ["Co-op"],
    genres: ["Survival", "Adventure"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/026.webp?alt=media&token=9a707049-d0c7-42cd-aaff-a602c616bd95"
  },

  {
    id: "borderlands3",
    name: "Borderlands 3",
    gameMode: ["Co-op"],
    genres: ["FPS", "RPG"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/027.webp?alt=media&token=57905039-3d45-49d1-97d9-80882730895f"
  },
  {
    id: "ageofempires2de",
    name: "Age Of Empires 2 DE",
    gameMode: ["PvP", "Team PvP"],
    genres: ["City Builder", "RTS"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/028.webp?alt=media&token=44ec602e-621b-40bf-8f30-482dfdd7422c"
  },
  {
    id: "grounded",
    name: "Grounded",
    gameMode: ["Co-op"],
    genres: ["Survival", "Adventure"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/029.webp?alt=media&token=87f653de-612e-414f-824b-aae275830b49"
  },
 
  {
    id: "diablo3",
    name: "Diablo 3",
    gameMode: ["PvP", "Co-op"],
    genres: ["Action", "RPG"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/030.webp?alt=media&token=b38b10dd-d17a-4812-8a12-879412b38ff0"
  },
  {
    id: "terraria",
    name: "Terraria",
    gameMode: ["PvP","Team PvP", "Co-op"],
    genres: ["Adventure", "Survival", "Sandbox"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/031.webp?alt=media&token=1757120c-6071-41fe-bf5f-a795d6f9cb44"
  },

  {
    id: "amongus",
    name: "Among Us",
    gameMode: ["PvP", "Co-op" ],
    genres: ["Platformer", "Survival"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/032.webp?alt=media&token=8d24ef5f-13ec-4a81-ae2b-aae512f1cfa0"
  },
  {
    id: "eldenring",
    name: "Elden Ring",
    gameMode: ["PvP", "Co-op" ],
    genres: ["Action", "RPG", "Adventure"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/033.webp?alt=media&token=a2441c68-e79a-43aa-854a-73cc5b079eff"
  },
  {
    id: "tropico6",
    name: "Tropico 6",
    gameMode: ["PvP", "Team PvP", "Co-op" ],
    genres: ["RTS", "City Builder"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/034.webp?alt=media&token=7361b788-1a17-4af2-a77f-86e864ef8b85"
  },
  {
    id: "starcraft2",
    name: "Starcraft II",
    gameMode:["PvP", "Team PvP", "Co-op" ],
    genres: ["RTS", "City Builder"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/035.webp?alt=media&token=06a6753b-a56a-4a98-87c6-ae8aa5719004"
  },
  {
    id: "w40kI",
    name: "Warhammer 40k. Inquisitor Martyr",
    gameMode:["PvP", "Co-op" ],
    genres: ["Action", "RPG"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/036.webp?alt=media&token=9baf5fa0-13e2-4324-b066-e9a55d9747d9"
  },
  {
    id: "nfsh",
    name: "Need For Speed Heat",
    gameMode:["PvP", "Co-op" ],
    genres: ["Action", "Sports","Racing"],
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/037.webp?alt=media&token=62e1b9d1-5e07-451c-b9a3-cc5ed101103d"
  }

  ]

module.exports = allGames;
