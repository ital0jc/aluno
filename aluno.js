// script.js
document.getElementById('toggleMaterias').addEventListener('click', function() {
    const materiasDiv = document.getElementById('materias');
    materiasDiv.style.display = materiasDiv.style.display === 'block' ? 'none' : 'block';
});

const toggleNotasButtons = document.querySelectorAll('.toggleNotas');
toggleNotasButtons.forEach(button => {
    button.addEventListener('click', function() {
        const notasList = this.nextElementSibling;
        notasList.style.display = notasList.style.display === 'block' ? 'none' : 'block';
    });
});