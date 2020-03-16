'use strict';

var menuPages = document.getElementsByClassName("menu_link");
var modalTrigger = document.querySelectorAll('.modalTrigger');
var modalWrapper = document.querySelectorAll('.overlay');
var closeButtons = document.querySelectorAll('.closeButton');
var mainElement = document.querySelector('.main');
var leftMenu = document.getElementById('navigation');

// Check user screen width (mobile/desktop)
// if (window.screen.width < 768) {
//   mainElement.classList.add('active_menu');
//   leftMenu.classList.add("short");
// }
 
// // Menu long short
// function shortMenu(cur = leftMenu.className) {
//   if (cur == 'menu_long')
//   {
//     leftMenu.classList.add("short");
//     mainElement.classList.add('active_menu');
    
//   }
//   else {
//     leftMenu.classList.remove("short");
//     mainElement.classList.remove('active_menu');
  
//   }
// }
 
// // Add event-listener for toggle button (hamburger)
// document.getElementById('toggle').addEventListener('click', function(e) {
//   e.preventDefault();
//   shortMenu();
// });

// // Highlight current page
// for (var i = 0; i < menuPages.length; i++) {

//   menuPages[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

// Pages toggling
for (var j = 0; j < menuPages.length; j++) {
  menuPages[j].addEventListener("click", function () {
    var menuPages = this.getAttribute("href");
    var content = document.querySelector(menuPages + '_section');
    var all = document.querySelectorAll(".toggle");

    if (content) {

    for (var k = 0; k < all.length; k++) {
      all[k].classList.add("hidden");
      }
      content.classList.remove("hidden");
      }
  });
}
 
// Modals
function closeAllModals() {
  for (var l = 0; l < modalWrapper.length; l++) {
    modalWrapper[l].classList.remove('show');
  }  
};

modalWrapper.forEach( function (event) {
  event.addEventListener("click", function (e) {
      if (e.target === this) {
        closeAllModals();
      }
  });
});


for (var m = 0; m < closeButtons.length; m++) {
  closeButtons[m].addEventListener('click', closeAllModals);
}

document.addEventListener('keyup', function(e) {
  if (e.keyCode === 27) {
    closeAllModals();
    window.location.replace("https://github.com/SergiuszPu"); 
  }
})

document.getElementById('go_quit').addEventListener('click', function () { 
  closeAllModals();
  window.location.replace("https://github.com/SergiuszPu"); 
});

function openModal(e) {
  var currentModal = document.getElementById(e.currentTarget.dataset.target);
  currentModal.classList.add('show');
} 
for (var n = 0; n < modalTrigger.length; n++) {
  modalTrigger[n].addEventListener('click', openModal);
}

// // Postback slide
// document.getElementById('triangle').style.marginLeft='61.9%';
// document.getElementById('torange').style.width='61.9%';

// const canavas = document.getElementById('canavas');

const canavas = document.getElementById('myChart').getContext('2d');

const chart = new Chart(canavas, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});