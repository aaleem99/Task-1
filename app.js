//Age
var age=prompt("What is your age");
        if (age>= "18") {
            document.write("You are an adult <br>")
        }
         else if(age>="13" && age<"18") 
         {
            document.write("You are a teenager <br>")
            }
        else{
            document.write("You are a Child <br>")
        }

//Weather
var weather=prompt("Write a weather sunny, rainy, snowy & others ");
        if (weather== "sunny") {
            document.write("Wear sunglasses! <br>")
        }
         else if(weather== "rainy") {
            document.write("Take an umbrella. <br>")
         }
         else if(weather== "snowy") {
            document.write("Wear warm clothes. <br>")
         }
        else{
            document.write("Enjoy your day! <br>")
        }


//Grade Determination

var grade=+prompt("Write a obtain marks");
if (grade>= 90 && grade<=100) {
    document.write("Grade:A <br>")
}
 else if(grade>= 80 && grade<=89) {
    document.write("Grade:B <br>")
 }
 else if(grade>= 70 && grade<=79) {
    document.write("Grade:C <br>")
 }
 else if(grade>= 60 && grade<=69) {
    document.write("Grade:D <br>")
 }
else{
    document.write("Grade:F <br>")
}

//login
var user=prompt("Write a User Name");
var pass=prompt("Enter Your Password");

if (user== "admin" && pass=="1234") {
    document.write("Login Successful! <br>")
}
else{
    document.write("Login Failed <br>")
}


//Range Checker
var grade=+prompt("Write a Number");
if (grade>= 1 && grade<=10) {
    document.write("This Number is between 1 and 10 <br>")
}
 else if(grade>= 11 && grade<=20) {
    document.write("This Number is between 10 and 20 <br>")
 }
else{
    document.write("This Number is out of range <br>")
}


