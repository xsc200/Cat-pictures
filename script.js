// Part 1:
// Load https://api.thecatapi.com/v1/images/search
// Get the first Array object of the JSON response
// Use its url property to display the cat picture
// in the .cat-picture <img>

let loadCatPicture = (data) => {
  document.querySelector(".cat-picture").src = data[0].url;
};

let fetchCatPicture = (url) => {
  fetch(url)
    .then(results => results.json())
    .then(data => loadCatPicture(data));
}

fetchCatPicture("https://api.thecatapi.com/v1/images/search");
// Part 2:
// Load https://api.thecatapi.com/v1/breeds
// Iterate over the array of breeds and use the
// name property of each to build a list of
// cat breeds by adding <li> elements to the
// .breeds <ul>


let fetchCatPictureForBreed = (breedId) => {
  fetchCatPicture("https://api.thecatapi.com/v1/images/search?breed_ids=" + breedId);
}

let makeBulletPoint = (breed, list) => {
   let newPoint = document.createElement("li");
   newPoint.innerHTML = breed.name;
   newPoint.addEventListener("click", () => fetchCatPictureForBreed(breed.id));
   console.log(breed.id);
   list.appendChild(newPoint);
}

let loadCatBreedList = (data) => {
  let list = document.querySelector(".breeds-list");
  data.forEach(breed => makeBulletPoint(breed, list));
  // for(let breed of data) - each element
  // for(let breed in data) - each indices
};

fetch("https://api.thecatapi.com/v1/breeds")
  .then(results => results.json())
  .then(data => loadCatBreedList(data));

// Extra credit:
// When you click on one of the breeds in the list,
// load a cat photo for that breed using this endpoint:
// https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}
// (where {breed-id} is the id property from the breed object).

