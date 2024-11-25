// Initialize map
var map = L.map('map').setView([19.4178205, -99.1190979], 15); // Example: Mexico City coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add marker
L.marker([19.4178205, -99.1190979]).addTo(map)
    .bindPopup('S-BRAKES MÉXICO')
    .openPopup();

const modalTitle = document.getElementById('productModalLabel');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');

// Agregar evento a cada botón para actualizar el contenido del modal
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (event) => {
        const title = event.target.getAttribute('data-bs-title');
        const description = event.target.getAttribute('data-bs-description');
        const image = event.target.getAttribute('data-bs-image');

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = image;
    });
});