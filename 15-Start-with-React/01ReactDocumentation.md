1.  What is React ->
    ~ React is a free and open source fornt-end Javascript library for building user interface (UI) and components.
    ~ It is also known as React.js or ReactJS.
    ~ React can used to develop single page web application (SPAs).
    ~ The main concept of React.js is virtual DOM.


2.  Who made React ->
    ~ React is made by facebook (Meta).
    ~ Facebook applicaton also build on React.


3.  What is Bable ->
    ~ Bable is a free and open source JavaScript transcompiler.
    ~ It convert ES6+ code into compatible JavaScript code.
    ~ Bable allows web developers to take advantages of the newest feature of the language.


4.  How does Bable convert html code in React into valid code ->
    ~ Bable convert HTML code in React into valid JS code using a process called transpiling.
    ~ Bable uses a number of plugin to transpile HTML code.
    ~ Ones the HTML code is phrased, then Bable transform the tree structure into JavaScript code. The JavaScript code is then valid and can be run in browser.


5.  What is React DOM used for ->
    ~ ReactDOM is a JavaScript liabrary that is used to render React components to the DOM.
    ~ It is a part of React library and is used to creat UIs.
    ~ ReactDOM provides a number of methods that can be used to manipulate the DOM.
    ~ These methods can be used add, remove and update DOM element.
    ~ Example : 
      // React code :-
      <script>
        //catch the DOM element 
        // then pass to REactDOM
        let root = document.getElementById("root");
        let reactRoot = ReactDOM.createRoot(root);

        // creat react element 
        let element = React.createElement("div",
                                {className:'second'},
                                `<h1> Meri Radha Rani </h1>`);

        // display react element on DOM
        reactRoot.render(element);
      </script>



6.  What are the packages that you need to import for React to work with ->
    ~ ReactDOM packages :
      <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
      <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    ~ Bable package :
     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


7.  How do you add React to a web application ->
    ~ Step 1: Adding DOM Container To The HTML. First, open the HTML page that you want to change. ...
    ~ Step 2: Add The Script Tags and react packages.
    ~ Step 3: Create A React Component.


8.  What is React.creatElement ->
    ~ React.creatElement() is a function that creats React elements.
    ~ Syantax : 
      let element = React.creatElement('div', {className : 'hii'}, 'Hello World' )
    
9.  What are the three proprties that React.creatElement accept ->
    ~ 1. element type (Tag)
    ~ 2. property of element
    ~ 3. children content
    ~ syntax : React.creatElement(type,{properties},....chilren content)


10. What is the meaning of render and root ->
    ~ In React `render` is a function that display react components in DOM
    ~ `root` is a HTML DOM element we `root.render()` method to display content 