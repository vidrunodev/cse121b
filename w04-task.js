/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

/* Populate Profile Object with placesLive objects */
myProfile.name = "Bruno Chavez Vidal";
myProfile.photo = "images/myimage.jpg";
myProfile.favoriteFoods = [
    "ceviche",
    "pizza",
    "hamburger"
    ];
myProfile.hobbies = ["Videogames", "Read", "Developing a digital store project"];
myProfile.placesLived = [];
myProfile.placesLived.push(
    {
        place: 'Lima, Peru',
        length: 'Most of my life'
    });
myProfile.placesLived.push(
    {
        place: 'Patterson, New Jersey',
        length: '6 months on 2007'
    });


/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li);
    });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
    });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
    });

