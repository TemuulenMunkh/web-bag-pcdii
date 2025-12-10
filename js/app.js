// Load data from JSON file
let gamingCenters = [];

async function loadData() {
  try {
    const response = await fetch('gaming-centers.json');
    gamingCenters = await response.json();
    renderAllCenters(gamingCenters);
  } catch (error) {
    console.error('Error loading data:', error);
    sidebar.innerHTML = `
      <div style="color: white; padding: 40px; text-align: center;">
        <h2 style="margin-bottom: 20px;">⚠️ Өгөгдөл ачаалагдсангүй</h2>
        <p style="color: #999; margin-bottom: 10px;">gaming-centers.json файлыг олж чадсангүй.</p>
        <p style="color: #999;">Файл байгаа эсэхийг шалгана уу.</p>
      </div>
    `;
  }
}

// Get DOM elements
const searchInput = document.querySelector('.search-container input');
const sidebar = document.querySelector('.sidebar');

// Render star rating
function renderStars(count) {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

// Render a single place card
function renderPlaceCard(center) {
  return `
    <div class="place-card" data-id="${center.id}">
      <div class="score">${center.score}</div>
      <div class="card-content">
        <img src="${center.image}" alt="${center.name}">
        <div class="place-info">
          <h3>${center.name}</h3>
          <div class="location">
            <span>${center.address}</span>
          </div>
          <div class="rating-row">
            <div class="rating">
              <span class="stars">${renderStars(center.stars)}</span>
              <span class="review-count">${center.reviews} сэтгэгдэл</span>
            </div>
            <span class="status">${center.status}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render all centers
function renderAllCenters(centers) {
  sidebar.innerHTML = centers.map(center => renderPlaceCard(center)).join('');
  attachCardListeners();
}

// Attach click listeners to cards
function attachCardListeners() {
  const cards = document.querySelectorAll('.place-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      const center = gamingCenters.find(c => c.id === id);
      if (center) {
        // Navigate to detail page
        window.location.href = `detail.html?id=${id}`;
      }
    });
  });
}

// Search filter
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  
  if (searchTerm === '') {
    renderAllCenters(gamingCenters);
  } else {
    const filtered = gamingCenters.filter(center => 
      center.name.toLowerCase().includes(searchTerm) ||
      center.address.toLowerCase().includes(searchTerm)
    );
    renderAllCenters(filtered);
  }
});

// Keyboard navigation
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const firstCard = document.querySelector('.place-card');
    if (firstCard) {
      firstCard.click();
    }
  }
});
loadData();