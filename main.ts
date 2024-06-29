/* JSON ─ OVERVIEW */
                   /*  JSON stands for JavaScript Object Notation.
 The format was specified by Douglas Crockford.
 It was designed for human-readable data interchange.
 It has been extended from the JavaScript scripting language.
 The filename extension is .json.
 JSON Internet Media type is application/json.
 The Uniform Type Identifier is public.json. */


// Uses of JSON
//  It is used while writing JavaScript based applications that includes browser extensions
// and websites.
//  It is primarily used to transmit data between a server and web applications.
//  Web services and APIs use JSON format to provide public data.
//  It can be used with modern programming languages.
// Characteristics of JSON
//  JSON is easy to read and write.
//  It is a lightweight text-based interchange format.
//  JSON is language independent


// Characteristics of JSON
//  JSON is easy to read and write.
//  It is a lightweight text-based interchange format.
//  JSON is language independent.




// JSON ─ SYNTAX 


//  Data is represented in name/value pairs.
//  Curly braces hold objects and each name is followed by ':'(colon), the name/value 
// pairs are separated by , (comma).
//  Square brackets hold arrays and values are separated by ,(comma).
    
{
    "book"; [
    {
    "id":"01",
    "language": "Java",
    "edition": "third",
    "author": "Herbert Schildt"
    },
    {
    "id":"07",
    "language": "C++",
    "edition": "second",
    "author": "E.Balagurusamy"
    }]
   }


//    JSON supports the following two data structures
//  Collection of name/value pairs: This Data Structure is supported by different 
// programming languages.
//  Ordered list of values: It includes array, list, vector or sequence etc.




// JSON ─ DATATYPES

// Number: double- precision floating-point format in JavaScript
// String: double-quoted Unicode with backslash escaping
// Boolean: true or false
// Array: an ordered sequence of values
// Value: it can be a string, a number, true or false, null etc
// Object: an unordered collection of key:value pairs
// Whitespace: can be used between any pair of tokens
// null: empty


// Number
//  It is a double precision floating-point format in JavaScript and it depends on 
// implementation.
//  Octal and hexadecimal formats are not used.
//  No NaN or Infinity is used in Number.

// Integer:  Digits 1-9, 0 and positive or negative
// Fraction:  Fractions like .3, .9
// Exponent:  Exponent like e, e+, e-,E, E+, E- Syntax

let  jsonObjectName = {"string" : number_value, .......}


// Example
// Example showing Number Datatype, value should not be quoted:
var obj = {"marks": 97}



// String
//  It is a sequence of zero or more double quoted Unicode characters with backslash 
// escaping.
//  Character is a single character string i.e. a string with length 1.

// The table shows various special characters that you can use in strings of a JSON document:
// " => double quotation
// \ => backslash
// / => forward slash
// b =>  backspace
// f => form feed
// n => new line
// r => carriage return
// t => horizontal tab
// u => four hexadecimal digits

// Syntax
var jsonObjectname = { string : "string value", .......}

// Example
// Example showing String Datatype:
var object = {"name": "Amit"}


// Boolean
// It includes true or false values.
// Syntax
var jsonObjectname = { boolean : true/false, .......}

// Example
var object1 = {"name": "Amit", "marks": 97, "distinction": true}


// Array
//  It is an ordered collection of values.
//  These are enclosed in square brackets which means that array begins with .[. and ends 
// with .]..
//  The values are separated by , (comma).
//  Array indexing can be started at 0 or 1.
//  Arrays should be used when the key names are sequential integers.


// Syntax
[ value, .......]

// Example
// Example showing array containing multiple objects:
{
 "books"; [
 { "language":"Java" , "edition":"second" },
 { "language":"C++" , "lastName":"fifth" },
 { "language":"C" , "lastName":"third" }
 ]
}
