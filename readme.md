#Ftools
This is a collection of functions I use a lot. I got tired of copypasting them and/or reinventing the wheel over and over
so I gathered them all here.

##Usage
    npm install @alexeisavca/ftools

This package is modular, there is no entry point, you import only the functions you need, this way it prevents dead code
in your project.

```js
import add from "@alexeisavca/ftools/math/add";
[1,2,3].reduce(add);//6
```

##Docs
### dstructs
Contains functions related to transformations and parsing of data structures

#### obj2tuples::object => [(any, any)]
Converts an object to an array of [key, value] arrays aka tuples

    obj2tuples({a: 1, b:2, c: 3})//[['a', 1], ['b', 2], ['c', 3']]

#### tuples2obj::[(any, any)] => object
Reverse of the above. Converts and array of (key, value) tuples to an object

    tuples2obj([['a', 1], ['b', 2], ['c', 3']])//{a: 1, b:2, c: 3}

#### withTuples::(object, [(any, any)] => [(any, any)]) => object
Combination of the above. Converts and object to tuples and passes it to the callback, then converts the returned tuple
array to an object

    withTuples({a: 1, b: 2}, tuples => tuples.map(([key, value]) => [key + "prime", value + 1]))//{aprime: 2, bprime: 3}

### func
Contains higher order functions

#### pipe::(...args) => (...functions) => any
Function composition and application

    pipe(1, 2, 3)(a, b, c)

is the same as

    c(b(a(1, 2, 3)))

#### compose::(...functions) => (...args) => any
Function composition and application

    pipe(a, b, c)(1, 2, 3)

is the same as

    a(b(c(1, 2, 3);

### math
Contains math related functions

#### add::(any, any) => any
Adds its arguments using '+', doesn't typecheck, can add numbers as well as concat strings

#### inc::any => any
Incrementation

#### dec::any => any
Decrementation

### strings
String related functions

#### capitalize::string => string
Capitalizes the first character of a string