// creating variables to grab those classes fromm DOM Object Model to change or impact them

const toggleButton = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

//add event listener to lister to click event to take our toggleButton to add the class of active to toggle and navigation and remove it if it has, so we use toggle method

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navigation.classList.toggle('active');
});
