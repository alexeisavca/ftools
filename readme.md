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
### func
Contains higher order functions

### math
Contains math related functions

#### add/2::(any, any) => any
Adds its arguments using '+', doesn't typecheck, can add numbers as well as concat strings

#### inc/1::any => any
Incrementation

#### dec/1::any => any
Decrementation
