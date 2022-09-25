// create a function called treasure that takes an argument of location and returns an alert displaying the id of the square on the game board when it is clicked on
// locations.splice(indexToRemove, numberToRemove);
var locations = [0,1,2,3,4,5,6,7,8];

var treasure_location_idx = Math.floor(Math.random() * 9);
var treasure_location = locations[treasure_location_idx];
locations.splice(treasure_location_idx, 1);

var bomb_location_idx= Math.floor(Math.random() * locations.length);
var bomb_location = locations[bomb_location_idx];
locations.splice(bomb_location_idx, 1);

var bomb_2_location_idx= Math.floor(Math.random() * locations.length);
var bomb_2_location = locations[bomb_2_location_idx];
locations.splice(bomb_2_location_idx, 1);

// console.log(locations);
console.log('treasure location: ', treasure_location);
console.log('bomb_1 location: ', bomb_location);
console.log('bomb_2 location: ', bomb_2_location);

var max_attempts = 6;
var attempts = 0;

const treasure = (id) => {
  attempts++;
  document.getElementById("counter").innerHTML = `Attempts : ${attempts}`;

  if (attempts === max_attempts) {
    alert('You reached the max number of attempts, you lose :/')
  }

  if (id === bomb_location || id === bomb_2_location) {
    document.getElementById(id).innerHTML = "&#x2620";
    alert(`you clicked the bomb, you dead :(`);
  } else if (id === treasure_location) {
    document.getElementById(id).innerHTML = "&#x1f308";
    alert(`you found the treasure, you rich :)`);
  } else {
    document.getElementById(id).innerHTML = "&#x1f332";
    // alert(`you clicked ${id}, keep trying`)
  }
}


// ALTERNATE LOCATION ASSIGNMENTS for treasure and bomb

// console.log(`treasure_location: ${treasure_location}`);
// var bomb_location = Math.floor(Math.random() * 9);

// if (bomb_location === treasure_location) {
//   if (bomb_location === 8) {
//     bomb_location-=1;
//   } else {
//     bomb_location+=1;
//   }
// }