let lifePoints = 100;
let botPoints = 100;

document.querySelector('#attack').addEventListener('click', playerAttack);
document.querySelector('#heal').addEventListener('click', playerHeal);

function playerAttack(evt) {
    // create random damage
    // range 10-30
    const dmg = Math.floor(Math.random() * 21) + 10;

    // damage botpoints

    botPoints -= dmg;

    // change the botpoints onscreen

    document.querySelector('.enemy span').innerHTML = botPoints;

    // triggers the botattack

    botAttack();
}

function playerHeal(evt) {
    // increase the lifepoint
    // update the lifepoints onscreen
}

function botAttack() {
    // damage playerspoint
    //change the lifepoints onscreen
}
