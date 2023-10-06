var answers = {}; // Membuat objek untuk menyimpan jawaban.

// melitus
var riwayat; //1
var jarangOlahraga; //2
var ibuDiabetes; //3
var seringInfeksi; //4
var sakitKaki; //5
var sakitKepala; //6
var lambatSembuh; //7
var jenisKelamin; //8 (yes=pria) (no=wanita)
var umur; //9
var lingkarPinggang; //10

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
}

// Fungsi untuk mengumpulkan jawaban dari input number (pertanyaan 13 dan 14).
function collectNumberAnswers() {
    var question13 = document.getElementById('9').value;
    var question14 = document.getElementById('10').value;

    answers['9'] = question13;
    answers['10'] = question14;
}

// Fungsi untuk mengirimkan formulir.
function submitForm() {
    // Mengumpulkan jawaban dari input number.
    melitus = 0;
    insipidus = 0;
    hipertiroid = 0;
    hipotiroid = 0;

    collectNumberAnswers();

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
    jenisKelamin = answers[8];
    umur = answers[9];
    lingkarPinggang = answers[10];

    dehidrasi = answers[11];
    gangElektrolit = answers[12];
    gangTidur = answers[13];
    gangBeratBadan = answers[14];
    sulitKonsen = answers[15];

    seringkeringat = answers[16];
    mudahKepanasan = answers[17];
    tiroidMembengkak = answers[18];
    mudahlelah = answers[19];
    nafsumeningkat = answers[20];

    nafsuMenurun = answers[21];
    kulitKering = answers[22];
    sensitifSuhuDingin = answers[23];
    sembelit = answers[24];
    sulitAktivitas = answers[25];

    for (var i = 1; i <= 7; i++) {
        if(answers[i]) {
            melitus++;
        }
    }

    for (var i = 11; i <= 15; i++) {
        if(answers[i]) {
            insipidus++;
        }
    }

    for (var i = 16; i <= 20; i++) {
        if(answers[i]) {
            hipertiroid++;
        }
    }

    for (var i = 21; i <= 25; i++) {
        if(answers[i]) {
            hipotiroid++;
        }
    }

    console.log(melitus);
    console.log(insipidus);
    console.log(hipertiroid);
    console.log(hipotiroid);

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
