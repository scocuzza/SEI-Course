console.log("It works!");

const randomDogUrl = 'https://dog.ceo/api/breeds/image/random'
const dogImage = document.querySelector('#dogImage')
const getRandomDogButton = document.querySelector('#getRandomDogButton')

const getRandomDogHandler = (e) => {
    // https://images.dog.ceo/breeds/terrier-russell/iguet1.jpeg
    console.log('Get me a dog!');
     // dogImage.setAttribute('src', 'https://images.dog.ceo/breeds/terrier-russell/iguet1.jpeg')
     console.log('Starting');
    axios({
        method: 'GET',
        url: randomDogUrl
    })
    .then((response) => {
        console.log("The API works!", response.data.message);
     console.log('Starting');
     dogImage.setAttribute('src',response.data.message)
    })
    .catch((error) => {
        console.log('ERROR !!!!');
    })
    console.log('Ending');
    }

getRandomDogButton.addEventListener('click', getRandomDogHandler)

// ======================================
// NICE TO HAVE !
// ======================================
const init = () => {
    console.log('The DOM has Loaded');


}
document.addEventListener('DOMContentLoaded', init);
