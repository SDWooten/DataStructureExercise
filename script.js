// Data Structures Exercise
// 1a
const jedi = [];

// 1b
jedi[jedi.length] = 'Luke';
console.log(jedi);
// OR
jedi[0] ='Luke';
console.log(jedi);

// 1c 
jedi.push('obi-wan Kenobi');
console.log(jedi);

// 1d
jedi.unshift('Yoda');
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.splice(2);
console.log(jedi);

// 1g
const yoda = jedi.shift();
console.log(jedi);
console.log(yoda);

// 2a
const sithLords = [
    `Darth Vader`,
    `Darth Sidious`,
    `Darth Maul`
];

// OR
// Const sithLords = [`Darth Vader`, `Darth Sidious`, `Darth Maul`];

// 2b
const imperialOfficers = [
    `Grand Moff Tarkin`,
    `Orson Krennic`
];

// 2c
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

// 2d
console.log(starWarsVillian.slice(0, 2));

// 3a
const droids = {
    astromech: `R2-D2`,
    protocol: `c-3P0`,
    assasin: `IG-88`

};
console.log(droids);

// 3b
console.log(droids[`astromech`]);


// 3c
console.log(droids.protocol);

// 3d
droids.assassin - `IG-11`;
console.log(droids.assassin);
console.log(droids);

// BONUS
// 4
console.log(starWarsVillians[0].slice(6, 7));

// 5
console.log(sithLords.slice(-2, -1));

// 6a
const starWarsMovies = [
    {
        episodeOne: `The Phantom Menace`,
        episodeTwo: "The Empire Strikes Back",
        episodeSix: "Return of the Jedi"
}
];
