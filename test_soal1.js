/* 
 * Pembuatan class ModeSearcher yang berisi array asal,
 * apakah array tersebut valid, array yang sudah
 * diurutkan, serta modus.
 */
class ModeSearcher {
    constructor(array) {
        this.originalArray = [...array];
        this.isValid = true;
        this.sortedArray = [...array].sort((a, b) => (a - b));
        this.previousElement = this.sortedArray[0];
        this.numbersContainer = [];
        this.mode = [{ "number" : 0, "frequency" : 0 }];

        this.validateArray();
        this.numbersAndFrequency();
        this.searchForMode();
    }

    /* Validasi array */
    validateArray = () => {
        /* Cek apakah array yang dimasukkan adalah array kosong */
        if (this.originalArray.length === 0) {
            this.isValid = false;
            return;
        }

        /* Cek apakah ada elemen yang bukan angka */
        let notNumber = 0;
        this.originalArray.map((element) => {
            if (typeof(element) !== "number") {
                notNumber++;
            }
        });
        if (notNumber) {
            this.isValid = false;
            return;
        }
    }
    
    /* Mendapatkan angka beserta frekuensi kemunculannya */
    numbersAndFrequency = () => {
        /* Cek apakah array valid */
        if (!this.isValid) {
            return console.log("maaf, data yang dimasukkan tidak valid");
        }

        this.sortedArray.map((data) => {
            if (this.previousElement !== data || this.numbersContainer.length === 0) {
                this.numbersContainer.push({
                    "number" : data,
                    "frequency" : 1
                });
                this.previousElement = data;
            }
            else {
                this.numbersContainer.map((element, index) => {
                    let newElement = element;
                    if (newElement.number === data) {
                        this.numbersContainer[index].frequency += 1;
                    }
                });
            }
        });
    }
    
    /* Mencari modus */
    searchForMode = () => {
        /* Cek apakah array valid */
        if (!this.isValid) {
            return console.log("maaf, data yang dimasukkan tidak valid");
        }

        if (this.originalArray.length === 0) {
            return console.log("Maaf, data yang dimasukkan tidak valid");
        }
        this.numbersContainer.map((element) => {
            /* 
             * Jika frekuensi kemunculan angka saat ini
             * lebih kecil dari frekuensi kemunculan angka berikutnya,
             * ganti modus menjadi angka tersebut.
             */
            if (this.mode[0].frequency < element.frequency) {
                this.mode = [{
                    "number" : element.number,
                    "frequency" : element.frequency
                }];
            }
            /* 
             * Jika frekuensi kemunculan angka saat ini
             * sama dengan frekuensi kemunculan angka berikutnya,
             * tambahkan angka tersebut sebagai modus.
             */
            else if (this.mode[0].frequency === element.frequency) {
                this.mode.push({
                    "number" : element.number,
                    "frequency" : element.frequency
                });
            }
        });
    }

    /* Menampilkan modus */
    showMode = () => {
        /* Cek apakah array valid */
        if (!this.isValid) {
            return console.log("maaf, data yang dimasukkan tidak valid");
        }

        /* 
         * Jika terdapat modus lebih dari satu, cek apakah
         * setiap elemen pada data adalah bagian dari modus
         * atau bukan.
         */
        if (this.mode.length > 1) {
            let numbers = [];

            this.sortedArray.map((sortedElement) => {
                this.mode.map((modeElement) => {
                    if (modeElement.number === sortedElement) {
                        numbers.push(modeElement.number);
                    }
                })
            });

            if (numbers.length === this.sortedArray.length) {
                console.log("maaf, data tidak memiliki modus");
            } else {
                console.log(`total data paling banyak keluar adalah ${this.mode.map((element) => element.number)} dengan jumlah ${this.mode[0].frequency}`);
            }
        } else {
            console.log(`total data paling banyak keluar adalah ${this.mode[0].number} dengan jumlah ${this.mode[0].frequency}`);
        }
    }
}

/* Data yang akan dicek */
var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];

const array1 = new ModeSearcher(data1);
const array2 = new ModeSearcher(data2);
const array3 = new ModeSearcher(data3);

/* Menampilkan modus dari setiap data */
array1.showMode();
array2.showMode();
array3.showMode();