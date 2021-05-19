console.log('Here are all the available people:', people);

// initialize jQuery
$ (document).ready(readyNow);

function readyNow () {
  console.log('jquery is ready!');
  
  //call on placePeople function to add pictures to the DOM once loaded
  placePeople();

  //call on generateName function to generate a random name upon loading
  generateName();

  //click listeners
  // $ ('div').on('click', clickPic);

  $('.addPictures').on('click', '.formatPics', picInfo);
  
}

function placePeople () {
    for (let i=0; i<people.length; i++) {
        $('.addPictures').append(` 
        <div class="formatPics" data-id=${people[i].name}>
        <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
        </div>`
        )}



}


// function randomNumber(min, max){
//   return Math.floor(Math.random() * (1 + max - min) + min);
// }

//need to generate a random name so that the player can match the correct picture
//needs to be outside of the function so that I can use it elsewhere
let randomName = people[Math.floor(Math.random() * people.length)];

function generateName () {
  //append the name to the DOM h1
  $('.personName').append(randomName.name);
}

//testing name generator
// console.log(generateName());


// function choosePicture () {

//   for(let i=0; i<people.length; i++) {
//     if ( randomName.name == people[i].name ) {
//       alert ("Correct!")
//   }
// }
// }

//Need to create a function that contains the correct info per picture
// function picInfo () {
//   for (let i=0; i<people.length; i++) {
//     if (people[i].name == `<img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">`) {
//       return people[i];
//     }
//   }
// }
// console.log(picInfo());

//make a function that will log pic info into the console when clicked on
function picInfo () {
  //check that the clicker is workingg
  // console.log('Picture is clicked on');
  // for (let i=0; i<people.length; i++) {
  //   // let personMatch = people[i].name;
  //   // personMatch.data('id');
    // $ (this).data('id');
  let clickedPhoto = $ (this).data('id');
  if (clickedPhoto == randomName.name) {
    alert ("Correct!!!");
  }
  else {
    alert ("Sorry! Try Again!");
  }


  // console.log($(this).children('img'));
  // }
}

