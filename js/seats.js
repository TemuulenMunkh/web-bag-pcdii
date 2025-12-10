// Seat Selection Page JavaScript

// Get ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const centerId = parseInt(urlParams.get('id'));
let selectedSeats = [];
const maxSeats = 10;

// Generate 100 seats
function generateSeats() {
  const seatGrid = document.getElementById('seatGrid');
  const unavailableSeats = [6, 15, 23, 34, 45, 56, 67, 78, 89, 92]; // Random unavailable seats
  
  for (let i = 1; i <= 100; i++) {
      const seat = document.createElement('div');
      seat.className = 'seat';
      seat.textContent = i;
      seat.dataset.seatNumber = i;
    if (unavailableSeats.includes(i)) {
      seat.classList.add('unavailable');
    } else {
      seat.addEventListener('click', () => toggleSeat(seat, i));
    }
    
    seatGrid.appendChild(seat);
  }
}

// Toggle seat selection
function toggleSeat(seatElement, seatNumber) {
  if (seatElement.classList.contains('selected')) {
    // Deselect
    seatElement.classList.remove('selected');
    selectedSeats = selectedSeats.filter(s => s !== seatNumber);
  } else {
    // Select if under limit
    if (selectedSeats.length < maxSeats) {
      seatElement.classList.add('selected');
      selectedSeats.push(seatNumber);
    } else {
      alert(`Та хамгийн ихдээ ${maxSeats} суудал сонгож болно`);
    }
  }
  updateSelectedCount();
}

// Update selected count
function updateSelectedCount() {
  document.getElementById('selectedCount').textContent = `${selectedSeats.length}/${maxSeats}`;
  document.getElementById('confirmBtn').disabled = selectedSeats.length === 0;
}

// Load gaming center data
async function loadCenterData() {
  try {
    const response = await fetch('gaming-centers.json');
    const gamingCenters = await response.json();
    const center = gamingCenters.find(c => c.id === centerId);
    
    if (center) {
      document.getElementById('placeName').textContent = center.name;
      document.getElementById('rating').textContent = `⭐ ${center.score}`;
      
      // Update logo circle with initials
      const initials = center.name.split(' ')
        .map(word => word[0])
        .slice(0, 2)
        .join('');
      document.getElementById('logoCircle').innerHTML = initials;
    }
  } catch (error) {
    console.error('Error loading center data:', error);
  }
}

// Go back to detail page
function goBack() {
  window.location.href = `detail.html?id=${centerId}`;
}

// Confirm booking
function confirmBooking() {
  if (selectedSeats.length === 0) {
    alert('Суудал сонгоно уу');
    return;
  }
  
  alert(`Амжилттай! Та ${selectedSeats.length} суудал захиаллаа: ${selectedSeats.join(', ')}`);
  // Here you would send the booking to your backend
  
  // Optional: Redirect back to detail page after booking
  setTimeout(() => {
    window.location.href = `detail.html?id=${centerId}`;
  }, 2000);
}

// Initialize
generateSeats();
loadCenterData();