// Mario Kart Item Box Simulator
'use strict';

// Global Variables
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0;
let numBulletBill = 0;

let resultsEl = document.getElementById('results');

// Event Listeners
document.getElementById('mainImg').addEventListener('click', collectItem);

// Event Function
function collectItem() {
    // Simulate the result of getting one item

    // Get racer position
    let position = Number(document.getElementById('position').value);

    // Simulate results for based on racer position
    if (position >= 1 && position <= 6) {
        simulate(.45,.8,.95,.99);
    } else if (position >= 7 && position <= 12) {
        simulate(.05,.1,.35,.7);
    }
}

// helper functions

function simulate(bananaChance, greenShellChance, starChance, goldenMushroomChance) {
    // Generate a random number
    let randNum = Math.random(); // Random decimal from 0 up to 1

    if (randNum < bananaChance) {
        // Banana
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
        resultsEl.innerHTML += '<img src="images/banana.jpg">';
    } else if (randNum < greenShellChance) {
        // Green Shell
        numGreenShell++;
        document.getElementById('green-shell').innerHTML = numGreenShell;
        resultsEl.innerHTML += '<img src="images/greenshell.jpg">';
    } else if (randNum < starChance) {
        // Star
        numStar++;
        document.getElementById('star').innerHTML = numStar;
        resultsEl.innerHTML += '<img src="images/star.jpg">';
    } else if (randNum < goldenMushroomChance) {
        // Golden Mushroom
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        resultsEl.innerHTML += '<img src="images/goldenmushroom.jpg">';
    } else {
        // Bullet Bill
        numBulletBill++;
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
        resultsEl.innerHTML += '<img src="images/bulletbill.jpg">';
    }
}

function simulate7to12() {
    // Generate a random number
    let randNum = Math.random(); // Random decimal from 0 up to 1

    if (randNum < 0.05) {
        // Banana
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
        resultsEl.innerHTML += '<img src="images/banana.jpg">';
    } else if (randNum < 0.1) {
        // Green Shell
        numGreenShell++;
        document.getElementById('green-shell').innerHTML = numGreenShell;
        resultsEl.innerHTML += '<img src="images/greenshell.jpg">';
    } else if (randNum < 0.35) {
        // Star
        numStar++;
        document.getElementById('star').innerHTML = numStar;
        resultsEl.innerHTML += '<img src="images/star.jpg">';
    } else if (randNum < 0.7) {
        // Golden Mushroom
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        resultsEl.innerHTML += '<img src="images/goldenmushroom.jpg">';
    } else {
        // Bullet Bill
        numBulletBill++;
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
        resultsEl.innerHTML += '<img src="images/bulletbill.jpg">';
    }
}