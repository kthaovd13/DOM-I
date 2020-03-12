const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
//logo.src = siteContent["nav"]["img-src"]
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll("a")
navLinks[0].textContent = 'Services'
navLinks[1].textContent = 'Product'
navLinks[2].textContent = 'Vision'
navLinks[3].textContent = 'Features'
navLinks[4].textContent = 'About'
navLinks[5].textContent = 'Contact'

let greatTitle = document.querySelector("h1")
greatTitle.textContent = "DOM Is Awesome"

let button = document.querySelector("button")
button.textContent = "Get Started"

let headImg = document.getElementById("cta-img")
headImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainStuff = document.querySelectorAll(".main-content h4")
mainStuff[0].textContent = siteContent["main-content"]["features-h4"]
mainStuff[1].textContent = siteContent["main-content"]["about-h4"]
mainStuff[2].textContent = siteContent["main-content"]["services-h4"]
mainStuff[3].textContent = siteContent["main-content"]["product-h4"]
mainStuff[4].textContent = siteContent["main-content"]["vision-h4"]


let mainStuffText = document.querySelectorAll(".main-content p")
mainStuffText[0].textContent = siteContent["main-content"]["features-content"]
mainStuffText[1].textContent = siteContent["main-content"]["about-content"]
mainStuffText[2].textContent = siteContent["main-content"]["services-content"]
mainStuffText[3].textContent = siteContent["main-content"]["product-content"]
mainStuffText[4].textContent = siteContent["main-content"]["vision-content"]

let midImg = document.getElementById("middle-img")
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let infoMe = document.querySelector(".contact h4")
infoMe.textContent = siteContent["contact"]["contact-h4"]

let infoMe1 = document.querySelectorAll(".contact p")
infoMe1[0].textContent = siteContent["contact"]["address"]
infoMe1[1].textContent = siteContent["contact"]["phone"]
infoMe1[2].textContent = siteContent["contact"]["email"]

let footer = document.querySelector("footer")
footer.textContent = "Copyright Great Idea! 2018"

let extraLink = document.createElement('a')
extraLink.textContent = "Start"
let parentElement = document.querySelector('nav')
parentElement.prepend(extraLink)

let extraLink1 = document.createElement('a')
extraLink1.textContent = "End"
let parentElement1 = document.querySelector('nav')
parentElement.appendChild(extraLink1)

const secondaryHeaders = document.querySelectorAll('nav a')

secondaryHeaders.forEach(element => {
  element.style.color = 'green'})
