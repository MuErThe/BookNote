function themeSwitcher() {
  let toggle = document.querySelector('input[type="checkbox"]');

  let bgTop = document.querySelector('.bg-top, .bg-top-light');

  let bgBottom = document.querySelector('.bg-bottom, .bg-bottom-light');

  let title = document.querySelector('.title, .title-light');

  let toggleText = document.querySelector('.toggle, .toggle-light');

  let card = document.querySelectorAll('.card, .card-light');

  let username = document.querySelectorAll('.username, .username-light');

  let numberCard = document.querySelectorAll('.number-card, .number-card-light');

  let followers = document.querySelectorAll('.followers, .followers-light');

  let update = document.querySelectorAll('.updateBtn, .updateBtn-light');


  if (toggle.checked) {
    bgTop.classList.add('bg-top-light');
    bgTop.classList.remove('bg-top');

    bgBottom.classList.add('bg-bottom-light');
    bgBottom.classList.remove('bg-bottom');

    title.classList.add('title-light');
    title.classList.remove('title');

    toggleText.classList.add('toggle-light');
    toggleText.classList.remove('toggle');

    for (let i = 0; i < card.length; i++) {
      card[i].classList.remove('card');
      card[i].classList.add('card-light');
    }

    for (let i = 0; i < username.length; i++) {
      username[i].classList.remove('username');
      username[i].classList.add('username-light');
    }

    for (let i = 0; i < numberCard.length; i++) {
      numberCard[i].classList.remove('number-card');
      numberCard[i].classList.add('number-card-light');
    }

    for (let i = 0; i < followers.length; i++) {
      followers[i].classList.remove('followers');
      followers[i].classList.add('followers-light');
    }

    for (let i = 0; i < update.length; i++) {
      update[i].classList.remove("updateBtn");
      update[i].classList.add("updateBtn-light");
    }

  } else {
    bgTop.classList.remove('bg-top-light');
    bgTop.classList.add('bg-top');

    bgBottom.classList.remove('bg-bottom-light');
    bgBottom.classList.add('bg-bottom');

    title.classList.remove('title-light');
    title.classList.add('title');

    toggleText.classList.remove('toggle-light');
    toggleText.classList.add('toggle');

    for (let i = 0; i < card.length; i++) {
      card[i].classList.remove('card-light');
      card[i].classList.add('card');
    }

    for (let i = 0; i < username.length; i++) {
      username[i].classList.remove('username-light');
      username[i].classList.add('username');
    }

    for (let i = 0; i < numberCard.length; i++) {
      numberCard[i].classList.remove('number-card-light');
      numberCard[i].classList.add('number-card');
    }

    for (let i = 0; i < followers.length; i++) {
      followers[i].classList.remove('followers-light');
      followers[i].classList.add('followers');
    }

    for (let i = 0; i < update.length; i++) {
      update[i].classList.remove("updateBtn-light");
      update[i].classList.add("updateBtn");
    }
  }
}


// Get Date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.getElementById("date").innerHTML = "My Books: " + today;