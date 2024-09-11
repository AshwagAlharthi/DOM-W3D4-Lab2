const cubeDiv = document.getElementById("cubeContainer");
cubeDiv.classList.add("cube");

function cubeChanges() {
    let maxValue = 0xFFFFFF;
    let randomNum = Math.floor(Math.random() * maxValue);
    randomNum = randomNum.toString(16);
    let randomColor = randomNum.padStart(6, 0);
    randomColor = `#${randomColor.toUpperCase()}`;

    cubeDiv.style.backgroundColor = randomColor;
    let width = Math.floor(Math.random() * 100);
    let height = Math.floor(Math.random() * 100);

    cubeDiv.style.width = `${width}vw`;
    cubeDiv.style.height = `${height}vh`;
    cubeDiv.style.transform = `translate(${Math.random() * 10}vw, ${Math.random() * 10}vh)`;
}

setInterval(cubeChanges, 2000);
