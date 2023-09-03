//DOM - document --> deerh buh kod
//console.log(document);
// document.getElementsByTagName()-> tag nereer handah
//var h1 = document.getElementsByTagName('h1')[0];
//console.log(h1);
// .innerText = "solih text bicne"-> tag dtrh text solino
//h1.innerText="Sn bnu ta";
// .style>styleName = "style utga" --> tag-d style uguh
/*h1.style.color="brown";
var h12 = document.getElementsByTagName('h1')[1];
h12.innerText="haay";
h12.style.color="purple";
var p = document.getElementsByTagName('p')[0]
console.log(p);
function click2(){
	p.innerText = "Click button dragdlaa";
	p.innerText="Click button dragdlaa";
	p.style.color="red";
} */
var ageInput = document.getElementsByTagName('input')[0];
var birthYear = document.getElementsByTagName('h4')[0];
var currentYear = 2023,myYear;
console.log(ageInput);
console.log(birthYear);
function age(){
	myYear = currentYear - ageInput.value;
	console.log(ageInput.value);
	birthYear.innerText = "Таны төрсөн он: " + myYear;
} 