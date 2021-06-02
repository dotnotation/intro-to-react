# React State and Events Resources - June 2nd, 2021

<strong>Resources from Lecture</strong>
<ul>
    <li>
        <a href="https://reactjs.org/docs/events.html">Events In React</a>
    </li>
    <li>
        <a href="https://reactjs.org/docs/legacy-event-pooling.html">Event Pooling</a>
    </li>
    <li>
        <a href="https://reactjs.org/docs/react-component.html#setstate">Set State</a>
    </li>
</ul>

# Intro to React and Props - June 1st, 2021

``` Today we will be learning about what react is and talking about what props are. By the end of this live session you should have a basic understanding of how react works and what props are. ```

## Quick Config: 
---

     $ npm install -g create-react-app
     $ create-react-app < APP-NAME >  

# What is React?

React is a library for javascript to build UIs.

 =====> **[documentation](https://reactjs.org/)** <=====

**```This library is constantly changing! Reading documentation is extremely important!```**

React is a Node Library that is component based

_```What does that mean?```_

![First Example](https://www.droptica.com/sites/droptica.com/files/inline-images/components%20image-03.png)

--- 

![Second Example](https://kinsta.com/wp-content/uploads/2020/08/common-website-layout.jpg)

--- 

React allows us to create Single Page Applications (SPAs) easily and smoothly.


```Tools that React uses to help us build these smooth JS SPAs```

1. Uses JSX (lets us do HTML in our JS Files compiles into native js)
    1. https://babeljs.io/
    1. https://webpack.js.org/
    1. Auto Refreshes!!!
    1. Can Import!!!
1. File Structure
    1. _`public`_ Folder
        1. typically don't touch
        1. `manifest.json`
        1. `robots.txt`
        1. _`index.html`_
            1. **Note on styling**
                1. https://react-bootstrap.github.io/
                1. https://material-ui.com/
                1. https://tailwindcss.com/
                1. CSS you should style specific components rather than one big sytyle
        1. `src` Folder
            1. Where our project lives
                1. _You might see issues with trying to import files outside of src folder_
            1. `index.js`
                1. https://reactjs.org/docs/faq-internals.html#:~:text=The%20virtual%20DOM%20(VDOM)%20is,This%20process%20is%20called%20reconciliation.
                1. https://reactjs.org/docs/strict-mode.html
            1. `App.js`
                1. The head of our node Tree
## Using Components
<ol>
    <li>Take a look at our App JS</li>
    <li>Using JSX In React</li>
        <ol>
            <li style='color: red'> Must close all tags.</li>
            <li style='color: red'>Cannot have siblings</li>
            <li style='color: green'> Can have fragments (React.Fragment)</li>
        </ol>
    <li>Create a Header Component</li>
    <li> Tackle functional and then class components </li>
</ol>

    Code A Basic Blogger App
    Header w/ Props -> Class Coponent & Functional Component -> Practice Content
