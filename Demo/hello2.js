// Play music after first click
const music = document.getElementById("music");
document.body.addEventListener("click", () => {
    music.play().catch(() => { });
}, { once: true });

// Typewriter effect
const message = "I Have A Crush On You ❤️";
let x = 0;

function type() {
    if (x < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(x);
        x++;
        setTimeout(type, 120);
    }
}
type();

// Floating hearts
setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (20 + Math.random() * 30) + "px";
    h.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 8000);
}, 300);

// Heart animation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
window.onresize = resize;

const text = "I HAVE A CRUSH ON YOU ❤️ ";
const points = [];

for (let t = 0; t < Math.PI * 2; t += 0.08) {
    const px = 16 * Math.pow(Math.sin(t), 3);
    const py = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    points.push({ x: px * 18, y: py * 18 });
}

let i = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff4d6d";
    ctx.shadowColor = "#ff4d6d";
    ctx.shadowBlur = 20;
    ctx.font = "22px Arial";
    ctx.textAlign = "center";

    for (let j = 0; j <= i && j < points.length; j++) {
        ctx.fillText(
            text[j % text.length],
            canvas.width / 2 + points[j].x,
            canvas.height / 2 + points[j].y
        );
    }

    i++;

    if (i >= points.length) {
        setTimeout(() => {
            i = 0;
        }, 1500);
    }

    requestAnimationFrame(draw);
}

draw();