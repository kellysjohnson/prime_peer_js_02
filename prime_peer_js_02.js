var strength = randomNumber(5, 10);
var evasion = randomNumber(5, 10);
var recovery = randomNumber(0, 100);
var mentalStrength = randomNumber(5, 10);

var steve = new Person("Steve Martin", "invulnerability", strength, evasion, recovery, mentalStrength);
var rom = new Person ("Rom Stevens", "telepathy", strength, evasion, recovery, mentalStrength);
var casie = new Person ("Casie Lynch", "invisibility", strength, evasion, recovery, mentalStrength);
var alicia = new Person ("Alicia Smith", "invulnerability", strength, evasion, recovery, mentalStrength);
var michael = new Person ("Michael Liquori", "flight", strength, evasion, recovery, mentalStrength);
var mary = new Person ("Mary White", "telepathy", strength, evasion, recovery, mentalStrength);
var erik = new Person ("Erik Johnson", "flight", strength, evasion, recovery, mentalStrength);
var steve = new Person ("Steve martin", "invulnerability", strength, evasion, recovery, mentalStrength);
var brian = new Person ("Brian Aamodt", "invisibility", strength, evasion, recovery, mentalStrength);
var michelle = new Person ("Michelle C. Funk", "invulnerability", strength, evasion, recovery, mentalStrength);
var chelsea = new Person ("Chelsea Okey", "telepathy", strength, evasion, recovery, mentalStrength);
var vince = new Person ("Vince Jones", "invulnerability", strength, evasion, recovery, mentalStrength);
var aaron = new Person ("Aaron Sawyer", "flight", strength, evasion, recovery, mentalStrength);
var cody = new Person ("Cody Misura", "telepathy", strength, evasion, recovery, mentalStrength);
var terry = new Person ("Terry Gunderson", "telepathy", strength, evasion, recovery, mentalStrength);
var kaitlin = new Person ("Kaitlin Muth", "invisibility", strength, evasion, recovery, mentalStrength);
var clare = new Person ("Clare Jacky", "invulnerability", strength, evasion, recovery, mentalStrength);
var tracy = new Person ("Tracy Fuller", "invulnerability", strength, evasion, recovery, mentalStrength);
var kelly = new Person ("Kelly S. Johnson", "flight", strength, evasion, recovery, mentalStrength);
var luke = new Person ("Luke Poppe", "invisibility", strength, evasion, recovery, mentalStrength);
var jeanne = new Person ("Jeanne Erickson Cooley", "flight", strength, evasion, recovery, mentalStrength);

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
			case "invulnerability":
				this.strength += 10;
				this.recovery = 100;
				this.mentalStrength -= 2;
				break;
			case "flight":
				this.strength -= 2;
				this.mentalStrength -= 2;
				this.evasion += 10;
				break;
			case "invisibility":
				this.strength -= 2;
				this.mentalStrength += 10;
				this.evasion += 5;
				break;
			case "telepathy":
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
console.log(people);
for (var i = 0; i < people.length; i++) {
	people[i].characterAbility();
 	console.log(people[i]);
}
//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

document.getElementById('thing');
