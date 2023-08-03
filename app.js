const data = [
  {
    id: 1,
    name: "Mahziar saadat",
    job: "solidity developer",
    img: "./images/person2-image.jpg",
    text: `
    Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Soluta earum quisquam
    optio. Explicabo maiores delectus sit
    corrupti architecto veritatis quaerat?`,
  },
  {
    id: 2,
    name: "Aida",
    job: "web developer",
    img: "./images/person1-image.jpg",
    text: `
    Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Architecto impedit eligendi
    ducimus quam sapiente aperiam consectetur
    accusantium perspiciatis dolores pariatur
    veritatis at, possimus, fuga magnam amet
    suscipit! Soluta, mollitia quidem.
    `,
  },
  {
    id: 3,
    name: "nami",
    job: "ui designer",
    img: "./images/person3-image.jpg",
    text: `
    Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Deserunt impedit, 
    veritatis assumenda provident tenetur itaque, 
    alias velit nesciunt blanditiis, obcaecati maiores
    expedita.
    `,
  },
  {
    id: 4,
    name: "sofia",
    img: "./images/person4-image.jpg",
    job: "front-end developer",
    text: `
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Dolorum optio aperiam 
    molestias, distinctio veritatis omnis facilis 
    voluptate eaque delectus aliquam praesentium unde, 
    et quam illum?
    `,
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const supriseBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

//show person bassed on person
function showPerson(person) {
  let item = data[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > data.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = data.length - 1;
  }
  showPerson(currentItem);
});

//  show random person
supriseBtn.addEventListener("click", () => {
  let randomNumber = getRandomValue();
  console.log(randomNumber);
  showPerson(randomNumber);
});

// get random number
function getRandomValue() {
  return Math.floor(Math.random() * data.length);
}
