## Tags and Elements
All HTML (HyperText Markup Language) elements are wrappedn in tags:
```html
<p>This is a paragraph</p>
```
Always name the page that contains the homepage **index**.
Heading elements are from h1 to h6, where h1 is the largest. The **strong** element makes text bold and lets the browser know that it is important, while the **em** makes texts italic.
```html
<!-- I am a comment -->
```
Ordered and Unordered lists
```html
<!--- Unordered Lists --->
<ul>
    <li>Coffee</li>
    <li>Soda</li>
    <li>Wine</li>
</ul>
<!--- Ordered Lists --->
<ol>
    <li>Apples</li>
    <li>Mangoes</li>
    <li>Oranges</li>
</ol>

<ol type="A" start="3" reversed></ol>
<!-- A starting value can be added to one element -->
 <li value="5"></li>
 <ul type="circle"></ul>
```
Lists can have the type attribute which can change it. The other type of list element is a **definition list**:
```html
<dl>
  <dt>Recipe:</dt>
    <dd>Omelet</dd>
  <dt>Ingredients:</dt>
    <dd>Eggs</dd>
    <dd>Milk</dd>
    <dd>Salt</dd>
</dl>
```


Page navigation uses the **nav** element which can use the id and # to move from a link to a section on a page:
```html
<nav>
    <a href="#section1">Find Section One</a>
</nav>
<section id="section1">All about it</section>

<!-- Specific path to another page -->
 <a href="another-page.com#about"> About Animals</a>
```
The **a** tag has special attributes:
- target: "_self", "_blank"
- download: can be standalone or given a name
- title
- href: can have a link, mail, or phone number:
    - href="tel:+123456789"
    - href="mailto:example@mail.com"

```html
<!-- Download a file with the name new file -->
 <a href="https://somesite.com/somefolder/somefile.pdf" download="newfile">Download me!</a>
```
Some common HTML body tags:
- aside, section, header, nav, article, main

The audio tag is used to add audio files to a webpage:
```html
<audio>
    <!-- source tag allows different audio types -->
    <source src="media/example.mp3" type="audio/mpeg">
    <source src="media/example.ogg" type="audio/ogg">
</audio>
<!-- Other attributes: controls, loop, muted, autoplay -->
```