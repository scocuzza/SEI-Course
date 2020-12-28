console.log("script is linked")
//key value pair
const person = {
    name: "Steve",
    age: 26,
    isStudent: true,
    favMovies: ["Peanut Butter Falcon", "Forrest Gump", "Spongebob"],
    pets: [{
        name: "Marbles",
        age: 15,
        type: "Cat",
        toys: ["laser"],
    },{
        name: "Oakley",
        age: 3,
        type: "Dog",
        toys: ["tennis ball", "hedgehog"]
    }]
}

//write code that will list your pets name 
myPets = "";
for (i = 0; i < person.pets.length; i++ ) {
    myPets = myPets + " " + person.pets[i].name;
}
//console.log(myPets);
//write code that will list your favorite movies
myMovies = "";
for (i = 0; i < person.favMovies.length; i++) {
    myMovies = myMovies + " " + person.favMovies[i];
}
//console.log(myMovies);

person.favMovies.forEach(favMovies => {
    console.log(favMovies);
})
//using for each
person.pets.forEach(pet => {
    //console.log(pet.name);
})

const calculateBill = (meal, taxRate = 0.20) => {
    const total = meal * (1 + taxRate);
    return(total);
};