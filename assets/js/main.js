$('.scrollTo').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 800);
  return false;
});

const products = [
  {
    id: 1,
    imageScr: './assets/img/6c1d8510b5c7098349eb27b1334c70fe.png',
    title: '',
    description: '',
    button: '',
  },
  {
    id: 2,
    imageScr: './assets/img/car3png.png',
    title: '',
    description: '',
    button: '',
  },
  {
    id: 3,
    imageScr: './assets/img/car6.png',
    title: 'Tesla Model 3',
    description: ' Disruptive, avant-garde, futuristic, innovative.',
    button: 'Contact',
  },
  {
    id: 4,
    imageScr: './assets/img/car4.png',
    title: '',
    description: '',
    button: '',
  },
  {
    id: 5,
    imageScr: './assets/img/car5.png',
    title: '',
    description: '',
    button: '',
  },
  {
    id: 6,
    imageScr: './assets/img/car2.png',
    title: '',
    description: ' ',
    button: '',
  },
  {
    id: 7,
    imageScr: './assets/img/car6.jfif',
    title: '',
    description: '',
    button: '',
  },
  {
    id: 8,
    imageScr: './assets/img/car7.png',
    title: '',
    description: '',
    button: '',
  },
]

const cardsContainer = document.querySelector('#car .item')

for (const product of products) {
  renderProductCard(product)
}

function renderProductCard(product) {
  const card = document.createElement('div')
  card.classList.add('img')
  cardsContainer.appendChild(card)
  card.outerHTML = getProductCardMarkup(product)
}

function getProductCardMarkup(product) {
  return `
    <div class="img">
         <img src="${product.imageScr}" alt="">
             <div class="text">
                 <h2>${product.title}</h2>
                 <p>${product.description}</p>
                ${product.button != '' ? `<button>${product.button}</button>` : ''}
              </div>
    </div>
  `
}





let index = 0

const siliderImg = [
  {
    id: 1,
    imageScr: '6c1d8510b5c7098349eb27b1334c70fe.png'
  },
  {
    id: 2,
    imageScr: 'car2.png'
  },
  {
    id: 3,
    imageScr: 'car7.png'
  },
  {
    id: 4,
    imageScr: 'car3png.png'
  },

]

const slider = document.querySelector('header')
const icon = document.querySelectorAll(".icon span")
const rightIconNum = icon.length - 1
const rightIcon = icon[rightIconNum]
const leftIcon = icon[0]
rightIcon.addEventListener("click", changeSliderImgRight)
leftIcon.addEventListener("click", changeSliderImgLeft)

icon[index + 1].style.color = "rgba(255, 255, 255, 0.74)"

for (let i = 0; i < siliderImg.length - 1; i++) {
  const circleSpan = document.createElement("span")
  const circle = document.createElement("i")
  circle.classList.add("fa-solid", "fa-circle")
  circleSpan.appendChild(circle)
  document.querySelector(".icon").insertBefore(circleSpan, icon[rightIconNum])
}
let a = document.querySelectorAll(".icon span")

function changeSliderImgRight() {
  setTimeout(deleteAnimation, 400);
  index++
  checkForAnimation();
  circleColor();
  slider.style.animationName = "animatedBackgroundRight"
  slider.style.backgroundImage = `linear-gradient(rgba(12, 12, 12, 0.411), rgba(2, 2, 2, 0.089)), url('assets/img/${siliderImg[index].imageScr}')`

}

function changeSliderImgLeft() {
  setTimeout(deleteAnimation, 400);
  index--
  checkForAnimation();
  circleColor();
  slider.style.animationName = "animatedBackgroundLeft"
  slider.style.backgroundImage = `linear-gradient(rgba(12, 12, 12, 0.411), rgba(2, 2, 2, 0.089)), url('assets/img/${siliderImg[index].imageScr}')`


}

function deleteAnimation() {
  slider.style.animationName = ""
}

function checkForAnimation() {
  if (index > siliderImg.length - 1) {
    index = 0
  }
  if (index < 0) {
    index = siliderImg.length - 1
  }
}

function circleColor() {
  let x = document.querySelectorAll(".icon span")
  for (let i = 0; i < x.length - 1; i++) {
    x[i].style.color = "rgba(255, 255, 255, 0.312)"
  }
  x[index + 1].style.color = "rgba(255, 255, 255, 0.74)"
}
for (let i = 1; i < a.length - 1; i++) {
  a[i].addEventListener("click", function () {
    slider.style.backgroundImage = `linear-gradient(rgba(12, 12, 12, 0.411), rgba(2, 2, 2, 0.089)), url('assets/img/${siliderImg[i - 1].imageScr}')`
    index = i - 1
    circleColor();
  })
}



