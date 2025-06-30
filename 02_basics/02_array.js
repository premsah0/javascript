const marvel_heros = ["spiderman", "thor", "batman"]
const dc_heros = ["superman", "flashman", "shaktiman"]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_array = [1,2,3,4, [5,6,7], 8,9,[6,7,8,[1,2,3]]]
const main_array = another_array.flat(Infinity)
console.log(main_array);

console.log(Array.isArray("prem"));
console.log(Array.from("prem"));
console.log(Array.from({name: "prem"})); //intresting 

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3));


