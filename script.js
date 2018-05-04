"use strict";
let total = 0;
let scale = ("On a scale of 1 to 10, ");
let questions = [
"How friendly are you?", 
"How well do you know how to fly?", 
"What level of mastery are you at in Dejarik?",
"Rate your fear of the Galactic Empire with 10 being the most afraid and one would be fearless."];
for (let i= 0; i< questions.length; i++) {
    total += Number(prompt(`${scale}${questions[i]}`));

}
    console.log(total);
if (total > 35) {
    console.log("You're the best match.");
}else if (total > 25 && total <= 35) {
    console.log("You're pretty alright.");
}else {
    console.log("He will probably rip your arms off.");
}
