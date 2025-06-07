## The Styling Language
CSS uses selectors and a curly bracket as its basic syntax. Basic styling:
```css
/* Select all elements */
* {
    color: black;
}

/* Select all elements of a specific type */
p { color: green; }

/* Class Selectors */
.just-her {
    color: purple;
}

/* ID Selectors */
#title { background-color: violet; }

/* Multiple Selectors */
.going, not-going { color: yellow; }
```

Chaining classes allows you to select only elements that has the same attributes: *.header.sub*. Ids and classes can also be chained like *.footer#section*. However, chaining cannot be used with type selectors.

Descendant combinator allows the child elements to be selected given that they have the same class attribute:
```css
.parent .child { color: orange; }
```

Common properties in CSS:
- color, background-color
- font-family, font-size, font-weight
- text-align
- height, width (use auto with height to keep proportions)

CSS can be added to HTML:
```html
<link rel="stylesheet" href="styles.css">
```
## The Box Model
Every element lays in a box which can be observed by using the *outline* property:
```css
* {
    outline: 2px solid red;
}
```
The box can be manipulated using:
- **padding**: the space between the border and the content
- **border**: space between the margin and the padding
- **margin**: space between adjacent borders
- **box-sizing**: has two attributes in content-box and border-box, where the first is the default.

Generally, the universal margin and padding is set to 0 and the box-sizing is set to border-box. The short-hand setting goes:
- top -> right -> bottom -> left
- auto can be used for horizontal centering

## Block vs Inline
Block elements start on a new line while inline elements can be on the same line. Inline-block elements behave like inline but have some block properties:
```css
div {
    display: inline-block;
}
```

## Flexbox
It is about arranging items into rows and columns, where they can shrink and grow.
```css
.main-container {
    display: flex;  
}
```
Properties of flex:
- **flex-direction**: it is horizontal by default with a value of row, but can be changed to column
- **justify-content**: allows content to be aligned with space-around, space-between, center, and space-evenly
- **align-items**: positions items vertically using flex-start, center, flex-end, and baseline
- **flex-wrap**: can wrap cantents and releases the align-content property

Elements inside the main container can have specific properties:
- **flex-grow**
- **flex-shrink**
- **flex-basis**: overides the width
- **flex**: is the shorthand for all three
- **align-self**
- **order**: changes the order, where the last can appear first with -1

[Cheatsheet](https://flexbox.malven.co/)