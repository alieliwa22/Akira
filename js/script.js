let productsSlider = document.getElementById("products-slider");
let productsSliderBestsellers = document.getElementById("products-bestsellers");
// mini nav
$("#open").click(function () {
  $(".overlay").fadeIn(250);
  $("#sideNav").css({ transform: "translate(0)" });
});
$("#close").click(function () {
  $(".overlay").fadeOut(250);
  $("#sideNav").css({ transform: "translate(-320px,0)" });
});
$(".overlay").click(function () {
  $(".overlay").fadeOut(250);
  $("#sideNav").css({ transform: "translate(-320px,0)" });
});
$("#hero-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  dots: false,
  lazyLoad: true,
  smartSpeed: 500,
});

// my products data
let products = [
  {
    img: "../img/products/img1.jpg",
    imgHover: "../img/products/img1hover.jpg",
    title: "Praesent In Ante",
    category: "shop",
    rating: 5,
    price: "$129.00",
  },
  {
    img: "../img/products/img2.jpg",
    imgHover: "../img/products/img2hover.jpg",
    title: "Nulla Imperdiet Purus",
    category: "shop",
    rating: 4,
    price: "$99.00",
  },
  {
    img: "../img/products/img3.jpg",
    imgHover: "../img/products/img3hover.jpg",
    title: "Maecenas non laoreet",
    category: "clothes",
    rating: 5,
    price: "$139.00",
  },
  {
    img: "../img/products/img4.jpg",
    imgHover: "../img/products/img4hover.jpg",
    title: "Fusce et semper",
    category: "shop",
    rating: 0,
    price: "$105.00",
  },
  {
    img: "../img/products/img5.jpg",
    imgHover: "../img/products/img5hover.jpg",
    title: "Nunc quis gravida",
    category: "shop",
    rating: 0,
    price: "$89.00",
  },
  {
    img: "../img/products/img6.jpg",
    imgHover: "../img/products/img6hover.jpg",
    title: "Donec congue vesti",
    category: "shop",
    rating: 0,
    price: "$79.00",
  },
  {
    img: "../img/products/img7.jpg",
    imgHover: "../img/products/img7hover.jpg",
    title: "Morbi facilisis quis",
    category: "accessories",
    rating: 5,
    price: "$119.00",
  },
  {
    img: "../img/products/img8.jpg",
    imgHover: "../img/products/img8hover.jpg",
    title: "Pellsque tortor massa",
    category: "accessories",
    rating: 0,
    price: "$129.00",
  },
  {
    img: "../img/products/img9.jpg",
    imgHover: "../img/products/img9hover.jpg",
    title: "Semper in tincidunt",
    category: "clothes",
    rating: 0,
    price: "$100.00",
  },
  {
    img: "../img/products/img10.jpg",
    imgHover: "../img/products/img10hover.jpg",
    title: "Vesti phara posuere",
    category: "shop",
    rating: 0,
    price: "$78.00",
  },
  {
    img: "../img/products/img11.jpg",
    imgHover: "../img/products/img11hover.jpg",
    title: "Sed hendrerit tempor",
    category: "shop",
    rating: 0,
    price: "$74.00",
  },
  {
    img: "../img/products/img12.jpg",
    imgHover: "../img/products/img12hover.jpg",
    title: "Sed hendrerit tempor",
    category: "shop",
    rating: 0,
    price: "$74.00",
  },
];

// adding products to html
function displayProducts() {
  let productsInner1 = "";
  let productsInner2 = "";
  for (let i = 0; i < products.length / 2; i++) {
    productsInner1 += `<div class="item">
    <div class="item-inner">
      <div class="product">
        <div class="product-img">
          <img
            src="${products[i].img}"
            alt=""
            class="first"
          />
          <img
            src="${products[i].imgHover}"
            alt=""
            class="second"
          />
          <div class="add-cart">
            <a href="#">
              <i class="bx bx-cart-download"></i>
              <span>Select options</span>
            </a>
          </div>
        </div>
        <div class="icons">
          <a href="#"><i class="bx bx-git-compare"></i></a>
          <a href="#"><i class="bx bx-search"></i></a>
          <a href="#"><i class="bx bx-heart"></i></a>
        </div>

        <div class="product-body">
          <div class="product-title">
            <a href="#">${products[i].title}</a>
          </div>
          <div class="product-category">
            <a href="#">${products[i].category}</a>
          </div>
          <div class="product-rating">
          <i class="bx bxs-star "></i>
          <i class="bx bxs-star "></i>
          <i class="bx bxs-star "></i>
          <i class="bx bxs-star "></i>
          <i class="bx bxs-star "></i>
          </div>
          <div class="product-price">${products[i].price}</div>
        </div>
      </div>
    </div>
    <div class="item-inner">
      <div class="product">
        <div class="product-img">
          <img
            src="${products[products.length - 1 - i].img}"
            alt=""
            class="first"
          />
          <img
            src="${products[products.length - 1 - i].imgHover}"
            alt=""
            class="second"
          />
          <div class="add-cart">
            <a href="#">
              <i class="bx bx-cart-download"></i>
              <span>Select options</span>
            </a>
          </div>
        </div>
        <div class="icons">
          <a href="#"><i class="bx bx-git-compare"></i></a>
          <a href="#"><i class="bx bx-search"></i></a>
          <a href="#"><i class="bx bx-heart"></i></a>
        </div>

        <div class="product-body">
          <div class="product-title">
            <a href="#">${products[products.length - 1 - i].title}</a>
          </div>
          <div class="product-category">
            <a href="#">${products[products.length - 1 - i].category}</a>
          </div>
          <div class="product-rating">
            <i class="bx bxs-star "></i>
            <i class="bx bxs-star "></i>
            <i class="bx bxs-star "></i>
            <i class="bx bxs-star "></i>
            <i class="bx bxs-star "></i>
          </div>
          <div class="product-price">${
            products[products.length - 1 - i].price
          }</div>
        </div>
      </div>
    </div>
  </div>`;
  }
  for (let i = 0; i < products.length; i++) {
    productsInner2 += `<div class="item">
    <div class="item-inner">
      <div class="product">
        <div class="product-img">
          <img
            src="${products[i].img}"
            alt=""
            class="first"
          />
          <img
            src="${products[i].imgHover}"
            alt=""
            class="second"
          />
          <div class="add-cart">
            <a href="#">
              <i class="bx bx-cart-download"></i>
              <span>Select options</span>
            </a>
          </div>
        </div>
        <div class="icons">
          <a href="#"><i class="bx bx-git-compare"></i></a>
          <a href="#"><i class="bx bx-search"></i></a>
          <a href="#"><i class="bx bx-heart"></i></a>
        </div>

        <div class="product-body">
          <div class="product-title">
            <a href="#">${products[i].title}</a>
          </div>
          <div class="product-category">
            <a href="#">${products[i].category}</a>
          </div>
          <div class="product-rating">
          <i class="bx bxs-star "></i>
          <i class="bx bxs-star "></i>
          <i class="bx bxs-star "></i>
          <i class="bx bxs-star "></i>
          <i class="bx bxs-star "></i>
          </div>
          <div class="product-price">${products[i].price}</div>
        </div>
      </div>
    </div>
  </div>`;
  }
  productsSlider.innerHTML = productsInner1;
  productsSliderBestsellers.innerHTML = productsInner2;
  let ratingContainer = $(".product-rating");
  let ratingContainerChildren = [];
  for (let i = 0; i < products.length; i++) {
    ratingContainerChildren.push(ratingContainer[i].children);
    for (let y = 0; y < products[i].rating; y++) {
      ratingContainerChildren[i][y].classList.add("active");
    }
  }
}
displayProducts();

$("#products-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  lazyLoad: true,
  smartSpeed: 500,
  margin: 10,
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 480 up
    480: {
      items: 1,
    },
    // breakpoint from 768 up
    768: {
      items: 3,
    },
    // breakpoint from 1024 up
    1024: {
      items: 4,
    },
  },
});
$("#products-bestsellers").owlCarousel({
  loop: true,

  nav: true,
  dots: true,
  lazyLoad: true,
  smartSpeed: 500,
  margin: 10,
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 480 up
    480: {
      items: 2,
    },
    // breakpoint from 768 up
    768: {
      items: 3,
    },
    // breakpoint from 1024 up
    1024: {
      items: 5,
    },
  },
});
$("#testi-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  lazyLoad: true,
  smartSpeed: 500,
  items: 1,
});
$("#blog").owlCarousel({
  loop: true,

  nav: true,
  dots: true,
  lazyLoad: true,
  smartSpeed: 500,
  margin: 15,
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 480 up
    480: {
      items: 1,
    },
    // breakpoint from 768 up
    768: {
      items: 2,
    },
    // breakpoint from 1024 up
    1024: {
      items: 3,
    },
  },
});
