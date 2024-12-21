// Menambahkan angka/operator ke dalam display
function appendValue(value) {
    const display = document.querySelector('.calculator .display');
    display.value += value; // Menambahkan angka atau operator ke display
}

// Menghitung hasil dari ekspresi
function calculate() {
    const display = document.querySelector('.calculator .display');
    try {
        // Evaluasi ekspresi matematika
        display.value = eval(display.value);
    } catch (error) {
        // Jika terdapat kesalahan input
        alert("Invalid Expression");
        clearDisplay();
    }
}

// Membersihkan display
function clearDisplay() {
    const display = document.querySelector('.calculator .display');
    display.value = ''; // Menghapus semua isi display
}
