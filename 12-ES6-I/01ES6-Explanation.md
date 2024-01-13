                                 -:  ES6 TOPIC EXPLANATION :-

1. Let and Const keyword :
~ let : The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
~ const : The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, " but if a constant is an object, its properties can be added, updated, or removed " .


2. Arrow function : An arrow function expression is a compact alternative to a traditional function expression.
   
   () =>{ }  Anonmous arrow function

   let foo = ( parameter ) => { }  or  foo = ( parameter ) => parameter // simple return function

3. Template literals : Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

   ex- `string text ${expression} string text`

4. Default parameters :
   ~ Default function parameter allow named parameter to be initilized with default values 
   if no value or undefined is passed .
   ~ Example 
   let fun = (a,b=2) => a*b;
   fun(5) //10
   
5. For of loop :
   ~ The for...of loop operates on sequence of value in iterable object (Array , String, NodeList)
   ~ Example :
   let num = [1,2,3,4,5]
   for(let n of num){
      console.log(n); // 1 2 3 4 5
   }


6. Object and Array de-structuring :
  -> Object
   ~ It is a feature that allow to developer to extract property for an object and assign them into 
   variable in consice way.
   ~ It provide short hand syntax : let {prperty names} = obj
   ex : 
   let book = {
      title : 'javaScript',
      author : {
         author1 : 'radha',
         author2 : 'krishana'
      },
      prize : 990
   }
   let {title,author:{author1,author2},prize} = book 
   console.log(title,author1) // javaScript radha
  -> Array
   ~ Array destructuring is a feature in javaScript that allow to developer extract element
   for array and assign them into variable in a more convenient and concise way.
   ~ It similer to Object destructuring but for Array
   ex :
   let arr = [1,2,3,4,5]
   let [a,b,c,d,e] = arr
   console.log(a,b,e) // 1 2 5


7. Rest parameter :
   ~It is a feature in JavaScrit that allow to capture number of argument into an array form.
   ~example :
   function returnArray(...arr){
      return arr;
   }
   console.log(returnArray(1,2,3,4)) // [1,2,3,4]


8. Spread operator :
   ~ The spread operator (...variable) is a powerfull feature in javaScript that allow to spread element
   form an iterable (array,string,object) into another array , object and function call.
 -> Spread in Array :
 ~ example :
 let arr1 = [1,2]
 let arr2 = [-1,0,...arr1] // [-1, 0, 1, 2]
 -> Spread in Object :
 ~example :
 let obj1 = {
   a : 1,
   b : 2
 }
 let obj2 = {
   ...obj1,
   c : 3
 } // {a : 1, b : 2, c : 3}


9. Classes :
   ~ In javaScript a class is a blue print for creating object that share a similer structure
   and behaviour. 
   ~ It provied a way to define specific type of object, along with its properties and method
   ~example :
   class Person{
      constructor(name,age){
         this.name = name,
         this.age = age
      }
      greet(){
         cnsole.log(`welcome ${this.name}`)
      }
   }
   
   const rishabh = new Persone('rishabh','19');
