// Funzione per cambiare il colore di sfondo della pagina
function cambiaSfondo() {
    const colori = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink'];
    const randomIndex = Math.floor(Math.random() * colori.length);
    document.body.style.backgroundColor = colori[randomIndex];
}

// Effetto al passaggio del mouse su una div
document.querySelector('.box').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgray';
});

document.querySelector('.box').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#f0f0f0';
});