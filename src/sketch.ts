// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Ellipse_Size: 30,
    Random_Seed: 0,
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
    // background('#D63F20')
    //ellipse(mouseX, mouseY, params.Ellipse_Size)
    noFill()
    strokeWeight(1)
    stroke('#D63F20')
    
    let debx = 0;
    let deby = 0;
    rect(debx,deby,width,height) 
    splitRectangle(debx,deby,width,height)

    stroke('#FDF1E1')
    strokeWeight(40)
    rect(debx,deby,width,height) 

}

function splitRectangle(x,y,w,h) {
    let division, newx1, newy1, newwidth1, newheight1, newx2, newy2, newwidth2, newheight2;

    if (random(0,1) < 0.5){
        division = random(0, h);

        //Rectangle 1
        newx1 = x;
        newy1 = y;
        newwidth1 = w;
        newheight1 = division;
        rect(newx1,newy1,newwidth1,newheight1)

        if(newwidth1 >= 20 && newheight1 >=20){
            // stroke('#000')
            splitRectangle(newx1,newy1,newwidth1,newheight1)
        }

        //Rectangle 2
        newx2 = x;
        newy2 = y+division;
        newwidth2 = w;
        newheight2 = h-division;
        rect(newx2,newy2,newwidth2,newheight2)

        if(newwidth2 >= 20 && newheight2 >=20){
            // stroke('blue')
            splitRectangle(newx2,newy2,newwidth2,newheight2)
        }
    }
    else {
        division = random(0, w);
        // rect(x,y,division,width-y)
        // rect(division,y,width-division,height-y)

        //Rectangle 1
        newx1 = x;
        newy1 = y;
        newwidth1 = division;
        newheight1 = h;
        rect(newx1,newy1,newwidth1,newheight1)

        if(newwidth1 >= 20 && newheight1 >=20){
            // stroke('#000')
            splitRectangle(newx1,newy1,newwidth1,newheight1)
        }

        //Rectangle 2
        newx2 = x+division;
        newy2 = y;
        newwidth2 = w-division;
        newheight2 = h;
        rect(newx2,newy2,newwidth2,newheight2)

        if(newwidth2 >= 20 && newheight2 >=20){
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