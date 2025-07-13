## Intro
All HTML (HyperText Markup Language) elements are wrappedn in tags:
```html
<p>This is a paragraph</p>
```
Always name the page that contains the homepage **index**.
Heading elements are from h1 to h6, where h1 is the largest. The **strong** element makes text bold and lets the browser know that it is important, while the **em** makes texts italic.
```html
<!-- I am a comment -->
```
### Text Formatting
#### Links
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

#### Quotations
There are different quotes that can be used:
```html
<!--- Inline --->
<p><q>Get out of my life!</q>That's what she said</p>
<!--- Block --->
<blockquote></blockquote>
<!--- Citation --->
<p><q>All is well</q>, <cite>(Ris, 2025)</cite></p>
```
The **q and blockquote** tags can have a cite attribute that provides a URL.

#### The i tag
The **i** tag should only be used when the others do not provide semantic advantages:
- **em**: emphasis
- **strong**: importance
- **mark**: relevance
- **cite**
- **dfn**: definition of a term

#### Phrase Tags
```html
<!-- Sample or output text -->
 <samp>Error: this cannot be done!</samp>
<!-- Represents user's input -->
 <kbd>CTRL + C</kbd>
<!-- Represents computer code -->
 <code>String name = "Sophie";</code>
<!-- Sample or output text -->
```
#### Footer elements
The **abbr** is used for abbreviations and helps with SEO by providing information:
```HTML
<abbr title="Keep it simple, stupid">KISS</abbr>
<hr/> <!--Horizontal line breaks -->
<abbr title="Don't repeat yourself">DRY</abbr>
```
The **address** tag is used for contact information with the **br** tag providing line breaks:
```html
<address>
    #12 Lover's Lane <br/>
    Diamond Avenue <br/>
    Mystery Island <br/>
    Somewhere in Paradise
</address>
```
The bi-directional override **bdo** tag is used to send HTML text in the opposite direction, using the *dir* attribute:
```html
<bdo dir="rtl">It's Over</bdo> <!-- Also (ltr) -->
```
## Basic Tags: Lists
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
Unordered lists can have four types: *disk, circle, square, and none*. They can be implemented with the CSS attribute **list-style-type**.

## Media Files
### Audio
The audio tag is used to add audio files to a webpage:
```html
<audio>
    <!-- source tag allows different audio types -->
    <source src="media/example.mp3" type="audio/mpeg">
    <source src="media/example.ogg" type="audio/ogg">
</audio>
<!-- Other attributes: controls, loop, muted, autoplay -->
```
### Video
When working with videos only use the file that is stored on your computer, otherwise the link will direct the user to another website.
```html
<video control src="video.mp4"></video>
<!-- Other attributes -->
<video controls src="video.mp4" autoplay width="450px" height="300px" muted></video>
```
Videos can also be in webm and ogg; however, some browsers may not support them.

### Images

## Forms
The **form** element is a container element that takes 2 attributes: **action**, which tells the form where to send the data and **method** which tells the browser which HTTP request method to use to submit the form.
```html
<form attribute="makefriends.com" method="post"></form>
```
Form **control elements** allow users to interact with a form:
- **label**: states what type of data needs to be collected and must be link to an input field with the *for* attribute.
- **input**: allows the user to type or select and uses to *id* attribute to connect with the specific label. Has several attributes:
    - *type*, *name* (helps backend), *password*, *placeholder*
- **textarea**: can accept *rows* and *cols*

### The Input Field
The **input** field is an in-line element that has several attributes. The **id** attribute is used to link the label (*for*) with the correct input field. The **type** attribute defines the type of data needed for the specific field: 
- **email, password, tel, file (allows users to upload a file), date**
  - Groups of inputs:
    - **radio**: groups similar themes, only one option can be chosen
    - **checkbox**: can have an added default attribute of *checked*;
  - **img**: uses the *src* attribute

Other atttributes of the input field
- **pattern**: provides a pattern that the field values must follow like: *pattern="[0-9]{3}-[0-9]{4}";
- **value**: specifies an initial value for the input field. however:
  - for buttons it specifies the name on the button
  - for radio and checkbox it specifies the value associated with them
- **size**: based on the number of characters, it is the visible width. It can only be used with a limited number of types like *password, url, search, and email*.
- **readonly**: does not allow input, mainly used to send a value while submitting a form.
- **height/width**
- **disabled**: nothing can be typed
- **multiple**: a boolean mainly used to allow a user to upload multiple files
- **placeholder**: a muted text that specifies a hint to the user
- **autofocus**: an element can have the focus when a page is loaded
- **autocomplete**: allows the broswer to guess the input based on previous values and has the values *on and off*
- **list**: used with the *datalist* element where the ids must match.
- **step**: if step="5" then legal steps are -15, -10, -5, 0, 5. The attribute is a multiple attribute of the given number.
- **min/max**: any value like birthdates, only number attributes. Example: *max="2022-10-15"*.
- **max/minlength**: text
- **required**: input must be filled

Selection elements can have an option group but must always have a value. Additionally, it can have a predetermined selection:
```html
<!-- Drop Down Menu -->
<select name="shows">
    <optgroup label="comedy">
        <option value="the-simpsons" selected>The Simspons</option>
        <option value="family-guy">Family Guy</option>
        <option value="bobs-burger">Bob's Burger</option>
    </optgroup>
    <optgroup label="comedy"></optgroup>
</select>
```
Radio buttons and checked boxes can be used with the *type* attribute of the input element. They can have pre-selected options with the *checked* attribute. The **button** element has a *type* attribute that can accept *submit, reset, button (generic (JS))*.

The *fieldset* element helps group logical and relatable form elements. The *legend* element is used to give fieldsets a heading or caption.
```html
<fieldset>
    <legend>What drink would you like?</legend>
    <div>
        <input type="radio" name="drink" id="coffee" value="coffee">
        <label for="coffee">Coffee</label>
    </div>
</fieldset>
<div>
  <label for="username">Name: <span aria-label="required">*</span></label>
  <input id="username" type="text" name="username" required />
</div>
```
The textarea element can have validations like *minlength and maxlength*. Number input can have a min and max attributes. Also there can be pattern validations. Emails automatically have pattern matching from browsers. Forms can use CSS to be valid or invalid styling (input:valid).
```html
<form action="#" method="get">
  <div>
    <label for="zip_code">Postal / Zip Code:</label>
  </div>

  <input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" title="Please enter a valid zip code, example: 65251" placeholder="65251" required>
  
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```
### Buttons
Buttons can have for different types in *button, submit, menu, and reset*. Buttons can also be created in the input tag by passing one of the values to the *type* attribute of the input element.
```html
<input type="reset" value="reset" />
```

## Advance Elements
### Embed websites and maps
The inline frame **iframe** tag is used to embed websites and maps on a page.
```html
<iframe src title></iframe>
```
It can also have attributes like width, height, style, and target.

### lang attribute
### Dialog
### Canvas graphics
### SVG in HTML



Some common HTML body tags:
- aside, section, header, nav, article, main







### Tables
They are enclosed in the **table** tag. Each cell is represented by the *td* tag and will be next to each other unless a *tr* tag is used to represent a row. The *th* tag is used for headers. The **caption** tag is normally placed below the opening table tag. The borders are invisible by default.
```html
<table border="2"></table>
<!-- Allow to span rows and columns -->
 <th rowspan="2"></th>
 <th colspan="2"></th>
```
The **tfoot, thead, and tbody** tag are great for adding CSS styling to a table. The *scope* attribute in the *th* tag helps with accessibility. The **id and headers** attributes are used to make references.



