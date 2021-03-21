// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Ellipse_Size: 30,
    Random_Seed: 418,
    Download_Image: () => save(),
}
gui.add(params, "Ellipse_Size", 0, 100, 1)
gui.add(params, "Random_Seed", 0, 1000, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background('#FDF1E1')
    randomSeed(params.Random_Seed)


    noFill()
    strokeWeight(1)
    stroke('#D63F20')
    
    let debx = 40;
    let deby = 60; 
    splitRectangle(debx,deby,width-(debx*2),height-(deby*2))

    //draws a rectangle on top of the very first drawn rectangle (the one that encompasses all the other rectangles) to make it disappear under the new rectangle.
    stroke('#FDF1E1')
    strokeWeight(2)
    rect(debx,deby,width-(debx*2),height-(deby*2)) 

}

//recursive function that splits one rectangle into two new rectangles, vertically or horizontally
function splitRectangle(x,y,w,h) {

    if (random(0,1) < 0.5){
        const division = random(0, h);

        //Rectangle 1
        const newx1 = x;
        const newy1 = y;
        const newwidth1 = w;
        const newheight1 = division;
        rect(newx1,newy1,newwidth1,newheight1)

        if(newwidth1 >= 15 && newheight1 >=15){
            splitRectangle(newx1,newy1,newwidth1,newheight1)
        }

        //Rectangle 2
        const newx2 = x;
        const newy2 = y+division;
        const newwidth2 = w;
        const newheight2 = h-division;
        rect(newx2,newy2,newwidth2,newheight2)

        if(newwidth2 >= 15 && newheight2 >=15){
            // stroke('blue')
            splitRectangle(newx2,newy2,newwidth2,newheight2)
        }
    }
    else {
        const division = random(0, w);

        //Rectangle 1
        const newx1 = x;
        const newy1 = y;
        const newwidth1 = division;
        const newheight1 = h;
        rect(newx1,newy1,newwidth1,newheight1)

        if(newwidth1 >= 15 && newheight1 >=15){
            // stroke('#000')
            splitRectangle(newx1,newy1,newwidth1,newheight1)
        }

        //Rectangle 2
        const newx2 = x+division;
        const newy2 = y;
        const newwidth2 = w-division;
        const newheight2 = h;
        rect(newx2,newy2,newwidth2,newheight2)

        if(newwidth2 >= 15 && newheight2 >=15){
            // stroke('#000')
            splitRectangle(newx2,newy2,newwidth2,newheight2)
        }
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}