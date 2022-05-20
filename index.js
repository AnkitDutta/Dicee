function letsRoll(){
    var m = Math.floor(Math.random()*6) + 1;
    var n = Math.floor(Math.random()*6) + 1;
    document.getElementById("img1").setAttribute("src", "dice"+m+".png");
    document.getElementById("img2").setAttribute("src", "dice"+n+".png");
    
    if(m>n){
        document.querySelector("h1").style.fontSize = "7rem";
        document.querySelector("h1").innerText = "Player 1 Wins!🏆";
    }
    else if(m===n){
        document.querySelector("h1").style.fontSize = "7rem";
        document.querySelector("h1").innerText = "Draw!🔁";
    }
    else{
        document.querySelector("h1").style.fontSize = "7rem";
        document.querySelector("h1").innerText = "Player 2 Wins!🏆";
    }
    




    // document.querySelector("#img1").setAttribute("src","dice4.png");
}