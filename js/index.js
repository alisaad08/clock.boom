function Clock() {
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(Clock, 1000);


// body style li

let b = document.body.style;
b.backgroundColor = "blue";
b.display = "flex";
b.justifyContent = "center";
b.alignItems = "center";
b.height = "650px";
b.width = "200px";
b.marginLeft = "650px"
b.fontSize = "50px"

// soat style li

let a = document.getElementById('clock').style;
a.border = "5px solid black";
a.boxShadow = "0px 0px 20px 10px black";
a.padding = "20px"; 
a.fontSize = "50px";
a.backgroundColor = "white"



    // MEDIA SO'ROV (JavaScript orqali)
    if (window.matchMedia("(max-width: 600px)").matches) {
        // Telefon uchun o'lchamlar
        b.width = "100%";
        b.marginLeft = "0";
        a.fontSize = "30px"; // Telefonda kichikroq shrift
    } else {
        // Kompyuter uchun o'lchamlar
        b.width = "100%"; 
        b.marginLeft = "0";
        a.fontSize = "50px";
    }


