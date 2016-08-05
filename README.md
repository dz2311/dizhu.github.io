# dizhu.github.io
This is my personal website page.
[Absolute README link](https://dz2311.github.io/)


# About the css file and the js file
Based on materialize css [Absolute README link](http://materializecss.com/), I added arrows for controlling the slides, the button style on the slides, the pinterest style for the project part, ect. Please see my commits for those changes. 

# Bug fixed
When I was implementing the pinterest style, there is a conflict between the pinterest style and the .card-reveal class. In materialize css, the card-reveal part should be "display:none", right below the .card class. When in the pinterest style, everytime I clicked at the card, its position will be recalculated, which causes the card-revearl part cannot be display correctly sometime. I replace its original position and change the animation in materialize.js to make it work.

The pinterest style code can be found in the end of materialize.css.
