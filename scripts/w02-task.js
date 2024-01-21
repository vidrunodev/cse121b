/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Bruno Chavez';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/myimage.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ['Ceviche', 'Pizza', 'Pasta', 'Lomo Saltado'];
foodElement.innerHTML = favFoods.join('<br>');

favFoods.push('Ice Cream');
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the first element in the favorite food array
favFoods.shift();
// Append the array output with the modified favorite foods array
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
// Remove the last element in the favorite food array
favFoods.pop();
// Append the final modified favorite foods array
foodElement.innerHTML += `<br>${favFoods.join('<br')}`;