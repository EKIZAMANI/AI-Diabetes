var answers = {}; // Membuat objek untuk menyimpan jawaban.

// melitus
var riwayat; //1
var jarangOlahraga; //2
var ibuDiabetes; //3
var seringInfeksi; //4
var sakitKaki; //5
var sakitKepala; //6
var lambatSembuh; //7

//insipidus
var dehidrasi; //11
var gangElektrolit; //12
var gangTidur;//13
var gangBeratBadan; //14
var sulitKonsen; //15

//hipertiroid
var seringkeringat; //16
var mudahKepanasan; //17
var tiroidMembengkak; //18
var mudahlelah; //19
var nafsumeningkat; //20

//hipotoroidisme
var nafsuMenurun; //21
var kulitKering; //22
var sensitifSuhuDingin; //23
var sembelit; //24
var sulitAktivitas; //25


// Fungsi untuk mengatur jawaban dan menyimpannya dalam objek 'answers'.
function setAnswer(questionNumber, answer) {
    answers[questionNumber] = answer;

    if (answer === 'true') {
        // Disable the "No" button
        document.getElementById('noButton'+[questionNumber]).disabled = true;
        document.getElementById('yesButton' + questionNumber).style.fontWeight = 'bold';
        document.getElementById('yesButton' + questionNumber).style.border = '3px solid black';

    } else {
        document.getElementById('yesButton'+[questionNumber]).disabled = true;
        document.getElementById('noButton' + questionNumber).style.fontWeight = 'bold';
        document.getElementById('noButton' + questionNumber).style.border = '3px solid black';



    }
}

// Fungsi untuk mengumpulkan jawaban dari input number (pertanyaan 13 dan 14).

// Fungsi untuk mengirimkan formulir.
function submitForm() {
    // Mengumpulkan jawaban dari input number.
    melitus = 0;
    insipidus = 0;
    hipertiroid = 0;
    hipotiroid = 0;


    // Melakukan sesuatu dengan objek 'answers'.
    for (var questionNumber in answers) {
        var answer = answers[questionNumber];
        console.log('Jawaban untuk pertanyaan nomor ' + questionNumber + ' adalah: ' + answer);



    }


    riwayat = answers[1];
    jarangOlahraga = answers[2];
    ibuDiabetes = answers[3];
    seringInfeksi = answers[4];
    sakitKaki = answers[5];
    sakitKepala = answers[6];
    lambatSembuh = answers[7];

    dehidrasi = answers[8];
    gangElektrolit = answers[9];
    gangTidur = answers[10];
    gangBeratBadan = answers[11];
    sulitKonsen = answers[12];

    seringkeringat = answers[13];
    mudahKepanasan = answers[14];
    tiroidMembengkak = answers[15];
    mudahlelah = answers[16];
    nafsumeningkat = answers[17];

    nafsuMenurun = answers[18];
    kulitKering = answers[19];
    sensitifSuhuDingin = answers[20];
    sembelit = answers[21];
    sulitAktivitas = answers[22];

    for (var i = 1; i <= 7; i++) {
        if(answers[i]) {
            melitus++;
        }
    }

    for (var i = 8; i <= 12; i++) {
        if(answers[i]) {
            insipidus++;
        }
    }

    for (var i = 13; i <= 17; i++) {
        if(answers[i]) {
            hipertiroid++;
        }
    }

    for (var i = 18; i <= 22; i++) {
        if(answers[i]) {
            hipotiroid++;
        }
    }

}




//disable button
const yesButton = document.getElementById('YesButton');
const noButton = document.getElementById('NoButton');

// Function to handle the click event on the "Yes" button
yesButton.addEventListener('click', function () {
    yesButton.disabled = true; // Disable the "Yes" button
    noButton.disabled = false; // Enable the "No" button
});

// Function to handle the click event on the "No" button
noButton.addEventListener('click', function () {
    noButton.disabled = true; // Disable the "No" button
    yesButton.disabled = false; // Enable the "Yes" button
});
