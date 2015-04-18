/*
var strength = randomNumber(5, 10);
var evasion = randomNumber(5, 10);
var recovery = randomNumber(0, 100);
var mentalStrength = randomNumber(5, 10);
*/

var rom = new Person ("Rom Stevens", "TELEPATHY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var casie = new Person ("Casie Lynch", "INVISIBILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var alicia = new Person ("Alicia Smith", "INVULNERABILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var michael = new Person ("Michael Liquori", "FLIGHT", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var mary = new Person ("Mary White", "TELEPATHY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var erik = new Person ("Erik Johnson", "FLIGHT", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var steve = new Person ("Steve Martin", "INVULNERABILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var brian = new Person ("Brian Aamodt", "INVISIBILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var michelle = new Person ("Michelle Funk", "INVULNERABILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var chelsea = new Person ("Chelsea Okey", "TELEPATHY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var vince = new Person ("Vince Jones", "INVULNERABILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var aaron = new Person ("Aaron Sawyer", "FLIGHT", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var cody = new Person ("Cody Misura", "TELEPATHY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var terry = new Person ("Terry Gunderson", "TELEPATHY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var kaitlin = new Person ("Kaitlin Muth", "INVISIBILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var clare = new Person ("Clare Jacky", "INVULNERABILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var tracy = new Person ("Tracy Fuller", "INVULNERABILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var kelly = new Person ("Kelly Johnson", "FLIGHT", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var luke = new Person ("Luke Poppe", "INVISIBILITY", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));
var jeanne = new Person ("Jeanne Erickson Cooley", "FLIGHT", randomNumber(5, 10), randomNumber(5, 10), randomNumber(50, 100), randomNumber(5, 10));

var people = [steve, rom, casie, alicia, michael, mary, erik, steve, brian, michelle, chelsea, vince, aaron, cody, terry, kaitlin, clare, tracy, kelly, luke, jeanne];

function Person(name, superpower, strength, evasion, recovery, mentalStrength){
	this.name = name;
	this.superpower = superpower;
	this.strength = strength;
	this.evasion = evasion;
	this.recovery = recovery;
	this.mentalStrength = mentalStrength;
	this.characterAbility = function(){

		switch (this.superpower){
			case "INVULNERABILITY":
				this.strength += 10;
				this.recovery = 100;
				this.mentalStrength -= 2;
				break;
			case "FLIGHT":
				this.strength -= 2;
				this.mentalStrength -= 2;
				this.evasion += 10;
				break;
			case "INVISIBILITY":
				this.strength -= 2;
				this.mentalStrength += 10;
				this.evasion += 5;
				break;
			case "TELEPATHY":
				this.strength -= 2;
				this.mentalStrength += 15;
				this.evasion -= 2;
				break;
			default:
				strength = 5;
				evasion = 5;
				recovery -= 20;
				mentalStrength = 5;
				break;
		}
	};
}

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

console.log(people);
for (var i = 0; i < people.length; i++) {
	people[i].characterAbility();
 	console.log(people[i].name + " has the superpower " + people[i].superpower + ", resulting in a strength of " + people[i].strength + ", evasion of " + people[i].evasion + ", a recovery of " + people[i].recovery + "%, and a mental strentgh of " + people[i].mentalStrength + ".");
  	newEl = document.createElement('li');
	newText = document.createTextNode(people[i].name + " has the superpower " + people[i].superpower + ", resulting in a strength of " + people[i].strength + ", evasion of " + people[i].evasion + ", a recovery of " + people[i].recovery + "%, and a mental strentgh of " + people[i].mentalStrength + ".");
	newEl.appendChild(newText);
	position.appendChild(newEl);
 }

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

