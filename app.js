const express = require("express")
const app = express()
app.use(express.static('public'))
const https = require("https")
const PORT = process.env.PORT || 3000

const games = { games: [{id: 1, name: "N2k23", platform: "Steam", isFree: "No", type: "Sport"},
{id: 2, name: "Counter-Strike Global Offensive", platform: "Steam", isFree: "Yes", type: "Action"},
{id: 3, name: "Planet zoo", platform: "Steam", isFree: "No", type: "Playground"},
{id: 4, name: "Speed runners", platform: "Steam", isFree: "No", type: "Action"},
{id: 5, name: "War Thunder", platform: "Steam", isFree: "Yes", type: "Action"},
{id: 6, name: "The Elder Scrolls Online", platform: "Steam", isFree: "No", type: "Adventure"},
{id: 7, name: "Sid Meiers Civilization VI", platform: "Steam", isFree: "No", type: "Playground"},
{id: 8, name: "Urbek City Builder", platform: "Steam", isFree: "No", type: "Playground"},
{id: 9, name: "Hogwarts Legacy", platform: "Steam", isFree: "No", type: "Adventure"},
{id: 10, name: "Timber Born", platform: "Steam", isFree: "No", type: "Playground"},
{id: 11, name: "The Binding of Isac", platform: "Steam", isFree: "No", type: "Action"},
{id: 12, name: "The Binding of Isac: Rebirth", platform: "Steam", isFree: "No", type: "Action"},
{id: 13, name: "Handshakes", platform: "Steam", isFree: "Yes", type: "Playground"},
{id: 14, name: "DRAGON BALL Z: KAKAROT", platform: "Steam", isFree: "No", type: "Action"},
{id: 15, name: "Dirty Bomb", platform: "Steam", isFree: "Yes", type: "Action"},
{id: 16, name: "Tom Clancy's Rainbow Six Siege", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 17, name: "Roller Champions", platform: "Ubisoft Connect", isFree: "Yes", type: "Action"},
{id: 18, name: "Far Cry 3", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: 19, name: "Far Cry 4", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: 20, name: "Far Cry 5", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: 21, name: "Far Cry 6", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: 22, name: "Uno", platform: "Ubisoft Connect", isFree: "No", type: "Playground"},
{id: 23, name: "Assasins Creed: Mirage", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 24, name: "Assasins Creed: Valhalla", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 25, name: "Assasins Creed: Black Flag", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 26, name: "Assasins Creed: Odessey", platform: "Ubisoft Connect", isfree: "No", type: "Action"},
{id: 27, name: "Assasins Creed: Origins", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 28, name: "Assasins Creed: Chronicles", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 29, name: "Assasins Creed: Rogue", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 30, name: "Assasins Creed: Revelations", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 31, name: "Assasins Creed: Syndicate", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 32, name: "Assasins Creed: Unity", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 33, name: "For Honor", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 34, name: "The Crew 2", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: 35, name: "As Far As The Eye", platform: "Ubisoft Connect", isFree: "No", type: "Adventure"},
{id: 36, name: "Ghost Recon: Break Point", platform: "Ubisoft Connect", isFree: "No", type: "Action"},
{id: 37, name: "Fortnite", platform: "Epic Games", isFree: "Yes", type: "Action"},
{id: 38, name: "The last of us", platform: "Playstation 5", isFree: "No", type: "Adventure"}
]}


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/games", (req, res) => {
    res.send(games)
})


app.listen(PORT, () => {
    console.log("Listening to port " + PORT)
    //console.log(games)
})

// function newEntry(){
//     const randomGameName = names[Math.floor(Math.random() * names.length)]
//     const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)]
//     const randomCost = cost[Math.floor(Math.random() * cost.length)]
    
//     games.games.push({name: randomGameName, platform: randomPlatform, isFree: randomCost})
    
//     return games
    
// }
// app.get("/newentry", (req, res) => {
//     newEntry()
//     res.send("newentry")
// })


// const names = ["Rust", "Euro Truck Simulator 2", "Forza Horizon 5", "GTA V"]
// const platforms = ["Steam"]
// const cost = ["Yes", "No"]