'use strict';

const rectangle = {
    width: 5,
    height: 5,
    get addwidht() {
       return (this.width + "см");
    },
    get addheight() {
        return (this.height + "см");

    },
     set square(arr){
        // [this.width, this.height] = arr.split(" ");
         this.width = parseInt(arr[0]);
         this.height = parseInt(arr[1]);
         console.log (` Площадь прямоугольника = ${this.width * this.height}`);
     },
     set perimeter(arr){
         this.width = parseInt(arr[0]);
         this.height = parseInt(arr[1]);
         console.log (` Периметр прямоугольника = ${2 * (this.width + this.height)}`);
     },
}

rectangle.square = [10, 20];
rectangle.perimeter = [10, 20];