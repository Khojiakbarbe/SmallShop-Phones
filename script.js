$(document).ready(function(){
    myCards(myProject);
})


$("#service").click(function(){
  alert("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
})
$("#callCenter").click(function(){
  alert("Call Number: +99873 777-77-77")
})
$("#location").click(function(){
  alert("~~~~~~~~~~~~Location~~~~~~~~")
})


// Search
$("#search").on("keyup", function(){
    let value = $(this).val().toLowerCase();
    console.log(value);
    let search = myProject.filter(function(elem){
        return elem.name.toLowerCase().includes(value)
    })
    myCards(search);
})



// Checkbox

// All
let forAll;
$("#all").click(function (){
  forAll = "all";
  takeAll(forAll);
})

function takeAll(theAll){
  let all = myProject.filter((elem)=>{
    if(elem.all === theAll){
      return true
    }else{
      return false
    }
  })
  console.log("working");
  myCards(all)
}


// Filter start
let iphone
$("#iphone").click(function(){
  iphone = this.innerHTML.toLowerCase();
  searchIphone(iphone);
})

function searchIphone(myIphone){
  let iphone1 = myProject.filter((elem)=>{
    if(elem.company.toLowerCase() === myIphone){
      return true;
    }else{
      return false
    }
  })
  myCards(iphone1)
}

let xiaomi;
$("#xiaomi").click(function(){
  xiaomi = this.innerHTML.toLowerCase();
  searchRedmi(xiaomi)
})

function searchRedmi (myRedmi){
  let xiaomi = myProject.filter((elem)=>{
    if(elem.company.toLowerCase() === myRedmi){
      return true
    }else{
      return false
    }
  })
  myCards(xiaomi)
}

let samsung;

$("#galaxy").click(function(){
  samsung = this.innerHTML.toLowerCase();
  searchSamsung(samsung);
})
function searchSamsung(galaxy){
  let samsung = myProject.filter((elem)=>{
    if(elem.company.toLowerCase() === galaxy){
      return true
    }else{
      return false
    }
  })
  myCards(samsung)
}

let huawei;
$("#huawei").click(function(){
  huawei = this.innerHTML.toLowerCase();
  searchHuawei(huawei) 
})
function searchHuawei(myHuawei){
  let huawei = myProject.filter((elem)=>{
    if(elem.company.toLowerCase() === myHuawei){
      return true
    }else{
      return false
    }
  })
  myCards(huawei);
}

let tecno;
$("#tecno").click(function(){
  tecno = this.innerHTML.toLowerCase();
  searchTecno(tecno);
})

function searchTecno(myTecno){
  let tecno = myProject.filter((elem)=>{
    if(elem.company.toLowerCase() === myTecno){
      return true;
    }else{
      return false
    }
  })
  myCards(tecno)
}

let vivo;
$("#vivo").click(function(){
  vivo = this.innerHTML.toLowerCase();
  searchVivo(vivo);
})

function searchVivo (myVivo){
  let vivo = myProject.filter((elem)=>{
    if(elem.company.toLowerCase() === myVivo){
      return true
    }else{
      return false
    }
  })
  myCards(vivo)
}
// Brand finished

// Price start

let price1;
$("#until100").click(function(){
  price1 = 100;
  searchUntil100(price1);
})
function searchUntil100(myPrice1){
  let until100 = myProject.filter((elem)=>{
    if(elem.price <= myPrice1){
      return true
    }else{
      return false
    }
  })
  myCards(until100)
}

let price2;
$("#until200").click(function(){
  price2 = 200;
  searchUntil200(price2);
})

function searchUntil200(myPrice2){
  let until200 = myProject.filter((elem)=>{
    if(elem.price > 100  && elem.price <= myPrice2){
      return true
    }else{
      return false
    }
  })
  myCards(until200)
}

let price3;
$("#until400").click(function(){
  price3 = 400;
  searchUntil400(price3)
})

function searchUntil400(myPrice3){
  let until400 = myProject.filter((elem)=>{
    if(elem.price > 200 && elem.price <= myPrice3){
      return true
    }else{
      return false
    }
  })
  myCards(until400)
}

let price4;
$("#until800").click(function(){
  price4 = 800;
  searchUntil800(price4);
})

function searchUntil800(myPrice4){
  let until800 = myProject.filter((elem)=>{
    if(elem.price > 400 && elem.price <= myPrice4){
      return true
    }else{
      return false
    }
  })
  myCards(until800)
}

let price5;
$("#from800").click(function(){
  price5 = 800;
  searchFrom800(price5)
})
function searchFrom800(myPrice5){
  let from800 = myProject.filter((elem)=>{
    if(elem.price > price5){
      return true
    }else{
      return false
    }
  })
  myCards(from800)
}
// Price finished

// Color start
let red;
$("#red").click(function(){
  red = this.innerHTML.toLowerCase();
  searchRed(red);
})
function searchRed(myRed){
  let red = myProject.filter((elem)=>{
    if(elem.color === myRed){
      return true
    }else{
      return false
    }
  })
  myCards(red)
}

let blue;
$("#blue").click(function(){
  blue = this.innerHTML.toLowerCase();
  searchRed(blue);
})
function searchBlue(myBlue){
  let blue = myProject.filter((elem)=>{
    if(elem.color === myBlue){
      return true
    }else{
      return false
    }
  })
  myCards(blue)
}

let green;
$("#green").click(function(){
  green = this.innerHTML.toLowerCase();
  searchGreen(green)
})
function searchGreen(myGreen){
  let green = myProject.filter((elem)=>{
    if(elem.color === myGreen){
      return true
    }else{
      return false
    }
  })
  myCards(green)
}

let gray;
$("#gray").click(function(){
  gray = this.innerHTML.toLowerCase();
  searchGray(gray);
})

function searchGray(myGray){
  let gray = myProject.filter((elem)=>{
    if(elem.color === myGray){
      return true
    }else{
      return false
    }
  })
  myCards(gray)
}

let black;
$("#black").click(function(){
  black = this.innerHTML.toLowerCase();
  searchBlack(black)
})
function searchBlack(myBlack){
  let black = myProject.filter((elem)=>{
    if(elem.color === myBlack){
      return true
    }else{
      return false
    }
  })
  myCards(black)
}

let white;
$("#white").click(function(){
  white = this.innerHTML.toLowerCase();
  searchWhite(white)
})
function searchWhite(myWhite){
  let white = myProject.filter((elem)=>{
    if(elem.color === myWhite){
      return true
    }else{
      return false
    }
  })
  myCards(white)
}

let silver;
$("#silver").click(function(){
  silver = this.innerHTML.toLowerCase();
  searchSilver(silver)
})
function searchSilver(mySilver){
  let silver = myProject.filter((elem)=>{
    if(elem.color === mySilver){
      return true
    }else{
      return false
    }
  })
  myCards(silver)
}

function myLow(){
  let low = myProject.sort((a,b)=>{
    return a.rate - b.rate
  })
  myCards(low)
}

function myHight(){
  let hight = myProject.sort((a,b)=>{
    return b.rate - a.rate
  })
  myCards(hight)
}


function myA (){
  let aToB = myProject.sort((a,b)=>{
    return a.name.toLowerCase().localeCompare(b.name)
  })
  myCards(aToB)
}

function myB(){
  let bToA = myProject.sort((a,b)=>{
    return b.name.toLowerCase().localeCompare(a.name)
  })
  myCards(bToA)
}

function myCards(elements){
    $("#myProect").empty();

    elements.forEach(elem=>{
        let myCard = ` <div class="col-md-3 col-sm-6 cardShadow">
        
        <div class="card h-100">
          <div class="img">
          <a href="#">  <img src="${elem.img}" class="card-img-top" alt="...">
          </a>
          </div>
          <div class="card-body ">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">color:   ${elem.color}</p>
            <p class="card-text">memory:   ${elem.memory}Gb</p>
            <p class="card-text"> price:   ${elem.price}$</p>
          </div>
          <div class="card ">
              <small class="text-muted">🧡${elem.rate}</small>
            </a>
          </div>
        </div>
      </div>`
      $("#myProect").append(myCard);
    })
}