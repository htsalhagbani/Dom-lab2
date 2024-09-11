let cube=document.getElementsByClassName("cube")[0];
console.log(document.getElementsByClassName("cube")[0]);

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    return "#" + hr + hg + hb;
}


setInterval(() => {

   
 cube.style.backgroundColor = randomHexColor();
 cube.style.width= Math.floor(Math.random() * (600 - 3000 + 1)) + 100+"px";
 cube.style.height= Math.floor(Math.random() * (800 - 3000 + 1)) + 100+"px";

 cube.style.left=Math.floor(Math.random() * (50 - 100 + 1)) + 100+"px";
 cube.style.top=Math.floor(Math.random() * (50 - 100 + 1)) + 100+"px";

}, 200);


