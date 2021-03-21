# Algorithmic Aesthetics : Recoding
A recoding of an algorithmic artwork ([Untitled by Georg Nees, around 1964-1968](http://dada.compart-bremen.de/item/artwork/432))

## My pseudo-algorithm

* Make a rectangle that takes 100% of the width and length of the canvas. It should have a transparent background and a colored border.
* Split the rectangle in two new rectangles, choose randomly lenghtwise OR widthwise. The width/length of the two rectangles is randomly chosen. the two new rectangles should make 100% of the canvas width/length when added together.
* Split each new rectangle in two lengthwise or widthwise.
* Split the new retangles again and again (recursively) until they reach a chosen minimum width or height.
* Add a rectangle that takes 100% of the width and length of the canvas on top of all the previously drawn rectangles. it should be transparent with a border that has the same color as the background.

## The recoded artwork
https://estellethvn.github.io/ea-recoding-p5/
