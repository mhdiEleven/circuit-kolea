const button = document.getElementById("lan-button");
console.log(button)
let eng = localStorage.getItem("eng") === "true";

function translate() {
  let paragraphs = document.querySelectorAll("p.tr, h2.tr, h1.tr ");

  paragraphs.forEach(function (p) {
    if (eng) {
      p.textContent = p.dataset.en;
    } else {
      p.textContent = p.dataset.fr;
    }
  },true);
}
// Apply saved language when page loads
translate();
button.addEventListener("click", function () {
  console.log('clicked')
  eng = !eng;
  localStorage.setItem("eng", eng);
  translate();
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
  11: {//pizza
    //pizzas
    cat_name: "pizza",
    cat_img: "png's/product/pizza viande.png",
    sup:["extra cheddar :200da","extra mozzarella :200da", "extra gruyère :200da" , "extra camembert :200da"],
    //now the spesific products
    items: {
      11: {
        name: "pizza classique",
        price: [550, 1100, 1500],
        ing: "sauce tomate, cheddar, mozzarella",
        inge: "tomato sauce, cheddar, mozzarella",
        show: true
      },
      12: {
        name: "pizza thon",
        price: [700, 1400, 2000],
        ing: "sauce tomate, cheddar, mozzarella, thon",
        inge: "tomato sauce, cheddar, mozzarella, tuna"
      },
      13: {
        name: "pizza viande",
        price: [800, 1500, 2400],
        ing: "sauce tomate, cheddar, mozzarella, viande",
        inge: "tomato sauce, cheddar, mozzarella, meat"
      },
      14: {
        name: "pizza poulet fumé",
        price: [800, 1500, 2400],
        ing: "sauce tomate, cheddar, mozzarella, poulet fumé",
        inge: "tomato sauce, cheddar, mozzarella, smoked chicken"
      },
      15: {
        name: "pizza dinde fumée",
        price: [900, 1700, 2600],
        ing: "sauce tomate, cheddar, mozzarella, dinde fumée",
        inge: "tomato sauce, cheddar, mozzarella, smoked turkey"
      },
      16: {
        name: "pizza végétarienne",
        price: [800, 1600, 2500],
        ing: "sauce tomate, cheddar, mozzarella, champignons, oignon, olives, poivron rouge",
        inge: "tomato sauce, cheddar, mozzarella, mushrooms, onion, olives, red pepper"
      },
      17: {
        name: "pizza pepperoni",
        price: [800, 1600, 2500],
        ing: "sauce tomate, cheddar, mozzarella, pepperoni",
        inge: "tomato sauce, cheddar, mozzarella, pepperoni"
      },
      18: {
        name: "pizza quatre fromages",
        price: [800, 1600, 2500],
        ing: "sauce tomate, cheddar, mozzarella, gruyère, camembert",
        inge: "tomato sauce, cheddar, mozzarella, gruyere, camembert"
      },
      19: {
        name: "pizza saumon",
        price: [900, 1800, 2600],
        ing: "sauce tomate, cheddar, mozzarella, saumon",
        inge: "tomato sauce, cheddar, mozzarella, salmon"
      },
    },
  },
  12: {//crepe
    //crepes
    cat_name: "crepes",
    cat_img: "png's/product/crepe deux fruits.png",
    sup :["Mars:200da","Snickers:200da" , "kitkat:200da" , "Ferrero:200da" , "Raffaello:200da" , "beuno:200da","bounty:200da"],
    items: {
      11: {
        name: "crepe simple",
        price: 350,
      },
      12: {
        name: "crepe banane",
        price: 450,
      },
      13: {
        name: "crepe fraise",
        price: 550,
      },
      14: {
        name: "crepe ananas",
        price: 550,
      },
      15: {
        name: "crepe deux fruits",
        price: 550,
      },
      16: {
        name: "crepe pistache",
        price: 600,
      },
      17: {
        name: "crepe lotus",
        price: 600,
      },
      18: {
        name: "crepe quatre chocolats",
        price: 800,
      },
      19: {
        name: "crepe le circuit",
        price: 900,
      },
    },
  },
  13: {// waffles
    //gaufres
    cat_name: "gaufres",
    cat_img: "png's/product/gaufre speciale.png",
    sup :["Mars:200da","Snickers:200da" , "kitkat:200da" , "Ferrero:200da" , "Raffaello:200da" , "beuno:200da","bounty:200da"],
    items: {
      11: {
        name: "gaufre simple",
        price: "450"
      },
      12: {
        name: "gaufre banane",
        price: "550"
      },
      13: {
        name: "gaufre fraise",
        price: "550"
      },
      14: {
        name: "gaufre pistache",
        price: "700"
      },
      15: {
        name: "gaufre lotus",
        price: "700"
      },
      16: {
        name: "gaufre speciale",
        price: "900"
      },
    },
  },
  14: {//bubble waffes
    //gaufres bubble
    cat_name: "bubble waffles",
    cat_img: "png's/product/bubble waffles fraise.png",
    sup :["Mars:200da","Snickers:200da" , "kitkat:200da" , "Ferrero:200da" , "Raffaello:200da" , "beuno:200da","bounty:200da"],
    items: {
      11: {
        name: "bubble waffles simple",
        price: "450"
      },
      12: {
        name: "bubble waffles banane",
        price: "550"
      },
      13: {
        name: "bubble waffles fraise",
        price: "550"
      },
      14: {
        name: "bubble waffles pistache",
        price: "700"
      },
      15: {
        name: "bubble waffles lotus",
        price: "700"
      },
      16: {
        name: "le circuit",
        price: "900"
      },
    },
  },
  15: {//desserts
    //desserts
    cat_name: "desserts",
    cat_img: "png's/product/tiramisu.png",
    items: {
      11: {
        name: "jazz",
        price: "400"
      },
      12: {
        name: "cheesecake",
        price: "500"
      },
      13: {
        name: "tiramisu",
        price: "450"
      },
      14: {
        name: "brownies",
        price: "300"
      },

      17: {
        name: "crunchy",
        price: "450"
      },
      18: {
        name: "snickers",
        price: "400"
      },
    },
  },
  16: { // bakeries
    cat_name: "viennoiseries",
    cat_img: "",
    items: {
      11: {
        name:"Croissant",
        sup:["fourer au chocolate : 100da"],
        price:"50"
      },
      12:{
        name:"croissant au butter",
        sup:["fourer au chocolate : 150da"],
        price:"100"
      },
      13:{
        name: "Pain au Chocolat",
        price: "50"
      },
      14:{
        name:"Pain au Raisins",
        price: "contact the dev",
        show: false
      },
      15:{
        name:"Pain suisse",
        price: "100"
      },
      16:{
        name:"Napolitaine",
        price:"contact",
        show:false
      },
      17:{
        name:"Torsade",
        price: "contact",
        show:false
      },
      18:{
        name:"Chausson",
        price:"120",
        ing:'',
        sup:["promenade/amand/les duex"]

      },
      19:{
        name:"Grillagé pomme amande",
        price: "contact",
        show:false
      },
      20:{
        name:"Triangle aux Amandes",
        price:"120",

      },
      21:{
        name:"Grillagé",
        price: "120",
      }
    },

  },
  50: {//coffe
    //coffee
    cat_name: "Coffee",
    cat_img: "png's/product/coffee latte.png",
    items: {
      11: {
        name: "coffee press",
        price: "50",
      },
      12: {
        name: "coffee caps",
        price: "150",
      },
      13: {
        name: "coffee l'or",
        price: "250",
      },
      14:{
        name:"caps gourmand",
        price:"150",
      },
      15: {
        name: "iced coffee",
        price: "350",

        ing: "nesscoffee , sugar",
      },
      16: {
        name: "cappuccino italiano",
        price: "350",

        ing: "coffee milk sugar (caramell /vanilla / chocolate) ",
      },
      17: {
        name: "Lait au chocolat",
        price: "80",

        ing: "milk , choco pwder",
      },
      18: {
        name: "affogato",
        price: "450",

        ing: "ice cream + coffee",
      },
      19: {
        name: "coffee latte",
        price: "350",
        ing: "consentrated milk coffee milk",
      },
      20: {
        name: "iced latte",
        price: "350"
      },
      21: {
        name: "turkish coffee",
        price: "350"
      },
    },
  },
  51: {//moktails
    //moktails
    cat_name: "moktails",
    cat_img: "png's/product/pink lady.png",
    items: {
      11: {
        name: "pink lady",
        price: "500",
      },
      12: {
        name: "borabora",
        price: "450",
      },
      13: {
        name: "blue star",
        price: "450",
      },
      14: {
        name: "blue hawai",
        price: "500",
      },
      15: {
        name: "pina colada",
        price: "500",
      },
      16: {
        name: "hawai",
        price: "500",
      },
    },
  },
  52: {//jus
    //jus
    cat_name: "jus",
    cat_img: "png's/product/jus fraise.png",
    items: {
      11: {
        name: "jus doronge",
        price: "400"
      },
      12: {
        name: "jus citron",
        price: "450"
      },
      13: {
        name: "jus fraise",
        price: "450"
      },
      14: {
        name: "jus banane",
        price: "450"
      },
      15: {
        name: "jus de pomme",
        price: "500"
      },
      16: {
        name: "jus peche",
        price: "450"
      },
      17: {
        name: "jus ananas",
        price: "600"
      },
      18: {
        name: "jus cocktail",
        price: "450"
      },
    },
  },

  53: {//frappuccino
    //frappuccino
    cat_name: "frappuccino",
    cat_img: "png's/product/frappuccino fraise.png",
    items: {
      11: {
        name: "frappuccino fraise",
        price: "450"
      },
      12: {
        name: "frappuccino nutella",
        price: "550"
      },
      13: {
        name: "frappuccino caramel",
        price: "450"
      },
    },
  },
  54: {//mojitos
    //mojitos
    cat_name: "mojitos",
    cat_img: "png's/product/mojito fraise.png",
    items: {
      11: {
        name: "mojito classique",
        price: "400"
      },
      12: {
        name: "mojito fraise",
        price: "450"
      },
      13: {
        name: "mojito blue",
        price: "450"
      },
      14: {
        name: "mojito vegetarian",
        price: "450"
      },
      15: {
        name: "mojito kiwi",
        price: "550"
      },
      16: {
        name: "mojito noix de coco",
        price: "600"
      },
    },
  },
  55: {//milkshakes
    //milkshakes
    cat_name: "milkshakes",
    cat_img: "png's/product/milkshake fraise banane.png",
    items: {

      11: {
        name: "milkshake nutella",
        price: "550"
      },
      48: {
        name: "milkshake nutella banane",
        price: "550"
      },
      49:{
        name: "milkshake choco",
        price:"450"
      },
      50:{
        name:"milkshake choco banane",
        price : "500"
      },
      12: {
        name: "milkshake fraise banane",
        price: "550"
      },
      13: {
        name: "milkshake ferrero",
        price: "700"
      },
      14: {
        name: "milkshake snickers",
        price: "650"
      },
      15: {
        name: "milkshake lotus",
        price: "700"
      },
      16: {
        name: "milkshake bounty",
        price: "700"
      },

      18: {
        name: "milkshake pistache",
        price: "700"
      },
    },
  },


};

const sub_menu = document.getElementById("subby");
if (container) {
  console.log("were in a container")
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
      if (foods[id].items[p].show !== false){
        let thingy = foods[id].items[p];
        html += `
                  <a href="product.html?id=${p + id}" class="prod1"><div class="area1">
                      <img src="png's/product/${thingy.name}.png">
                      <p class ="growable tr" data-fr = "${thingy.name}"data-en="${(thingy.namee)?thingy.namee:thingy.name}">${thingy.name}</p>
                      <p class = "orange">${(Array.isArray(thingy.price))?thingy.price[0]:thingy.price} da</p>
                  </div> </a>
          `;
      }});
      
    html += `</div>`;
    sub_menu.innerHTML += html;
  });
  //this piece of code usses the id given by the site to jump to the element with the id pos${idd}
  console.log("pos" + idd);
  document.getElementById("pos" + idd).scrollIntoView();
}
if(sub_menu){
  sub_menu.innerHTML += `        <hr class="devide color">
          <footer>
        
        <a href="https://www.instagram.com/le.circuit/"><img src="png's/instagram-outline-svgrepo-com.svg" class="small"></a>
        <a href="https://www.facebook.com/people/Le-Circuit/61587492091959/"><img src="png's/facebook-outline-svgrepo-com.svg" class="small"></a>
        <a href="https://www.tiktok.com/@le.circuit42"><img src="png's/tiktok-outline-svgrepo-com.svg" class="small"></a>
      </footer>
      <p>contact us  <a href="tel:0778762465"></a>:0778762465</p>`;

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
        <p class="product-name tr" id="title" data-fr="${item.name}" data-en="${(item.namee)?item.namee:item.name}">${item.name}</p>
        
      </div>`;
  const greed = document.getElementById("ingreed");

  if(foods[cat_id].sup){
    let html = `<div class = "equal"><h2 class="title">supplements</h2>`
    for (let x of foods[cat_id].sup){
        html += `<p class="space" id="ingreed">${x}</p>`
    }
    html += `</div>`
    greed.innerHTML = html
  }
  

  
  
  if (item.ing) {
    greed.innerHTML += `<div>
      <h2 class="title" id="delete">Ingrediants</h2> <p data-en="${(item.inge) ?  item.inge : item.ing}" data-fr="${item.ing}" class="space tr"  id="ingreed">${item.ing}</p>
    </div>`;
  }
  const price = document.getElementById("pricee");
  if (Array.isArray(item.price)) {
    butt.innerHTML = `
          <input type="radio" name="group" id="s" value="0" checked><label for="s">Large</label>
          <input type="radio" name="group" id="m" value="1"><label for="m">Semi</label>
          <input type="radio" name="group" id="l"  value="2"><label for="l">Mega</label> `;
    const selected = document.querySelectorAll('input[name="group"]');r
    price.innerHTML = item.price[0] + "da";

      greed.innerHTML = html
    
    
    selected.forEach(function (r) {
      r.addEventListener("change", function () {
        price.innerHTML = item.price[r.value] + "da";
      });
    });

    console.log(selected);
  } else {
    price.innerHTML = item.price + "da";
  }
  if(item.sup){
    let html = `<div class = "equal"><h2 class="title">supplements</h2>`
    for (let x of item.sup){
        html += `<p class="space" id="ingreed">${x}</p>`
    }
    greed.innerHTML += html
  }
} 

translate();
