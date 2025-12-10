// Get ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const centerId = parseInt(urlParams.get('id'));

// Load gaming center data
async function loadCenterDetails() {
  try {
    const response = await fetch('gaming-centers.json');
    const gamingCenters = await response.json();
    const center = gamingCenters.find(c => c.id === centerId);
    
    if (center) {
      // Update page content with center data
      document.title = `${center.name} | pcdii.mn`;
      document.getElementById('placeName').textContent = center.name;
      document.getElementById('ratingNumber').textContent = center.score;
      document.getElementById('mainImage').src = center.image;
      document.getElementById('mainImage').alt = center.name;
      
      // Update stars
      const stars = '★'.repeat(center.stars) + '☆'.repeat(5 - center.stars);
      document.getElementById('ratingStars').textContent = stars;
      
      // Update logo circle with initials
      const initials = center.name.split(' ')
        .map(word => word[0])
        .slice(0, 2)
        .join('');
      document.getElementById('logoCircle').innerHTML = initials;
    } else {
      alert('Gaming center not found');
      window.location.href = 'index.html';
    }
  } catch (error) {
    console.error('Error loading center details:', error);
    alert('Error loading data');
  }
}

// Navigate to seat selection
function goToSeatSelection() {
  window.location.href = `seats.html?id=${centerId}`;
}

// Initialize
loadCenterDetails();