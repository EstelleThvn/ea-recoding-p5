# Algorithmic Aesthetics : Recoding
A recoding of an algorithmic artwork : [Untitled by Georg Nees](http://dada.compart-bremen.de/item/artwork/432), around 1964-1968, Computer-generated serigraphy after plotter drawing, 99×69cm.

## Visual analysis
The artwork is composed of two different colors : the background, which is white or off-white/cream, and the color of the lines which is a mix of orange and red. There is only one geometry type : the artwork is solely composed of rectangles. It seems structured and compact at first thanks to the choice of having only vertical and horizontal lines, contained into a big rectangle. We can also consider that there is a grid because we can group a few rectangles together inside a bigger rectangle. But inside this structure, the placement seems rather random and chaotic : the "grid" formed by the bigger rectangles is made of rectangles randomly placed (so we can also consider that there is no grid). Indeed, everything seems like nothing can move inside the canvas, the rectangles are firmly pressed against each other, like a cobbled road. But at the same time, the varying width and height of these rectangles bring randomness to the artwork. We can see some clusters of rectangles that are smaller than the rest that are probably due to the randomness of the algorithm behind it.

## My intention
Because of the randomness of the rectangle placement, I won't be able to reproduce exactly the same artwork as the original. The similarities with the original artwork will therefore lie in how the structure is made, and there will be differences in the placement of the rectangles and their width and height.

## My pseudo-algorithm

* Make a rectangle that takes 100% of the width and length of the canvas. It should have a transparent background and a colored border.
* Split the rectangle in two new rectangles, choose randomly lengthwise OR widthwise. The width/length of the two rectangles is randomly chosen. the two new rectangles should make 100% of the canvas width/length when added together.
* Split each new rectangle in two lengthwise or widthwise.
* Split the new rectangles again and again (recursively) until they reach a chosen minimum width or height.
* Add a rectangle that takes 100% of the width and length of the canvas on top of all the previously drawn rectangles. it should be transparent with a border that has the same color as the background.

## The recoded artwork
https://estellethvn.github.io/ea-recoding-p5/
