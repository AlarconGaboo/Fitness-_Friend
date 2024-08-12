function generateRoutine() {
    const weeks = document.getElementById('weeks').value;
    const days = document.getElementById('days').value;
    const exercises = ['Sentadillas', 'Bancos', 'Peso Muerto', 'Prensas'];
    let routine = '';

    console.log('Rutina generada para ' + weeks + ' semanas, ' + days + ' días por semana:');

    for (let i = 1; i <= weeks; i++) {
        routine += `\nSemana ${i}:\n`;
        console.log(`Semana ${i}:`);
        for (let j = 1; j <= days; j++) {
            const exercise = exercises[(j - 1) % exercises.length];
            routine += ` Día ${j}: ${exercise}\n`;
            console.log(`  Día ${j}: ${exercise}`);
        }
    }

    alert('¡Tu rutina ha sido generada! Revisa la consola para ver los detalles.');
}
