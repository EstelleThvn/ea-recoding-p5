var gui = new dat.GUI();
var params = {
    Random_Seed: 366,
    Line_Width: 1,
    Min_Size_Rectangle: 8,
    Interactive: 0,
    Download_Image: function () { return save(); },
};
gui.add(params, "Random_Seed", 0, 1000, 1);
gui.add(params, "Line_Width", 0.5, 10, 0.5);
gui.add(params, "Min_Size_Rectangle", 5, 20, 1);
gui.add(params, "Interactive", 0, 2, 1);
gui.add(params, "Download_Image");
function draw() {
    background('#FDF1E1');
    randomSeed(params.Random_Seed);
    noFill();
    strokeWeight(params.Line_Width);
    stroke('#D63F20');
    var debx = 40;
    var deby = 60;
    if (params.Interactive == 0) {
        splitRectangle(debx, deby, width - (debx * 2), height - (deby * 2));
        var sentence = 'Non interactive version';
        noStroke();
        fill('#D63F20');
        text(sentence, debx, deby - 20, 200, 80);
        noFill();
        stroke('#D63F20');
    }
    if (params.Interactive == 1) {
        splitRectangleInteractiveHole(debx, deby, width - (debx * 2), height - (deby * 2));
        var sentence = 'Interactive version 1 : puts a hole in the structure';
        noStroke();
        fill('#D63F20');
        text(sentence, debx, deby - 20, width - (debx * 2), 80);
        noFill();
        stroke('#D63F20');
    }
    if (params.Interactive == 2) {
        splitRectangleInteractiveColor(debx, deby, width - (debx * 2), height - (deby * 2));
        var sentence = 'Interactive version 2 : fills the rectangle where the mouse is placed';
        noStroke();
        fill('#D63F20');
        text(sentence, debx, deby - 20, width - (debx * 2), 80);
        noFill();
        stroke('#D63F20');
    }
    stroke('#FDF1E1');
    strokeWeight(params.Line_Width * 2);
    rect(debx, deby, width - (debx * 2), height - (deby * 2));
}
function splitRectangle(x, y, w, h) {
    if (random(0, 1) < 0.5) {
        var division = random(0 + (h / 4), h - (h / 4));
        var newx1 = x;
        var newy1 = y;
        var newwidth1 = w;
        var newheight1 = division;
        rect(newx1, newy1, newwidth1, newheight1);
        if (newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle) {
            splitRectangle(newx1, newy1, newwidth1, newheight1);
        }
        var newx2 = x;
        var newy2 = y + division;
        var newwidth2 = w;
        var newheight2 = h - division;
        rect(newx2, newy2, newwidth2, newheight2);
        if (newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle) {
            splitRectangle(newx2, newy2, newwidth2, newheight2);
        }
    }
    else {
        var division = random(0 + (w / 4), w - (w / 4));
        var newx1 = x;
        var newy1 = y;
        var newwidth1 = division;
        var newheight1 = h;
        rect(newx1, newy1, newwidth1, newheight1);
        if (newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle) {
            splitRectangle(newx1, newy1, newwidth1, newheight1);
        }
        var newx2 = x + division;
        var newy2 = y;
        var newwidth2 = w - division;
        var newheight2 = h;
        rect(newx2, newy2, newwidth2, newheight2);
        if (newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle) {
            splitRectangle(newx2, newy2, newwidth2, newheight2);
        }
    }
}
function splitRectangleInteractiveHole(x, y, w, h) {
    if (random(0, 1) < 0.5) {
        var division = random(0 + (h / 4), h - (h / 4));
        var newx1 = x;
        var newy1 = y;
        var newwidth1 = w;
        var newheight1 = division;
        rect(newx1, newy1, newwidth1, newheight1);
        var clicked = false;
        if (newwidth1 < 150 && newheight1 < 150 && mouseX > newx1 && mouseX < newx1 + newwidth1 && mouseY > newy1 && mouseY < newy1 + newheight1) {
        }
        else {
            if (newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle) {
                splitRectangleInteractiveHole(newx1, newy1, newwidth1, newheight1);
            }
        }
        var newx2 = x;
        var newy2 = y + division;
        var newwidth2 = w;
        var newheight2 = h - division;
        rect(newx2, newy2, newwidth2, newheight2);
        if (newwidth2 < 150 && newheight2 < 150 && mouseX > newx2 && mouseX < newx2 + newwidth2 && mouseY > newy2 && mouseY < newy2 + newheight2) {
        }
        else {
            if (newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle) {
                splitRectangleInteractiveHole(newx2, newy2, newwidth2, newheight2);
            }
        }
    }
    else {
        var division = random(0 + (w / 4), w - (w / 4));
        var newx1 = x;
        var newy1 = y;
        var newwidth1 = division;
        var newheight1 = h;
        rect(newx1, newy1, newwidth1, newheight1);
        if (newwidth1 < 150 && newheight1 < 150 && mouseX > newx1 && mouseX < newx1 + newwidth1 && mouseY > newy1 && mouseY < newy1 + newheight1) {
        }
        else {
            if (newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle) {
                splitRectangleInteractiveHole(newx1, newy1, newwidth1, newheight1);
            }
        }
        var newx2 = x + division;
        var newy2 = y;
        var newwidth2 = w - division;
        var newheight2 = h;
        rect(newx2, newy2, newwidth2, newheight2);
        if (newwidth2 < 150 && newheight2 < 150 && mouseX > newx2 && mouseX < newx2 + newwidth2 && mouseY > newy2 && mouseY < newy2 + newheight2) {
        }
        else {
            if (newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle) {
                splitRectangleInteractiveHole(newx2, newy2, newwidth2, newheight2);
            }
        }
    }
}
function splitRectangleInteractiveColor(x, y, w, h) {
    if (random(0, 1) < 0.5) {
        var division = random(0 + (h / 4), h - (h / 4));
        var newx1 = x;
        var newy1 = y;
        var newwidth1 = w;
        var newheight1 = division;
        if (mouseX > newx1 && mouseX < newx1 + newwidth1 && mouseY > newy1 && mouseY < newy1 + newheight1) {
            if (newwidth1 < params.Min_Size_Rectangle || newheight1 < params.Min_Size_Rectangle) {
                fill('#D63F20');
            }
        }
        rect(newx1, newy1, newwidth1, newheight1);
        noFill();
        if (newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle) {
            splitRectangleInteractiveColor(newx1, newy1, newwidth1, newheight1);
        }
        var newx2 = x;
        var newy2 = y + division;
        var newwidth2 = w;
        var newheight2 = h - division;
        if (mouseX > newx2 && mouseX < newx2 + newwidth2 && mouseY > newy2 && mouseY < newy2 + newheight2) {
            if (newwidth2 < params.Min_Size_Rectangle || newheight2 < params.Min_Size_Rectangle) {
                fill('#D63F20');
            }
        }
        rect(newx2, newy2, newwidth2, newheight2);
        noFill();
        if (newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle) {
            splitRectangleInteractiveColor(newx2, newy2, newwidth2, newheight2);
        }
    }
    else {
        var division = random(0 + (w / 4), w - (w / 4));
        var newx1 = x;
        var newy1 = y;
        var newwidth1 = division;
        var newheight1 = h;
        if (mouseX > newx1 && mouseX < newx1 + newwidth1 && mouseY > newy1 && mouseY < newy1 + newheight1) {
            if (newwidth1 < params.Min_Size_Rectangle || newheight1 < params.Min_Size_Rectangle) {
                fill('#D63F20');
            }
        }
        rect(newx1, newy1, newwidth1, newheight1);
        noFill();
        if (newwidth1 >= params.Min_Size_Rectangle && newheight1 >= params.Min_Size_Rectangle) {
            splitRectangleInteractiveColor(newx1, newy1, newwidth1, newheight1);
        }
        var newx2 = x + division;
        var newy2 = y;
        var newwidth2 = w - division;
        var newheight2 = h;
        if (mouseX > newx2 && mouseX < newx2 + newwidth2 && mouseY > newy2 && mouseY < newy2 + newheight2) {
            if (newwidth2 < params.Min_Size_Rectangle || newheight2 < params.Min_Size_Rectangle) {
                fill('#D63F20');
            }
        }
        rect(newx2, newy2, newwidth2, newheight2);
        noFill();
        if (newwidth2 >= params.Min_Size_Rectangle && newheight2 >= params.Min_Size_Rectangle) {
            splitRectangleInteractiveColor(newx2, newy2, newwidth2, newheight2);
        }
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 0.7;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map