const button = document.getElementById("lan-button");
const paragraphs = document.querySelectorAll("p.tr,h2.tr,h1.tr");
let eng = localStorage.getItem("eng") === "true";

if (!eng) {
  paragraphs.forEach(function (p) {
    if (eng) {
      p.textContent = p.dataset.en;
    } else {
      p.textContent = p.dataset.fr;
    }
  });
}
console.log(eng);
button.addEventListener("click", function () {
  console.log(eng);
  eng = !eng;
  localStorage.setItem("eng", eng);
  paragraphs.forEach(function (p) {
    if (eng) {
      p.textContent = p.dataset.en;
    } else {
      p.textContent = p.dataset.fr;
    }
  });
});
//Were going to call this the language MODUS
//now were going into the dynamic

//PLEASE UNDERSTAND THE ID SYTEM
// there are 4 digits the first 2 represent the catagory
// the other 2 represent the sub catagories
// Foods start at 50 and max out at 99 while drinks start at 0 and max out on 49
// each subcatagory goes from 00 to 99
// if this isnt enough im going to kill myself
const container = document.getElementById("drinkie");
const container1 = document.getElementById("foodie");

const foods = {
  11: {
    //pizzas
    cat_name: "pizza",
    cat_img: "png's/product/pizza viend.png",
    sup:["extra cheese :150da","extra shit : 1 billion dollars"],
    //now the spesific products
    items: {
      11: {
        name: "pizza classique",

        price: [500, 1000, 1500],
        ing: "sauce tomate, cheddar, mozzarella",
      },
      12: {
        name: "pizza thon",

        price: [650, 1400, 2000],
        ing: "sauce tomate, cheddar, mozzarella, thon",
      },
      13: {
        name: "pizza viande",

        price: [700, 1500, 2200],
        ing: "sauce tomate, cheddar, mozzarella, viande",
      },
      14: {
        name: "pizza poulet fumé",

        price: [700, 1500, 2200],
        ing: "sauce tomate, cheddar, mozzarella, poulet fumé",
      },
      15: {
        name: "pizza dinde fumée",

        price: [800, 1600, 2500],
        ing: "sauce tomate, cheddar, mozzarella, dinde fumée",
      },
      16: {
        name: "pizza végétarienne",

        price: [750, 1600, 2300],
        ing: "sauce tomate, cheddar, mozzarella, grillé, camembert",
      },
      17: {
        name: "pizza pepperoni",

        price: [800, 1600, 2500],
        ing: "sauce tomate, cheddar, mozzarella, pepperoni",
      },
      18: {
        name: "pizza quatre fromages",

        price: [800, 1600, 2500],
        ing: "sauce tomate, cheddar, mozzarella, gruyère, camembert",
      },
      19: {
        name: "pizza saumon",

        price: [850, 1700, 2600],
        ing: "sauce tomate, cheddar, mozzarella, saumon",
      },
    },
  },
  12: {
    //crepes
    cat_name: "crepes",
    cat_img: "png's/placeholder-cropped.svg",
    items: {
      11: {
        name: "crepe simple",
        ing: "",
        price: 350,
      },
      12: {
        name: "crepe a la banane",
        ing: "",
        price: 450,
      },
      13: {
        name: "crepe a la fraise",
        ing: "",
        price: 550,
      },
      14: {
        name: "crepe a l'ananas",
        ing: "",
        price: 550,
      },
      15: {
        name: "crepe aux deux fruits",
        ing: "",
        price: 550,
      },
      16: {
        name: "crepe a la pistache",
        ing: "",
        price: 600,
      },
      17: {
        name: "crepe au lotus",
        ing: "",
        price: 600,
      },
      18: {
        name: "crepe aux quatre chocolats",
        ing: "",
        price: 800,
      },
      19: {
        name: "crepe le circuit",
        ing: "",
        price: 900,
      },
    },
  },
  13: {
    //gaufres
    cat_name: "gaufres",
    cat_img: "png's/placeholder-cropped.svg",
    items: {
      11: {
        name: "gaufre simple",
        price: "450",
        ing: "",
      },
      12: {
        name: "gaufre a la banane",
        price: "550",
        ing: "",
      },
      13: {
        name: "gaufre a la fraise",
        price: "550",
        ing: "",
      },
      14: {
        name: "gaufre a la pistache",
        price: "700",
        ing: "",
      },
      15: {
        name: "gaufre au lotus",
        price: "700",
        ing: "",
      },
      16: {
        name: "gaufre speciale",
        price: "900",
        ing: "",
      },
    },
  },
  14: {
    //gaufres bubble
    cat_name: "gaufres bubble",
    cat_img: "png's/placeholder-cropped.svg",
    items: {
      11: {
        name: "simple",
        price: "450",
        ing: "",
      },
      12: {
        name: "a la banane",
        price: "550",
        ing: "",
      },
      13: {
        name: "a la fraise",
        price: "550",
        ing: "",
      },
      14: {
        name: "a la pistache",
        price: "700",
        ing: "",
      },
      15: {
        name: "au lotus",
        price: "700",
        ing: "",
      },
      16: {
        name: "le circuit",
        price: "900",
        ing: "",
      },
    },
  },
  15: {
    //desserts
    cat_name: "desserts",
    cat_img: "png's/placeholder-cropped.svg",
    items: {
      11: {
        name: "jazz",
        price: "400",
        ing: "",
      },
      12: {
        name: "cheesecake",
        price: "500",
        ing: "",
      },
      13: {
        name: "tiramisu",
        price: "500",
        ing: "",
      },
      14: {
        name: "brownies",
        price: "300",
        ing: "",
      },
      15: {
        name: "flan",
        price: "200",
        ing: "",
      },
      16: {
        name: "pancakes",
        price: "450",
        ing: "",
      },
      17: {
        name: "crunchy",
        price: "450",
        ing: "",
      },
      18: {
        name: "snickers",
        price: "400",
        ing: "",
      },
    },
  },
  50: {
    //coffee
    cat_name: "Coffee",
    cat_img: "png's/product/coffee latte.png",
    items: {
      11: {
        name: "coffee press",
        price: "50",

        ing: "coffee powder , water",
      },
      12: {
        name: "coffee caps",
        price: "150",

        ing: "coffee , cups , chosen flavor's",
      },
      13: {
        name: "coffee l'or",
        price: "250",

        ing: "",
      },
      14: {
        name: "iced coffee",
        price: "350",

        ing: "nesscoffee , sugar",
      },
      15: {
        name: "cappuccino italiano",
        price: "350",

        ing: "coffee milk sugar (caramell /vanilla / chocolate) ",
      },
      16: {
        name: "Lait au chocolat",
        price: "80",

        ing: "milk , choco pwder",
      },
      17: {
        name: "affogato",
        price: "450",

        ing: "ice cream + coffee",
      },
      18: {
        name: "coffee latte",
        price: "350",
        ing: "consentrated milk coffee milk",
      },
      19: {
        name: "iced latte",
        price: "350",
        ing: "",
      },
      20: {
        name: "turkish coffee",
        price: "350",
        ing: "",
      },
    },
  },
  51: {
    //moktails
    cat_name: "moktails",
    cat_img: "png's/product/pink lady.png",
    items: {
      11: {
        name: "pink lady",
        price: "500",

        ing: "",
      },
      12: {
        name: "borabora",
        price: "450",

        ing: "",
      },
      13: {
        name: "blue star",
        price: "450",

        ing: "",
      },
      14: {
        name: "blue hawai",
        price: "500",

        ing: "",
      },
      15: {
        name: "pina colada",
        price: "500",

        ing: "",
      },
      16: {
        name: "hawai",
        price: "500",

        ing: "",
      },
    },
  },
  52: {
    //jus
    cat_name: "jus",
    cat_img: "png's/product/jus fraise.png",
    items: {
      11: {
        name: "jus doronge",
        price: "400",
        ing: "",
      },
      12: {
        name: "jus citron",
        price: "400",
        ing: "",
      },
      13: {
        name: "jus fraise",
        price: "400",
        ing: "",
      },
      14: {
        name: "jus banane",
        price: "400",
        ing: "",
      },
      15: {
        name: "jus de pomme",
        price: "450",
        ing: "",
      },
      16: {
        name: "jus peche",
        price: "400",
        ing: "",
      },
      17: {
        name: "jus ananas",
        price: "500",
        ing: "",
      },
      18: {
        name: "jus cocktail",
        price: "450",
        ing: "",
      },
    },
  },

  53: {
    //frappuccino
    cat_name: "frappuccino",
    cat_img: "png's/product/frappuccino fraise.png",
    items: {
      11: {
        name: "frappuccino fraise",
        price: "450",
        ing: "",
      },
      12: {
        name: "frappuccino nutella",
        price: "550",
        ing: "",
      },
      13: {
        name: "frappuccino caramel",
        price: "450",
        ing: "",
      },
    },
  },
  54: {
    //mojitos
    cat_name: "mojitos",
    cat_img: "png's/product/mojito fraise.png",
    items: {
      11: {
        name: "mojito classique",
        price: "400",
        ing: "",
      },
      12: {
        name: "mojito fraise",
        price: "450",
        ing: "",
      },
      13: {
        name: "mojito blue",
        price: "450",
        ing: "",
      },
      14: {
        name: "mojito vegetarian",
        price: "450",
        ing: "",
      },
      15: {
        name: "mojito kiwi",
        price: "550",
        ing: "",
      },
      16: {
        name: "mojito noix de coco",
        price: "600",
        ing: "",
      },
    },
  },
  55: {
    //milkshakes
    cat_name: "milkshakes",
    cat_img: "png's/product/milkshake fraise banane.png",
    items: {
      11: {
        name: "milkshake nutella",
        price: "450",
        ing: "",
      },
      49: {
        name: "milkshake nutella banane",
        price: "550",
        ing: "",
      },
      12: {
        name: "milkshake fraise banane",
        price: "550",
        ing: "",
      },
      13: {
        name: "milkshake ferrero",
        price: "700",
        ing: "",
      },
      14: {
        name: "milkshake snickers",
        price: "650",
        ing: "",
      },
      15: {
        name: "milkshake lotus",
        price: "700",
        ing: "",
      },
      16: {
        name: "milkshake bounty",
        price: "700",
        ing: "",
      },

      18: {
        name: "milkshake pistache",
        price: "700",
        ing: "",
      },
    },
  },

  //WARNING EVERYTHING ABOVE IS DRINKS
  //EVERYTHING BELOW IS FOODS
};

const sub_menu = document.getElementById("subby");
if (container) {
  Object.keys(foods).forEach(function (p) {
    const cat = foods[p];
    if (p < 50) {
      container.innerHTML += `
                    <a class="prod" href="sub-menu.html?id=${p}" ><div class="area">
                        <img src="${cat.cat_img}">
                        <p class ="growable">${cat.cat_name}</p>
                    </div> </a>
            `;
    } else {
      container1.innerHTML += `
                    <a class="prod" href= "sub-menu.html?id=${p}"><div class="area">
                        <img src="${cat.cat_img}">
                        <p class ="growable">${cat.cat_name}</p>
                    </div> </a>
            `;
    }
  });
}
const params = new URLSearchParams(window.location.search);

const idd = params.get("id");
//UNIQUE TO THE SUBMENU!!!!

if (sub_menu) {
  Object.keys(foods).forEach(function (id) {
    sub_menu.innerHTML += `<h1 class="type" id="pos${id}">${foods[id].cat_name}</h1>`;
    let html = `<div class="grid-container1">`;
    Object.keys(foods[id].items).forEach(function (p) {
      let thingy = foods[id].items[p];
      html += `
                <a href="product.html?id=${p + id}" class="prod1"><div class="area1">
                    <img src="png's/product/${thingy.name}.png">
                    <p class ="growable">${thingy.name}</p>
                </div> </a>
        `;
    });
    html += `</div>`;
    sub_menu.innerHTML += html;
  });
  //this piece of code usses the id given by the site to jump to the element with the id pos${idd}
  console.log("pos" + idd);
  document.getElementById("pos" + idd).scrollIntoView();
}

const cat_id = idd % 100;
const sp_id = Math.floor(idd / 100);
console.log(cat_id);
console.log(sp_id);
const butt = document.getElementById("buttons");
//for the product page

if (sp_id != 0) {
  const del = document.getElementById("delete");
  const item = foods[cat_id].items[sp_id]; // this will be ussed for the product page heavly as it should contain all of said products meta data
  const product_img = document.getElementById("prod");
  product_img.innerHTML = `<img src="png's/product/${item.name}.png">
          <div class="group">
        <p class="product-name" id="title">${item.name}</p>
        
      </div>`;
  const greed = document.getElementById("ingreed");

  if(foods[cat_id].sup){
    let html = `<h2 class="title">supplument</h2>`
    for (let x of foods[cat_id].sup){
        html += `<p class="space" id="ingreed">${x}</p>`
    }
    greed.innerHTML = html
  }
  

  greed.innerHTML += `<h2 class="title" id="delete">Ingrediants</h2> <p class="space" id="ingreed">${item.ing}</p>`;
  
  if (!item.ing) {
    del.remove();
  }
  const price = document.getElementById("pricee");
  if (Array.isArray(item.price)) {
    butt.innerHTML = `
          <input type="radio" name="group" id="s" value="0" checked><label for="s">small</label>
          <input type="radio" name="group" id="m" value="1"><label for="m">medium</label>
          <input type="radio" name="group" id="l"  value="2"><label for="l">large</label> `;
    const selected = document.querySelectorAll('input[name="group"]');
    price.innerHTML = item.price[0] + "da";
    selected.forEach(function (r) {
      r.addEventListener("change", function () {
        price.innerHTML = item.price[r.value] + "da";
      });
    });

    console.log(selected);
  } else {
    price.innerHTML = item.price + "da";
  }
} 
sub_menu.innerHTML += `        <hr class="devide color">
        <footer>
      
      <a href="https://www.instagram.com/le.circuit/"><img src="png's/instagram-outline-svgrepo-com.svg" class="small"></a>
      <a href="https://www.facebook.com/people/Le-Circuit/61587492091959/"><img src="png's/facebook-outline-svgrepo-com.svg" class="small"></a>
      <a href="https://www.tiktok.com/@le.circuit42"><img src="png's/tiktok-outline-svgrepo-com.svg" class="small"></a>
    </footer>
    <p>contact us  <a href="tel:0555075637"></a>:0555075637</p>`;
