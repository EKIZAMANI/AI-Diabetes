var answers = {}; // Membuat objek untuk menyimpan jawaban.

var riwayat; //1
var darahRendah; //2
var jarangOlahraga; //3
var ibuDiabetes; //4
var seringKelelahan; //5
var seringInfeksi; //6
var mulutKering; //7
var sakitKaki; //8
var sakitKepala; //9
var penglihatanMenurun; //10
var lambatSembuh; //11
var jenisKelamin; //12 (yes=pria) (no=wanita)
var umur; //13
var lingkarPinggang; //14

// Fungsi untuk mengatur jawaban dan menyimpannya dalam objek 'answers'.
function setAnswer(questionNumber, answer) {
    answers[questionNumber] = answer;
}

// Fungsi untuk mengumpulkan jawaban dari input number (pertanyaan 13 dan 14).
function collectNumberAnswers() {
    var question13 = document.getElementById('13').value;
    var question14 = document.getElementById('14').value;

    answers['13'] = question13;
    answers['14'] = question14;
}

// Fungsi untuk mengirimkan formulir.
function submitForm() {
    // Mengumpulkan jawaban dari input number.
    collectNumberAnswers();

    // Melakukan sesuatu dengan objek 'answers'.
    for (var questionNumber in answers) {
        var answer = answers[questionNumber];
        console.log('Jawaban untuk pertanyaan nomor ' + questionNumber + ' adalah: ' + answer);



    }

    riwayat = answers[1];
    darahRendah = answers[2];
    jarangOlahraga = answers[3];
    ibuDiabetes = answers[4];
    seringKelelahan = answers[5];
    seringInfeksi = answers[6];
    mulutKering = answers[7];
    sakitKaki = answers[8];
    sakitKepala = answers[9];
    penglihatanMenurun = answers[10];
    lambatSembuh = answers[11];
    jenisKelamin = answers[12];
    umur = answers[13];
    lingkarPinggang = answers[14];


}



function testAlert() {
    alert(riwayat);
    alert(lingkarPinggang);
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
