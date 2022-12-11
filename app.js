let snowList = [];

const body = document.querySelector("body");
const baseline = window.innerHeight;
const factor = 0.8

body.addEventListener("click", (event) => {
    console.log(event.pageX, event.pageY);
    const id = Date.now();
    const snowObj = {
        id: id,
        x: event.pageX,
        y: event.pageY
    }
    snowList.push(snowObj);

    const snow = document.createElement("div");
    snow.className = "snow";
    snow.id = String(snowObj.id);
    snow.style.position = "absolute";
    snow.style.left = snowObj.x + "px";
    snow.style.top = snowObj.y + "px";
    body.appendChild(snow);
    console.log(snowList);
});

setInterval(() => {
    snowList.forEach(snowObj => {
        snow = document.getElementById(snowObj.id);
        snow.remove();
        snowObj.y += 10
        if (snowObj.y <= baseline * factor) {
            const snow = document.createElement("div");
            snow.className = "snow";
            snow.id = String(snowObj.id);
            snow.style.position = "absolute";
            snow.style.left = snowObj.x + "px";
            snow.style.top = snowObj.y + "px";
            body.appendChild(snow);
        }
    });

    snowList = snowList.filter((snowObj) => snowObj.y <= baseline * factor);
}, 1000);