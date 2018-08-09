function disappear() {
    var front = document.getElementById("card1__front");
    var btn = document.getElementById("cards__button--back")
    front.classList.toggle("disappear");
     
    if (front.style.display === "none") {
        front.style.display = "flex"; 
        btn.style.visibility = "hidden";
    } else {
        setTimeout( function(){front.style.display = "none"; }, 800);
    }
}


function disappear2() {
    var front = document.getElementById("card2__front");
    var btn = document.getElementById("cards2__button--back")
    front.classList.toggle("disappear");
     
    if (front.style.display === "none") {
        front.style.display = "flex";
        btn.style.visibility = "hidden";
    } else {
        setTimeout( function(){front.style.display = "none"; }, 1000);
    }
}

function disappear3() {
    var front = document.getElementById("card3__front");
    var btn = document.getElementById("cards3__button--back")
    front.classList.toggle("disappear");
     
    if (front.style.display === "none") {
        front.style.display = "flex";
        btn.style.visibility = "hidden";
    } else {
        setTimeout( function(){front.style.display = "none"; }, 1000);
    }
}
    // var front = document.getElementById("card1__front");
    // front.classList.toggle("disappear");


// var title = document.getElementById("title");
// var text = documen.getElementById("text");
// title.classList.toggle('disappear');
//     text.classList.toggle('disappear');
