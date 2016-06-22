#Ftools
This is a collection of functions I use a lot. I got tired of copypasting them and/or reinventing the wheel over and over
so I gathered them all here.

##Usage
    npm install @alexeisavca/ftools

This package is modular, there is no entry point, you import only the functions you need, this way it prevents dead code
in your project.

```js
import add from "ftools/math/add";
[1,2,3].reduce(add);//6
```

##Docs
Check the source, are rarely longer than one line and are commented.

* math - contains math related functions