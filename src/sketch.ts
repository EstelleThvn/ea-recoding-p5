// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Random_Seed: 366,
    Line_Width: 1,
    Min_Size_Rectangle: 8,
    Interactive: 0,
    Download_Image: () => save(),
}
gui.add(params, "Random_Seed", 0, 1000, 1)
gui.add(params, "Line_Width", 0.5, 10, 0.5)
gui.add(params, "Min_Size_Rectangle", 5, 20, 1)
gui.add(params, "Interactive",0,2,1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background('#FDF1E1')
    randomSeed(params.Random_Seed)


    noFill()
    strokeWeight(params.Line_Width)
    stroke('#D63F20')
    
    let debx = 40;
    let deby = 60; 
    if(params.Interactive == 0){
        splitRectangle(debx,deby,width-(debx*2),height-(deby*2))

        //informations
        const sentence = 'Non interactive version';
        noStroke()
        fill('#D63F20')
        text(sentence, debx, deby-20, 200, 80);
        noFill()
        stroke('#D63F20')
    }
    if(params.Interactive == 1){
        splitRectangleInteractiveHole(debx,deby,width-(debx*2),height-(deby*2))

        //informations
        const sentence = 'Interactive version 1 : puts a hole in the structure';
        noStroke()
        fill('#D63F20')
        text(sentence, debx, deby-20, width-(debx*2), 80);
        noFill()
        stroke('#D63F20')
    }
    if(params.Interactive == 2){
        splitRectangleInteractiveColor(debx,deby,width-(debx*2),height-(deby*2))

        //informations
        const sentence = 'Interactive version 2 : fills the rectangle where the mouse is placed';
        noStroke()
        fill('#D63F20')
        text(sentence, debx, deby-20, width-(debx*2), 80);
        noFill()
        stroke('#D63F20')
    }

    //draws a rectangle on top of the very first drawn rectangle (the one that encompasses all the other rectangles) to make it disappear under the new rectangle.
    stroke('#FDF1E1')
    strokeWeight(params.Line_Width*2)
    rect(debx,deby,width-(debx*2),height-(deby*2)) 

}

//recursive function that splits one rectangle into two new rectangles, vertically or horizontally
function splitRectangle(x,y,w,h) {

    if (random(0,1) < 0.5){
        const division = random(0+(h/4), h-(h/4));

        //Rectangle 1
        const newx1 = x;
        const newy1 = y;
        const newwidth1 = w;
        const newheight1 = division;
        rect(newx1,newy1,newwidth1,newheight1)

            if(newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle){
                splitRectangle(newx1,newy1,newwidth1,newheight1)
            }

        

        //Rectangle 2
        const newx2 = x;
        const newy2 = y+division;
        const newwidth2 = w;
        const newheight2 = h-division;
        rect(newx2,newy2,newwidth2,newheight2)

            if(newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle){
                splitRectangle(newx2,newy2,newwidth2,newheight2)
            }

        
    }
    else {
        const division = random(0+(w/4), w-(w/4));

        //Rectangle 1
        const newx1 = x;
        const newy1 = y;
        const newwidth1 = division;
        const newheight1 = h;
        rect(newx1,newy1,newwidth1,newheight1)

            if(newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle){
                splitRectangle(newx1,newy1,newwidth1,newheight1)
            }

        

        //Rectangle 2
        const newx2 = x+division;
        const newy2 = y;
        const newwidth2 = w-division;
        const newheight2 = h;
        rect(newx2,newy2,newwidth2,newheight2)


            if(newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle){
                splitRectangle(newx2,newy2,newwidth2,newheight2)
            }
    }

}


//interactive function that makes a hole in the structure where the mouse is placed
function splitRectangleInteractiveHole(x,y,w,h) {

    if (random(0,1) < 0.5){
        const division = random(0+(h/4), h-(h/4));

        //Rectangle 1
        const newx1 = x;
        const newy1 = y;
        const newwidth1 = w;
        const newheight1 = division;
        rect(newx1,newy1,newwidth1,newheight1)

        let clicked = false;

        if(newwidth1 < 150 && newheight1 < 150 && mouseX > newx1 && mouseX < newx1+newwidth1 && mouseY > newy1 && mouseY < newy1+newheight1){
            //we don't split the rectangle
        }
        else{
            if(newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle){
                splitRectangleInteractiveHole(newx1,newy1,newwidth1,newheight1)
            }
        }

        

        //Rectangle 2
        const newx2 = x;
        const newy2 = y+division;
        const newwidth2 = w;
        const newheight2 = h-division;
        rect(newx2,newy2,newwidth2,newheight2)

        if(newwidth2 < 150 && newheight2 < 150 && mouseX > newx2 && mouseX < newx2+newwidth2 && mouseY > newy2 && mouseY < newy2+newheight2){
            //we don't split the rectangle
        }
        else {
            if(newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle){
                splitRectangleInteractiveHole(newx2,newy2,newwidth2,newheight2)
            }
        }

        
    }
    else {
        const division = random(0+(w/4), w-(w/4));

        //Rectangle 1
        const newx1 = x;
        const newy1 = y;
        const newwidth1 = division;
        const newheight1 = h;
        rect(newx1,newy1,newwidth1,newheight1)

        if(newwidth1 < 150 && newheight1 < 150 && mouseX > newx1 && mouseX < newx1+newwidth1 && mouseY > newy1 && mouseY < newy1+newheight1){
            //we don't split the rectangle
        }
        else {
            if(newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle){
                splitRectangleInteractiveHole(newx1,newy1,newwidth1,newheight1)
            }
        }

        

        //Rectangle 2
        const newx2 = x+division;
        const newy2 = y;
        const newwidth2 = w-division;
        const newheight2 = h;
        rect(newx2,newy2,newwidth2,newheight2)

        if(newwidth2 < 150 && newheight2 < 150 && mouseX > newx2 && mouseX < newx2+newwidth2 && mouseY > newy2 && mouseY < newy2+newheight2){
            //we don't split the rectangle
        }
        else {
            if(newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle){
                splitRectangleInteractiveHole(newx2,newy2,newwidth2,newheight2)
            }
        }
    }

}


//interactive function that fills the rectangle with a color where the mouse is placed
function splitRectangleInteractiveColor(x,y,w,h) {

    if (random(0,1) < 0.5){
        const division = random(0+(h/4), h-(h/4));

        //Rectangle 1
        let newx1 = x;
        let newy1 = y;
        let newwidth1 = w;
        let newheight1 = division;


        if (mouseX > newx1 && mouseX < newx1+newwidth1 && mouseY > newy1 && mouseY < newy1+newheight1){
            if(newwidth1 < params.Min_Size_Rectangle || newheight1 < params.Min_Size_Rectangle){
                fill('#D63F20')
            }
        }
        rect(newx1,newy1,newwidth1,newheight1)
        noFill()

            if(newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle){
                splitRectangleInteractiveColor(newx1,newy1,newwidth1,newheight1)
            }


        

        //Rectangle 2
        const newx2 = x;
        const newy2 = y+division;
        const newwidth2 = w;
        const newheight2 = h-division;

        if (mouseX > newx2 && mouseX < newx2+newwidth2 && mouseY > newy2 && mouseY < newy2+newheight2){
            if(newwidth2 < params.Min_Size_Rectangle || newheight2 < params.Min_Size_Rectangle){
                fill('#D63F20')
            }
        }
        rect(newx2,newy2,newwidth2,newheight2)
        noFill()

            if(newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle){
                splitRectangleInteractiveColor(newx2,newy2,newwidth2,newheight2)
            }
        
    }
    else {
        const division = random(0+(w/4), w-(w/4));

        //Rectangle 1
        const newx1 = x;
        const newy1 = y;
        const newwidth1 = division;
        const newheight1 = h;

        if (mouseX > newx1 && mouseX < newx1+newwidth1 && mouseY > newy1 && mouseY < newy1+newheight1){
            if(newwidth1 < params.Min_Size_Rectangle || newheight1 < params.Min_Size_Rectangle){
                fill('#D63F20')
            }
        }
        rect(newx1,newy1,newwidth1,newheight1)
        noFill()

            if(newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle){
                splitRectangleInteractiveColor(newx1,newy1,newwidth1,newheight1)
            }

        

        //Rectangle 2
        const newx2 = x+division;
        const newy2 = y;
        const newwidth2 = w-division;
        const newheight2 = h;

        if (mouseX > newx2 && mouseX < newx2+newwidth2 && mouseY > newy2 && mouseY < newy2+newheight2){
            if(newwidth2 < params.Min_Size_Rectangle || newheight2 < params.Min_Size_Rectangle){
                fill('#D63F20')
            }
        }
        rect(newx2,newy2,newwidth2,newheight2)
        noFill()

        if(newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle){
            splitRectangleInteractiveColor(newx2,newy2,newwidth2,newheight2)
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