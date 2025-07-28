## Intro and Basic Elements
All HTML (HyperText Markup Language) elements are wrappedn in tags:
```html
<p>This is a paragraph</p>
<img />
```
Elements that do not have a closing tag are known as **void** elements.Attributes are used to change the behaviour of elements, and elements can have several attribute include *for and src*. The atribute has a name followed by *=* where the value is placed in quotes. Boolean attributes do not need any values such as *required*.

Always name the page that contains the homepage **index**.
Heading elements are from h1 to h6, where h1 is the largest. The **strong** element makes text bold and lets the browser know that it is important, while the **em** makes texts italic.
```html
<!-- I am a comment -->
```
The link element in the header is used to link external files and icon to the HTML file. **UCS Tranformation Format 8** (UTF-8) is a standardised character encoding used on the web. It supports all characters in the Unicode character set.

Use character references *(entities)* when you want to reference an element:
```html
<p>This is an &lt;img /&gt; element</p>
<!-- Other refereces :
  &#69; decimal numeric
  &#x3C; hexidecimal
 -->
```
There are three types: Names, Decimal, and Hexidecimal

The meta tag can help with SEO:
```html
<meta
  name="description"
  content="A summary of the website"
/>
```
The **Open Graph** protocol allows you control how your website's content appears across multiple social media platforms.
```html
<meta content="siteUrl" property="og:title" />
<meta property="og:type" content="website">
<meta property="og:image" content="website.png">
```

### Links
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
- target: 
  - *"_self"*: opens in the current window 
  - *"_blank"*: opens in a new browser
  - *"_parent"*: mainly used with *iframe*, which opens in the parent tabs
  - *"_top"*: top parent
  - *"_unfencedTop"*: used for the experimental Frame API
- download: can be standalone or given a name
- title
- href: can have a link, mail, or phone number:
    - href="tel:+123456789"
    - href="mailto:example@mail.com"
```html
<!-- Download a file with the name new file -->
 <a href="https://somesite.com/somefolder/somefile.pdf" download="newfile">Download me!</a>
```
An absolute path is the complete path to a resource that typically starts at the root directory. Relative paths are shorter and do not include the protocol and complete link. An absolute path in a file system starts with a */*, while relative paths are *./ and ../*, with the last meaning to go to the root directory and navigate from there like: *../src/backend/db.js*.

Links can have 5 different states which can styles with CSS:
- **:linl**
- **:visited**
- **:hover**
- **:focus**
- **:active**:



### Basic Tags: Lists
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

### Embed websites and maps
A **replaced** element is an element where the content is determine by an external resource rather than by CSS. They are elements like *iframe, video,embed, and img* where you can control the position and size but not the contents.

The inline frame **iframe** tag is used to embed websites and maps on a page.
```html
<iframe src title></iframe>
```
It can also have attributes like width, height, style, allowfullscreen, title, and target. To embed HTML you have to use **srcdoc** instead of the normal src.

## Media Files
### Audio
The audio tag is used to add audio files to a webpage:
```html
<audio>
    <!-- source tag allows different audio types: wav -->
    <source src="media/example.mp3" type="audio/mpeg">
    <source src="media/example.ogg" type="audio/ogg">
</audio>
<!-- Other attributes: controls, loop, muted, autoplay -->
```
Use different source elements to allow the broswer to choose the **type**
### Video
When working with videos only use the file that is stored on your computer, otherwise the link will direct the user to another website.
```html
<video control src="video.mp4"></video>
<!-- Other attributes -->
<video controls src="video.mp4" autoplay width="450px" height="300px" muted></video>
```
Videos can also be in webm and ogg; however, some browsers may not support them. The **poster** attribute allows an omage to be displayed while the video is being downloaded.

### Images
The *fugure* tag will allow a caption to be added to an image as it is used as a self containing element:
```html
<figure>
  <img src="myphotos.png" alt="beauty">
  <figcaption>Beautiful Places<figcaption>  <!--Caption-->
</figure>
```
When using images look at the size, format, and the compression, do not compress jpeg as the quality will be lost. PNG and JPG images are **raster format** meaning they are pixelated. **Scalable Vector Graphic** (SVG) tracks data based on paths to plot points, lines, and curves, which allows them to scale without losing quality. They can also be used in HTML using the **SVG** tag with a *path* attribute. Font Awesome is a website that uses icons which svgs are suitable for. They are also great for logos. SVG stores data as *XML*.
```html
<!-- Creating shapes -->
<svg>
  <circle cx="100" cy="100" r="50"/>
</svg>

<svg>
<rect x="50" y="50" width="450" height="350"/>
</svg>

<svg>
<line x1="0" y1="90" x2="100" y2="20" stroke="black" />
</svg>
```
The svg element can have attributes like: viewBox, width, and heigth.

Images with the Creative Commons 0 are licensed publicly.


## Semantic Elements
Using proper semantic elements can assist with accessibility devices like screen readers and aid in SEO. The **div** element is one of the few elements that do not have a semantic meaning.

A web page should only have one *h1* element.

The idiomatic tag **i** tag should only be used when the others do not provide semantic advantages. It used for  highlighting alternative voice or mood, idiomatic terms from another language, technical terms, and thoughts:
```html
<p I do not know in french is> <i lang="fr">Je ne sais quoi.</i></p>
```
Use the *em* tage to emphasis importance as the *i* does not.

The bring attentio to **b** element is commonly used to highlight keywords in summaries or product names in reviews. It is similar to the **strong** element but the strong element empahsis importance, though both make text bold. 

- **strong**: importance
- **mark**: relevance
- **cite**
- **dfn**: definition of a term

Structural semantic elements inside the body tag:
- **header**: Used for introductory information like navigation and logos, main title and more.
- **nav**: used for navigational links and menus, normally inside of the header element
- **main**: Always go after the header and specifies the main content on the page
- **section**: provides context about different parts of the main
- **aside**: can be in a section if it relates like a fun fact, or standalon in the main with references to global site info.
- **figure.figcaption**: used for code snippets, images, and diagrams
- **details/summary**: summary provides the clickability inside the details, which expands to show the content. 
```html
<header>
  <h1><h1>
  <nav></nav>
</header>

<main>

  <section>
    <h2></h2>
    <p></p>
  </section>

  <section>
    <h2></h2>
    <article>
      <h3></h3>
      <p></p>
    </article>
  </section>

</main>

<footer>
  <section>
    <address></address>
  </section>
</footer>
```
Other inline semantics include:
- **mark**: for highlighitng
- **small**: for making texts small, like copyright info.

### Text and Time Elements
#### Text
There are different quotes that can be used:
```html
<!--- Inline --->
<p><q>Get out of my life!</q>That's what she said</p>
<!--- Block: intents the quite without --->
<blockquote cite="URL">
  <p></p>
  <p></p>
  <p></p>
</blockquote>
<p>Ris Coding, <cite>(Used for title)</cite></p>
<!--- Citation --->
<p><q>All is well</q>, <cite>(Ris, 2025)</cite></p>
```
The **q and blockquote** tags can have a cite attribute that provides a URL.

The **abbr** is used for abbreviations and helps with SEO by providing information:
```HTML
<abbr title="Keep it simple, stupid">KISS</abbr>
<hr/> <!--Horizontal line breaks -->
<abbr title="Don't repeat yourself">DRY</abbr>

<!-- CAn also be used for abbreviationa -->
```
The **address** tag is used for contact information with the **br** tag providing line breaks:
```html
<address>
    #12 Lover's Lane <br/>
    Diamond Avenue <br/>
    Mystery Island <br/>
    Somewhere in Paradise
</address>
<address>
  <h2>Contact Us</h2>
  <p>Some address</p>
  <a href=":mailto:contact@something.com">Email Us</a>
  <!-- Better to use a contact form than the mailto -->
</address>
```
The bi-directional override **bdo** tag is used to send HTML text in the opposite direction, using the *dir* attribute:
```html
<bdo dir="rtl">It's Over</bdo> <!-- Also (ltr) -->
```
#### Time and Date
The **time** element is used to show a specific time using the *datetime* attribute to transform time into machine readable formats:
```html
<time datetime="2025:07:26T14:05"></time>
```
It is great to use for specific dates like for events. It is also recommended to use the *ISO 8601* format with date time: Year-Month-Day-Time

### Specialised Elements
Mathematical and Chemical equations can be represented by using the *sup* superscript and *sub* subscript tags.
```html
<!-- Sample or output text -->
 <samp>Error: this cannot be done!</samp>
<!-- Represents user's input -->
 <kbd>CTRL + C</kbd>
<!-- Represents computer code -->
 <code>String name = "Sophie";</code>
<!-- Sample or output text -->
```
To represent multiple lines of code use the preformated element **pre**, as code is an inline element:
```html
<pre>
  <code>
    String name: "Jane";
    int age: "34";
  </code>
</pre>
```
The **unarticulated annotation (u)** element is used to represent inline text that have non-textual annotations, and it has a underline black line as a default. The strike element **s** is used to show when text is no longer relevant. The ruby element is used to show small text above or below an element, normally for the pronunciation of East Asian characters.
```html
<p>
        Another example with a different character set:
        <ruby>
            你好
            <rt>Nǐ hǎo</rt>
        </ruby>
        means "hello" in Mandarin Chinese.
    </p>
```


## Forms and Tables
### Forms
The **form** element is a container element that takes 2 attributes: **action**, which tells the form where to send the data and **method** which tells the browser which HTTP request method to use to submit the form.
```html
<form attribute="makefriends.com" method="post"></form>
```
Form **control elements** allow users to interact with a form:
- **label**: states what type of data needs to be collected and must be link to an input field with the *for* attribute.
- **input**: allows the user to type or select and uses to *id* attribute to connect with the specific label. Has several attributes:
    - *type*, *name* (helps backend), *password*, *placeholder*
- **textarea**: can accept *rows* and *cols*

Forms can be used for **quizzes**. It is the best element for it.
#### The Input Field
The **input** field is an in-line element that has several attributes. The **id** attribute is used to link the label (*for*) with the correct input field. The **type** attribute defines the type of data needed for the specific field: 
- **email, password, tel, file (allows users to upload a file), date**
  - Groups of inputs:
    - **radio**: groups similar themes, only one option can be chosen, they must share the same name attribute
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
- **min/max**: any value like birthdates, only number attributes. Example: *max="2022-10-15"*. Provides a range of accepted values
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
The **textarea** element can have validations like *minlength and maxlength*. Number input can have a min and max attributes. Also there can be pattern validations. Emails automatically have pattern matching from browsers. Forms can use CSS to be valid or invalid styling (input:valid). It can also specify space with rows and cols:
```html
<textarea id="comments" rows="10" cols="10"></textarea>
```
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
#### Buttons
Buttons can have for different types in *button, submit, menu, and reset*. Buttons can also be created in the input tag by passing one of the values to the *type* attribute of the input element.
```html
<input type="reset" value="reset" />
```

### Tables
They are enclosed in the **table** tag. Each cell is represented by the *td* tag and will be next to each other unless a *tr* tag is used to represent a row. The *th* tag is used for headers. The **caption** tag is normally placed below the opening table tag. The borders are invisible by default.
```html
<table border="2"></table>
<!-- Allow to span rows and columns -->
 <th rowspan="2"></th>
 <th colspan="2"></th>
```
The **tfoot, thead, and tbody** tag are great for adding CSS styling to a table. The *scope* attribute in the *th* tag helps with accessibility. The **id and headers** attributes are used to make references.

**Debugging** is the process of finding and fixing error in code. The **DOM Inspector** is a tool that helps you check the page you are currently on. The **Deveolper Tools** helps you check the HTML, CSS, and JS of the current page.

## Accessibility
In web development accessibility deals with creating websites that everyone can interact with, that is, it's inclusive. These apply to people with auditory, cognitive, motor, and visual disabilities. W3C developed the **Web Content Accessibility Guidelines (WCAG)** that can be applied to make the web more accessible. It was developed with four core principles known as *POUR*:
- *Perceivable*: user must see the objects being presented, like using text for images for those y=who use screen readers;
- *Operable*: users must be able to intract with the UI;
- *Understandable*: users must be able to understand the content;
- *Robust*: content must be interpretable.

Semantics are important for accessibility, therefore, use the correct element when possible.

Screen readers are assistive technology programs that help blind and visually impaired people use computers. They may have text to a speech, braile, and can be used for people with dyslexia and cognitive disabilities. MacOS has VoiceOver which can be turned on using *CMD + F5*.

Accesssibility Testing Tools include:
- WAVE, Google Light House, pagespeed.web.dev, IBM Accessibility Checker

However, they do not support local websites.

**Tables** can be more accessible in a number of ways. One is to write a descriptive caption. Use the *th* to name row and column headers, while the *scope* attribute describes if the header is a row or column: rows, cols. Let the browser determine the size of the table. **Labels** in forms are important for accessibilty as they describe what the inputs are used for.

### WAI-ARIA
**Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)** is a specification that enhances the accessibility of dynamic content and UI components. WAI-ARIA provides a set of attributes that can be added to HTML content to add additional semantic meaning. They are categorised in roles, states, and properties. The ARIA *role* defines the purpose of an element to assistive technologies. The *state* defines the current state of an element which can be changed by using JS. The *properties* add additional details to the element. Avoid over-using ARIA.

Most semantic HTML elements like *nav* have a default ARIA role, but not non-semantic elements like *div*. There 6 main categories of ARIA roles:
1. **Document Structure Roles**: define the over all structure of the webpage, not used in modern development.
2. **Widget Roles**: define the functionality of elements like scrollbars
3. **Landmark Roles**: classify and label the sections of a page, use sparingly. The proper HTML elements like main are already available.
4. **Live Region Roles**: define elements that will change dynamically.
5. **Window Roles**: define sub windows like pop up such as dialog, best to use the element itself.
6. **Abstract Roles**: help organise the document and should not used. Used by the browser.

The **aria-label** attribute is an invisible text element that adds a text label to an element that screen readers can read. They are great for using icons as button where it describes it to the screen reader:
```html
<button aria-label="Search"><i class="fas fa-search" ></i></button>
```
The **aria-labelledby** attribute is similar to the aria-label attribute but it reference an id of an element:
```html
<input type="text" aria-labelledby="text-btn">
<button type="button" id="text-btn">Search</button>
<!-- It automatically updates if the texts in the id changes -->
```
Multiple ids can be references in one aria-labelledby attribute.Do not use the two attributes together.

The **aria-hidden** element allows you to hide elements and their childrren from the accessibility tree but they stay on your page. This is done by setting the attribute to *true*. They are good for content that are used for decorative purposes.

The **aria-expanded** attribute is used to indicate if a control is expanded or collapsed. It uses *true or false* as its values. The **aria-controls** and **aria-owns** can be used with the aria-expanded attribute to  establish a programmatic connection between the controlling element and the element it controls.
```html
<button aria-expanded="false" aria-controls="menu1">Menu</button>
<ul id="menu1">
  <li>...</li>
  <li>...</li>
</ul>
```
The aria-owns allows you to move the expandable content after the main container that holds it in the accessibility tree. It creates unnecessary verbosity for screen readers and forces screen readers to tab through all the content on the page before reaching the expandable content.

The **aria-live** atrribute creates a live region on the page which can be used to notify screen readers of dynamic content changes in the live region of a page. It has 3 values in *assertive (very important), polite, and off (update will not announced)*.

Common aria state attributes that are used for custom form control elements:
- *aria-selected*: indicates that an element has been selected;
- *aria-disabled*: indicates that the element is disabled;
- *aria-haspopup*: indicates that an interactive element will trigger a pop up when activated. Can only be used for menu, grid, dialog;
- *aria-required*: indicates the info is required;
- *aria-checked*: emulates a checked checkbox.

The **aria-describedby** attribute is used to provide additional information about an element by referencing existing content on the page. It is associated to the next element by the next element's id.

The **5 rules** of ARIA:
1. Always use native elements when possible.
2. Never change native semantics unless you have no choice.
3. All ARIA interactive controls must be usuable with a keyboard.
4. Never use role='presentation' or aria-hidden='true' on focusable elements.
5. All interactive elements must have an accessible name.

### Accessible Media Elements
The *alt* alternative text attribute is used for images that helps with describing an image to a visually impaired person or when the the image is not being the displayed on the screen. Be descriptive but not unnecesary as it should be kept short. Whenused with images for links, such as arrow, the alt should describe the destination of the link.

Make the texts of links descriptive, ideally between 2-5 words. Make links visually distinct by using things like underlines.

Make videos and audios more accessible by using captions, which can be applied through the *track* element:
```html
<!-- Video -->
<video controls src="video.mp4">
  <track
    src="captions.vtt" 
    kind="captions"
    srclang="en"
    label="English" 
  />
</video>

<!-- Audio -->
<audio controls src="audio.mp3">
  <track
    src="captions.vtt" 
    kind="captions"
    srclang="en"
    label="English"
  />
</audio>
```
The attributes of the track element:
- *kind*: informs the track element how it should be used. It can accept the values:
  - *caption*, *subtitles*, *chapters*, and *metadata*
- *srclang*: represents the language of the content;
- *label*: descriptive title for the text track that browsers use to identify and display it in the list of available text tracks.

Additionally, you can provide transcripts under the video or audio.

By default the broswer allow users to use the TAB key to skip through elements are they appear, called the natural order. The *tabindex* attribute allows you to change the focus of an element. Elements with a tabindex value of 0 are added to the natural order, while -1 removes them but they can be presented through JS. Aything greater than 0 has a custom order.

The **accesskey** attribute makes a web page keyboard acessible as well by defining a key that focuses on or activates an element:
```html
<button accesskey="s">Save</button>
<button accesskey="c">Cancel</button>
<a href="index.html" accesskey="h">Home</a>
```
Another way is to use CSS and apply focus to the element.

## Advanced Elements
### Dialog
The **dialog** or modal dialog is used to display a pop box on the webpage. It is hidden by default but it has an *open* attribute that can make it visible. The dialog box should be renedered using JavaScript through the *showModal()* and *show()* methods instead of the open attribute. Ensure that there is a button to close the dialog once openned, because it does not allow users to interact with the rest of the page.
### Canvas Graphics
Canvas Graphics allow you to control elements like images, texts, and graphics using JavaScript. A canvas is a rectangular container with width and height being *300x150px* and has no borders by default. The **getContext(contextType)** method allows you to draw on the canvas:
```html
<canvas id="canvas"></canvas>

<script>
  const canvas = document.getElementById("canvas");
  const draw = canvas.getContext("2D");
  // To draw a circle and a rectangle there are three methods used:

  draw.beginPath(); // starts the path, or resets it
  draw.arc(75, 75, 60, 0, 7); // creates an arc or curve
  draw.stroke(); // displays the path on the canvas

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
	  ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
</script>
```
Texts only requires two methods:
- *fillText(text, x, y)*: draw filled texts on the canvas;
- *strokeText(text, x, y)*: draws texts with no fill on the canvas


## Resources
- W3 HTML Validator
- JSON Formatter for validating HTML
