let money = parseInt(prompt("Сколько у вас есть денег?"));
let apples = parseInt(prompt("Сколько вы купили яблок?"));
let breads = parseInt(prompt("Сколько вы купили батонов хлеба?"));
let cost_apples = parseInt(prompt("Сколько стоит одно яблоко?")) * apples;
let cost_breads = parseInt(prompt("Сколько стоит один батон хлеба?")) * breads;
let Result = (money - cost_apples - cost_breads);
if (Result >= 0){
    document.body.innerHTML = 'true';
} else{
    document.body.innerHTML = 'false';
}