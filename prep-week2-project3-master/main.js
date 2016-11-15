/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Output each item in the following Array to your console within their own paragraphs:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
var i=0;
counter = livingRoom.length;
// document.getElementById("q1").innerHTML = "Length = " + counter;

while (i < counter) {

document.getElementById("q1").innerHTML += livingRoom[i] +" "; //" <p> livingRoom = " + livingRoom[i] +" </p>";
i++;
}
// document.getElementById("q1").innerHTML = "i = " + i;


// 2. Using a loop, log numbers 22-33 within their own paragraphs.

var i=0;

while (i < 34) {
     document.getElementById("q2").innerHTML += "</p>" + i +" </p> ";
     i++;

 }




// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
var i=75;

while (i < 105) {
     document.getElementById("q3").innerHTML += "</p>" + i +" </p> ";
     i = i+5;

 }



// 4. Write a while loop that displays paragraphs of "This is how a professional loops." to the HTML page 5 times.

message = "this is how a professional loops";

for (i=0; i!=5; i++){
 document.getElementById("q4").innerHTML += "</p>" + message +" </p> ";


}




// 5. Separately, use both a for loop and while loop to do the same thing.
//     Display in unique paragraphs the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.


for (i=10;i<135;i=i+25){
  document.getElementById("q5").innerHTML += "<p>At home, I have " + i + " cats.</p>";

}
  document.getElementById("q5").innerHTML += "<hr>";

// document.getElementById("q5").innerHTML += "<p>While Loop:</p>";
i=10;
 while(i < 135){
  document.getElementById("q5").innerHTML += "<p>At home, I have " + i + " cats.</p>";
  i+=25;
 }



// 6. Given the following Array, display in unique paragraphs'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

counter = numArray.length;
// document.getElementById("q6").innerHTML += "<p>" +  counter + "</p>";

i = 0;
while (i < counter){
    even = numArray[i];
   if (even%2 === 0) {
document.getElementById("q6").innerHTML += "<p>" + even+ " = Even</p>";
  }
  else{
  document.getElementById("q6").innerHTML +="<p>" + even + " = Odd</p>";
  }
i++;
}

// document.getElementById("q6").innerHTML += "<p>" +  even + "</p>";
// document.getElementById("q6").innerHTML += "<p>" +  i + "</p>";


// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];

var numThrees = [];

var count = numArray.length;

for (i=0; i<count; i=i+3){

     numThrees.push(numArray[i]);

}
  document.getElementById("q7").innerHTML +="<p>" + numThrees + " </p>";






// 8. Write a loop that outputs the following to unique paragraphs:
// #
// ##
// ###
// ####
// #####
// ######
// #######


var par1 = [];
var sign = "#";

for (i=0; i<7; i++){

     par1.push(sign);
     sign += '#';
    document.getElementById("q8").innerHTML +="<p>" + par1[i] + " </p>";
    //  document.getElementById("q8").innerHTML +="<p>" + par1[i] + " </p>";

}







// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

var num = 0;
var i = 0;
var counter = 0;

while (i < 101) {
  i++;
      if num %3 === 0 || num ||

}




// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"
// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
// 14. After comparing, determine who has won; the computer or the human!
// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.







// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]




// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)






// 18. Use a do/while loop to keep flipping the coin until you get tails.






// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #






// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.









/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
