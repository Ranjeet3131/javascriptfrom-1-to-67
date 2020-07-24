// start of assignment1


// assignment1 task1
var greet;
greet = alert('Hello! Welcome to website');
  

// assignment1 task2
function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Ranjeet");
    var password = prompt("Please enter the password:");
    if (person == null || person == "") {
        alert("Name can't be blank");  
        return false;
    } 
    else if(password.length<6){  
        alert("Error! please enter a valid password");  
        return false;  
        }  
    else{
      txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
  }


// assignment1 task3
alert("Welcome to JS Land...\nHappy Coding!");


// assignment1 task4
alert("Welcome to JS Land...");
alert("Happy Coding!");


// assignment1 task5
alert ("Hello...I can run JS through browser console");
console.log(alert);


// assignment1 task6
// assignment1 task7

// end of assignment1







// start of assignment2


// assignment2 task1
var username;


// assignment2 task2
var myname="Ranjeet Kumar Andani";


// assignment2 task3
var message="Hello World!";
alert(message);


// assignment2 task4
var message="Ranjeet Kumar Andani";
        var phoneno="03120350250";
        var age="21 years Old";
        var certi="Web Mobile application certified";
        alert(message);
        alert(phoneno);
        alert(age);
        alert(certi);


// assignment2 task5
var message="PIZZA\nPIZZ\nPIZ\nPI\nP";
        alert(message);


// assignment2 task6
var email=" ranjeetandani75@gmail.com";
        alert("my email address is"+email);


// assignment2 task7
var book="A smarter way to learn JavaScript";
        alert("I am trying to learn from the book"+book);


// assignment2 task8
document.write("Yah! I can write HTML content through JavaScript");


// assignment2 task9
var myname="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(myname);
document.write(myname);

// end of assignment2



// start of assignment3

// assignment3 task1
var age="21";
        alert("I am " + age + " Years Old");


// assignment3 task2
x=1;
integer =(Integer).application.getAttribute("hitCounter");
if(  x==null || x == 0 ) {
  /* First visit */
  alert("You have visited "+x+" of times this website");
  x = 1;
} else {
  /* return visit */
  alert("You have visited "+x+" of times this website");
  x += 1;
}
application.setAttribute("hitCounter", x);      


// assignment3 task3
var birthyear="1999";
document.write("My Birth year is "+birthyear+"<br>"+"Data type of my declared number is");
     

// assignment3 task4
var visitorname="Ranjeet Kumar";
        var producttitle="T-shirts(s)";
        var quantity="5"
        document.write(visitorname+" ordered "+quantity+ producttitle +" on meera Clothing store"+
        "My Birth year is "+birthyear+"<br>"+"Data type of my declared number is");

// end of assignment3





// start of assignment4

// assignment4 task1
var var1,var2,var3;


// assignment4 task2
//Legal Variable
var legal;
var legalOk;
var $legal;
var legal_4;
var legal567;
//Illegal Variable
var 1 to nth number;
var between space;
var @symbol;
var while;
var for;


// assignment4 task3
document.write("<h2>"+"Rules for naming JS variables"+"</h2>");
        var myname="Variable names can only contain letters, numbers, dollar  For example $my_1stVariable";
        var name="Variables must begin with a letters, dollar _. For example $name, _name or name";
        var name1="Variable names are case sensetive";
        var name2="Variable names should not be JS Keywords";
document.write(myname+"<br>"+name1+"<br>"+name2);

// end of assignment4





// start of assignment5

// assignment5 task1
var value1 = parseInt(window.prompt("Enter first number"));
var value2 = parseInt(window.prompt("Enter second number"));
var ans=parseInt(value1+value2);
document.write("The Sum of "+value1+" and "+value2+" is "+ans);


// assignment5 task2
function addNumbers()
{
        var val1 = parseInt(document.getElementById("value1").value);
        var val2 = parseInt(document.getElementById("value2").value);
        var ansD = document.getElementById("answer");
        ansD.value = val1 + val2;
}
function minusNumbers()
{
        var val1 = parseInt(document.getElementById("value1").value);
        var val2 = parseInt(document.getElementById("value2").value);
        var ansD = document.getElementById("answer");
        ansD.value = val1 - val2;
}
function multiplyNumbers()
{
        var val1 = parseInt(document.getElementById("value1").value);
        var val2 = parseInt(document.getElementById("value2").value);
        var ansD = document.getElementById("answer");
        ansD.value = val1 * val2;
}
function divideNumbers()
{
        var val1 = parseInt(document.getElementById("value1").value);
        var val2 = parseInt(document.getElementById("value2").value);
        var ansD = document.getElementById("answer");
        ansD.value = val1 / val2;
}
function modNumbers()
{
        var val1 = parseInt(document.getElementById("value1").value);
        var val2 = parseInt(document.getElementById("value2").value);
        var ansD = document.getElementById("answer");
        ansD.value = val1 % val2;
}


// assignment5 task3
var a;
document.write("Value after variable declaration is: "+a);
var b=5;
document.write("Initial Value : "+b);
x= ++b;
document.write("Value after increment is : "+x);
y=x+7;
document.write("Value after addition is : "+y);
z=--y;
document.write("Value after decrement is : "+z);
c=z%3;
document.write("The reminder is: "+c);


// assignment5 task4
var a=600;
var b=a*5;
document.write("Total cost to buy 5 tickets to movie is "+b+"PKR");


// assignment5 task5
var value1 = parseInt(window.prompt("Enter number"));
document.write("The table of "+value1+" is");
document.write(value1 + " x " + (1) + " = " + (value1 * (1)));
document.write(value1 + " x " + (2) + " = " + (value1 * (2)));
document.write(value1 + " x " + (3) + " = " + (value1 * (3)));
document.write(value1 + " x " + (4) + " = " + (value1 * (4)));
document.write(value1 + " x " + (5) + " = " + (value1 * (5)));
document.write(value1 + " x " + (6) + " = " + (value1 * (6)));
document.write(value1 + " x " + (7) + " = " + (value1 * (7)));
document.write(value1 + " x " + (8) + " = " + (value1 * (8)));
document.write(value1 + " x " + (9) + " = " + (value1 * (9)));
document.write(value1 + " x " + (10) + " = " + (value1 * (10)));


// assignment5 task6
var value1 = parseInt(window.prompt("Enter Temperature Value in farenheit"));
var c=((value1-32)*(5/9));
document.write(c+" C "+" is equals to "+value1+" F");
var value2 = parseInt(window.prompt("Enter Temperature Value in Celcius"));
var f=((c*(9/5))+32);
document.write(f+" F "+" is equals to "+value2+" C");



// assignment5 task7
var item1=650;
document.write("Price of item1 is "+item1);
var quent1 = parseInt(window.prompt("Enter Quantity if item1 "));
document.write("Quantity of item1 is "+quent1);
var item2=100;
document.write("Price of item2 is "+item2);
var quent2 = parseInt(window.prompt("Enter Quantity if item2 "));
document.write("Quantity of item2 is "+quent2);
var shicharg=100;
document.write("Shipping Charges "+shicharg+"<br>");
var ans=((item1*quent1)+(item2*quent2)+shicharg)
document.write("Total Cost of your order is "+ans);



// assignment5 task8
var quent1 = parseInt(window.prompt("Enter Total Marks"));
document.write("Total Marks: "+quent1);
var quent2 = parseInt(window.prompt("Marks Obtained "));
document.write("Marks Ontained: "+quent2);
var ans=((quent2/quent1)*100);
document.write("Percentage: "+ans+"%");



// assignment5 task9
var ans=((104.80*10)+(28*25));
document.write("Total currency in PKR: "+ans);


// assignment5 task10
// variable initilize is 5
var ans=(((5+(5))*10)/2);
document.write("after performing arithmetic operation in sequence is:"+ans);


// assignment5 task11
document.write("<h1>"+"Age Calculator"+"</h1>");
var age = 1999;
var currentdate=2020;
var ans=(currentdate-age);
document.write("Current Year: "+currentdate); 
document.write("Birth Year: "+age);
document.write("Your age is: "+ans);


// assignment5 task12
document.write("<h1>"+"The Geometrizer"+"</h1>");
var r= 20;
document.write("Radius of circle is: "+r); 
var circumcircle=(2*(3.142*r));
document.write("Circumference of circle is: "+circumcircle); 
var area=(3.142*(Math.pow(r,2)));
document.write("Area of circle is: "+area);


// assignment5 task13
document.write("<h1>"+"Life time supply calculator"+"</h1>");
var favsnack= "Lays";
document.write("Favourite Snack: "+favsnack);
var currage=21; 
document.write("Current Age: "+currage); 
var maxage=70; 
document.write("Maximum Estimated age: "+maxage);  
var amount=3;
document.write("Amount of Snacks per day: "+amount);
var ans=((maxage-currage)*amount);
document.write("You will need "+ans+" "+favsnack+" to last you until the ripe old age of "+maxage);

// end of assignment5







// start of assignment6-9

// assignment6-9 task1
var value1 = parseInt(window.prompt("Enter Number"));
document.write("Result:<br>"+"The value of a is: "+value1+"<br>");
document.write("-----------------------------------------");
b= ++value1;
document.write("The value of ++a is: "+b);
document.write("Now the value of a is : "+value1+"<br><br><br>");
c= value1++;
document.write("The value of a++ is: "+c);
document.write("Now the value of a is : "+value1+"<br><br><br>");
d= --value1;
document.write("The value of --a is: "+d);
document.write("Now the value of a is : "+value1+"<br><br><br>");
e= value1--;
document.write("The value of a-- is: "+e);
document.write("Now the value of a is : "+value1+"<br><br><br>");


// assignment6-9 task2
var a=2,b=1;
x=--a;
document.write("Result of --a is: "+x);
y=((x) - (--b));
document.write("Result of --a - --b is: "+y);
z=(y) + (++b);
document.write("Result of --a - --b + ++b is: "+z);
ans=(z)+ (b--);
document.write("Result of --a - --b + ++b + b-- is: "+z);



// assignment6-9 task3
var person = prompt("Please enter your name:");
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
    greet = alert('Hello Good Morning '+person);
else if (hrs >= 12 && hrs <= 17)
    greet = alert('Hello Good Afternoon '+person);
else if (hrs >= 17 && hrs <= 24)
    greet = alert('Hello Good Evening '+person);



// assignment6-9 task4
var value1 = parseInt(window.prompt("Enter number"));
document.write("The table of "+value1+" is");
document.write(value1 + " x " + (1) + " = " + (value1 * (1)));
document.write(value1 + " x " + (2) + " = " + (value1 * (2)));
document.write(value1 + " x " + (3) + " = " + (value1 * (3)));
document.write(value1 + " x " + (4) + " = " + (value1 * (4)));
document.write(value1 + " x " + (5) + " = " + (value1 * (5)));
document.write(value1 + " x " + (6) + " = " + (value1 * (6)));
document.write(value1 + " x " + (7) + " = " + (value1 * (7)));
document.write(value1 + " x " + (8) + " = " + (value1 * (8)));
document.write(value1 + " x " + (9) + " = " + (value1 * (9)));
document.write(value1 + " x " + (10) + " = " + (value1 * (10)));
if(value1==null){
    var num1=5;
document.write("The table of 5 is");
document.write(num1 + " x " + (1) + " = " + (num1 * (1)));
document.write(num1 + " x " + (2) + " = " + (num1 * (2)));
document.write(num1 + " x " + (3) + " = " + (num1 * (3)));
document.write(num1 + " x " + (4) + " = " + (num1 * (4)));
document.write(num1 + " x " + (5) + " = " + (num1 * (5)));
document.write(num1 + " x " + (6) + " = " + (num1 * (6)));
document.write(num1 + " x " + (7) + " = " + (num1 * (7)));
document.write(num1 + " x " + (8) + " = " + (num1 * (8)));
document.write(num1 + " x " + (9) + " = " + (num1 * (9)));
document.write(num1 + " x " + (10) + " = " + (num1 * (10)));
}


// assignment6-9 task5
var sub1 = prompt("Name of subject1:");
var sub2 = prompt("Name of subject2:");
var sub3 = prompt("Name of subject3:");
var totalmarks=100;
var obtmarks1 =prompt("Enter obtained marks of subject1:");
var obtmarks2 = prompt("Enter obtained marks of subject2:");
var obtmarks3 = prompt("Enter obtained marks of subject3:");
var percent1=((obtmarks1/totalmarks)*100);
var percent2=((obtmarks2/totalmarks)*100);
var percent3=((obtmarks3/totalmarks)*100);
document.getElementById("demo1").innerHTML =sub1;
document.getElementById("demo2").innerHTML =totalmarks;
document.getElementById("demo3").innerHTML =obtmarks1;
document.getElementById("demo4").innerHTML =percent1+"%";
document.getElementById("demo5").innerHTML =sub2;
document.getElementById("demo6").innerHTML =totalmarks;
document.getElementById("demo7").innerHTML =obtmarks2;
document.getElementById("demo8").innerHTML =percent2+"%";
document.getElementById("demo9").innerHTML =sub3;
document.getElementById("demo10").innerHTML =totalmarks;
document.getElementById("demo11").innerHTML =obtmarks3;
document.getElementById("demo12").innerHTML =percent3+"%";

// end of assignment6-9






// start of assignment9-11

// assignment9-11 task1
var greet = prompt("Enter City Name");
if (greet==="Karachi"||greet==="karachi"||greet==="KARACHI")
    greet = alert('Welcome to city of lights');
    else
    greet=alert('Please enter correct name of city');


// assignment9-11 task2
var myDate = new Date();
var hrs = myDate.getHours();
var gend = prompt("Enter Your Gender");
if (hrs < 12 && gend==="Male"||gend==="male"||gend==="MALE")
    gend = alert('Good Morning Sir');
    else if (hrs >= 12 && hrs <= 17 && gend==="Male"||gend==="male"||gend==="MALE")
    gend = alert('Good Afternoon Sir');
else if (hrs >= 17 && hrs <= 24 && gend==="Male"||gend==="male"||gend==="MALE")
    gend = alert('Good Evening Sir');
    else if (hrs < 12 && gend==="Female"||gend==="female"||gend==="FEMALE")
    gend = alert('Good Morning Mam');
    else if (hrs >= 12 && hrs <= 17 && gend==="Female"||gend==="female"||gend==="FEMALE")
    gend = alert('Good Afternoon Mam');
else if (hrs >= 17 && hrs <= 24 &&  gend==="Female"||gend==="female"||gend==="FEMALE")
    gend = alert('Good Evening Mam');
    else
    gend=alert("incorrect gender");


// assignment9-11 task3
var sigcolor = prompt("Enter Traffic light color");
if (sigcolor==="Red"||sigcolor==="red"||sigcolor==="RED")
    sigcolor = alert('Must Stop');
    else if (sigcolor==="Yellow"||sigcolor==="yellow"||sigcolor==="YELLOW")
    sigcolor = alert('Reday to move');
    else if (sigcolor==="Green"||sigcolor==="green"||sigcolor==="GREEN")
    sigcolor = alert('Move Now');
    else
    sigcolor=alert('Traffic color does not exists');


// assignment9-11 task4
var Fuel = prompt("Enter Remanning Fuel of Car in Litres ");
if (Fuel<0.25)
    Fuel = alert('Please refill the fuel in your car');
    else if (Fuel===0.25)
    Fuel=alert('fuel in your car is equal to 0.25 liters');
    else
    Fuel=alert('fuel in your car is more then 0.25 liters');


// assignment9-11 task5
        // true
        var a = 4; 
        if (++a === 5)
        { 
            alert("given condition for variable a is true"); 
        }
        var b = 82; 
        if (b++ === 83)
        { 
            alert("given condition for variable b is true"); 
        }
        var c = 12; 
        if (c++ === 13)
        { 
            alert("condition 1 is true"); 
        } if (c === 13)
        { 
            alert("condition 2 is true"); 
    } 
    if (++c < 14){ 
        alert("condition 3 is true"); 
    } if(c === 14){
         alert("condition 4 is true"); }
         var materialCost = 20000; 
         var laborCost = 2000; 
         var totalCost = materialCost + laborCost; 
         if (totalCost === laborCost + materialCost)
         { alert("The cost equals"); }
         if (true)
         { alert("True"); } 
         if (false){ alert("False"); }
         if("car" < "cat")
         { alert("car is smaller than cat"); }



// assignment9-11 task6
document.write("<h1>"+"Marks sheet"+"</h1>");
var sub1 = parseInt(prompt("Enter total marks of subject1"));
var obtmarks1 =parseInt(prompt("Enter obtained marks of subject1"));
var sub2 = parseInt(prompt("Enter total marks of subject2"));
var obtmarks2 = parseInt(prompt("Enter obtained marks of subject2"));
var sub3 = parseInt(prompt("Enter total marks of subject2"));
var obtmarks3 = parseInt(prompt("Enter obtained marks of subject3"));
var totalmarks=(sub1+sub2+sub3);
var obtmarks=(obtmarks1+obtmarks2+obtmarks3);
var totalprcent=((obtmarks/totalmarks)*100);
document.write("Total Marks: "+totalmarks);
document.write("Obtained Marks: "+obtmarks);
document.write("Percentage: "+totalprcent+"%");
if(totalprcent>=80){
document.write("Grade: A-one");
document.write("Remarks: Excellent");
}
else if(totalprcent>=70){
document.write("Grade: A");
document.write("Remarks: Good");}
else if(totalprcent>=60){
document.write("Grade: B");
document.write("Remarks: You need to improve");}
else if(totalprcent<60){
document.write("Grade: Fail");
document.write("Remarks: Sorry");}


// assignment9-11 task7
var num = prompt("Enter gussing number from 1 to 10 ");
if (num==="5")
    num = alert('Bingo! Correct answer');
    else if (num==="6"||num==="4")
    num=alert('Close enough to the correct answer');
    else
    num=alert('Your Gussed number is incorrect');


// assignment9-11 task8
var num = prompt("Enter any number ");
var num2=3;
var ans=(num % num2);
if (ans===0)
    num = alert('This number can be divided by 3');
    else
    num=alert('number can not be divided by 3');


// assignment9-11 task9
var num = prompt("Enter any number ");
if ((num % 2)===0)
    num = alert('This is Even number');
    else
    num=alert('This is odd number');


// assignment9-11 task10
var T = prompt("Enter temperature ");
if (T>40)
    T = alert('It is too hot outside');
    else if(T>30)
    T=alert('The Weather today is Normal');
    else if(T>20)
    T=alert('Today’s Weather is cool');
    else if(T>10)
    T=alert('OMG! Today’s weather is so Cool');


// assignment9-11 task11
var num1 = prompt("Enter first number ");
var num2 = prompt("Enter second number ");
var operator =prompt("Enter operator ");
console.log(num1+operator+num2);
if(operator=== '+'){
alert(num1+num2);
}
else if(operator=== '-'){
alert(num1-num2);
}
else if(operator=== '*'){
alert(num1*num2);
}
else if(operator=== '/'){
alert(num1/num2);
}
else if(operator=== '%'){
alert(num1%num2);
}
else{
alert("incorrect operator")
}

// end of assignment9-11






// start of assignment12-13

// assignment12-13 task1
var ch =prompt("Enter character ");
if (ch>=65 && ch<=90)
alert("Character is a capital letter");
else if (ch>=97 && ch<=122)
alert("Character is a small letter");
else if (ch>=48 && ch<=57)
alert("Character is a digit");
else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||
       (ch>=91 && ch<=96)||(ch>=123 && ch<=127))
alert("Character is a special symbol");


// assignment12-13 task2
var num1 =prompt("Enter first number ");
var num2 =prompt("Enter second number ");
if (num1>num2)
alert(num1);
else if (num1<num2)
alert(num2);
else
alert("both numbers are equal");


// assignment12-13 task3
var num1 =prompt("Enter any number ");
if (num1>0)
alert("This is positive number");
else if (num1<0)
alert("This is negative number");
else
alert("Zero");


// assignment12-13 task4
var ch =prompt("Enter any alphabatical character");
if (ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'||ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U')
alert("true");
else
alert("false");


// assignment12-13 task5
var pass="house123";
var pass1 =prompt("Enter Password to enter");
if (pass1===null)
alert("Please enter your password");
else if (pass1===pass)
alert("Correct! The password you entered matches the original password");
else if(pass1!==pass)
alert("Incorrect Password");


// assignment12-13 task6
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
greet = alert('Good Morning');
else if (hrs >= 12 && hrs <= 17)
greet = alert('Good Afternoon');
else if (hrs >= 17 && hrs <= 24)
greet = alert('Good Evening');


// assignment12-13 task7
var time=prompt("Enter time in 24 hours clock format like:1900");
if(time>=0000 && time<1200){
    alert('Good morning');
}
else if(time>=1200 && time<1700){
    alert('Good afternoon');
}
else if(time>=1700 && time<2100){
    alert('Good evening');
}
else if(time>=2100 && time<=2359){
    alert('Good night');
}

// end of assignment12-13






// start of assignment14-16


// assignment14-16 task1
var Obj = {
    name: '',
    set setName (param) {
        this.name = param;
    }
};
var a = Obj;
a.setName = "John";
var b = Obj;
b.setName = "Peter";


// assignment14-16 task2
var myObj = { name: "John", age: 31, city: "New York" };
var myJSON = JSON.stringify(myObj);


// assignment14-16 task3
var laptop = ["Hp ", "Dell ", "Lenovo ","Acer"];
alert(laptop);


// assignment14-16 task4
var numbers = ["1 ", "2 ", "3 ","4 ","5 "];
alert(numbers);


// assignment14-16 task5
var booleanarray = [true,false,"AND ", "OR ", "NOT ","XOR"];
alert(booleanarray);


// assignment14-16 task6
var mixedarray= [1, "Car ", "Car1 ",true];
alert(mixedarray);


// assignment14-16 task7
var qualification= ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.getElementById("demo").innerHTML ="1) "+qualification[0];
document.getElementById("demo1").innerHTML ="2) "+qualification[1];
document.getElementById("demo2").innerHTML ="3) "+qualification[2];
document.getElementById("demo3").innerHTML ="4) "+qualification[3];
document.getElementById("demo4").innerHTML ="5) "+qualification[4];
document.getElementById("demo5").innerHTML ="6) "+qualification[5];
document.getElementById("demo6").innerHTML ="7) "+qualification[6];
document.getElementById("demo7").innerHTML ="8) "+qualification[7];


// assignment14-16 task8
var student= ["Amir", "Rihan", "Abid"];
var marks= ["300", "450", "467"];
var totalmarks=500;
var ans1=((marks[0]/totalmarks)*100);
var ans2=((marks[1]/totalmarks)*100);
var ans3=((marks[2]/totalmarks)*100);
document.getElementById("demo").innerHTML ="Score of "+student[0]+" is "+marks[0]+"."+" Percentage: "+ans1+"%";
document.getElementById("demo1").innerHTML ="Score of "+student[1]+" is "+marks[1]+"."+" Percentage: "+ans2+"%";
document.getElementById("demo2").innerHTML ="Score of "+student[2]+" is "+marks[2]+"."+" Percentage: "+ans3+"%";



// assignment14-16 task9
        // taska
        var color=["red","blue","white"];
        var color1 =prompt("Enter color to add in the begnning");
        color.unshift(color1);
        document.write(color);
        // taskb
        var color=["red","blue","white"];
        var color1 =prompt("Enter color to add in the last");
        color.push(color1);
        document.write(color);
        // taskc
        var color=["red","blue","white"];
        var color1 =prompt("Enter color 1st color to add in the begnning");
        var color2 =prompt("Enter color 2nd color to add in the begnning");
        color.splice(0, 0, color1,color2);
        document.write(color);
        // taskd
        var color=["red","blue","white"];
        color.shift(color);
        document.write(color);
        // taske
        var color=["red","blue","white"];
        color.pop(color);
        document.write(color);
        // taskf
        var color=["red","blue","white"];
        var position1 =prompt("Enter color 1st position where you want to add color starting from zero index");
        position1[""];
        var color1 =prompt("Enter 1st color to add at specified index");
        var position2 =prompt("Enter color 2nd position where you want to add color starting from zero index");
        position2[""];
        var color2 =prompt("Enter 2ndt color to add at specified index");
        color.slice(position1,position2, color1,color2);
        document.write(color);
         // taskg
         var color=["red","blue","white"];
        var position3 =prompt("Enter color 1st position where you want to add color starting from zero index");
        position4[""];
        var color3 =prompt("Enter 1st color to add at specified index");
        var position4 =prompt("Enter color 2nd position where you want to add color starting from zero index");
        position4[""];
        var color4 =prompt("Enter 2ndt color to add at specified index");
        color.pop(position1,position2, color1,color2);
        document.write(color);


// assignment14-16 task10
var score=["123","75","95","34"];
document.write("Score of Students: "+score);
var sorting=score.sort(function(a, b){return a-b});
document.write("Ordered scores of Students: "+sorting);


// assignment14-16 task11
var cities=["Karachi","Hyderabad","Sukkur","Ghotki","Sadiqabad","Multan","Lahore","Islamabad"];
document.write("Cities List: "+"<br>"+cities);
var selectcity=cities.slice(2,5);
document.write("Selected cities list: "+"<br>"+selectcity);


// assignment14-16 task12
var joinstr=["This","is","my","Cat"];
document.write("Array: "+"<br>"+joinstr);
var strjoin=joinstr.join(" ");
document.write("String: "+"<br>"+strjoin);


// assignment14-16 task13
document.write("Devices: "+"<br>"+devices);
var devices1=devices.shift(devices);
document.write("Out: "+"<br>"+devices1);
var devices2=devices.shift(devices1);
document.write("Out: "+"<br>"+devices2);
var devices3=devices.shift(devices2);
document.write("Out: "+"<br>"+devices3);
var devices4=devices.shift(devices3);
document.write("Out: "+"<br>"+devices4);


// assignment14-16 task14
var devices=["Keyboard","mouse","printer","monitor"];
document.write("Devices: "+"<br>"+devices);
var devices1=devices.pop(devices);
document.write("Out: "+"<br>"+devices1);
var devices2=devices.pop(devices1);
document.write("Out: "+"<br>"+devices2);
var devices3=devices.pop(devices2);
document.write("Out: "+"<br>"+devices3);
var devices4=devices.pop(devices3);
document.write("Out: "+"<br>"+devices4);


// assignment14-16 task15
var up = document.getElementById('geeks'); 
var down = document.getElementById('gfg'); 
var select = document.getElementById("arr"); 
var elmts = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"]; 
up.innerHTML = "Click on the button to " 
            + "perform the operation"+ 
            ".<br>Array - [" + elmts + "]"; 

function GFG_Fun() { 
    for (var i = 0; i < elmts.length; i++) { 
        var optn = elmts[i]; 
        var el = document.createElement("option"); 
        el.textContent = optn; 
        el.value = optn; 
        select.appendChild(el); 
    }  
}

// end of assignment14-16






// Start of assignment17-20

// assignment17-20 task1
var twoD = [[], []];


// assignment17-20 task2
var egmatrix = [ 
    [0,1,2,3], 
    [1,0,1,2], 
    [2,1,0,1], 
 ]; 
 for(var i = 0; i < egmatrix.length; i++) { 
     document.write(egmatrix[i].join(" ") + "<br>"); 
 } 


// assignment17-20 task3
var numricdata = [1,2,3,4,5,6,7,8,9,10]; 
for(var i = 0; i < numricdata.length; i++) { 
    document.write(numricdata[i] + "<br>"); 
} 


// assignment17-20 task4
var number=prompt("Enter number of table which you want"); 
var number1=prompt("Enter length of the table");
document.write("Multiplication of table "+number);
document.write("<br>"+"Length "+number1);
document.write("<br><br>");
for(var i = 1; i <= number1; i++) { 
    for (var j=1; j<=number1 ; j++){
         } 
document.write(number + " x " + i + " = " + (number * (i))+"<br>");
}


// assignment17-20 task5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]; 
for(var i = 0; i < fruits.length; i++) { 
    document.write(fruits[i] + "<br>"); 
}
document.write("<br>");  
for(var j=0; j<fruits.length ; j++){
    document.write("elements at index "+j+" is "+fruits[j] + "<br>");
}


// assignment17-20 task6
var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write( "Counting: ");
document.write( counting); 
document.write( "Reverse Counting:");
var counting1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var revecounting=counting1.reverse();
document.write( revecounting;
var counting2=[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
document.write( "Even:");
function getEvenNumbers() {

for (var i = 0; i < counting2.length; i++) {
    if (counting2[i] % 2 === 0) {
        document.writeln(counting2[i]+",");
        
    }
}
}
getEvenNumbers();
document.write("<br><br>");
function getOddNumbers() {
document.write("Odd:"+"<br><br>")
for (var i = 0; i < counting2.length; i++) {
    if (counting2[i] % 2 === 1) {
        document.writeln(counting2[i]+",");
        
    }
}
}

getOddNumbers();
document.write("<br><br>");
function getseriesNumbers() {
document.write("Series:"+"<br><br>")
for (var i = 0; i < counting2.length; i++) {
    if (counting2[i] % 2 === 0) {
        document.writeln(counting2[i]+"k,");
        
    }
}
}

getseriesNumbers();


// assignment17-20 task7
var searching=prompt("Welcome to SSD Bakers. What do you want to order");
var search=["cake", "apple pie", "cookie", "chips", "patties"];
for(var j=0; j<search.length ; j++){
if(searching===search[j]){
  document.write (search[j]+" is "+"<b>available</b>"+" at index "+j+" in our bakery");
}
else
document.write("We are sorry."+searching+" is "+"<b>not available</b>"+" in our bakery");
}


// assignment17-20 task8
var A = [24, 53, 78, 91, 12];
var B=Math.max(A);
document.write( "Array Items:"+A);
document.write( "The Largest number is "+B);


// assignment17-20 task9
var A = [24, 53, 78, 91, 12];
var B=Math.min(A);
document.write( "Array Items:"+A);
document.write( "The Smallest number is "+B);


// assignment17-20 task10
for(var i=1; i<=100; i++){
    if(i%5===0){
        document.write(i+", ");
    }
}

// end of assignment17-20 








// start of assignment21-25


// assignment21-25 task1
var firstname=prompt("What is your first name");
var lastname=prompt("What is your last name");
var fullname=firstname+" "+lastname;
alert("Hello! "+fullname);



// assignment21-25 task2
var input=prompt("What is your favourite mobile model");
document.write("My Favourite phone is: "+input+"<br>");
var finaloutput=input.length;
document.write("Length of string: "+finaloutput);



// assignment21-25 task3
var a=("Pakistani");
document.write("String: "+a+"<br>");
var b=a.indexOf("n")
document.write("index of 'n': "+b);


// assignment21-25 task4
var a=("Hello World");
document.write("String: "+a+"<br>");
var b=a.lastIndexOf('l');
document.write("Last index of 'l': "+b);


// assignment21-25 task5
var a=("Pakistani");
document.write("String: "+a+"<br>");
var b=a.charAt(3);
document.write("Character at index 3: "+b);


// assignment21-25 task6
var firstname=prompt("What is your first name");
var lastname=prompt("What is your last name");
var fullname=firstname.concat(" "+lastname);
alert("Hello! "+fullname);


// assignment21-25 task7
var a=("Hyderabad");
document.write("City: "+a+"<br>");
var result = a.replace("Hyder", "Islam");
document.write("After replacement: "+result);


// assignment21-25 task8
var a=("Ali and Sami are best friends. They play cricket and football together.");
document.write("Message: "+a+"<br>");
var result = a.replace(/and/g, "&");
document.write("After Replacement: "+result);


// assignment21-25 task9
var a=("472");
document.write("Value: "+a+"<br>");
var b=("String");
document.write("Type: "+b+"<br>");
var c=("472");
document.write("Value: "+c+"<br>");
var result = b.replace("String", "number");
document.write("Type: "+result);



// assignment21-25 task10
var a=prompt("Write something");
document.write("User input: "+a+"<br>");
var b=a.toUpperCase();
document.write("Upper case: "+b);


// assignment21-25 task11
var a=prompt("Write something");
document.write("User input: "+a+"<br>");
var b=a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
document.write("Title case: "+b);



// assignment21-25 task12
var num="35.36";
document.write("Number: "+num+"<br>");
var b=num.replace(".","");
var c=b.toString();
document.write("Result: "+c);


// assignment21-25 task13
var username = prompt("Enter your name: ");
var charValue;
for(var i = 0; i < username.length; i++){
    charValue = username[i].charCodeAt(0);
    if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64){
        alert("Please enter a valid username")
    }
}


// assignment21-25 task14   
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var a = prompt("What do you want to order: ");
a = a.toLowerCase();
var check = false;
for(var i = 0; i < arr.length; i++){
    if(a === arr[i]){
        document.write(arr[i] + " is available at index " + i + " in our bakery");
        check = true;
    }
}
if (check === false){
    document.write("We are sorry. " + a+ " is not available in our bakery");
}


// assignment21-25 task15
var password = prompt("Enter your password: ");
var passwordLength = false;
var passwordChar = false;
var passwordInt = false;
var passwordStart = true;
for (i = 0; i < password.length; i++){
    var charValue = password[i].charCodeAt(0);
    if (charValue >= 65 && charValue <= 90 ){
        passwordChar = true;
    }
    else if (charValue >= 97 && charValue <= 122 ){
        passwordChar = true;
    }
}
for (i = 0; i < password.length; i++){
    var charValue = password[i].charCodeAt(0);  
    if (charValue >= 48 && charValue <= 57 ){
        passwordInt = true;
    }
}
var charValue = password.charCodeAt(0);
if (charValue >= 48 && charValue <= 57 ){
    passwordStart = false;
}
if(password.length >= 6){
    passwordLength = true;
}

if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
    alert("Enter valid Password");
}

else{
    alert("Welcome");
}
  

// assignment21-25 task16
var a = "University of Karachi";
var arr = a.split("");
for(var i=0; i<arr.length; i++){
    document.write(arr[i] + "<br>");
}


// assignment21-25 task17
var a=prompt("Enter something");
document.write("User input: "+a+"<br>");
var b=a.charAt(a.length-1);
document.write("Last Char of input: "+b);


// assignment21-25 task18
var a = "the quick brown fox jumps over the lazy dog";
var count = (a.match(/the/g) || []).length;
document.write("Text: " + a + "<br>");
document.write("There are " + count + " occurrence(s) of the word 'the'");

// end of assignment21-25







// start of assignment26-30


// assignment26-30 task1
var a=prompt("Enter any positive integer");
var b=Math.round(a);
var c=Math.ceil(a);
var d=Math.floor(a);
document.write("number: "+a+"<br>");
document.write("round of value: "+b+"<br>");
document.write("floor value: "+d+"<br>");
document.write("ciel value: "+c);


// assignment26-30 task2
var a=prompt("Enter any negative integer");
var b=Math.round(a);
var c=Math.ceil(a);
var d=Math.floor(a);
document.write("number: "+a+"<br>");
document.write("round of value: "+b+"<br>");
document.write("floor value: "+d+"<br>");
document.write("ciel value: "+c);


// assignment26-30 task3
var a=prompt("Enter any negative number");
var b=Math.abs(a);
document.write("The absolute value of "+a+" is "+b);


// assignment26-30 task4
var a=Math.random();
var b=Math.round(a*5)+1;
document.write("random dice value: "+b);


// assignment26-30 task5
var a=Math.random();
var b=Math.round(a*1)+1;
document.write(b+"<br>");
if(b===1){
document.write("random coin value: Tails");
}
else{
document.write("random coin value: Heads");
}


// assignment26-30 task6
var a=Math.random();
var b=Math.round(a*99)+1;
document.write("random number between 1 and 100: "+b);


// assignment26-30 task7
var a=prompt("Enter your wieght in kgs");
var b=parseFloat(a);
document.write("The weight of user is "+b+" kilograms");


// assignment26-30 task8
var a=Math.random();
var b=Math.round(a*9)+1;
var c=prompt("Enter a number betwwen 1 and 10");
if(c===b){
    document.write("Congartulations");
}
else{
    alert("Try again!");
}

// end of assignment26-30







// start of assignment31-34

// assignment31-34 task1
var a=new Date();
document.write(a);


// assignment31-34 task2
var monthNames = ["January", "February ", "March", "April", "May", "June", "July","August","September","October","November","December"];
var a= new Date();
var theMonth = a.getMonth();
var result = monthNames[theMonth];
alert("Current Month: "+result);


// assignment31-34 task3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert("Today is: "+nameOfToday);


// assignment31-34 task4
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if(nameOfToday===dayNames[0]||nameOfToday===dayNames[6]){
    alert("It’s Fun day”");
}
else{
    alert("Today is: "+nameOfToday);
}


// assignment31-34 task5
var a=new Date();
var b=a.getDate();
if(b<16){
document.write("First fifteen days of the month");
}
else{
document.write("Last days of the month");  
}


// assignment31-34 task6
var a=new Date();
document.write("Current Date: "+a+"<br>");
var c=a.getTime();
document.write("Elapsed milliseconds since january 1, 1970: "+c+"<br>");
var d=a.getMinutes();
document.write("Elapsed minutes since january 1, 1970: "+d);


// assignment31-34 task7
var a=new Date();
var b=a.getHours();
if(b<12){
alert("It's AM");
}
else{
alert("It's PM");  
}


// assignment31-34 task8
var a = new Date();
var laterDate = new Date("Dec 31, 2020");
document.write(laterDate);


// assignment31-34 task9
var a = new Date();
var b = a.getTime();
var c = new Date("Apr 24, 2020");
var d = c.getTime();
var e = b - d;
var res = e/(1000*60*60*24);
res = Math.floor(res);
document.write(res + " days have passed since 1st Ramazan, 2020");


// assignment31-34 task10
var a = new Date();
var b = a.getTime();
var c = new Date("Jan 01, 2015");
var d =c.getTime();
var e = b - d;
var res = e/(1000);
res = Math.floor(res);
document.write("On reference date: " + a + "<br>")
document.write(res + " seconds had passed since beginning of 2015");


// assignment31-34 task11
var a = new Date();
var b = a.getHours();
b = b-1
document.write("current date: " + a + "<br>");
a.setHours(b);
document.write("1 hour ago, it was " + a);


// assignment31-34 task12
var a = new Date();
var b= a.getFullYear();
b = b-100;
document.write("current date: " + a + "<br>");
a.setFullYear(b);
document.write("100 years back, it was " + a);



// assignment31-34 task13
var age = +prompt("Enter your age");
var a = new Date();
var b = a.getFullYear();
var res = b- age;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + res);


// assignment31-34 task14
var a= "Ranjeet";
var b = new Date();
c = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var d = b.getMonth();
var e = 410;
var f = 16;
var g = e * f;
var h = 350;
var i = g + h;
document.write("K-Electric Bill" + "<br>" + "<br>");
document.write("Customer Name: " + a+ "<br>");
document.write("Month: " + c[d] + "<br>");
document.write("No of units: " + e + "<br>");
document.write("Charges per unit: " + f + "<br>" + "<br>");
document.write("Net Amount Payable (within Due Date): " + g+ "<br>");
document.write("Late Payment Surcharge: " + h+ "<br>");
document.write("Gross Amount Payable (after Due Date): " + i + "<br>");

// end of assignment31-34 






// start of assignment35-38


// assignment35-38 task1
function distime(){
var a=new Date();
return a;
}
document.write(distime());


// assignment35-38 task2
function add(){
    var a=prompt("Enter First name");
    var b=prompt("Enter Last name");
    var c=(a+" "+b);
    return c;
}
alert("Hello "+add());



// assignment35-38 task3
function add(){
    var a=parseFloat(prompt("Enter First number"));
    var b=parseFloat(prompt("Enter second number"));
    var c=(a+b);
    return c;
}
alert("Sum of two numbers is: "+add());


// assignment35-38 task4
function calcu(){
    var a=parseFloat(prompt("Enter First number"));
    var b=parseFloat(prompt("Enter second number"));
    var c=prompt("Enter operator which you want to perform");
    if(c==="+"){
        var d=(a+b);
        return d;
    }
    else if(c==="*"){
        var d=(a*b);
        return d;
    }
    else if(c==="/"){
        var d=(a/b);
        return d;
    }
    else if(c==="-"){
        var d=(a-b);
        return d;
    }
    else{
        return console.error();   
    }
}
document.write("Calculated Result : "+calcu());



// assignment35-38 task5
function squares(){
    var a=parseFloat(prompt("Enter any number"));
    var b=a*a;
    return b;
}
alert("Square of inputted number is: "+squares());

         

// assignment35-38 task6
function fact(){
    var factans=1;
    var a=parseInt(prompt("Enter any number"));
    for(var i=1; i<=a; i++){
        factans=factans*i;
    }
    return factans;
}
alert("Factorial of inputted number is: "+fact());



// assignment35-38 task7
function count(){
var a=prompt("Enter the starting number");
var b=prompt("Enter the ending number");
var result=0;
for(var i=a; i<=b; i++){
   result +=i;
}
return(result);
}
alert("Counting from a to b is: "+count());


// assignment35-38 task8
var base=prompt("Enter base value to calculate right angle triangle");
var perp=prompt("Enter perpendicular value to calculate right angle triangle");
var hyp1;
var hyp2;
function calculateHypotenuse(){
  hyp1=((base*base)+(perp*perp));
function calculatesquare(){
    hyp2=Math.sqrt(hyp1);
  }
  calculatesquare();
  return hyp2;
}
document.write("Result: "+calculateHypotenuse());


// assignment35-38 task9
var b=4;
var a=prompt("Enter hieght to calculate area of triangle where width is 4");
var ans;
function triangle(){
  ans=b*a;
  return ans;
}
alert("area of triangle is "+triangle());


// assignment35-38 task10
var s=prompt("Enter any word to check whether it is palindrome or not?")
function isPalindrome () {
  var sRev = '';
  for (var i=s.length; i>0; i--) {
      sRev += s[i-1] ;
  }
  return s==sRev;
}
alert("result : "+isPalindrome());



// assignment35-38 task11
var str=prompt("Enter any sentence");
function uppercase()
{
  var array1 = str.split(' ');
  var newarray1 = [];   
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write("Example string : "+str+"<br>");
document.write("Expected outcome : "+uppercase());



// assignment35-38 task12
var text=prompt("Enter any sentence");
function longestWord() {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > maxLength) {
          maxLength = wordArray[i].length
          result = wordArray[i]
      }
  }

  return result
}
document.write("Example string : "+text+"<br>");
document.write("Expected outcome : "+longestWord());



// assignment35-38 task13
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
alert(char_count('JSResourceS.com', 'o'));




// assignment35-38 task14
var r=prompt("Enter radius");
var pie=3.14;
var ans1;
var ans2;
function calcCircumference(){
  ans1=(2*pie*r);
  return ans1;
}
function calcArea(){
  ans2=(pie*(r*r));
  return ans2;
}
document.write("The circumference is: "+calcCircumference()+"<br>");
document.write("The area is: "+calcArea());

// end of assignment35-38 






// Start of assignment38-42

// assignment38-42 task1
var a,b,c,res;
function power(a,b){
    c=Math.pow(a,b);
    return c;
}
a=parseFloat(window.prompt("Enter value of a"));
b=parseFloat(window.prompt("Enter value of b"));
res=power(a,b);
document.write("Result of a power b is :"+res);


// assignment38-42 task2
var year;
function Leap(year){ 
        if (year % 400 == 0) 
            return true; 
        if (year % 100 == 0) 
            return false;  
        if (year % 4 == 0) 
            return true; 
        return false;
}
year=parseInt(window.prompt("Enter any year to check weather it is leap year or not"));
document.write(Leap(year)? "Entered year is Leap Year" : "Entered year is Not a Leap Year" );


// assignment38-42 task3
var a,b,c,S,res,ans;
a=parseFloat(window.prompt("Enter value of a to calculate area of triangle"));
b=parseFloat(window.prompt("Enter value of b to calculate area of triangle"));
c=parseFloat(window.prompt("Enter value of c to calculate area of triangle"));
function area(a,b,c){
    if (a < 0 || b < 0 || c < 0 || (a+b <= c) || a+c <= b || b+c <= a){
        document.write("Not Valid Triangle");
    }
    else{
        ans=result(a,b,c);
        return ans;
    }
}
    function result(a,b,c){
        S=((a+b+c)/2);
        res=Math.sqrt(S*(S-a)*(S-b)*(S-c));
        return res;
    }
document.write("area of triangle is :"+area(a,b,c));



// assignment38-42 task4
var mark1=parseFloat(window.prompt("Enter marks of subject one"));
var mark2=parseFloat(window.prompt("Enter marks of subject two"));
var mark3=parseFloat(window.prompt("Enter marks of subject three"));
var tmarks=300;
var ave,perce;
function mainFunction(mark1,mark2,mark3){
    if(mark1>100||mark2>100||mark3>100){
        document.write("Invalid inputs");
    }
    else{
    var ans=("Average of obtained marks :"+avera(mark1,mark2,mark3)+"<br>"+"Percentage of obtained marks: "+perce(mark1,mark2,mark3)+"%");
    return ans;
    }
}
function avera(mark1,mark2,mark3){
    ave=((mark1+mark2+mark3)/3);
    return ave;
}
function perce(mark1,mark2,mark3){
    perce=(((mark1+mark2+mark3)/tmarks)*100);
    return perce;
}
document.write(mainFunction(mark1,mark2,mark3));



// assignment38-42 task5 incomplete
var a=("I am Ranjeet");
function pos(){
    var b=a.indexOf("R");
    return b;
}
document.write(a+"<br>"+"Position of R is :"+pos());



// assignment38-42 task6
var string = window.prompt("Enter any string");
var vowel = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];

String.prototype.character = function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
                j--;          
                secondLoop--;  
            }

        }
    }
}
string.character();
document.write("Final ans after removing vowels: "+string);



// assignment38-42 task7
var a = "Pleases read this application and give me gratuity";
var count = 0;
let vowel= false;
function consecutive() {
for (const letter of a.toLowerCase()) {
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      {
        if (vowel) {
          count++;
          vowel= false;
        } else {
          vowel= true;
        }
        break;
      }
    default:
      vowel= false
  }
}
return count
}

document.write(a+"<br>"+"final ans after removing  two vowels in succession :"+consecutive());



// assignment38-42 task8
var a=parseInt(window.prompt("Enter city distance in kilometers"));
function meter(){
    var b=a*1000;
    return b;
}
function feet(){
    var c=a*3280.84;
    return c;
}
function inch(){
    var d=a*39370.1;
    return d;
}
function centimeter(){
    var e=a*100000;
    return e;
}
document.write("Inputted distance in kilometers is: "+a+"km"+"<br>"+"Inputted distance in meters is: "+meter()+"m"+
"<br>"+"Inputted distance in feets is: "+feet()+"foot"+"<br>"+"Inputted distance in inches is: "+inch()+"inches"
+"<br>"+"Inputted distance in centimeters is: "+centimeter()+"cm");


// assignment38-42 task9 incomplete
var a=window.prompt("Enter the Hours for an employee worked above 40 hours : ");
var over_time_pay,overtime;
if(a>40){
    over_time_pay = a * 12.00;
}

document.write("Overtime of this employee is Rs."+over_time_pay);


// assignment38-42 task10
var Amount = parseInt(window.prompt("Please Enter Amount for Withdraw :"));
document.write( "Required notes of 100 is : " + parseInt((Amount / 100))+"<br>");
document.write( "Required notes of 50 is : " + parseInt((Amount % 100) / 50)+"<br>");
document.write( "Required notes of 10 is : " + parseInt((((Amount % 100) % 50) / 10))+"<br>");
document.write( "Amount still remaining is : " + parseInt((((Amount % 100) % 50) % 10))+"<br>");

// end of assignment38-42






// start of assignment43-48


// assignment43-48 task1
function eventanchor(greet){
alert(greet);
}



// assignment43-48 task2
function imgachor(msg){
alert(msg);
}


// assignment43-48 task3
function delet(r){
    var i = r.parentNode.parentNode.rowIndex;
   document.getElementById("delete").deleteRow(i);
}



// assignment43-48 task4
function swapPic() {
  document.getElementById("before").src = "./images/Nokia32.jpg";
}
function swapPicoriginal() {
  document.getElementById("before").src = "./images/galaxys8.jpg";
}



// assignment43-48 task5
var count=0;
var interval;
var increHeading=document.getElementById("increment");
var decreHeading=document.getElementById("decrement");
function timerincre(){
  count++;
  increHeading.innerHTML=count;
}
function timerdecre(){
  count--;
  decreHeading.innerHTML=count;
}
function incretimer(){
  interval=setInterval(timerincre,100);
}
function decretimer(){
  interval=setInterval(timerdecre,100);
}
function Stop(){
  clearInterval(interval);
  }

// end of assignment43-48



// start of assignment49-52


// assignment49-52 task1
function form(){
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var address = document.getElementById("address").value;
    document.write("<h2>" + "Form Successfully Submitted" + "</h2>")
    document.write("Name: " + name + "<br>")
    document.write("Fathername: " + fname + "<br>")
    document.write("Email: " + email + "<br>")
    document.write("Number: " + number + "<br>")
    document.write("Address: " + address + "<br>")
}


// assignment49-52 task2
function extra(){
    var description = document.getElementById("fulldescription").innerHTML;
    document.getElementById("shortDescription").innerHTML = description
}


// assignment49-52 task3
function edit(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function deleterow(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}


// end of assignment49-52 









// Start of assignment53-58 



// assignment53-58  task1
function cModal(){
    document.getElementById("ok").className = "hidden"  
}

function sModal(id,src){
    document.getElementById("ok").className = "visible"
    var imageModal = document.getElementById("modalImg")
    var image = document.getElementById(id);
    imageModal.src = src;
}



// assignment53-58  task2
function zoomIn(){
    var font = document.getElementById("peragraph").style.fontSize
    font = font.slice(0,length-2)
    font = parseInt(font)
    font += 10
    font = font + "px"
    document.getElementById("peragraph").style.fontSize = font
}

function zoomOut(){
    var font = document.getElementById("peragraph").style.fontSize
    font = font.slice(0,length-2)
    font = parseInt(font)
    font -= 10
    font = font + "px"
    document.getElementById("peragraph").style.fontSize = font
}


// end of assignment53-58








// start of assignment58-67


// assignment58-67 task1

//i.

var a = document.getElementById("main-content");
console.log(a.nodeName)

//ii.

var a = document.getElementById("main-content");
console.log(a.childNodes)

//iii.

var d = document.getElementsByClassName("render"); 
 var p = d.childNodes; 
console.log(p.innerHTML);

//iv.
var a = document.getElementById("first-name");
var newTxt = document.createTextNode("Ranjeet");
a.appendChild(newTxt);

//v.

var a = document.getElementById("last-name")
var newTxt = document.createTextNode("Kumar");
a.appendChild(newTxt);

var a = document.getElementById("email")
var newTxt = document.createTextNode("ranjeetandani75@gmail.com");
a.appendChild(newTxt);



// assignment58-67 task2

// i.

var a = document.getElementById("form-content");
console.log(a.nodeType)

// ii.
var a = document.getElementById("last-name");
console.log(a.nodeType)
console.log(a.childNodes)

// iii.
var a = document.getElementById("last-name");
var b = document.createElement("img")
console.log(b)

// iv.
var a = document.getElementById("main-content");
console.log(a.firstChild)
console.log(a.lastChild)

// v.
var a = document.getElementById("last-name");
console.log(a.nextSibling)
console.log(a.previousSibling)

// vi.
var a = document.getElementById("email");
console.log(a.nodeType)
console.log(a.parentNode)


// end of assignment58-67