/// <reference types="../@types/jquery" />

$("#open-menu").on("click", function () {
    $("#sidebar").show();
    $(".nav-icon").animate({left:"133"})
    $("#open-menu").hide();
    $("#close-menu").show()
})

$("#close-menu").on("click", function () {
    $("#sidebar").hide();
    $("#open-menu").show();
    $("#close-menu").hide()
    $(".nav-icon").animate({left:"0"})
})

$(function(){
    $(".lds-ring").fadeOut(1000, function(){
        $(".landing").slideUp(1000,function () {
            // $("body").css("overflow", "hidden")

        })
    })
})

// let allmovie = [];


async function getData() {
    let data = await fetch ("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
    let res = await data.json()
    console.log(res.results);
    display(res.results,"movie")
}

getData()




function display(list,rowid) {
    var cartouna="";
    
    for (let i = 0; i < list.length; i++) {
        cartouna +=`<div class="col-md-4">
                    <div class="card border-0 position-relative">
                    <img src="https://image.tmdb.org/t/p/w500${list[i].poster_path}" class="card-img-top" alt="...">
                    <span class="layout position-absolute top-0 start-0 z-5 w-100 h-100 d-flex flex-column text-white">
                        <h2 class="p-2 te">${list[i].title}</h2>
                        <p class="p-2">${list[i].overview}</p>
                        <div class="date">date : ${list[i].release_date}</div>
                        <div class="star d-flex" id="star_rating">
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>
                        </div>
                        <div class="rate text-white">${list[i].vote_average.toFixed(1)}</div>
                    </span>
                </div>
            </div>`

        
    }
    document.getElementById(rowid).innerHTML = cartouna;


}


async function diplayNowplaying() {
    let data = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=b403b71152a4591a0c569aeecf42f417&language=en-US&page=1")
    let response = await data.json();
    console.log(response.results);

    display(response.results,"nowplaying")

}

diplayNowplaying()




async function diplaypopular() {
    let data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b403b71152a4591a0c569aeecf42f417&language=en-US&page=1")
    let response = await data.json();
    console.log(response);
    display(response.results,"Popular")

}
diplaypopular()




async function diplaytopRate() {
    let data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b403b71152a4591a0c569aeecf42f417&language=en-US&page=1")
    let response = await data.json();
    console.log(response);
    display(response.results,"topRate")

}
diplaytopRate()


async function diplayTrending() {
    let data = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
    let response = await data.json();
    console.log(response);
    display(response.results,"trending")

}
diplayTrending()



async function diplayupcoming() {
    let data = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=b403b71152a4591a0c569aeecf42f417&language=en-US&page=1")
    let response = await data.json();
    console.log(response);
    display(response.results,"upcoming")

}
diplayupcoming()


// *****************************************************

async function searchdate(query) {
    

    if (!query) {
        document.getElementById("search").innerHTML = "";
        return;
    }
    let data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b403b71152a4591a0c569aeecf42f417`)
    let res = await data.json();
    console.log(res.results);
    display(res.results,"search")
}

    document.getElementById('searchinput').addEventListener('keyup', function(e) {
        searchdate(e.target.value)
    }
)


//*************************************** */

let btn =document.getElementById('btn');

    btn.addEventListener('click',function () {
        rexgex()
        location.href = "/index.html"
    })

function rexgex() {
    let regName =/[A-Za-z]/;
    let regEmail =/[A-Za-z0-9+_%#-]+@[A-Za-z0-9]+\.[A-Za-z]{2,5}$\b/
    let regphone=/^\d{11}$/;
    let regAge=/^\d{2,3}$/;
    let regpassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    let name =document.getElementById('name').value;
    let email =document.getElementById('email').value;
    let phone =document.getElementById('phone').value;
    let age =document.getElementById('age').value;
    let password =document.getElementById('password').value;
    let repassword =document.getElementById('repassword').value;
    

    if (!regName.test(name)) {
        alert("Name must contain only letters");
        return false;
    }
    if (!regEmail.test(email)) {
        alert("invalid email");
        return false;
    }
    if (!regAge.test(age)) {
        alert("must be larger than 8 years old");
        return false;
    }
    if (!regphone.test(phone)) {
        alert("phone must be 12 numbers");
        return false;
    }
    if (password !== repassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;

}




