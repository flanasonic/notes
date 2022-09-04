// NODE:

    // node is a program that runs JavaScript 


// SOME USEFUL NODE COMMANDS:

    // to start a REPL, run node with no arguments
    // $ node 

    // to run a file, run node <filepath>
    // $ node filename.js 

    // to run a file interactively, open the REPL, then use .load
    // $ node
    // > .load filename.js

    // to exit node
    // > ctrl - D 


// JAVASCRIPT SYNTAX:

    // statements end with a semicolon ;
    // curly braces used where Python uses indentation {}
    // variable names written in lowerCamelCase 
    // two spaces for indentation
    // two forward slashes to make a line a comment


// PRINTING:

    // console.log() is used to print messages to the console 
    // it can also print objects and other info 
    // when we use console.log() we’re calling the method .log() 
    // on the console object.
    // example:
    // console.log('Hello, World!');


// OBJECTS:

    // JS comes with a lot of built in objects, we can also create our own
    // Data types are also objects
    // Objects can have properties, stored information.
    // Objects can also have methods, which perform actions. 


// PROPERTIES:

    // properties are stored information about an object
    // all data types have access to specific properties
    // properties are denoted with a . after the object name/instance
        // syntax:
        // object.property

        // example:
        // string.length
        // returns the number of chars in a string
        
        // example:
        // 'Hola'.length
        // returns 4

// METHODS:

    // methods are actions we can perform on objects
    // data types have access to specific methods that allow us to handle
    // instances of that data type. 
    // they are called by appending an instance with a period, the method name, 
    // and parentheses
        // syntax:
        // 'a string'.methodName()
        // example:
        // 'hello'.toUpperCase()


// VARIABLES IN JS:
    // as in other languages, in JS, variables label and store data 
    //(values) in memory

    // JS VARIABLE RULES:
    // must be declared with keyword 'const' or 'let'
    // can only be declared once
    // can be declared without assigning a value?? is this true for const??
    // if not initialized (assigned a value), value is stored as 'undefined'

    // const 
    // keyword const signals that a variable can't be reassigned
    // attempting to reassign will throw a TypeError
    // contents can be mutated (but not reasssigned)
    // const is preferable to let, unless variable needs to be reassigned later

    // let
    // keyword let signals that a variable can be reassigned
    // should be used if variable may need to be reassigned later 

    
// LOGICAL OPERATORS:

    // "and": &&
    // "or": ||
    // "not": !


// CONDITIONALS:

    // example:  
    // let x = 8;
    // if (x>7) {
    //     console.log('Too big');
    // } else if (x < 1) {
    //     console.log('Too small');
    // } else {
    //     console.log('Just right');
    // }


// WHILE LOOPS:

// example:
// let i = 2;
// while (i <5) {
//     console.log(i);
//     i +=1;
// }


// GENERIC FOR LOOPS:

// Python doesn't have generic for loops!

    // syntax:
    // for (init; conditional; exp)

    // init: variable declaration, executed once
    // conditional: gets evaluated before every iteration
    // exp: executed at end of every iteration

    // example:
    // for (let i = 1; i < 3; i += 1) {
    //     console.log(i);
    //   }


// DESTRUCTURING SYNTAX:

    // notes go here...


// FUNCTION SYNTAX: (copied from Trew's lecture notes...)

    // different types of functions have different syntaxes
    // JS has many ways to write a function:

        // FUNCTION DECLARATION:
        // binds a function to a name (like we do with variables)
       
        // syntax: 
        // function functionName(optional paremeters) {Code body between curly braces};

        // example:
        // function add(num1, num2) {return num1 + num2;}

        // 'hoisting' in JS allows a function to be called before it's even been declared!

        // 



    // FUNCTION WITH NO PARAMETERS:

        // function declaration with no parameters:
        // function noParamDeclaration(){
        //     return "This function doesn't take any parameters";
        // };

        // a function expression:
        // const noParamExpression = function(){
        //     return "This function doesn't take any parameters";
        // };

        // an arrow function:
        // const noParamArrow = () => "This function doesn't take any parameters"
        // remember, if it's a single line arrow function, the 'return' statement is implicit

        // a multi-line arrow function:
        // const noParamArrowMultiLine = () => {
        //     return "This function doesn't take any parameters"
        // }


    // FUNCTION WITH ONE PARAMETER:

        // a function declaration with one parameter:
        // function oneParamDeclaration(param){
        //     return `The argument supplied to this function is ${param}`
        // }

        // a function expression:
        // const oneParamExpression = function(param){
        //     return `The argument supplied to this function is ${param}`
        // }

        // an arrow function:
        // const oneParamArrow = param => `The argument supplied to this function is ${param}`

        // a multi-line arrow function:
        // const oneParamArrowMultiLine = param => {
        //     return `The argument supplied to this function is ${param}`
        // }

    // FUNCTION WITH TWO OR MORE PARAMETERS:

        // a function declaration with two or more parameters:
        // function twoParamDeclaration(param1, param2){
        //     return `My arguments are ${param1} and ${param2}`
        // }

        // a function expression:
        // const twoParamExpression = function(param1, param2){
        //     return `My arguments are ${param1} and ${param2}`
        // }

        // an arrow function:
        // const twoParamArrow = (param1, param2) => `My arguments are ${param1} and ${param2}`

        // a multi-line arrow function
        // const twoParamArrowMultiLine = (param1, param2) => {
        //     return `My arguments are ${param1} and ${param2}`
        // }   


// STRING CONCATENATIONS
    // the + operator is used to concatenate strings, including those held 
    // in variables.

    //STRING CONCATENATION WITH VARIABLES:
    // example:
    // let myPet = 'armadillo';
    // console.log('I own a pet ' + myPet + '.'); 
    // Output: I own a pet armadillo.

    //STRING INTERPOLATION:
    // variables can be inserted, or "interpolated", into strings 
    // we use 'template literals' for this
    // a template literal is indicated using backticks ` `
    // values get inserted into the placedholders we set
    // placeholders are indicated like this: ${myPet}
    // example:
    // const myPet = 'armadillo';
    // console.log(`I own a pet ${myPet}.`);
    // Output: I own a pet armadillo.

// TYPEOF:
// The typeof keyword/operator returns the data type of a value, as a string


// MATH
// Math.floor()

// Output: 'I own a pet armadillo.'
// console.log(noParamDeclaration())
// console.log(noParamExpression())
// console.log(noParamArrow())
// console.log(noParamArrowMultiLine())
// console.log(oneParamDeclaration('this string'))
// console.log(oneParamExpression('this string'))
// console.log(oneParamArrow('this string'))
// console.log(oneParamArrowMultiLine('this string'))
// console.log(twoParamDeclaration('this first string', 'this second string'))
// console.log(twoParamExpression('this first string', 'this second string'))
// console.log(twoParamArrow('this first string', 'this second string'))
// console.log(twoParamArrowMultiLine('this first string', 'this second string'))
