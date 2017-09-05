"use strict";

var imgSrc = "./remm.jpg";
var pre = document.getElementById("preview");
var post = document.getElementById("postview");
var btn = document.getElementById("button")
var degrees = 0;

pre.src = imgSrc;

btn.onclick = function() {
    degrees = (degrees + 90) % 360;
    var img = new Image();
    img.src = imgSrc;
    img.onload = function() {
        post.src = rotation(img, degrees);
    }
};

/**
 * Image rotation with canvas
 * @param {HTMLImageElemnt} image
 * @param {number} degree
 */
function rotation(image, degree) {
    var w = image.naturalWidth;
    var h = image.naturalHeight;
    var x = 0;
    var y = 0;

    var cvs = document.createElement("canvas");
    cvs.width = cvs.height = Math.max(w, h);
    var ctx = cvs.getContext("2d");
    ctx.save();
    ctx.rotate(Math.PI * degree / 180);
    switch (degree) {
        case 90:
            [x, y] = [0, -h];
            [w, h] = [h, w];
            break;
        case 180:
            [x, y] = [-w, -h];
            break;
        case 270:
            [x, y] = [-w, 0];
            [w, h] = [h, w];
            break;
        default:
            break;
    }
    ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, x, y, image.naturalWidth, image.naturalHeight);
    ctx.restore();

    var canvas = document.createElement("canvas");
    [canvas.width, canvas.height] = [w, h];
    var context = canvas.getContext("2d");
    context.drawImage(cvs, 0, 0, w, h, 0, 0, w, h);

    return canvas.toDataURL();
}
