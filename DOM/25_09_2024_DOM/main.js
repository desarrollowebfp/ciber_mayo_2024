const products = [
  {
    name: "Slides",
    description:
      "Simple, minimal and comfortable, these slides feature a classic design in the perfect shade of iron. Whether you're just lounging around the house or running errands, these slides will offer all-day comfort.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358",
    price: "25.0",
  },
  {
    name: "Sweatpants",
    description:
      "Soft and comfortable sweatpants in stylish shades. They are perfect for lounging with their cozy stretch fabric that offers just the right amount of warmth. Enjoy the ultimate relaxation experience!",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
    price: "35.0",
  },
  {
    name: "Men's T-shirt",
    description:
      "Crafted from organic cotton, this classic T-shirt features a relaxed fit, crew neckline and timeless look. Enjoy the breathable comfort of 100% organic cotton.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410",
    price: "40.0",
  },
  {
    name: "Hoodie",
    description:
      "This hoodie is the perfect choice for comfort and warmth. Meticulously crafted from 100% cotton, the hoodie features a soft, plush fleece interior and a unisex sizing design. Soft and lightweight, it's sure to be your go-to for chilly days.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenHoodie01.jpg?v=1675455175",
    price: "90.0",
  },
  {
    name: "Men's Crewneck",
    description:
      "This high-quality crewneck is perfect for your everyday look. Made with 100% cotton, it's soft, comfortable, and undeniably stylish. Full sleeved for a classic look and effortlessly versatile, this cotton crewneck is a must-have in any wardrobe.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenMenscrew01.jpg?v=1675454919",
    price: "120.0",
  },
  {
    name: "Women's Crewneck",
    description:
      "This high-quality crewneck is perfect for your everyday look. Made with 100% cotton, it's soft, comfortable, and undeniably stylish. Full sleeved for a classic look and effortlessly versatile, this cotton crewneck is a must-have in any wardrobe.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375",
    price: "120.0",
  },
  {
    name: "Women's T-shirt",
    description:
      "Crafted from organic cotton, this classic T-shirt features a relaxed fit, crew neckline and timeless look. Enjoy the breathable comfort of 100% organic cotton.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomensTshirt01.jpg?v=1675463247",
    price: "40.0",
  },
  {
    name: "Canvas Sneakers",
    description:
      "These high-quality canvas sneakers offer a comfortable fit and superior breathability, thanks to their cushioning midsoles and durable construction. An array of stylish colors adds to the appeal, making them perfect for casual wear. Slip them on and enjoy reliable performance and style that lasts.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenCanvasSneaker01.jpg?v=1675454881",
    price: "40.0",
  },
  {
    name: "Frontpack",
    description:
      "This frontpack is the perfect combination of form and function, with a modern, sporty design and patented technology that enables you to easily carry numerous items on the go. It's light, comfortable and has adjustable straps to fit all body types. Plus, its water-resistant outer shell ensures your items stay dry and secure.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenFrontpack.jpg?v=1675455064",
    price: "200.0",
  },
  {
    name: "Half Zip",
    description:
      "This half zip athletic sweatshirt is designed for optimum comfort and convenience. The half zip provides easy access to slip on and off, and the lightweight fabric is breathable and flexible, ideal for active pursuits. Perfect for athletes of all levels.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenHalfzip01.jpg?v=1675455104",
    price: "100.0",
  },
  {
    name: "Leggings",
    description:
      "These sporty and lightweight leggings are designed for comfort and ease of movement. Its moisture-wicking fabric and strong seams keep you feeling cool and secure. Available in an array of colors, these leggings are an ideal choice to look stylish while exercising.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenLeggings03.jpg?v=1675455256",
    price: "20.0",
  },
  {
    name: "Light Puffer",
    description:
      "This light puffer vest is made from durable nylon and will keep you dry and comfortable in all weather. Its light coating provides reliable protection from wind and rain, and its versatile fit offers maximum mobility. Perfect for moderate temperatures and varied conditions.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/green.jpg?v=1675459832",
    price: "80.0",
  },
  {
    name: "Puffer",
    description:
      "This light puffer vest is made from durable nylon and will keep you dry and comfortable in all weather. Its light coating provides reliable protection from wind and rain, and its versatile fit offers maximum mobility. Perfect for moderate temperatures and varied conditions.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenPuffer01.jpg?v=1675455329",
    price: "80.0",
  },
  {
    name: "Puffer Jacket",
    description:
      "This light puffer jacket is made from durable nylon and will keep you dry and comfortable in all weather. Its light coating provides reliable protection from wind and rain, and its versatile fit offers maximum mobility. Perfect for moderate temperatures and varied conditions.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenPufferjacket01.jpg?v=1675455364",
    price: "90.0",
  },
  {
    name: "Shorts",
    description:
      "These shorts are designed to help you reach peak performance. Constructed with high performance nylon fabric in a variety of shades, they are built to last and provide maximum comfort.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenShorts.jpg?v=1675462426",
    price: "45.0",
  },
  {
    name: "Workout Shirt",
    description:
      "This high-performance workout shirt is designed with comfort and durability in mind. Its breathable mesh construction keeps your body temperature regulated while you exercise, while the antistatic and antibacterial finish ensures it will remain light and soft to the touch, wash after wash. With its lightweight design and adjustable straps, it's sure to stay in place during even the toughest workouts.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWorkoutShirt.jpg?v=1675455464",
    price: "10.0",
  },
  {
    name: "Black Sunnies",
    description:
      "These modern black sunglasses provide 100% UV400 protection from harmful sunrays and feature mirrored lenses for a timeless and stylish look. With lightweight construction and comfortable fit, you can look cool and stay safe in any situation.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/Blacksunnies.jpg?v=1675447388",
    price: "50.0",
  },
  {
    name: "White Leather Sneakers",
    description: "",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/Differentwhiteleathersneakers01.jpg?v=1675447428",
    price: "90.0",
  },
  {
    name: "Gray Leather Sneakers",
    description:
      "These gray leather sneakers combine comfort and style for the perfect professional look. The breathable leather material ensures breathability and provides a comfortable fit, perfect for the office and other formal occasions. The handmade design is stylish and guaranteed to last.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/Greyleathersneakers.jpg?v=1675447462",
    price: "1000.0",
  },
  {
    name: "Gray Runners",
    description:
      "These gray runners are the perfect choice for running enthusiasts. These shoes provide superior breathability and comfort, so you can run longer with less fatigue. The lightweight design and airy mesh material make these shoes durable and lightweight, giving you the support you need for peak performance.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/Greyrunners.jpg?v=1675447483",
    price: "30.0",
  },
  {
    name: "Clear Sunnies",
    description:
      "These modern clear sunglasses provide 100% UV400 protection from harmful sunrays and feature mirrored lenses for a timeless and stylish look. With lightweight construction and comfortable fit, you can look cool and stay safe in any situation.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/Seethroughsunnies.jpg?v=1675447537",
    price: "25.0",
  },
  {
    name: "High Top Sneakers",
    description:
      "These stylish and durable high top sneakers are perfect for any casual look, offering superior comfort and protection with their foam cushioning and reinforced heel support.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604",
    price: "180.0",
  },
  {
    name: "Beanie",
    description:
      "This beanie is perfect for all seasons! Crafted in luxurious cashmere – it's classic, warm and comfortable. Just the thing to keep you stylish and cozy.",
    image:
      "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenHat01_e925fadd-05dc-4185-b7fe-482f9c0e49b2.jpg?v=1675454374",
    price: "100.0",
  },
];

const h2 = document.querySelector("h2");

//Recuperamos el ul de los productos
const container = document.querySelector("#products");

const renderProducts = (list) => {
  //Siempre que lancemos esta función vaciaremos el contenedor para que no sume la información si no que muestre el renderizado limpio
  container.innerHTML = "";
  //Recorremos los productos y los pintamos en el contenedor
  for (const product of list) {
    const li = document.createElement("li");
    li.innerHTML = `
  <img src="${product.image}" alt="${product.name}"/>
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <h4>${product.price}€</h4>
  `;
    container.appendChild(li);
  }
  if (list.length === 0) {
    h2.textContent = "No hay coincidencias, busca otra cosa";
  } else {
    h2.textContent = "";
  }
};

//Al arrancar la aplicación se pintan los productos iniciales
renderProducts(products);

//Recuperamos el input de texto
const inputText = document.querySelector("#inputText");
//Le asignamos un evento
inputText.addEventListener("input", (ev) => {
  const keyword = ev.target.value;
  const newProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.description.toLowerCase().includes(keyword.toLowerCase())
  );
  renderProducts(newProducts);
});
