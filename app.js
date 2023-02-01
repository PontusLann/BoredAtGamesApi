const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
const https = require("https")
const PORT = process.env.PORT || 3000

const games = [{id: "1", name: "N2k23", platform: "Steam", isFree: "No", type: "Sport"},
{id: "2", name: "Counter-Strike Global Offensive", platform: "Steam", isFree: "Yes", type: "Action"},
{id: "3", name: "Planet zoo", platform: "Steam", isFree: "No", type: "Playground"},
{id: "4", name: "Speed runners", platform: "Steam", isFree: "No", type: "Action"},
{id: "5", name: "War Thunder", platform: "Steam", isFree: "Yes", type: "Action"},
{id: "6", name: "The Elder Scrolls Online", platform: "Steam", isFree: "No", type: "Adventure"},
{id: "7", name: "Sid Meiers Civilization VI", platform: "Steam", isFree: "No", type: "Playground"},
{id: "8", name: "Urbek City Builder", platform: "Steam", isFree: "No", type: "Playground"},
{id: "9", name: "Hogwarts Legacy", platform: "Steam", isFree: "No", type: "Adventure"},
{id: "10", name: "Timber Born", platform: "Steam", isFree: "No", type: "Playground"},
{id: "11", name: "The Binding of Isac", platform: "Steam", isFree: "No", type: "Action"},
{id: "12", name: "The Binding of Isac: Rebirth", platform: "Steam", isFree: "No", type: "Action"},
{id: "13", name: "Handshakes", platform: "Steam", isFree: "Yes", type: "Playground"},
{id: "14", name: "DRAGON BALL Z: KAKAROT", platform: "Steam", isFree: "No", type: "Action"},
{id: "15", name: "Dirty Bomb", platform: "Steam", isFree: "Yes", type: "Action"},
{id: "16", name: "Tom Clancy's Rainbow Six Siege", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "17", name: "Roller Champions", platform: "Ubisoft Connect", isFree: "Yes", type: "Action"},
{id: "18", name: "Far Cry 3", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: "19", name: "Far Cry 4", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: "20", name: "Far Cry 5", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: "21", name: "Far Cry 6", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: "22", name: "Uno", platform: "Ubisoft Connect", isFree: "No", type: "Playground"},
{id: "23", name: "Assasins Creed: Mirage", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "24", name: "Assasins Creed: Valhalla", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "25", name: "Assasins Creed: Black Flag", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "26", name: "Assasins Creed: Odessey", platform: "Ubisoft Connect", isfree: "No", type: "Action"},
{id: "27", name: "Assasins Creed: Origins", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "28", name: "Assasins Creed: Chronicles", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "29", name: "Assasins Creed: Rogue", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "30", name: "Assasins Creed: Revelations", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "31", name: "Assasins Creed: Syndicate", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "32", name: "Assasins Creed: Unity", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "33", name: "For Honor", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "34", name: "The Crew 2", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: "35", name: "As Far As The Eye", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: "36", name: "Ghost Recon: Break Point", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: "37", name: "Fortnite", platform: "Epic Games", isFree: "Yes", type: "Action"},
{id: "38", name: "The last of us", platform: "Playstation 5", isFree: "No", type: "Adventure"}
]

app.get("/", () => {
    
})

app.get("/games/:id", (req, res) => {
    let id = Number(req.params.id)

    const data = games.find(x => x.id == id)
    if(id > 0 && id <= games.length){
        res.send(200, data)
    }
    else{
        res.send(400);
    }
    
})
/*

WORK IN PROGRESS

app.get("/randomgame", (req, res) => {
    const data = RandomizeGame()
    JSON.stringify(data);
})
*/

app.get("/games", (req, res) => {
    res.send(games)
})

app.get("/addgames", (req, res) => {
    res.sendFile(__dirname + "/public/addgame.html")
})

app.post("/addgame", (req, res) => {
        let id = games.length + 1;
        let name = req.body.name;
        let platform = req.body.platform;
        let isFree = req.body.isFree;
        let type = req.body.type;
    
        games.push({id: id,
            name: name,
            platform: platform,
            isFree: isFree,
            type: type
        })
    
    res.send("Added game")
})

app.delete("/removegame/:id", (req, res) => {

    const index = games.findIndex(x => x.id == req.params.id)
    
    if(games[index] != null){
        games.splice(index, 1)
        res.send(200);
    }
    else{
        res.send(400);
    }
})




app.listen(PORT, () => {
    console.log("Listening to port " + PORT)
})



/*

WORK IN PROGRESS

async function RandomizeGame(){

    const URL = "https://raw.githubusercontent.com/PontusLann/BoredAtGamesApi/main/allgames.md"
    
    const req = {
        method: "get",
        mode: "cors",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        cache: "default"
    }
    const response = await fetch(URL, req)
    
    // const randomGame = URL[Math.floor(Math.round() * games.length)]
    const data = await response.json();
    console.log(data);
    return data
}
*/