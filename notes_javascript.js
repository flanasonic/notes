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

    // are mutable
    // are filled with unordered data, organized into key-value pairs
    // they can be assigned to variables just like any JavaScript type
    // in addition to properties, objects can have methods (actions)
    // a key/identifier is like a variable name that points to a value
    // keys must be strings, but if there are no special characters we can leave off the " "
    // values can be of any data type, including functions or other objects
    // JS comes with a lot of built in objects, we can also create our own

    // data types are also objects, each has acess to specific properties
        // syntax:
        // let objectName = {'Property Name': 'Property Value', propName: 'Prop Value'};
    // to add or change key-value pairs, we can use dot or bracket notation and the assignment operator


// A property is what an object has, while a method is what an object does.

// PROPERTIES:

    // properties are stored information about an object
    // we can access properties using either dot notation or bracket notation
    // dot notation
        // syntax:
        // objectName.propertyName;

    // bracket notation
        // syntax:
        // objectName['propertyName']

    // bracket notation allows us to use a variable inside the brackets to select the keys of an object,
    // which can be especially helpful when working with functions
 



// METHODS:

    // methods are functions/actions we can perform on objects
    // data types have access to specific methods that allow us to handle instances of that data type. 
    // methods are called by appending an instance with a period, the method name, and ()

        // syntax:
        // 'a string'.methodName()

        // example:
        // 'hello'.toUpperCase()

    // we can include methods in our object literals by creating ordinary, comma-separated key-value pairs
    // the key serves as our method’s name, while the value is an anonymous function expression


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


// FUNCTIONS: 

    // the 'return' keyword allows functions to produce an output, which can be saved to a variable
    // if not specified, a function's return value is 'undefined'
    // we can use the return value of a function inside another function, a function called within another 
    // function is often referred to as a 'helper function'
    // JS has many ways to write a function!

        // FUNCTION DECLARATIONS:
        // bind a function to a name (like we do with variables)
        // can be hoisted - they can be called before even being declared!
       
        // syntax: 
        // function functionName(optional parameters) {Code body};

        // example:
        // function add(num1, num2) {return num1 + num2;}


        // FUNCTION EXPRESSIONS:
        // allows us to define a function inside an expression 
        // function expressions can't be hoisted - they must be defined before they can be called
        // first, we declare a variable to make the variable's name be the name of our function
        // we then use the 'function' keyword followed by () to assign an unnamed/anonymous function as the variable's value
        // syntax: 
        // const variableName = function(optional parameters) {function body};
       

        // ARROW FUNCTIONS:
        // remove the need to include the keyword 'function' every time we create a function
        // instead, we place parameters inside () and add an => pointing to the  function body surrounded by {}
        // syntax:
        // const functionName = (optional parameters) => (functon body};



    // FUNCTION WITH NO PARAMETERS:

        // function declaration with no parameters:
        // function noParamDeclaration(){
        //     return "This function doesn't take any parameters";
        // };

        // a function expression with no parameters:
        // const noParamExpression = function(){
        //     return "This function doesn't take any parameters";
        // };

        // an arrow function with no parameters:
        // const noParamArrow = () => "This function doesn't take any parameters"
        // remember, if it's a single line arrow function, the 'return' statement is implicit

        // a multi-line arrow function with no parameters:
        // const noParamArrowMultiLine = () => {
        //     return "This function doesn't take any parameters"
        // }


    // FUNCTION WITH ONE PARAMETER:

        // a function declaration with one parameter:
        // function oneParamDeclaration(param){
        //     return `The argument supplied to this function is ${param}`
        // }

        // a function expression with one parameter:
        // const oneParamExpression = function(param){
        //     return `The argument supplied to this function is ${param}`
        // }

        // an arrow function with one parameter:
        // const oneParamArrow = param => `The argument supplied to this function is ${param}`

        // a multi-line arrow function with on parameter:
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
