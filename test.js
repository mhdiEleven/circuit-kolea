const button = document.getElementById("lan-button");
const paragraphs = document.querySelectorAll("p.tr,h2.tr,h1.tr")
let eng = (localStorage.getItem("eng") === "true");

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
button.addEventListener("click",function(){
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

const foods ={
    11:{//coffee
        cat_name:"Coffee",
        cat_img:"png's/coffee-removebg-preview.png",
        items:{
            11:{
                name:"coffee press",
                price:"50",

                ing:"coffee powder , water"

            },
            12:{
                name:"coffee caps",
                price:"150",

                ing:"coffee , cups , chosen flavor's"
            },
            13:{
                name:"coffee l'or",
                price:"250",
                
                ing:""
            },
            14:{
                name:"iced coffee",
                price:"350",
                
                ing:"nesscoffee , sugar"
            },
            15:{
                name:"cappuccino italiano",
                price:"350",
                
                ing:"coffee milk sugar (caramell /vanilla / chocolate) "
            },
            16:{
                name:"Lait au chocolat",
                price:"80",
                
                ing:"milk , choco pwder"
            },
            17:{
                name:"affogato",
                price:"450",
                
                ing:"ice cream + coffee"
            },
            18:{
                name:"coffee latte",
                price:"350",
                ing:"consentrated milk coffee milk"
            },
            19:{
                name:"iced latte",
                price:"350",
                ing:""
            },
            20:{
                name:"turkish coffee",
                price:"350",
                ing:""
            }
        }
    },
    12:{//moktails
        cat_name:"moktails",
        cat_img:"png's/placeholder-cropped.svg",
        items:{
            11:{
                name:"pink lady",
                price:"500",

                ing:""
            },
            12:{
                name:"borabora",
                price:"450",

                ing:""
            },
            13:{
                name:"blue star",
                price:"450",

                ing:""
            },
            14:{
                name:"blue hawai",
                price:"500",

                ing:""
            },
            15:{
                name:"pina colada",
                price:"500",

                ing:""
            },
            16:{
                name:"hawai",
                price:"500",

                ing:""
            },

        }
    },
    14:{//jus
        cat_name:"jus",
        cat_img:"png's/placeholder-cropped.svg",
        items:{
            11:{
                name:"jus doronge",
                price:"400",
                ing:""
            },
            12:{
                name:"jus citron",
                price:"400",
                ing:""
            },
            13:{
                name:"jus fraise",
                price:"400",
                ing:""
            },
            14:{
                name:"jus banane",
                price:"400",
                ing:""
            },
            15:{
                name:"jus de pomme",
                price:"450",
                ing:""
            },
            16:{
                name:"jus pêche",
                price:"400",
                ing:""
            },
            17:{
                name:"jus anans",
                price:"500",
                ing:""
            },
            18:{
                name:"jus cocktail",
                price:"450",
                ing:""
            }

        }
    },
    15:{//cocktails
        cat_name:"cocktails",
        cat_img:"png's/placeholder-cropped.svg",
        items:{
            11:{
                name:"cocktail",
                price:"450",
                ing:""
            },
            12:{
                name:"pina colada",
                price:"700",
                ing:""
            },
            13:{
                name:"ananas",
                price:"600",
                ing:""
            }
        }
    },
    16:{//frappuccino
        cat_name:"frappuccino",
        cat_img:"png's/placeholder-cropped.svg",
        items:{
            11:{
                name:"fraise",
                price:"450",
                ing:""
            },
            12:{
                name:"nutella",
                price:"550",
                ing:""
            }
        }
    },
    17:{//mojitos
        cat_name:"mojitos",
        cat_img:"png's/placeholder-cropped.svg",
        items:{
            11:{
                name:"mojito classique",
                price:"400",
                ing:""
            },
            12:{
                name:"mojito fraise",
                price:"450",
                ing:""
            },
            13:{
                name:"mojito bleu",
                price:"450",
                ing:""
            },
            14:{
                name:"mojito vegetarian",
                price:"450",
                ing:""
            },
            15:{
                name:"mojito kiwi",
                price:"550",
                ing:""
            },
            16:{
                name:"mojito noix de coco",
                price:"600",
                ing:""
            }
        }
    },
    18:{//milkshakes
        cat_name:"milkshakes",
        cat_img:"png's/placeholder-cropped.svg",
        items:{
            11:{
                name:"nutella",
                price:"450",
                ing:""
            },
            12:{
                name:"fraise banane",
                price:"550",
                ing:""
            },
            13:{
                name:"ferrero",
                price:"700",
                ing:""
            },
            14:{
                name:"snickers",
                price:"650",
                ing:""
            },
            15:{
                name:"lotus",
                price:"700",
                ing:""
            }
        }
    },


    //WARNING EVERYTHING ABOVE IS DRINKS
    //EVERYTHING BELOW IS FOODS

    50:{ //pizzas
        cat_name:"pizza",
        cat_img:"png's/product/pizza viend.png",
        //now the spesific products
        items:{
            11:{
                name:"pizza simple",
                
                price:[500,1000,1500],
                ing:"sauce tomato , cheddar , mozzarila"
            },
            12:{
                name:"pizza ton",
                
                price:[650,1400,2000],
                ing:"sauce tomato , cheddar , mozzarila , tuna"
            },
            13:{
                name:"pizza viend",
                
                price:[700,1500,2200],
                ing:"sauce tomato , cheddar , mozzarila , viend"
            },
            14:{
                name:"pizza poule fumme",
                
                price:[700,1500,2200],
                ing:":sauce tomato , cheddar , mezzarila , pouli foumi"
            },
            15:{
                name:"dend fumer",
                
                price:[800,1600,2500],
                ing:"sauce tomato , cheddar , mozzarila , dend fumer"
            },
            16:{
                name:"pizza vegitarien",
                
                price:[750,1600,2300],
                ing:" sauce tomato , cheddar , mozzarila, grielle , comombear"
            },
            17:{
                name:"pizza peperoni",
                
                price:[800,1600,2500],
                ing:"sauce tomato , cheddar , mozzarila , peporoni"
            },
            18:{
                name:"pizza 4 fromage",
                
                price:[800,1600,2500],
                ing:"sauce tomato , cheddar , mozzarila, grielle , comombear"
            },
            19:{
                name:"pizza salmon",
                
                price:[850,1700,2600],
                ing:"sauce tomato , cheddar , mozzarila, salmon"
            },
            20:{
                name:"pizza enchoi",
                
                price:[850,1700,2600],
                ing:"sauce tomato , cheddar , mozzarila, enchio "
            }

        }

    },
    51:{//creps
        cat_name:"crepe",
        cat_img:"png's/placeholder-cropped.svg",
        items:  {
            11:{
                name:"crepe simple",
                ing:"cpeps ing",
                price:350,
            
            },
            12:{
                name:"crepe banana",
                ing:"crepes ing",
                price:450,
            },
            13:{
                name:"crepes ananas",
                ing:"crepes ing",
                price:550,
            },
            14:{
                name:"crepes 2 fruts",
                
                ing:"crepes ing",
                price:550,
            },
            15:{
                name:"crepe pistachio",
                
                ing:"crepes ing",
                price:600,
            },
            16:{
                name:"crepe lotus",
                
                ing:"crepes ing",
                price:600,
            },
            17:{
                name:"crepe 4choco",
                
                ing:"crepes ing",
                price:800,
            },
            18:{
                name:"goufres",
                img:""
            },

        }
    },
    52:{//gaufres
        cat_name:"gaufres",
        cat_img:"png's/placeholder-cropped.svg",
        items:{
            11:{
                name:"simple",
                price:"450",
                ing:""
            },
            12:{
                name:"banane",
                price:"550",
                ing:""
            },
            13:{
                name:"fraise",
                price:"550",
                ing:""
            },
            14:{
                name:"pistache",
                price:"700",
                ing:""
            },
            15:{
                name:"lotus",
                price:"700",
                ing:""
            },
            16:{
                name:"special",
                price:"900",
                ing:""
            }
        }
    },

    53:{//bubble waffles
        cat_name:"bubble waffles",
        cat_img:"png's/placeholder-cropped.svg",
        items:{
            11:{
                name:"simple",
                price:"450",
                ing:""
            },
            12:{
                name:"banane",
                price:"550",
                ing:""
            },
            13:{
                name:"fraise",
                price:"550",
                ing:""
            },
            14:{
                name:"pistache",
                price:"700",
                ing:""
            },
            15:{
                name:"lotus",
                price:"700",
                ing:""
            },
            16:{
                name:"le circuit",
                price:"700",
                ing:""
            }
        }
    }
}

const sub_menu = document.getElementById("subby");
if(container){
    Object.keys(foods).forEach(function(p){
        const cat = foods[p]
        if (p<50){
            container.innerHTML  += `
                    <a class="prod" href="sub-menu.html?id=${p}" ><div class="area">
                        <img src="${cat.cat_img}">
                        <p class ="growable">${cat.cat_name}</p>
                    </div> </a>
            `
        }
        else{
            container1.innerHTML  += `
                    <a class="prod" href= "sub-menu.html?id=${p}"><div class="area">
                        <img src="${cat.cat_img}">
                        <p class ="growable">${cat.cat_name}</p>
                    </div> </a>
            `
        }

        
    })
};
const params = new URLSearchParams(window.location.search);

const idd = params.get("id");
//UNIQUE TO THE SUBMENU!!!!



if(sub_menu){
    Object.keys(foods).forEach(function(id){
        sub_menu.innerHTML+=`<h1 class="type" id="pos${id}">${foods[id].cat_name}</h1>`
        let html = `<div class="grid-container1">`;
        Object.keys(foods[id].items).forEach(function(p){
            let thingy = foods[id].items[p]
            html+=`
                <a href="product.html?id=${p+id}" class="prod1"><div class="area1">
                    <img src="png's/product/${thingy.name}.png">
                    <p class ="growable">${thingy.name}</p>
                </div> </a>
        `
        })
        html+=`</div>`
        sub_menu.innerHTML+=html
        
        
    })
    //this piece of code usses the id given by the site to jump to the element with the id pos${idd}
    console.log("pos" + idd)
    document.getElementById("pos" + idd).scrollIntoView()
};

const cat_id = idd%100;
const sp_id = Math.floor(idd/100);
console.log(cat_id)
console.log(sp_id)
const butt = document.getElementById("buttons")


if(sp_id != 0){
    const del = document.getElementById("delete")
    const item = foods[cat_id].items[sp_id]; // this will be ussed for the product page heavly as it should contain all of said products meta data
    const product_img = document.getElementById("prod");
    product_img.innerHTML = `<img src="png's/product/${item.name}.png">
          <div class="group">
        <p class="product-name" id="title">${item.name}</p>
        <p class="calorie">10 Kcal</p>
      </div>`
    

    const greed = document.getElementById("ingreed");
    greed.innerHTML=item.ing
    if(!item.ing){del.remove()}
    const price = document.getElementById("pricee")
    if(Array.isArray(item.price)){
        butt.innerHTML = `
          <input type="radio" name="group" id="s" value="0" checked><label for="s">small</label>
          <input type="radio" name="group" id="m" value="1"><label for="m">medium</label>
          <input type="radio" name="group" id="l"  value="2"><label for="l">large</label> `   
        const selected = document.querySelectorAll('input[name="group"]')
        price.innerHTML= item.price[0] +"da"
        selected.forEach(function(r){
            r.addEventListener("change",function(){
                price.innerHTML= item.price[r.value] +"da"
            })
        })

        console.log(selected)
    }else{
        price.innerHTML = item.price +"da"
    }
    
    
}else{
    catt.innerHTML= foods[cat_id].cat_name
}
sub_menu.innerHTML+=`        <hr class="devide color">
        <footer>
      
      <a href="https://www.instagram.com/le.circuit/"><img src="png's/instagram-outline-svgrepo-com.svg" class="small"></a>
      <a href="https://www.facebook.com/people/Le-Circuit/61587492091959/"><img src="png's/facebook-outline-svgrepo-com.svg" class="small"></a>
      <a href="https://www.tiktok.com/@le.circuit42"><img src="png's/tiktok-outline-svgrepo-com.svg" class="small"></a>
    </footer>
    <p>call us at  <a href="tel:0555075637"></a>:0555075637</p>`
