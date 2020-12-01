class Rectangle {
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area = function() {
    return this.h * this.w;
}

class Square extends Rectangle {
    constructor(len) {
        super(len, len);
    }
}
