
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
    // the method console.log() is used to print messages to the console 
    // it can also print objects and other info 
    // example:
    // console.log('Hello, World!');

// PROPERTIES:
    // all data types have access to specific properties
    // to retrieve property information, we append the name of the instance
    // with a period and the property name
    // the string.length property, for example, returns the number of chars 
    // in a string

    // example:
    // console.log('howdy'.length);


// VARIABLES:
    // come in 2 flavors "const" and "let"
    // must be declared with a keyword
    // can only be declared once

    // const is preferable, unless variable needs to be reassigned later
    // contents of a const variable can be mutated, but not reasssigned

    // let should be usef if variable may need to be reassigned later 

    
// LOGICAL OPERATORS:

    // "and": &&
    // "or": ||
    // "not": !


// METHODS:
    // methods return information about an object 
    // they are called by appending  an instance with a period, followed by 
    // the method name, and () 
    

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
// Python doesn't have these!

    // syntax:
    // for (init; conditional; exp)

    // init: a variable declaration, executed once
    // conditional: evaluated before every iteration
    // exp: executed at end of every iteration

    // example:
    // for (let i = 1; i < 3; i += 1) {
    //     console.log(i);
    //   }


// DESTRUCTURING SYNTAX:
    // notes go here...


// FUNCTION SYNTAX:
    // different types of functions have different syntaxes

    // FUNCTION WITH NO PARAMETERS:

        // function declaration:
        // function noParamDeclaration(){
        //     return "This function doesn't take any parameters";
        // };

        // function expression:
        // const noParamExpression = function(){
        //     return "This function doesn't take any parameters";
        // };

        // arrow function:
        // const noParamArrow = () => "This function doesn't take any parameters"
        // remember, if it's a single line arrow function, the 'return' statement is implicit

        // multi-line arrow function:
        // const noParamArrowMultiLine = () => {
        //     return "This function doesn't take any parameters"
        // }

    // FUNCTION WITH ONE PARAMETER:

        // function declaration:
        // function oneParamDeclaration(param){
        //     return `The argument supplied to this function is ${param}`
        // }

        // function expression:
        // const oneParamExpression = function(param){
        //     return `The argument supplied to this function is ${param}`
        // }

        // arrow function:
        // const oneParamArrow = param => `The argument supplied to this function is ${param}`

        // multi-line arrow function:
        // const oneParamArrowMultiLine = param => {
        //     return `The argument supplied to this function is ${param}`
        // }

// FUNCTION WITH TWO OR MORE PARAMETERS:

    // function declaration:
    // function twoParamDeclaration(param1, param2){
    //     return `My arguments are ${param1} and ${param2}`
    // }

    // function expression:
    // const twoParamExpression = function(param1, param2){
    //     return `My arguments are ${param1} and ${param2}`
    // }

    // arrow function:
    // const twoParamArrow = (param1, param2) => `My arguments are ${param1} and ${param2}`

    // multi-line arrow function
    // const twoParamArrowMultiLine = (param1, param2) => {
    //     return `My arguments are ${param1} and ${param2}`
    // }   

console.log(noParamDeclaration())
console.log(noParamExpression())
console.log(noParamArrow())
console.log(noParamArrowMultiLine())
console.log(oneParamDeclaration('this string'))
console.log(oneParamExpression('this string'))
console.log(oneParamArrow('this string'))
console.log(oneParamArrowMultiLine('this string'))
console.log(twoParamDeclaration('this first string', 'this second string'))
console.log(twoParamExpression('this first string', 'this second string'))
console.log(twoParamArrow('this first string', 'this second string'))
console.log(twoParamArrowMultiLine('this first string', 'this second string'))