/* 
 * Pembuatan class ValidityChecker yang berisi data yang akan dicek,
 * error yang ditemukan, serta validitas data.
 */
class ValidityChecker {
    constructor(data) {
        this.data = data
        this.error = "";
        this.isValid = true;
    }

    /* Cek apakah data mengandung angka */
    validateString = (data) => {
        this.error = this.data.match(/\d+/g);
    
        if (this.error) {
            this.isValid = false;
        }

        this.showResult();
    }

    /* Tampilkan hasil */
    showResult = () => {
        if (this.isValid) {
            console.log(`Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${this.data}`);
        } else {
            console.log(`Sistem kami menolak untuk inputan berisi angka ${this.error}`);
        }
    }
}

/* Data yang akan dicek */
var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";
var input3 = "hallo ** selamat datang!";
var input4 = "hallo Mariage889120! selamat datang!";

const data1 = new ValidityChecker(input1);
const data2 = new ValidityChecker(input2);
const data3 = new ValidityChecker(input3);
const data4 = new ValidityChecker(input4);

data1.validateString();
data2.validateString();
data3.validateString();
data4.validateString();