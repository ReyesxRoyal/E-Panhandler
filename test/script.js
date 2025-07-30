// script.js

// Add interactivity to the donation form
document.getElementById('donationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount')?.value;
    const type = document.getElementById('type')?.value;
    
    if (!amount || !type) return;

    // Update statistics
    const totalDonationsElement = document.getElementById('totalDonations');
    if (totalDonationsElement) {
        const currentTotal = parseFloat(totalDonationsElement.textContent) || 0;
        const newTotal = currentTotal + parseFloat(amount);
        totalDonationsElement.textContent = newTotal.toFixed(2);
    }

    alert(`Thank you for your ${type} donation of $${amount}!`);
    this.reset();
});

// Smooth scrolling navigation
document.querySelectorAll('nav a')?.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            document.querySelector(targetId)?.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = targetId;
        }
    });
});
// Add to existing script.js
async function initMap() {
    // Map initialization
    const tulsa = { lat: 36.153981, lng: -95.992775 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: tulsa,
        styles: [
            {
                featureType: "all",
                elementType: "labels",
                stylers: [{ visibility: "on" }]
            },
            {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    });

    // Homeless service locations based on Tulsa's Path to Home Initiative
    const homelessServices = [
        { 
            position: { lat: 36.153981, lng: -95.992775 },
            title: 'Day Center',
            description: 'Primary day center services'
        },
        { 
            position: { lat: 36.144722, lng: -95.983056 },
            title: 'Emergency Shelter',
            description: 'Low-barrier shelter facility'
        },
        { 
            position: { lat: 36.162778, lng: -95.991389 },
            title: 'Outreach Center',
            description: 'Street outreach program location'
        },
        { 
            position: { lat: 36.145556, lng: -96.006111 },
            title: 'Resource Hub',
            description: 'Community resource center'
        }
    ];

    // Add markers with custom styling
    const markerImage = {
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: new google.maps.Size(30, 30)
    };

    homelessServices.forEach(service => {
        const marker = new google.maps.Marker({
            position: service.position,
            map: map,
            title: service.title,
            description: service.description,
            icon: markerImage
        });

        // Add info window
        const infowindow = new google.maps.InfoWindow({
            content: `<strong>${service.title}</strong><br>${service.description}`
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });
    });

    // Add overlay with information
    const overlay = document.createElement('div');
    overlay.className = 'map-overlay';
    overlay.innerHTML = `
        <h3>Tulsa Homeless Services Map</h3>
        <p>Red dots indicate service locations.</p>
        <p>Click on any location for details.</p>
    `;
    document.getElementById('map').parentElement.appendChild(overlay);
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', initMap);