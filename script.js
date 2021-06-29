const genBtn = document.getElementById("gen-btn")

genBtn.addEventListener("click", function () {
    let minValue = document.getElementById("minimum").value
    let maxValue = document.getElementById("maximum").value
    console.log('clicked')
    console.log(typeof minValue)
    minValue = parseInt(minValue)
    maxValue = parseInt(maxValue)
    getNumber(minValue, maxValue)
})

function getNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    document.getElementById("randomNumberValue").innerHTML = randomNumber;
}


