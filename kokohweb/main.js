/*changing background color*/
document.getElementById('body').style.backgroundColor = '#000';

/*changing html element*/
document.getElementById('text').innerHTML = 'I Am Practicing Javascript';

/*adding HTML element*/
document.getElementById('ptext').innerHTML = 'I Just Added This Line';

/*changing html image*/
document.getElementById('image').src = 'images/favicon.jpg';

/*Javascript datatypes, variables and opeator. datatypes are numbers e.g 4, 5, 6. variables are the declared letters, e.g x, y, z. and operations are the +, -, *, and division sign. typeof are used to tell what particular datatype being used e.g console.log(typeof(x)); the output should tell us that x is a number because it is declared as 4*/
var x, y, z
x = 4;
y = 5;
z = 6;
age = y+z;
/*uncomment console if you want to see result*/
// console.log(x+y-z); 

// console.log(typeof(x));

var firstname, lastname
firstname = 'Kokoh';
lastname = 'Gift';
// console.log(alert(firstname));
// console.log(prompt(firstname))
/*the backtick helps join datatype and variables together example below.*/
/*console.log(alert(`my name is ${firstname}, my lastname is ${lastname}, i'm ${age} year old`))*/

/* on and off bulb function*/
function off(){
    document.getElementById('image2').src = 'images/offbulb.gif';
}
function on(){
    document.getElementById('image2').src = 'images/onbulb.gif';
}

