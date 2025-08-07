# Conquering Responsive Layouts
Course provided by [Kevin Powell](https://courses.kevinpowell.co/view/courses/conquering-responsive-layouts/233002-introduction/1007804-intro-why-the-course-is-formatted-in-this-way).

## Using Percentages and Avoid Heights
Be default everything is responsive, that is the widths of each element are 100% of the parent by default. When using percentages for widths it stays the same on all screen sizes.

For setting the height of element use margin and paading with relative units like em. The *em* value is *16* time how much em, so *3rem is 48px*. The em changes in proportion to the set parent or body size, while *rem* is consistent the the root (html).

## Relative Units
**em** units are relative to the font size of their parent element. This means if the font size of a parent div changes, any child element using em units will also scale accordingly. This can lead to a cascading effect where changes deep within the document can have unexpected consequences on nested elements.

**rem** (root em) units, on the other hand, are relative to the font size of the root html element. Since the root element's font size is set once, rem units provide a more consistent and predictable way to size elements. Changes to a parent element's font size will not affect a child element using rem. This makes it a great choice for creating scalable and maintainable layouts, especially for things like font sizes and spacing.

Use *rem* for font and spacing more often than *em*, except for button spacing.