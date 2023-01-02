let inputAdults = document.getElementById("adults");
let inputWhoDrinks = document.getElementById("whoDrinks");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");
let result = document.getElementById("result");

function meat(duration){
    if (duration >= 4){
        return 650;
    }
    else{
        return 400;
    }
}

function beer(duration){
    if (duration >= 4){
        return 2000;
    }
    else{
        return 1200;
    }
}

function drinks(duration){
    if (duration >= 4){
        return 1500;
    }
    else{
        return 1000;
    }
}

function calc(){
    let adults = inputAdults.value;
    let whoDrinks = inputWhoDrinks.value;
    let children = inputChildren.value;
    let duration = inputDuration.value;

    let totalMeat = meat(duration) * adults + meat(duration) / 2 * children;
    let totalBeer = beer(duration) * whoDrinks;
    let totalDrinks = drinks(duration) * adults + drinks(duration) / 2 * children;

    result.innerHTML = `<p>Você vai precisar de:</p>`
    result.innerHTML += `<ul>${totalMeat / 1000}Kg de carne;</ul>`
    result.innerHTML += `<ul>${totalBeer / 1000}L de cerveja (${Math.ceil(totalBeer / 350)} latas de 350ml de cerveja);</ul>`
    result.innerHTML += `<ul>${totalDrinks / 1000}L de bebidas (${Math.ceil(totalDrinks / 2000)} garrafas de 2L de bebidas);</ul>`
}