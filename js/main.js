//second page cards

let cars = [
  {
    names: "LAMBORGHINI",
    detail: "NEW CAR / AUTOMATIC / SPORTS",
    image: "./images/car-1.jpg",
  },

  {
    names: "FERRARI RED CAR",
    detail: "NEW CAR / AUTOMATIC / SPORTS",
    image: "./images/car-2.jpg",
  },

  {
    names: "BMW E46 M3 DISKI SERIE",
    detail: "NEW CAR / AUTOMATIC / SPORTS",
    image: "./images/car-3.jpg",
  },

  {
    names: "VOLKSWAGEN SCIROCCO 2016",
    detail: "NEW CAR / AUTOMATIC / SPORTS",
    image: "./images/car-4.jpg",
  },
  {
    names: "PORSCHE CAYEN LAST",
    detail: "NEW CAR / AUTOMATIC / SPORTS",
    image: "./images/car-5.jpg",
  },
  {
    names: "LEXUS GS F",
    detail: "NEW CAR / AUTOMATIC / SPORTS",
    image: "./images/car-6.jpg",
  },
];

function cararray(car) {
  return `
   
    <section class="car-section-item ">
<img class="images" src="${car.image}" alt="" />

<p class="car-section-pfonts">${car.names}</p>

<p class="car-section-fonts">${car.detail}</p>
<section class="whole-detail">
<section class="detail-section">
<section><i class="fa fa-tint" aria-hidden="true"></i> Petrol</section>
<section><i class="fa fa-road" aria-hidden="true"></i> 4000km</section>
<section><i class="fa fa-cog" aria-hidden="true"></i> Manual</section>
</section>
<section class="detail-section">
<section><i class="fa fa-car" aria-hidden="true"></i> Sports</section>
<section><i class="fa fa-cogs" aria-hidden="true"></i> Blue</section>
<section><i class="fa fa-calendar" aria-hidden="true"></i> 2022</section>
</section>
</section>
<hr>
<section class="review">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>  (65 reviews)
</section>
</section>
    `;
}

let htmlpart = document.querySelector(".car-section-container");
htmlpart.innerHTML = cars.map(cararray).join("");




//third-page detail-cards

let cards = [
    {
        image: "./images/rte-icon.png",
        head: "Highly secured",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est vitaelaboriosam eveniet error voluptatum magnam aliquid.",
        link: "read more"
    },
    {
        image: "./images/rte-icon.png",
        head: "Highly secured",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est vitaelaboriosam eveniet error voluptatum magnam aliquid.",
        link: "read more"
    },
    {
        image: "./images/rte-icon.png",
        head: "Highly secured",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est vitaelaboriosam eveniet error voluptatum magnam aliquid.",
        link: "read more"
    },
    {
        image: "./images/rte-icon.png",
        head: "Highly secured",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est vitaelaboriosam eveniet error voluptatum magnam aliquid.",
        link: "read more"
    },
];

function cardarray(card){
    return`
    <section class="car-section-item2">
    <img class="images" src="${card.image}" alt="" />

    <h3 class="car-section-pfonts">${card.head}</h3>

    <p class="car-section-fonts">
     ${card.para}
    </p>

    <a href="">read more</a>
  </section>
    `
}

let imports = document.querySelector(".car-section-container2");
imports.innerHTML = cards.map(cardarray).join("");





$(".hamburger").on("click", function () {
  $(".m-menu").animate({
    right: "0%",
  });
});
$(".close-btn").on("click", function () {
  $(".m-menu").animate({
    right: "-55%",
  });
});