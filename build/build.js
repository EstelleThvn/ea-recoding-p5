var gui = new dat.GUI();
var params = {
    Ellipse_Size: 30,
    Random_Seed: 418,
    Download_Image: function () { return save(); },
};
gui.add(params, "Ellipse_Size", 0, 100, 1);
gui.add(params, "Random_Seed", 0, 1000, 1);
gui.add(params, "Download_Image");
function draw() {
    background('#FDF1E1');
    randomSeed(params.Random_Seed);
    noFill();
    strokeWeight(1);
    stroke('#D63F20');
    var debx = 40;
    var deby = 60;
    splitRectangle(debx, deby, width - (debx * 2), height - (deby * 2));
    stroke('#FDF1E1');
    strokeWeight(2);
    rect(debx, deby, width - (debx * 2), height - (deby * 2));
}
function splitRectangle(x, y, w, h) {
    if (random(0, 1) < 0.5) {
        var division = random(0, h);
        var newx1 = x;
        var newy1 = y;
        var newwidth1 = w;
        var newheight1 = division;
        rect(newx1, newy1, newwidth1, newheight1);
        if (newwidth1 >= 15 && newheight1 >= 15) {
            splitRectangle(newx1, newy1, newwidth1, newheight1);
        }
        var newx2 = x;
        var newy2 = y + division;
        var newwidth2 = w;
        var newheight2 = h - division;
        rect(newx2, newy2, newwidth2, newheight2);
        if (newwidth2 >= 15 && newheight2 >= 15) {
            splitRectangle(newx2, newy2, newwidth2, newheight2);
        }
    }
    else {
        var division = random(0, w);
        var newx1 = x;
        var newy1 = y;
        var newwidth1 = division;
        var newheight1 = h;
        rect(newx1, newy1, newwidth1, newheight1);
        if (newwidth1 >= 15 && newheight1 >= 15) {
            splitRectangle(newx1, newy1, newwidth1, newheight1);
        }
        var newx2 = x + division;
        var newy2 = y;
        var newwidth2 = w - division;
        var newheight2 = h;
        rect(newx2, newy2, newwidth2, newheight2);
        if (newwidth2 >= 15 && newheight2 >= 15) {
            splitRectangle(newx2, newy2, newwidth2, newheight2);
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