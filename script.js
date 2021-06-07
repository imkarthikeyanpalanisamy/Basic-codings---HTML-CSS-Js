   // cat,Cat and CAT are different thing NOT SAME
        //myCollege and Mycollge both are different thing
        var message;
        message=('Hello, Javascript!');
        //alert('Hai');
        console.log(message);
        // This is a single line comment
        /*
        *This is 
        *a multi 
        *line comment
        */
       console.log('Normal program');
       var age=21;
       var gpa=8.2;
       console.log(age);
       console.log(gpa);
    
       var octNum=0255;
       var hexNum=0xFF;
       console.log(octNum);
       console.log(hexNum);
    
       var amount = 1.1e6;
       console.log(amount);
       console.log(Number.MAX_VALUE);
       console.log(Number.MIN_VALUE);
    
       var mayBeInfinity = Number.MAX_VALUE + Number.MAX_VALUE;
       var mayBeNegativeInfinity = -10/0;
       console.log(mayBeInfinity);
       console.log( mayBeNegativeInfinity);
       console.log(mayBeInfinity +  mayBeNegativeInfinity);
    
       var name = 'Karthi'; 
       var name = 'Digital Marketing Learner'; 
       // This is invalid
       var something = 'Not Okay';
    
       var yes = true;
       var no = false;
       console.log(true);
       console.log(false);
    
       var weird;
       console.log(weird);
    
       var emptyValue = null;
       console.log(emptyValue);
    
       var age=21;
       console.log(typeof age);
       age = 'I am neither young nor old';
       console.log(typeof age);
    
       console.log(typeof mayBeInfinity);
    
       var result = 10 + 20;
       console.log(result);
    
       result = result - 10;
       console.log(result);
    
       result = result * 3;
       console.log(result);
    
       result = result / 2;
       console.log(result);
    
       result = result % 4;
       console.log(result);
    
       result++;
       console.log(result);// 3
    
       result--;
       console.log(result); // 2
    
       ++result;
       console.log(result);// 3
    
      
       var otherVar = ++result + 5 ;
       console.log(otherVar); // 9
    
       var otherVar = result++ + 3 ;
       console.log(otherVar); // 7
       console.log(result); // 5
        
       var lang = "Javascript";
       console.log("Hello, " + lang + "!");
       console.log(lang + 101);
       age = 'Two Thousand';
       console.log(2001 + typeof age);
       
       // Relational Operators
       console.log('10 > 5 =', 10 > 5);
       console.log('10 > 5 =', 10 < 5);
       console.log('10 <= 5 =', 10 <= 5);
       console.log('10 >= 5 =', 10 >= 5);
       console.log('10 == 10 =', 10 == 10); // true
       console.log('10 !=5 =', 10 !=5);    //false
       console.log('10 === "10" =', 10 === "10");  //false
       console.log('10 !== "10" =', 10 !== "10");  //true
       // Logical / Boolean Operators
    
       console.log('!=true =', !true );  //NOT
       console.log('10 || "ok" =', 10 || "ok"); // OR
    
       var someUserInput= 5;
       //pseduo code to get user input
       var num = someUserInput || 0;
       console.log(num);
       console.log('true && "false" =', true && "false"); //AND
    
       //Conditional operators
       //syntax
       //variableName = booleanExpress ? trueValue:falseValue;
    
       var age = 18, isMinor;
       isMinor = age <= 17? 'No': 'Yes';
       console.log('isMinor=', isMinor);
    
       var balance = 4000, credit = 3000;
      // balance = balance + credit;
       balance += 7000;
       console.log('balance=', balance);// 7000
    
       var num = 10;
       num -= 3;
       console.log('num=', num);
    
       var num = 10;
       num *= 3;
       console.log('num=', num);
    
       var num = 10;
       num /= 3;
       console.log('num=', num);
    
       var num = 10;
       num %= 3;
       console.log('num=', num);
    
       var personOneAge = 45;
       var personTwoAge = 50;
       /// if and else statement
       if (personOneAge > personTwoAge){
           console.log('Person one age is older than person two age');
       }else {
           console.log('Person two is older than person one');
       }
       var personThreeAge = 75;
    
       /// if-else statement
       if (personOneAge > personTwoAge && personOneAge > personThreeAge) {
           console.log('Person one is older than person two and three');
       }
       else if(personTwoAge > personOneAge && personTwoAge > personThreeAge) {
           console.log('Person two is older than person one and three');
       }
       else{
        console.log('Person three is older than person one and two');
       }
    
       /// Find whether a person can be allowed
       /// take roller coaster
    
       var age = 16;
       var parentPermission = false;
       if ( age >=18 || parentPermission){
       console.log('You are allowed for roller coaster ride');
       }
       else {
        console.log('You are NOT allowed for roller coaster ride');
       }
       var age = 16;
       var parentPermission = true;
       if ( (age <=18 && parentPermission)|| age>=25){
       console.log('You are allowed for roller coaster ride');
       }
       else {
        console.log('You are NOT allowed for roller coaster ride');
       }
    
       //alert('Hello, Javascript!');
    
       //prompt
       //var name = prompt('what is your name?' , 'Anonymous');
       //alert('Hello, ' + name + '!');
    
       //confirm
       //var response = confirm('I am okay with Javascript learning deeply');
       //alert(response);
        
       //var age =prompt('what is your age', 18);
       //if( age < 18){
        ////var  parentPermission = ( 'I have my parents permission');
        //if(parentPermission){
            //alert('you are allowed for roller coaster ride');
        //}else{
            //alert('you are NOT allowed for roller coaster ride');
        //}
      //}else{
        //alert('you are allowed for roller coaster ride');
      //}
    
      // do while loop
      //do {
          //console.log('Playing game...');
          //var continuePlaying = confirm('Continue playing?');
      //}   while(continuePlaying);
      
          //console.log('The End');
       
      // while loop
      var count = 10;
      while(count>0){
      console.log('count', count++);
      }
      console.log('while loop ended');
     
      // for loop
      // syntax
      // for(initializeCount;condition;incrementValue){
      //block  of statement
      //}
    
      for(var daysInWeek = 1; daysInWeek<=7;daysInWeek++){
      console.log('daysInWeek', daysInWeek);
      }
    
      // contiune and break keywords
    
      //var month = prompt('Enter a number between 1 to 12', 7);
      //for(var days = 1; days <= 31; days++) {
      //if((month == 4 || month == 6 || month == 9 || month == 11) && days == 31) continue;
      //console.log('days', days);
      //if(month == 2 && days == 28)break;
      //}
    
      // switch statements
    
      day = 6;
      switch(day){
          case 1:
          console.log('sunday');
          break;
          case 2:
          console.log('monday');
          break;
          case 3:
          console.log('tuesday');
          break;
          case 4:
          console.log('wednesday');
          break;
          //case 5:
          //console.log('thursday');
          //case 6:
          //console.log('friday');
          //break;
          case 5:
          console.log('thursday');
          break;
          //case 6:
          //case 7:
          //console.log('saturday');
          //break;
          case 6:
          console.log('friday');    
          case 7:
          console.log('saturday');
          break;
          default :
          console.log('There is no much days in the week');
    
      }
    
          //switch('Hello javascript'){
          //case 'Hello' + 'javascript':
          //console.log('The end');
          //break;
          //default:
          //console.log('Go away from javascript');
      //}
        //day =5;
        //switch(true){
        // case day > 0 &&  day < 5:
        // console.log('weekdays'); 
        // break;
        //case day ==5 || day !=5:
        //console.log('holidays');
        //break;
        // default:
        //console.log('Are you talking about which cases');
         //}
    
          //syntax for function
          //function functionName(param1, param2){
            //  statements                                  // block (body)
          //}
          //functionName(); // function calling or invoking function
          
    
          //function using single parameter
          function greet1(){
          console.log('welcome')
          }
          greet1();
    
          function greet2( Name, Message){
              return "Hello, "+ Name +"!" + Message;
          }
             var greetMessage = greet2('How are you?', 'karthi');
             console.log(greetMessage);
    
             
          function greet3( Name, Message){
              if (Name){
              return "Hello, "+ Name +"!" + Message;
          } else {
            return "Hello, "+ Name +"!" + Message;
          }
     }
             var greetMessage = greet3('How are you?', 'karthi');
             console.log(greetMessage);
     
    
             var person = new Object(); // for creating object and is called as constructor syntax
             console.log( person instanceof Object);
             person.name = 'karthi';
             person.profession = 'digital marketing learner';
    
             console.log(person.name);
             console.log(person.profession);
    
             person.sayHi = function(){
             console.log('Hi' + person.name);
             }    
             person.sayHi()          
             
           var num1 =10;
           var num2 = num1;
           var obj1 = new Object();
           var obj2= obj1;
           console.log('num1: ', num1);
           console.log('num2: ', num2);
    
           num2 = 20;
           obj2.newProp = 'By Reference';
           console.log('obj1 :', obj1);
           console.log('obj2 :', obj2);
          
           // object method
             var user1 = new Object(); 
             user1.name = 'karthi';
             user1.profession = 'digital marketing learner';
    
             user1.sayHi = function(){
             console.log('Hi' + user1.name);
             }    
    
             user1.sayHi();   
    
             // Another method for object
             var user2 = {
             name : 'karthi',
             profession : 'digital marketing learner',
             sayHi: function(){
             console.log('Hi' + this.name); //this
             }   
            } 
    
             user2.sayHi();
    
             var user3 = user2;
             user3.sayHi();
             user2 = null;                   //this
             user3.sayHi();
    
             //first name
             //user1.first name = 'some name'
             user1['first name'] = 'some name';
             console.log(user1);
     
            var propName = 'first name';
            console.log(user1[propName]);
    
            for(prop in user3){
            console.log(user3[prop]);
            }
    
            var user = new Object();
            console.log(user);
    
            user.name='karthi';
            user.sayHi=function(){
                console.log('Hi');
            }
    
            console.log(user.hasOwnProperty('name'));
            console.log(user.hasOwnProperty('sayHi'));
            console.log(user.hasOwnProperty('valueOf'));
            console.log(user.hasOwnProperty('toString'));
            console.log(user.hasOwnProperty('profession'));
    
            console.log(user.toString());
            console.log(user.valueOf());
            
            var employee2 = {
                name: 'kumar'
            };
    
            employee2.name = 'karthi';
        
            var employee3 = {};
    
            Object.defineProperty(employee3, 'name',{
                configurable:true,
                writable:false,
                enumarable:false,
                value:'karthi'
            });
    
            employee3.designation='Digital marketer';
            employee3.salery='30000';
    
            for(prop in employee3){
                console.log(employee3[prop]);
            }
    
            Object.defineProperty(employee3, 'salery',{
                configurable:true,
                writable:false,
                enumerable:false
              
            });
    
            console.log('Results after enumerable change');
            for(prop in employee3){
                console.log(employee3[prop]);
            }
      
            employee3.bonus = 10000;
            console.log(employee3);
            delete employee3.bonus;
            console.log(employee3);
    
            employee3.bonus = 10000; 
            Object.defineProperty(employee3, 'bonus',{
                configurable:false,
            });
    
            var employee4 = {
                name:'karthi',
                yoj:2021
            };
            
            employee4.bonus = 10;
    
            var employee5 = {
            name:'Arun',
            _bonus:10,
            yoj:2019
            };
            Object.defineProperty(employee5,'bonus', {
                get: function(){
                    return this._bonus;
                },
                set: function(newBonus){
                    if (newBonus <= 20 && this.yoj <2015 ) {
                        this._bonus = newBonus;
                    }
                  }
              });
    
              employee5.bonus = 10;
              console.log(employee5);
           
    
              var employee6 = {};
              Object.defineProperties(employee6, {
                  name:{
                      value:'karthi'
                  },
                      yoj:{
                      value:2016,
                      writable:true
                  },
                     _bonus:{
                      value:0,
                      writable:true
                  },
                    bonus: {
                    get: function(){
                    return this._bonus;
                },
                    set: function(newBonus){
                      if (newBonus <= 20 && this.yoj <2015 ) {
                        this._bonus = newBonus;
                    }
                  }
                }
              });
    
              employee6.yoj=2010;
              employee6.bonus=10;
              console.log(employee6);
              console.log(employee6.bonus);
           
              var employee1={
                  name:'karthi',
                  designation:'BE',
                  salery:50000
              };
    
            console.log(employee1 instanceof Object); //true
    
            var socialMedia={
                  name:'whatsapp',
                  designation:'videomaking',
                  salery:'high',
              };
    
            console.log(socialMedia instanceof Object); //true
           
                function Employee(name, designation, salery){
                this.name = name;
                this.designation = designation;
                this.salery = salery;
            }
    
            var employee1 = new  Employee('karthi','Quality specialist',30000);
            console.log(employee1);
            var employee2 = new Employee('naveen','manager',35000);
            console.log(employee2);
    
            console.log(employee1 instanceof Employee);
            console.log(employee2 instanceof Object);
            
           
           // Array
           //sample syntax
    
           var myArr={
               0:1000,
               1:'karthi',
               2:true,
               3:null
           };
    
           //construct syntax
    
           var lang= new Array();
           var students= new Array(10);
           console.log(students);
    
           var frontEndFrameworks = new Array ('React Js', 'Angualar Js', 'Vue Js');
           console.log(frontEndFrameworks);
         
            // literal syntax
            var lang= [];
           var students= [undefined,undefined,undefined];
           console.log(students);
    
           var frontEndFrameworks =  ['React Js', 'Angualar Js', 'Vue Js'];
           console.log(frontEndFrameworks);
           console.log(frontEndFrameworks[1]);
           console.log(frontEndFrameworks.length);
         
           frontEndFrameworks[4] = 'ember Js';
           frontEndFrameworks[100] = 'Backbone Js'; /// use Methods for better results
           console.log(frontEndFrameworks.length);
         
    
          console.log(frontEndFrameworks instanceof Array); // multiple frameworks is not working properly
          console.log(Array.isArray (frontEndFrameworks)); // USE THIS ONE
    
             var user = {
             name:'Digital marketer',
             sayHi: function(){
                 return 'Hi';
             },
             toString:function(){
                 return this.name + 'says' + this.sayHi();
             },
                 valueOf: function () {
                     return true;
                 },
                 
                 toLocaleString:function(){
                     return 'Good morning';
                 }
             };
             console.log(user.toString());
             console.log(user.valueOf());
             console.log(user.toLocaleString());
             var fruits = ['apple','orange','mango'];
             console.log(fruits.toLocaleString());
             console.log(fruits.toString());
             console.log(fruits.valueOf());
       
             console.log(fruits.join());
             console.log(fruits.join('-'));
             console.log(fruits.join('+'));
    
          // push & pop method
             var books = new Array('Tamil','English','Maths');
             console.log(books);
    
             var count = books.push('Add two books extra');
             console.log(count);
    
             books.push('science','social');
    
             var removedBook = books.pop();  /// push-add the given input as first item ;pop- lastitem remopval; shift- first item removal; unshift - add the item in the 1st place
    
             console.log(removedBook);
             console.log(books.length);
    
             // shift & unshift
    
             var letMeEat = ['breakfast'];
             var count = letMeEat.push('lunch','dinner');
             console.log(count);
    
             var firstMealofTheDay = letMeEat.shift();
             console.log(firstMealofTheDay );
    
             letMeEat.unshift(firstMealofTheDay );
             console.log(letMeEat);
    
             var lastMealofTheDay = letMeEat.pop();
             console.log(lastMealofTheDay );
             
            // Array Rearrange methods
    
            var myMeals = ['dinner', 'lunch', 'breakfast'];
            var schoolStd = [5,4,3,2,1];
            console.log(myMeals);
            console.log(schoolStd);
    
            myMeals.reverse();
            schoolStd.reverse();
            console.log(myMeals);
            console.log(schoolStd);
    
            var avgMarkList = [20,98,76,54,88];
            avgMarkList.sort();
            console.log(avgMarkList);
    
            avgMarkList.unshift(100);
            avgMarkList.sort();
            console.log(avgMarkList);
    
            function compare(value1, value2){
            console.log('value1: ', value1);
            console.log('value2: ', value2);
            if (value1>value2){
                return 1;
            }
            else if(value1 < value2){
                return -1;
            }else{
                return 0;
            }
        }
        avgMarkList.sort(compare);
        console.log(avgMarkList);
    
        function descendingOrder(value1, value2){
            console.log('value1: ', value1);
            console.log('value2: ', value2);
            if (value1>value2){
                return -1;
            }
            else if(value1 < value2){
                return 1;
            }else{
                return 0;
            }
        }
        avgMarkList.sort(descendingOrder);
        console.log(avgMarkList);
    
        /// other method
    
        function ascendingOrder(value1, value2){
            return value1 - value2;
        }
        avgMarkList.sort(ascendingOrder);
        console.log(avgMarkList);
    
    
        function descendingOrder(value1, value2){
            return value2 - value1;
        }
        avgMarkList.sort(descendingOrder);
        console.log(avgMarkList);
    
       // array manipulation method
       var fruits = ['apple','orange','mango'];
       var freshFruits=fruits;
       console.log('fruits: ',fruits);
       console.log('freshFruits: ', freshFruits);
       freshFruits.push('banana');
       console.log(freshFruits);
    
    
    var newFruits=fruits.concat();
    newFruits.push('strabery');
    console.log('fruits: ', fruits);
    console.log('newFruits: ',newFruits);
    
    
    var additionalFruits=newFruits.concat('pinapple','kiwi');
    console.log('additionalFruits: ', additionalFruits);
    var moreFruits=additionalFruits.concat('blackbery', 'bluebery');
    console.log('morefruits: ', moreFruits);
    
    var firstThreeFruits = moreFruits.slice(0,3);
    console.log('firstThreeFruits :', firstThreeFruits);
    var allOtherFruits = moreFruits.slice(3);
    console.log('AlltherFruits :', allOtherFruits);
    
    var removedFruits=moreFruits.splice(3,moreFruits.length-3);
    console.log('More Fruits :',moreFruits);
    console.log('Removed Fruits: ', removedFruits);
    
    var noFruits=moreFruits.splice(0,0,'banana');
    console.log('More Fruits :',moreFruits);
    console.log('No Fruits: ', noFruits);
    
    moreFruits.splice(1,1,'pinapple','custard apple');
    console.log('More Fruits :',moreFruits);
    
    var availableFruits=['apple','orange','mango','banana'];
    for(i=0; i<availableFruits.length;i++);
    availableFruits.forEach(function(item,index,array){
        console.log('In this fruits array' + array);
        console.log('Fruit' + item + 'is at position' + index);
    })
    
    var priceList=[100,15,25,1000,550,675];
    var discount=10;
    var newPriceList=priceList.map(function(price){
        return price-(price*10/100);
    })
    console.log(newPriceList)
    
    var employees = [
        {
            role:'junior designer',
            salary:20000
    
        },
        {
            role:'senior designer',
            salary:40000
    
        },
        {
            role:' junior developer',
            salary:50000
    
        },
        {
            role:'Team lead',
            salary:75000
    
        }
    ];
    
    var highPayingJobs = employees.filter(function(employee){
        return employee.salary >= 50000;
    });
    console.log(highPayingJobs);
    
    
          function getResult(markList){
          var result = markList.every(function(mark){
              return mark > 45;
          });
          if (result){
              return 'All pass';
    
          }else{
              return 'It seems you failed in some subjects';
          }
      }
       console.log(getResult([80,70,90,95,91]));
       console.log(getResult([35,40,45,50,46]));
    
          function getResults(results){
          var result = results.some(isPass);
          if (result){
              return 'Only some students are pass';
    
          }else{
              return 'All students are passed';
          }
        }
    
             function isPass(result){
             return result !== 'pass';
            }
             console.log(getResults(['pass','fail','pass','fail']));
             console.log(getResults(['pass','pass','pass','pass']));
    
             // syntax for array reduce method
    
             //[3,20,3,11,15].reduce(function(accumulator,currentValue,index,array){
                 //statements
             //},intitalValue)
    
             var numbers=[10,20,30,40,50];
             var sum = numbers.reduce(function(accumulator,currentValue,index){
                 console.log('Iteration :', index);
                 console.log('Accumulator:', accumulator);
                 console.log('currentValue:', currentValue);
    
             return accumulator + currentValue;
            });
            console.log(sum);
    
            var nestedArray = [[1,2],[3,4],[5,6],[7,8]];
            var flattenedArray = nestedArray.reduce(function(accumulator,currentValue,index){
              return accumulator.concat(currentValue);
            });
                console.log(flattenedArray);
    
            var randomChar = ['b','c','a','f','o','y'];
            var uniqueChar = randomChar.reduce(function(accumulator,currentValue,index){
                if (accumulator.indexOf(currentValue) === -1) {
                    accumulator.push(currentValue);
                }
                return accumulator;
            },[]);
    
            console.log(uniqueChar);
    
            // date
    
            var now = new Date();
            console.log(now);
    
            var dob = new Date ('2001 04 03');
            console.log(dob);
            console.log(dob.valueOf());
            
            var regex = /[0-9]/;  // literal
            console.log(regex.test('some text')); // false
            console.log(regex.test('some 123456 text')); // true
    
            regex = new RegExp('[0-9]'); // construct
            console.log(regex.test('some text')); // false
            console.log(regex.test('some 123456 text')); // true
    
            var addNums = new Function('num1', 'num2','return num1 + num2');
            console.log(addNums(10,20));
    
            function add(num1, num2){
             return num1 + num2;
            }
            console.log(add(5,6));
    
            var addTwoNums = addNums;
            addNums = null;
            console.log(addTwoNums(3,5));
            function callSomeFunction(funcName,param){
                return funcName(param);
            }
            //callSomeFunction(alert,'Function as value');
    
            // function experssion
            var doubleIt = function (num){  // after function keyword NO function name is available so, is called as "FUNCTION EXPRESSION"
                return num*2
            };
                console.log(doubleIt(7));
    
            console.log('ExcessFunction: ', doubleIt(4,4,4));
            console.log('NoFunction: ', doubleIt());
    
            var sum = function(){
                console.log(arguments);
            }
            console.log(sum(1,2,3));
    
            var sum = function(){
                return Array.from(arguments).reduce(function(accumulator,currentValue){
                    return accumulator+currentValue;
                });
            };
    
                console.log(sum(10,20,30));
                console.log(sum(1,2,3));
    
            var factorial = function(num){
                if (num<=1){
                    return 1;
                } else {
                    return num*factorial(num-1);
                }
            }
                console.log('factorial of 6 : ', factorial(6));
    
                //var findFactorial = factorial;
                //console.log('factorital of 6 :', findFactorial(6));
                //factorial = null;
                // factorial = null;
                //console.log('factorital of 6 :', findFactorial(6));
    
                var factorial = function(num){
                if (num<=1){
                    return 1;
                } else {
                    return num * arguments.callee(num-1);
                }
            }
               console.log('factorial of 6 : ', factorial(6));
    
                var findFactorial = factorial;
                console.log('factorital of 6 :',findFactorial(6));
                factorial = null;
                console.log('factorital of 6 :', findFactorial(6));
    
             //IIFE
    
             (function (){
                 name = 'karthi';
                 console.log(name);
             })();
    
             //Named IIFE
             (function sayName (name){
                 console.log(name);
             })('JavaScript');
    
             var maxValue = Math.max(1,2,3,40,1000);
             console.log('Max value :', maxValue);
             var minValue = Math.min(1,2,3,40,1000);
             console.log('Min value :', minValue);
             
    
             console.log(Math.round(6.1));
             console.log(Math.round(6.6));
    
             console.log(Math.ceil(6.1));
             console.log(Math.ceil(6.6));
    
             console.log(Math.floor(6.1));
             console.log(Math.floor(6.6));
    
             console.log(Math.random());
             console.log(Math.random());
             console.log(Math.random());
    
             var randomNo = Math.floor(Math.random() * noOfChoices + firstValue);
    
             var noOfChoices = 12;
             var firstValue = 1;
             var randomNo = Math.floor(Math.random() * noOfChoices + firstValue);
             console.log('randomNo:', randomNo);
    
             function getRandomNoBetween(max,min){
                 return Math.floor(Math.random() *(max-min)+min);
             }
    
             console.log('GetRandomNoBetween 3 and 8 :', getRandomNoBetween(3,8));
             console.log('GetRandomNoBetween 15 and 20 :', getRandomNoBetween(15,20));
    
    
            var lang = ['c','javascript','html','css'];
            console.log('RandomLang:', lang[getRandomNoBetween(0,lang.length-1)]);
    
            var name ='karthi';
            console.log(name.substring(0,3));
    
            var name ='karthi';
            obj = {};
            console.log(name);
            console.log(obj);
    
            var myself= new String('karthi');
            console.log(myself);
    
             console.log('karthi'.length);
    
             var no = new Boolean(false);
             if(no){
                 console.log(' I am not boolean, butan objected with false value');
             }
    
             var trueObj = new Boolean(true);
             console.log(trueObj);
             console.log(trueObj.toString());
             console.log(trueObj.valueOf());
    
             var num = new Number(1000);
             console.log(num);
    
             console.log(num.toString());
             console.log(num.toString(2));
             console.log(num.toString(8));
             console.log(num.toString(16));
             console.log(num.toLocaleString());
             console.log(num.toFixed(2));
             console.log(num.toExponential(3));
             console.log(num.toPrecision(4));
             console.log(num.toPrecision(5));
    
             var myself= new String('karthi');
             console.log(myself);
            
             // object constructor
            function Person(firstName, lastName){
            this.firstName =  firstName;
            this.lastName = lastName;        
            }  
            var saad = new Person("Saad", "Mousliki");
            console.log(saad);
            