// script.js

const products = [
    { id: 1, name: "Iphone 12 pro", category: ["electronics","smartphone"], price: 29999, rating: 4.5, image: "https://www.optus.com.au/content/dam/optus/images/shop/mobile/phones/apple/iphone-12/carousel/iphone-12-purple-front-back.jpg/renditions/version-1619402668569/original.jpeg" },
    { id: 2, name: "Redmi note 12", category: ["electronics","smartphone"], price: 29999, rating: 4.5, image: "https://gagadget.com/media/uploads/redmi-note-14-pro-plus-1.jpg" },
    { id: 3, name: "Redmi note 13 Pro", category: ["electronics","smartphone"], price: 29999, rating: 4.5, image: "https://m.media-amazon.com/images/I/61vFWIksgcL._AC_SL1500_.jpg" },
    { id: 4, name: "Vivo v40 Pro", category: ["electronics","smartphone"], price: 29999, rating: 4.5, image: "https://th.bing.com/th/id/OIP.FWsTla0QONxLQ5QyIEa8dwHaHa?rs=1&pid=ImgDetMain" },
    { id: 5, name: "Roadster jeans", category: ["clothing"], price: 1999, rating: 4.0, image: "https://cdna.lystit.com/photos/81f0-2013/12/13/diesel-blue-zathan-bootcut-jeans-product-1-6040492-2-046276154-normal.jpeg" },
    { id: 6, name: "Roadster blue jeans", category: ["clothing"], price: 1999, rating: 4.0, image: "https://cdn.shopify.com/s/files/1/0608/7874/9892/products/1EHN87EV3-YTRC01BB004LtBlue_2_1512x.jpg?v=1666693733" },
    { id: 7, name: "Jeans", category: ["clothing"], price: 1999, rating: 4.0, image: "https://cdn.shopify.com/s/files/1/0608/7874/9892/products/j2ANrFK_a-Spykar-Men-Dark-Blue-Cotton-Regular-Fit-Narrow-Length-Jeans-_Rover_2048x.jpg?v=1661432078" },
    { id: 8, name: "Bajaj Blender", category: ["home","electronics"], price: 2499, rating: 4.2, image: "https://s3.amazonaws.com/images.ecwid.com/images/35368017/1708767998.jpg" },
    { id: 9, name: "Blender", category: ["home","electronics"], price: 2499, rating: 4.2, image: "https://th.bing.com/th/id/OIP.388XH-VhQEqoNURALL__qAHaMI?rs=1&pid=ImgDetMain" },
    { id: 10, name: "Sony TV", category: ["electronics","tv"], price: 45999, rating: 4.8, image: "https://i5.walmartimages.com/asr/d7a8dea4-1ed8-4920-a632-c79dafa6cc90.870887b47055df60a69dfa023f0f2dc5.jpeg" },
    { id: 11, name: "Samsung TV", category: ["electronics","tv"], price: 45999, rating: 4.8, image: "https://images.samsung.com/is/image/samsung/au_UA55KU7000WXXY_013_Black_black?$L1-Thumbnail$" },
    { id: 12, name: "Samsung TV", category: ["electronics","tv"], price: 45999, rating: 4.8, image: "https://images.samsung.com/is/image/samsung/p6pim/uk/qe55q75catxxu/gallery/uk-qled-q70c-qe55q75catxxu-536638584?$650_519_PNG$" },
    { id: 13, name: "Roadster check shirt", category: ["clothing"], price: 999, rating: 4.2, image: "https://th.bing.com/th/id/OIP.GOMhC5nU9Rhmc1kldnOJpwHaJ4?rs=1&pid=ImgDetMain" },
    { id: 14, name: "Spykar shirt", category: ["clothing"], price: 999, rating: 4.1, image: "https://th.bing.com/th/id/OIP.4gi13HTgM0f0RBWZg90xbgHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    { id: 15, name: "Polo T-Shirt", category: ["clothing"], price: 999, rating: 4.2, image: "https://blueauraapparels.com/wp-content/uploads/2018/09/Cotton-Polo-T-shirt-for-men.-Plain-Solid-design-with-Collar-Maroon-front-right-600x900.jpg" },
    { id: 16, name: "Spykar polo T-Shirt", category: ["clothing"], price: 999, rating: 4.2, image: "https://images-na.ssl-images-amazon.com/images/I/61RUPRrEEsL._AC_UL1380_.jpg" },
    { id: 17, name: "HP Victus Laptop", category: ["electronics","laptop"], price: 59999, rating: 4.6, image: "https://m.media-amazon.com/images/I/91NAVqwir8L.jpg"},
    { id: 18, name: "Macbook m14 pro", category: ["electronics","laptop"], price: 76990, rating: 4.9, image: "https://rooter.lk/storage/macbook/macbook-air/gold/macbook-air-m1-256-gold-jpg.jpg"},
    { id: 19, name: "Boat Headphone", category: ["electronics","headphone"], price: 2999, rating: 4.5, image: "https://m.media-amazon.com/images/I/61WFLydWqpL._SL1500_.jpg" },
    { id: 20, name: "Sony Headphone", category: ["electronics","headphone"], price: 2999, rating: 4.5, image: "https://m.media-amazon.com/images/I/61j3S7nhwHL._AC_SL1500_.jpg" },
    { id: 21, name: "Realme Headphone", category: ["electronics","headphone"], price: 2999, rating: 4.5, image: "https://th.bing.com/th/id/OIP.5h8sVu0_tn5aJt0LrGWOBwHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 22, name: "Louis Phillipe Sneakers", category: ["footwear"], price: 3999, rating: 4.4, image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/12708344/2021/2/11/f0210949-faad-4167-8233-3e7c179649ec1613017079131-Louis-Philippe-Sport-Men-Casual-Shoes-9221613017077780-1.jpg" },
    { id: 23, name: "Louis Phillipe sneakers", category: ["footwear"], price: 1999, rating: 4.3, image: "https://th.bing.com/th/id/OIP.y_vbQJzGIux1jxiExM5xggAAAA?rs=1&pid=ImgDetMain" },
    { id: 24, name: "Sandal", category: ["footwear"], price: 1999, rating: 4.3, image: "https://www.expocafeperu.com/w/2020/05/ecco-sandals-mens-amazon-dsw-yucatan-review-clearance-flip-flops-for-men-offroad-leather-for-men.jpg"},
    { id: 25, name: "Adidas Sandal", category: ["footwear"], price: 1999, rating: 4.3, image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/16557938/2022/3/8/0d0dcbe8-7f7f-4023-a39a-79f0bcd44d791646731435923-ADIDAS-Men-Sandals-2851646731435511-1.jpg" }
  ];
  const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortOptions = document.getElementById("sortOptions");
const searchBar = document.getElementById("searchBar");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ⭐ ${product.rating}</p>
      <button class="buy-now" data-id="${product.id}">Buy Now</button>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;
    productList.appendChild(div);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => {
      if (Array.isArray(p.category)) {
        return p.category.includes(category);
      } else {
        return p.category === category;
      }
    });
  }
  const searchTerm = searchBar.value.trim().toLowerCase();
if (searchTerm) {
  filtered = filtered.filter(p => {
    const nameMatch = p.name?.toLowerCase().includes(searchTerm);
    const categoryMatch = Array.isArray(p.category)
      ? p.category.some(c => c.toLowerCase().includes(searchTerm))
      : p.category?.toLowerCase().includes(searchTerm);

    return nameMatch || categoryMatch;
  });
}


  const sortValue = sortOptions.value;
  if (sortValue === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortOptions.addEventListener("change", filterAndSortProducts);
searchBar.addEventListener("input", filterAndSortProducts);

displayProducts(products);

document.getElementById("checkoutButton").addEventListener("click", () => {
  alert("Proceeding to checkout...");
});
document.querySelector("#goToTop").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
    // Optional: Alert message on form submit
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent!");
      this.reset();
      contactFormWrapper.style.display = "none"; // Hide form after submission
    });
 document.querySelector("#contactButton").addEventListener("click", () => {
    const contactFormWrapper = document.querySelector(".contact-form-wrapper");
    contactFormWrapper.style.display = "block";
    window.scrollTo({
      top: contactFormWrapper.offsetTop,
      behavior: "smooth"
    });
  });
  document.querySelector("#closeForm").addEventListener("click", () => {
    const contactFormWrapper = document.querySelector(".hidden");
    contactFormWrapper.style.display = "none";
  });