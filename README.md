# Assignment7 - NYC Coffee Shop
This is a website for displaying coffee gallery and other details


## Features

 - Home page: This is the initial page that will be displayed to the user
 - Image Gallery page: This page is used to provide image gallery information

 
 ## Style
 - The web pages are styled by an external scss file 
 
## Additional Information

- Variables:
Variables are a way to store information that you can re-use later.
Here variables such as 
$light-color  - used to store the color value
$font-stack  - used to store the font values
$primary-color  - used to store the color value

- Custom Properties:
Custom properties (sometimes referred to as CSS variables or cascading variables) are entities defined by CSS authors that contain specific values to be reused throughout a document. 
Here variables such as 
:root {
  --main-bg-color: brown;
}

- Nesting:
Here nesting is implemented on the header element

- Interpolation:
SASS Interpolation is a technique to include the result of any SASS Script expression into the stylesheet wherever required using #{}.
Added spacing margin and padding 

- Placeholder Selectors:
Sass has a special kind of selector known as a “placeholder”. It looks and acts a lot like a class selector, but it starts with a % and it's not included in the CSS output.
%btn - Added btn as Placeholder Selectors

- Mixins:
Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.

- Functions:
Functions permit you to characterize complex operations on SassScript values that you can reuse all through your stylesheet. 
set-text-color -  function to change the text color based on the background



## Author

Andrea Joyce Sequeira


