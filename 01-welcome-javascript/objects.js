const playerName = "jinjae";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

// const player = ["nico", 1212, true, "little bit"];
// player[0] == name
// player[1] == points
// This does not tell what each element is.

const player = {
    name: "jinjae",
    points: 121212,
    handsome: true,
    fat: "little bit",
}

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.handsome = false;

console.log(player.handsome);

player.lastname = "Kim";
console.log(player);

player.points += 15;
console.log(player.points);
