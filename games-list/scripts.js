// Add JavaScript code here
tailwind.config = {
    theme: {
        screens: {
            'xs': '400px',
            'sm': '600px',
            'md': '900px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',

        },
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            }
        }
    }
}

// utility - prevent link clicks
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href") == "#") {
            e.preventDefault();
        }
    });
});

// selectors
const tplGame = document.querySelector("#tpl-game");
const listNew = document.querySelector("#games-list-new");
const listRecommended= document.querySelector("#games-list-recommended");
const listTrending = document.querySelector("#games-list-trending");

//let items;

// retrieve characters from api
/*
async function getData() {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4335eaa1e6msh1b2104c0b0c7ab6p15de94jsne741a532fa3f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const items = await response.json();
        //console.log(items);
        renderItems(items)
    } catch (error) {
        console.error(error);
    }
}
*/
const data = [
    {
        "id": 546, "title": "Kartrider: Drift", "thumbnail": "https:\/\/www.freetogame.com\/g\/546\/thumbnail.jpg", "short_description": "A free-to-play multiplayer online racing game set in the Kartrider franchise.", "game_url": "https:\/\/www.freetogame.com\/open\/kartrider-drift", "genre": "Racing", "platform": "PC (Windows)", "publisher": "Nexon America Inc.", "developer": "Nexon Korea Corporation", "release_date": "2023-01-10", "freetogame_profile_url": "https:\/\/www.freetogame.com\/kartrider-drift"
    },
    {
        "id": 545, "title": "Fangs", "thumbnail": "https:\/\/www.freetogame.com\/g\/545\/thumbnail.jpg", "short_description": "A 4v4 MOBA with hero-specific strategies.", "game_url": "https:\/\/www.freetogame.com\/open\/fangs", "genre": "MOBA", "platform": "PC (Windows)", "publisher": "Hidden Leaf Games", "developer": "Hidden Leaf Games", "release_date": "2022-11-30", "freetogame_profile_url": "https:\/\/www.freetogame.com\/fangs"
    },
    {
        "id": 549, "title": "Summoners War: Chronicles", "thumbnail": "https:\/\/www.freetogame.com\/g\/549\/thumbnail.jpg", "short_description": "A multi-platform ARPG set in the Summoners War universe.", "game_url": "https:\/\/www.freetogame.com\/open\/summoners-war-chronicles", "genre": "MMORPG", "platform": "PC (Windows)", "publisher": "Com2uS", "developer": "Com2uS", "release_date": "2022-11-09", "freetogame_profile_url": "https:\/\/www.freetogame.com\/summoners-war-chronicles"
    },
    {
        "id": 542, "title": "World Boss", "thumbnail": "https:\/\/www.freetogame.com\/g\/542\/thumbnail.jpg", "short_description": "An experimental FPS based on io and roguelike gameplay.", "game_url": "https:\/\/www.freetogame.com\/open\/world-boss", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "Playside", "developer": "Playside", "release_date": "2022-10-19", "freetogame_profile_url": "https:\/\/www.freetogame.com\/world-boss"
    },
    {
        "id": 541, "title": "Marvel Snap", "thumbnail": "https:\/\/www.freetogame.com\/g\/541\/thumbnail.jpg", "short_description": "A fast paced strategy card game set in the Marvel universe.", "game_url": "https:\/\/www.freetogame.com\/open\/marvel-snap", "genre": "Card Game", "platform": "PC (Windows)", "publisher": "Nuverse", "developer": "Second Dinner Studios, Inc.", "release_date": "2022-10-18", "freetogame_profile_url": "https:\/\/www.freetogame.com\/marvel-snap"
    },
    {
        "id": 540, "title": "Overwatch 2", "thumbnail": "https:\/\/www.freetogame.com\/g\/540\/thumbnail.jpg", "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.", "game_url": "https:\/\/www.freetogame.com\/open\/overwatch-2", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "Activision Blizzard", "developer": "Blizzard Entertainment", "release_date": "2022-10-04", "freetogame_profile_url": "https:\/\/www.freetogame.com\/overwatch-2"
    },
    {
        "id": 539, "title": "Deathverse: Let It Die", "thumbnail": "https:\/\/www.freetogame.com\/g\/539\/thumbnail.jpg", "short_description": "A game of survival where contestants are pit against each other in a life or death game show.", "game_url": "https:\/\/www.freetogame.com\/open\/deathverse-let-it-die", "genre": "Battle Royale", "platform": "PC (Windows)", "publisher": "Supertrick Games, Inc.", "developer": "GungHo Online Entertianment, Inc.", "release_date": "2022-09-28", "freetogame_profile_url": "https:\/\/www.freetogame.com\/deathverse-let-it-die"
    },
    {
        "id": 537, "title": "Gundam Evolution", "thumbnail": "https:\/\/www.freetogame.com\/g\/537\/thumbnail.jpg", "short_description": "A 6v6 team-based shooter based on the Gundam multiverse", "game_url": "https:\/\/www.freetogame.com\/open\/gundam-evolution", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "Bandai Namco", "developer": "Bandai Namco", "release_date": "2022-09-21", "freetogame_profile_url": "https:\/\/www.freetogame.com\/gundam-evolution"
    },
    {
        "id": 536, "title": "Omega Strikers", "thumbnail": "https:\/\/www.freetogame.com\/g\/536\/thumbnail.jpg", "short_description": "A 3v3 socccer-style game with knockouts.", "game_url": "https:\/\/www.freetogame.com\/open\/omega-strikers", "genre": "Sports", "platform": "PC (Windows)", "publisher": "Odyssey Interactive", "developer": "Odyssey Interactive", "release_date": "2022-09-16", "freetogame_profile_url": "https:\/\/www.freetogame.com\/omega-strikers"
    },
    {
        "id": 544, "title": "Galahad 3093", "thumbnail": "https:\/\/www.freetogame.com\/g\/544\/thumbnail.jpg", "short_description": "A 12v12 team shooter featuring mechs based on Arthurian legend.", "game_url": "https:\/\/www.freetogame.com\/open\/galahad-3093", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "Simutronics Corp.", "developer": "Simutronics Corp.", "release_date": "2022-09-01", "freetogame_profile_url": "https:\/\/www.freetogame.com\/galahad-3093"
    },
    {
        "id": 533, "title": "A.V.A Global", "thumbnail": "https:\/\/www.freetogame.com\/g\/533\/thumbnail.jpg", "short_description": "A.V.A is a free-to-play online first-person shooter with multiple game modes, unique customizations, as well as PvP and PvE gameplay.", "game_url": "https:\/\/www.freetogame.com\/open\/ava", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "NEOWIZ", "developer": "NEOWIZ", "release_date": "2022-08-24", "freetogame_profile_url": "https:\/\/www.freetogame.com\/ava"
    },
    {
        "id": 529, "title": "Tower of Fantasy", "thumbnail": "https:\/\/www.freetogame.com\/g\/529\/thumbnail.jpg", "short_description": "Tower of Fantasy is a 3D open-world RPG, anime-style sci-fi MMO RPG game with unique characters and beautiful open vistas!", "game_url": "https:\/\/www.freetogame.com\/open\/tower-of-fantasy", "genre": "MMORPG", "platform": "PC (Windows)", "publisher": "Level Infinite", "developer": "Hotta Studio", "release_date": "2022-08-10", "freetogame_profile_url": "https:\/\/www.freetogame.com\/tower-of-fantasy"
    },
    {
        "id": 531, "title": "Magic Spellslingers", "thumbnail": "https:\/\/www.freetogame.com\/g\/531\/thumbnail.jpg", "short_description": "Magic Spellslingers is the latest entry based on Witzards of the Coast\u2019s popular card game Magic: The Gathering.", "game_url": "https:\/\/www.freetogame.com\/open\/magic-spellslingers", "genre": "Card Game", "platform": "PC (Windows)", "publisher": "Wizards of the Coast LLC", "developer": "Pipeworks Studios, Seismic Games", "release_date": "2022-08-05", "freetogame_profile_url": "https:\/\/www.freetogame.com\/magic-spellslingers"
    },
    {
        "id": 534, "title": "Lost Light", "thumbnail": "https:\/\/www.freetogame.com\/g\/534\/thumbnail.jpg", "short_description": "A post-apocalyptic shooter built around creating a realistic experience.", "game_url": "https:\/\/www.freetogame.com\/open\/lost-light", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "NetEase Games", "developer": "NetEase Games", "release_date": "2022-08-04", "freetogame_profile_url": "https:\/\/www.freetogame.com\/lost-light"
    },
    {
        "id": 527, "title": "Aero Tales Online", "thumbnail": "https:\/\/www.freetogame.com\/g\/527\/thumbnail.jpg", "short_description": "Aero Tales Online: The World is a free-to-play 3D anime-style MMORPG with PvP and PvE elements. The game revolves around the \u201cmysterious story of the Key of Skylight\u201d.", "game_url": "https:\/\/www.freetogame.com\/open\/aero-tales-online", "genre": "MMORPG", "platform": "PC (Windows)", "publisher": "Anisage Games", "developer": "Anisage Games", "release_date": "2022-08-01", "freetogame_profile_url": "https:\/\/www.freetogame.com\/aero-tales-online"
    },
    {
        "id": 528, "title": "Noah\u2019s Heart", "thumbnail": "https:\/\/www.freetogame.com\/g\/528\/thumbnail.jpg", "short_description": "Noah\u2019s Heart is an open-world MMORPG game with a focus on exploration and socialization.", "game_url": "https:\/\/www.freetogame.com\/open\/noahs-heart", "genre": "MMORPG", "platform": "PC (Windows)", "publisher": "Archosaur Games", "developer": "Archosaur Games", "release_date": "2022-07-28", "freetogame_profile_url": "https:\/\/www.freetogame.com\/noahs-heart"
    },
    {
        "id": 524, "title": "Temperia: Soul of Majestic", "thumbnail": "https:\/\/www.freetogame.com\/g\/524\/thumbnail.jpg", "short_description": "Fans of collectible card games, are you looking for something a bit different from the normal fare? Then a peek at Moonwolf Entertainment and A2 Softworks\u2019 Temperia: Soul of Majestic might be in order.", "game_url": "https:\/\/www.freetogame.com\/open\/temperia", "genre": "Card Game", "platform": "PC (Windows)", "publisher": "Leonardo Interactive", "developer": "MoonWolf Entertainment, A2 Softworks", "release_date": "2022-07-26", "freetogame_profile_url": "https:\/\/www.freetogame.com\/temperia"
    },
    {
        "id": 525, "title": "MultiVersus", "thumbnail": "https:\/\/www.freetogame.com\/g\/525\/thumbnail.jpg", "short_description": "The Warner Bros lineup meets Smash in Player First Games\u2019 MultiVersus.", "game_url": "https:\/\/www.freetogame.com\/open\/multiversus", "genre": "Fighting", "platform": "PC (Windows)", "publisher": "Warner Bros. Games", "developer": "Player First Games", "release_date": "2022-07-19", "freetogame_profile_url": "https:\/\/www.freetogame.com\/multiversus"
    },
    {
        "id": 526, "title": "Chimeraland", "thumbnail": "https:\/\/www.freetogame.com\/g\/526\/thumbnail.jpg", "short_description": "Explore the open-world sandbox MMO game set in a mythical world. Play as one of a large number of races, from jelly-fish to dragon-person \u2013 or even a regular old human if that\u2019s your thing. Explore the land, gather resources, craft items, build homes and more.", "game_url": "https:\/\/www.freetogame.com\/open\/chimeraland", "genre": "MMORPG", "platform": "PC (Windows)", "publisher": "Level Infinite", "developer": "Pixel soft", "release_date": "2022-07-14", "freetogame_profile_url": "https:\/\/www.freetogame.com\/chimeraland"
    },
    {
        "id": 522, "title": "Flyff Universe", "thumbnail": "https:\/\/www.freetogame.com\/g\/522\/thumbnail.jpg", "short_description": "Get the full Flyff experience on any platform with the free-to-play browser-based MMORPG Flyff Universe.", "game_url": "https:\/\/www.freetogame.com\/open\/flyff-universe", "genre": "MMORPG", "platform": "Web Browser", "publisher": "Gala Lab", "developer": "Gala Lab", "release_date": "2022-06-14", "freetogame_profile_url": "https:\/\/www.freetogame.com\/flyff-universe"
    },
    {
        "id": 532, "title": "World of Runes", "thumbnail": "https:\/\/www.freetogame.com\/g\/532\/thumbnail.jpg", "short_description": "An adorable anime-style MMO featuring cute pets and collectable cards.", "game_url": "https:\/\/www.freetogame.com\/open\/world-of-runes", "genre": "MMORPG", "platform": "Web Browser", "publisher": "F5 Game Company Limited", "developer": "R2 Games", "release_date": "2022-06-13", "freetogame_profile_url": "https:\/\/www.freetogame.com\/world-of-runes"
    },
    {
        "id": 521, "title": "Diablo Immortal", "thumbnail": "https:\/\/www.freetogame.com\/g\/521\/thumbnail.jpg", "short_description": "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.", "game_url": "https:\/\/www.freetogame.com\/open\/diablo-immortal", "genre": "MMOARPG", "platform": "PC (Windows)", "publisher": "Blizzard Entertainment", "developer": "Blizzard Entertainment", "release_date": "2022-06-02", "freetogame_profile_url": "https:\/\/www.freetogame.com\/diablo-immortal"
    },
    {
        "id": 520, "title": "Roller Champions", "thumbnail": "https:\/\/www.freetogame.com\/g\/520\/thumbnail.jpg", "short_description": "What if you could player roller derby, but in a more organized and less physically dangerous environment?", "game_url": "https:\/\/www.freetogame.com\/open\/roller-champions", "genre": "Sports", "platform": "PC (Windows)", "publisher": "Ubisoft", "developer": "Ubisoft", "release_date": "2022-05-25", "freetogame_profile_url": "https:\/\/www.freetogame.com\/roller-champions"
    },
    {
        "id": 519, "title": "Space Punks", "thumbnail": "https:\/\/www.freetogame.com\/g\/519\/thumbnail.jpg", "short_description": "Space Punks is a sci-fi co-op looter shooter with graphics and humor that will likely appeal to the Borderlands fans among us.", "game_url": "https:\/\/www.freetogame.com\/open\/space-punks", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "JAGEX", "developer": "Flying Wild Hog", "release_date": "2022-04-20", "freetogame_profile_url": "https:\/\/www.freetogame.com\/space-punks"
    },
    {
        "id": 517, "title": "Lost Ark", "thumbnail": "https:\/\/www.freetogame.com\/g\/517\/thumbnail.jpg", "short_description": "Smilegate\u2019s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.", "game_url": "https:\/\/www.freetogame.com\/open\/lost-ark", "genre": "ARPG", "platform": "PC (Windows)", "publisher": "Amazon Games", "developer": "Smilegate RPG", "release_date": "2022-02-11", "freetogame_profile_url": "https:\/\/www.freetogame.com\/lost-ark"
    },
    {
        "id": 516, "title": "PUBG: BATTLEGROUNDS", "thumbnail": "https:\/\/www.freetogame.com\/g\/516\/thumbnail.jpg", "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.", "game_url": "https:\/\/www.freetogame.com\/open\/pubg", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "KRAFTON, Inc.", "developer": "KRAFTON, Inc.", "release_date": "2022-01-12", "freetogame_profile_url": "https:\/\/www.freetogame.com\/pubg"
    },
    {
        "id": 515, "title": "Halo Infinite", "thumbnail": "https:\/\/www.freetogame.com\/g\/515\/thumbnail.jpg", "short_description": "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite\u2019s multiplayer.", "game_url": "https:\/\/www.freetogame.com\/open\/halo-infinite", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "Xbox Game Studios", "developer": "343 Industries", "release_date": "2021-11-15", "freetogame_profile_url": "https:\/\/www.freetogame.com\/halo-infinite"
    },
    {
        "id": 550, "title": "Goose, Goose, DUCK", "thumbnail": "https:\/\/www.freetogame.com\/g\/550\/thumbnail.jpg", "short_description": "A social deduction game with geese.", "game_url": "https:\/\/www.freetogame.com\/open\/goose-goose-duck", "genre": "Strategy", "platform": "PC (Windows)", "publisher": "Gaggle Studios, Inc.", "developer": "Gaggle Studios, Inc.", "release_date": "2021-10-03", "freetogame_profile_url": "https:\/\/www.freetogame.com\/goose-goose-duck"
    },
    {
        "id": 518, "title": "Swords of Legends Online", "thumbnail": "https:\/\/www.freetogame.com\/g\/518\/thumbnail.jpg", "short_description": "Explore a fantasy world based on Chinese mythology in Gameforge\u2019s action MMORPG Swords of Legends Online!", "game_url": "https:\/\/www.freetogame.com\/open\/swords-of-legends-online", "genre": "MMORPG", "platform": "PC (Windows)", "publisher": "Gameforge", "developer": "Wangyuan Shengtang Entertainment", "release_date": "2021-07-09", "freetogame_profile_url": "https:\/\/www.freetogame.com\/swords-of-legends-online"
    },
    {
        "id": 513, "title": "Super Squad", "thumbnail": "https:\/\/www.freetogame.com\/g\/513\/thumbnail.jpg", "short_description": "Prepare yourself. It\u2019s time for Mayhem. Super Squad is a multi-player online shoot-\u2019em-up (or MOSH)!", "game_url": "https:\/\/www.freetogame.com\/open\/super-squad", "genre": "MOBA", "platform": "PC (Windows)", "publisher": "Bad Fox Studios", "developer": "Bad Fox Studios", "release_date": "2021-06-25", "freetogame_profile_url": "https:\/\/www.freetogame.com\/super-squad"
    },
    {
        "id": 511, "title": "Phantasy Star Online 2 New Genesis", "thumbnail": "https:\/\/www.freetogame.com\/g\/511\/thumbnail.jpg", "short_description": "The legacy of Phantasy Star Online 2 continues a thousand years later!", "game_url": "https:\/\/www.freetogame.com\/open\/pso2-new-genesis", "genre": "MMORPG", "platform": "PC (Windows)", "publisher": "Sega", "developer": "Sega", "release_date": "2021-06-09", "freetogame_profile_url": "https:\/\/www.freetogame.com\/pso2-new-genesis"
    },
    {
        "id": 512, "title": "Sherwood Extreme", "thumbnail": "https:\/\/www.freetogame.com\/g\/512\/thumbnail.jpg", "short_description": "High action arcade shooter Sherwood Extreme sends players on a mission to save the kingdom!", "game_url": "https:\/\/www.freetogame.com\/open\/sherwood-extreme", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "CAGE Studios", "developer": "CAGE Studios", "release_date": "2021-05-12", "freetogame_profile_url": "https:\/\/www.freetogame.com\/sherwood-extreme"
    },
    {
        "id": 510, "title": "Drifters Loot the Galaxy", "thumbnail": "https:\/\/www.freetogame.com\/g\/510\/thumbnail.jpg", "short_description": "Grab your Driftpacs and grappling hooks, it\u2019s time to loot. Pick a character and dive into Blind Squirrel\u2019s team-based shooter, Drifters Loot the Galaxy.", "game_url": "https:\/\/www.freetogame.com\/open\/drifters-loot-the-galaxy", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "Blind Squirrel Entertainment", "developer": "Blind Squirrel Entertainment", "release_date": "2021-04-15", "freetogame_profile_url": "https:\/\/www.freetogame.com\/drifters-loot-the-galaxy"
    },
    {
        "id": 509, "title": "Smash Legends", "thumbnail": "https:\/\/www.freetogame.com\/g\/509\/thumbnail.jpg", "short_description": "Classic fairy tales get wild with 5minlab and LINE Games Corporation\u2019s brawl-action game Smash Legends.", "game_url": "https:\/\/www.freetogame.com\/open\/smash-legends", "genre": "Fighting", "platform": "PC (Windows)", "publisher": "LINE Games Corporation", "developer": "5minlab", "release_date": "2021-04-13", "freetogame_profile_url": "https:\/\/www.freetogame.com\/smash-legends"
    },
    {
        "id": 508, "title": "Enlisted", "thumbnail": "https:\/\/www.freetogame.com\/g\/508\/thumbnail.jpg", "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software\u2019s MMO squad-based shooter Enlisted. ", "game_url": "https:\/\/www.freetogame.com\/open\/enlisted", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "Gaijin Entertainment", "developer": "Darkflow Software", "release_date": "2021-04-08", "freetogame_profile_url": "https:\/\/www.freetogame.com\/enlisted"
    },
    { "id": 507, "title": "Super Mecha Champions", "thumbnail": "https:\/\/www.freetogame.com\/g\/507\/thumbnail.jpg", "short_description": "Super Mecha Champions is a PC port of the mobile anime PvP game from NetEease, featuring a variety of modes but focusing on battle royale.", "game_url": "https:\/\/www.freetogame.com\/open\/super-mecha-champions", "genre": "Shooter", "platform": "PC (Windows)", "publisher": "NetEase Games", "developer": "NetEase Games", "release_date": "2021-03-25", "freetogame_profile_url": "https:\/\/www.freetogame.com\/super-mecha-champions" }, 

    ]
renderItems(data);
//getData();

// loop items to add games
function renderItems(items) { 
    listNew.innerHTML = '';
    listRecommended.innerHTML = '';
    listTrending.innerHTML = '';
    let count = 0;
    // hte api doesn'tn have a limiter so I will reduce it to the number required here
    //items.length = 12;
    items.forEach(item => {
    //items.every(item => {
     // if (count > 11) {
    //      return false;
    //  }
      if (count < 6) {
          renderNew(item, listNew);
      } else if (count < 24) {
          renderNew(item, listRecommended);
      } else { 
          renderNew(item, listTrending);
      }
      count++;
      //console.log(v.title, v.thumbnail,v.game_url,v.developer,v.genre);
      return true;
  });
}

// add game to dom in defined list
function renderNew(game, dest) {
    const item = tplGame.content.cloneNode(true);
    item.querySelector("a").href = game.game_url;
    item.querySelector("h3").innerText = game.title;

    const img = item.querySelector("[game-img]")
    img.innerHTML = `<img src="${game.thumbnail}">`
    
    item.querySelector("[game-cat]").innerText = game.genre;
    
    dest.append(item);
    setTimeout(() => {
        img.classList.add("scale-100");
    }, 1000);
}