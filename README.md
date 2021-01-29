<style>
    .section{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #393d46;
        padding: 50px;
        color: white;
        font-family: sans-serif;
    }
    .bold{
        font-weight: bold;
    }
    .big-font-size{
        font-size: 2rem;
    }
    .black-text{
        color: black;
    }
    .white-text{
        color: white;
    }
</style>

<center class="section">
    <img src="./HackLogo.jpg" height="375" >
    <h1 class="header white-text">Intermediate CSS Workshop</h1>
    <quote>By Arix Phua</quote>
</center>

<br><br><br><br>

<p class="bold big-font-size">Table of Content</p>

1. <a href="#topic1">Introduction</a>
2. <a href="#topic2">CSS Variables</a>
3. <a href="#topic3">Calc Function</a>
4. <a href="#topic4">Advanced Selectors</a>
5. <a href="#topic5">Before & After Pseudo Elements</a>
6. <a href="#topic6">Flexbox</a>
7. <a href="#topic7">Grid</a>
8. <a href="#topic8">Media Queries</a>
9. <a href="#topic9">Transition</a>
10. <a href="#topic10">Animations(Keyframes)</a>
11. <a href="#topic11">Tips and Tricks</a>


<br><br><br><br>

<p class="bold big-font-size">Quick Links</p>

### Color
<a href="http://colours.neilorangepeel.com/" target="_blank">http://colours.neilorangepeel.com/</a><br>
<a href="https://color.adobe.com/explore/" target="_blank">https://color.adobe.com/explore/</a>

### Design Inspiration
<a href="https://dribbble.com/" target="_blank">https://dribbble.com/</a><br>
<a href="https://pageflows.com/" target="_blank">https://pageflows.com/</a>


### Design Resources
<a href="https://caniuse.com/" target="_blank">https://caniuse.com/</a><br>
<a href="https://codepen.io/" target="_blank">https://codepen.io/</a><br>
<a href="https://css-tricks.com/" target="_blank">https://css-tricks.com/</a>

### Image Resources
<a href="https://unsplash.com/" target="_blank">https://unsplash.com/</a><br>
<a href="https://undraw.co/illustrations" target="_blank">https://undraw.co/illustrations</a>

### Mother Fucking Website Series
<a href="https://motherfuckingwebsite.com/" target="_blank">Part 1</a><br>
<a href="https://bettermotherfuckingwebsite.com/" target="_blank">Part 2</a><br>
<a href="https://thebestmotherfucking.website/" target="_blank">Part 3</a>


<br><br><br><br>

<P id="topic1" class="bold big-font-size">Introduction</p>
<b>What is CSS</b>

- Cascading Style Sheets(CSS), is a simply designed language intended to simplify the process of making web pages presentable. 

- CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page.

- CSS is easy to learn and understood but it provides powerful control over the presentation of an HTML document.

```css
p {                 /* <<< Selector */
    color: red;     /* <<< Property:Value; */
}

```

<br>

<b>Why CSS</b>

Taken from <a href="https://www.tutorialspoint.com/css/what_is_css.htm">Tutorials Point</a>

- CSS saves time : You can write CSS once and reuse same sheet in multiple HTML pages.

- Easy Maintainence : To make a global change simply change the style, and all elements in all the webpages will be updated automatically.

- Search Engines : CSS is considered as clean coding technique, which means search engines won’t have to struggle to “read” its content.

- Superior styles to HTML : CSS has a much wider array of attributes than HTML, so you can give a far better look to your HTML page in comparison to HTML attributes.

<br>

<b>Vanilla CSS(Pure CSS) vs Framework(e.g. Bootstrap)</b>

- Every website uses CSS -  but it does not mean every website uses them the same way

- Other than writing your own CSS code, there are multiple ways of adding styles to your webpage. One of the most common ones is using Bootstrap, a CSS framework originally developed by Twitter.

- Using a CSS framework meant that you would use predefined classes and styles for your website which is built to work for virtually any layout.

- 4 to 5 years ago, it was hard to find a website which does not use Bootstrap.

- Other than CSS frameworks like bootstrap, there are utility frameworks like Tailwind CSS.

<br>

<b>Bootstrap is Amazing Right?</b>

- If you hate writing CSS code, then yes, using a CSS framework like Bootstrap will benefit you greatly and you would still get a nice looking website in the end.

```html
<!-- Include in <head>-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

<!-- Use predefined class-->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-dark">Dark</button>
```
- Nice and quick results :point_down:

<html>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-dark">Dark</button>
<html>

<br>
<br>

<b>Why I hate CSS Frameworks</b>

1. Asians... They all look alike.

2. Documentation Hell

    <a href="https://getbootstrap.com/docs/4.4/getting-started/introduction/">Bootstrap Documentation</a>
   
3. Idk what is !important anymore
    <img src="./cssmeme.jpg">

    Because you do not have full control over the underlying code. If the original design doesn't suit your needs, you would still need to write your own class rules. Thus, it would be pointless to use the CSS framework.

    Regardless, some may choose to add custom style classes on top of bootstrap but there comes the issue of overwriting existing bootstrap styles, you will have to resort to using !important to achieve the style you want.

    <a href="http://tutorials.jenkov.com/css/precedence.html">CSS Precedence</a>

4. Good luck Bootstrapping this
    <img src="./gl1.jpg" alt="https://cdn.dribbble.com/users/472201/screenshots/9890306/media/afef4d3c352ba17b472b766d8950cb93.jpg">
    <img src="./gl2.png" alt="https://cdn.dribbble.com/users/2151476/screenshots/9854269/media/265de55b6ca1f85586aae0ef577d55b3.png">
    <img src="./gl3.gif" alt="https://cdn.dribbble.com/users/2594620/screenshots/9390276/media/897bc0e72f001249373e027b930831fb.gif">
    <img src="./gl4.gif" alt="https://cdn.dribbble.com/users/2170243/screenshots/9392268/media/9c0ebeb851e4f1ac4c34ab31541b585b.mp4">



<br><br><br><br>


<P id="topic2" class="bold big-font-size">CSS Variables</p>

- What are CSS variables?
  - The var() function can be used to insert the value of a custom property.
  - These variable can be used when declaring css rules and be changed to suit different style classes.
  - Easier to keep track of reusable values within your stylesheet


```css
:root{
    --main-color: #123456;
    --navigation-height: 70px;
    --container-padding: 25px;
}

.navigation-bar{
    height: var(--navigation-height);

    /* red is a fallback value */
    background-color: var(--main-color, red);
}

body{
    padding: var(--container-padding);
}
```


<br><br><br><br>

<P id="topic3" class="bold big-font-size">Calc Function</p>

- The calc() function performs a calculation to be used as the property value.

- The calc() CSS function lets you perform calculations when specifying CSS property values. It can be used anywhere a length, frequency, angle, time, percentage, number, or integer is allowed.

- Calculations include: addition, subtraction, multiplication and division.

```css
    .navbar{
        height: calc(100px - 30px)  /* whitespace between operators */
    }

    h1{
        font-size: calc(calc(20px / 2) + 2px); /* can be nested */
    }


```

- The most useful ability of calc() is its ability to mix units

<br><br><br><br>

<P id="topic4" class="bold big-font-size">Advanced Selector</p>

- Selects every ```<p>``` tag that are inside a ```div``` tag

```css
    div p{

        background-color: red;
    }
```
```html
    <div>
        <p>hello</p>
        <p>bye</p>
        <section>
            <p>me too?</p>
        </section>
    </div>
```

<br><br><br><br>

- Styles all ```<div>``` tags with the parent that has the class ```.main-content```

```css
    .main-content >  div {
        background-color: blue;
    }
```
```html
    <div class="main-content">
        <div></div>
        <div></div>
        <div></div>
        <div>
            <div>hello</div><!-- This div is not targetted--->
        </div>
    </div>
```

<br><br><br><br>

- Styles all ```<p>``` tags that comes right after a ```<div>``` tag

```css
    div + p {
        color:red;
    }
```
```html
    <div>
        <p>hello</p>
        <p>bye</p>
    </div>
    <p>this one</p><!-- This p is targetted -->
    <p>this too?</p>
```

<br><br><br><br>

- Styles all ```label``` tags with a ```title``` attribute(regardless of its value)

```css
    label[title]{
        font-style: italic;
    }
```
```html
    <label title="sup bitch">hover me</label>
    <label>hover me now</label>
```
<br><br><br><br>

- Styles all ```input``` tags with ```type``` attribute and the value of ```checkbox```
  
```css
    input[type="checkbox"]{
        margin: 50px;
    }
```
```html
    <input type="text" /><br>
    <input id="myCb" type="checkbox" />
    <label for="myCb">Click Me</label>
```

<br><br><br><br>

- Styles all checkboxs that are checked

```css
    input[type="checkbox"]:checked{
        margin: 50px;
    }
```
```html
    <input id="myCb" type="checkbox" />
    <label for="myCb">Click Me</label>
```

- other state-related pseudo selectors
  - ```:focus```
  - ```:hover```

- other index-related pseudo selectors
  - :first-child
  - :last-child
  - :nth-child(n)
    - n, even, odd
  - :nth-last-child(n)


<P id="topic5" class="bold big-font-size">Before & After Pseudo Elements</p>

- ::before and ::after pseudo-element in CSS allows you to insert content onto a page without it needing to be in the HTML.
- Note that it is not possible to set or modify the :before and :after pseudo elements of an element using javascript.
  
```css
.htmltag{
    font-size: 20px;
}
.htmltag::before{
    content:"<";
}
.htmltag::after{
    content:">";
}
```

<br><br><br><br>

<P id="topic6" class="bold big-font-size">Flexbox</p>

- Aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.

<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox Guide</a>

```css
    .container{
        display:flex;
    }
```

###### Other Flex Settings
- ```flex-direction```
  - Default value: row
  - Other value: column

- ```flex-wrap```
  -  Default value: nowrap
  -  Other value: wrap, wrap-reverse
  
- ```justify-content```
  - Default value: flex-start
  - Other values: flex-end, center, space-between, space-around

- ```align-items```
  - Default value: stretch
  - Other values: flex-start, flex-end, center


<br><br><br><br>

<P id="topic7" class="bold big-font-size">Grid</p>

- is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces.
- Why ```<table>``` should not be used for layout
  - Slow to render as the browser needs to download most - if not all - of the table to render it properly

  - They require more HTML than non-table layouts which means slower loading and rendering, as well as an increased bandwidth usage

  - They can be a nightmare to maintain as they can quickly get complex

  - They can break text copying

  - They were never intended to be used for page layouts

  - Making tables into a responsive layout is very difficult to control

<a href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Grid Guide</a>

```css
    .container{
        display:grid;
    }
```
###### Other Grid Settings

- ```grid-template-columns```
  - Define the columns in the grid

- ```grid-template-rows```
  - Define the rows in the grid

- ```justify-items``` and ```align-items```
  - Default value: stretch
  - Other values: start, end, center

- ```grid-column-gap``` or ```column-gap``` and ```grid-row-gap``` or ```row-gap```
  - define the gap spacing between each grid cell

- ```grid-area```
  - Assign a name/ID to a individual grid cell

- ```grid-template-areas```
  - Define how the gridareas should be displayed on the grid

<br><br><br><br>

<P id="topic8" class="bold big-font-size">Media Queries</p>

- Applies a different set of CSS rules based on the screen size.
- Common thresholds to cater to.
  - Mobile 320px
  - Tablet 768px
  - Laptop 1024px

```css
/* Applied when screen is at leasat 600px */
@media and screen (min-width: 600px){

}

/* Applied when screen is less than 600px */
@media and screen (max-width: 600px){

}
```

<P id="topic9" class="bold big-font-size">Transition</p>

- Allows you to declare how the properties of an element change over timee instead of occuring immediately.
- Effect applies on trigger effects like ```:hover```.
- Transitions are made up of 4 properties
  - transition-property
    - CSS property to be changed
  - transition-duration
  - transition-Delay
  - transition-timing-function

```css
    .fadeOutBox{
        height: 100px;
        width: 100px;
        background-color: green;
        opacity: 1;
        transition: opacity 1s ease-out 0s;
    }
```
```html
    <div class="fadeOutDox"></div>
```

<P id="topic10" class="bold big-font-size">Animations (Keyframes)</p>

- Similar to transitions, however it is not neccessary to have a trigger.
- Animations can be applied directly to elements
- Animations are made up of 
  - animation-name
    - Linked to a @keyframes
  - animation-duration
  - animation-timing-function 
  - animation-delay
  - animation-direction
  - animation-iteration-count
  - animation-fill-mode

```css
.myBox{
    height: 10px;
    width: 10px;
    background-color: red;
    animation: expand 1s ease-out;
}

@keyframes expand{
    from{
        transform: scale(1);
    }
    to{
        transform: scale(4);
    }
}

```

<P id="topic11" class="bold big-font-size">Tips and Tricks</p>

- Coding Practices:
  - Design to Code, not Code to Design
  - Mobile First, Web Second
<br>

- What can you start with
  - Typography
  - Color theory
  - SVG
  - Portfolio sites
  - Redesign sites
  - Replicating sites
  - Code Alongs

- Web design trends
  - Responsive
  - Neumorphism 
  - Dark mode
  - 3D and Layering
  - Minimalist & White Space design
  - Animations
  - Illustrations/Isometric Art