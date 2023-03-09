// Question_1


/*var firstName = prompt("Enter Your first Name");

var lastName = prompt("Enter Your Last Name");

var fullNAme = firstName + " " + lastName;

document.write(fullNAme);*/


// Question_2



/*var mob = prompt("Enter Your Favorate Mobile Phone");

var length = mob.length;

document.write("My Favorate Mobile Phone is: " + mob + "<br>" +"Length of the string is: " + length)*/


// Question_3

        // a

/* var str, letterToSearch;
 
 str = prompt("Enter nationality");

 letterToSearch = prompt("Enter letter to search");

 for(var i=0; i<str.length; i++)
 {
    if(str[i].toLowerCase() == letterToSearch.toLowerCase())
    {
        document.write("Index of " + letterToSearch + " is " + i + "<br>");
    }
 }*/



        //   b


 /*var country = "Pakistani"
 var country1 = country.indexOf("n")
 document.write("Index of n is:" + country1)*/

 
        //   c

 /*var country = "Pakistani"
 for(var i = 0; i < country.length; i++){
    if(country[i] == "n"){
        document.write("Index of n is:" + i)
    }

 }*/



//  Question_4

/*var str = "Hello World"
var res = str.lastIndexOf("l")
document.write("Last Index of  l is:" + res)*/
     

                // b

/*var str = "Hello World";
for(var i = 0; i < str.length; i++){
    if(str[i] == "l"){
        document.write("Last Index of  l is:" + i + "<br>")
    }
}*/                





// Question_7

/*var city = "Hyderabad"
var change = city.slice(0,5);
var change = "Islam" + city.slice(5)
 
document.write(change)*/



// Question_8

/*var message = "Ali and sami are a best friend. They play cricket and football together"
for (var i = 0; i< message.length; i++){
    if(message.slice(i,i+3) == "and"){
        message = message.slice(0,i) + "&" + message.slice(i +3)
        
    }
}
document.write(message)*/






// Question_10


var user = prompt("Enter any word","zeeshan")
var res = user.toUpperCase()
document.write(res)



// Question_11


/*var user = prompt("Enter any word","zeeshan")
  
var res  =user.slice(0,1).toUpperCase() + user.slice(1);
document.write("User Input: " + user +"<br>" + "Tital Case: " +res);*/




 // for(var i = 0; i< str.length; i++){
//     if(str[i] == "n"){
//         var result = str[i].length;
//         document.write(result)
//     }
// }





// First Letter Capatalize 


// var nam =prompt("Enter Your Name ");
// var first = nam.slice(0,1).toUpperCase();
// var other =nam.slice(1).toLowerCase();
// var res = (first + other);
// document.write(res);

 


// var month = prompt("Enter a Month")
// var char = month.length;
// if(char > 3){
//     var res = month.slice(0,3);
//     document.write(res)
// }