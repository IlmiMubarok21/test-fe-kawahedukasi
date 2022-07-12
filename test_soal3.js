/* 
 * Pembuatan class Triangle yang berisi banyaknya
 * baris yang diinginkan, arah pembuatan segitiga,
 * serta pola yang siap untuk dicetak ke layar.
 */
class Triangle {
    constructor(n, direction = "ltr") {
        this.n = n;
        this.direction = direction;
        this.pattern = "";
    }

    makeTriangle = () => {
        let newPattern = "";

        switch(this.direction) {
            case "ltr":
                for (let line = 0; line <= this.n; line++) {
                    for (let star = 0; star < line; star++) {
                        newPattern += "*";
                    }
                    newPattern += "\n";
                }
            break;
            case "rtl":
                for (let line = 0; line <= this.n ; line++) {
                    for (let whitespace = 0; whitespace < this.n - line; whitespace++){
                        newPattern += " ";
                    }
                    for (let star = 0; star < line; star++) {
                        newPattern += "*";
                    }
                    newPattern += "\n";
                }
        }

        this.pattern = newPattern;
        this.showResult();
    }

    showResult = () => {
        console.log(this.pattern);
    }
}

const triangle1 = new Triangle(6, "ltr");
const triangle2 = new Triangle(5, "rtl");

triangle1.makeTriangle();
triangle2.makeTriangle();