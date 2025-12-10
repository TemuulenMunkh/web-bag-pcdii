// PC Registration Page JavaScript

let currentStep = 1;
const totalSteps = 4;

// Navigation buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

// Show/hide sections
function showStep(step) {
  document.querySelectorAll('.form-section').forEach(section => {
    section.classList.remove('active');
  });
  document.querySelector(`[data-section="${step}"]`).classList.add('active');

  // Update progress
  document.querySelectorAll('.step').forEach((stepEl, index) => {
    if (index + 1 < step) {
      stepEl.classList.add('completed');
      stepEl.classList.remove('active');
    } else if (index + 1 === step) {
      stepEl.classList.add('active');
      stepEl.classList.remove('completed');
    } else {
      stepEl.classList.remove('active', 'completed');
    }
  });

  // Update buttons
  prevBtn.style.display = step === 1 ? 'none' : 'block';
  nextBtn.style.display = step === totalSteps ? 'none' : 'block';
  submitBtn.style.display = step === totalSteps ? 'block' : 'none';
}

// Next button
nextBtn.addEventListener('click', () => {
  if (validateCurrentStep()) {
    currentStep++;
    showStep(currentStep);
  }
});

// Previous button
prevBtn.addEventListener('click', () => {
  currentStep--;
  showStep(currentStep);
});

// Validate current step
function validateCurrentStep() {
  const currentSection = document.querySelector(`[data-section="${currentStep}"]`);
  const inputs = currentSection.querySelectorAll('input[required], select[required], textarea[required]');
  
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert('Шаардлагатай талбаруудыг бөглөнө үү');
      input.focus();
      return false;
    }
  }
  return true;
}

// Photo preview
document.getElementById('photos').addEventListener('change', function(e) {
  const preview = document.getElementById('photoPreview');
  preview.innerHTML = '';
  
  Array.from(e.target.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = '100px';
      img.style.height = '100px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '8px';
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

// Form submission
document.getElementById('pcRegisterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const data = {};
  
  formData.forEach((value, key) => {
    if (key === 'services') {
      if (!data.services) data.services = [];
      data.services.push(value);
    } else {
      data[key] = value;
    }
  });

  console.log('PC Registration Data:', data);
  
  // Hide form, show success message
  document.querySelector('.form-section.active').style.display = 'none';
  document.querySelector('.button-group').style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
  
  // Redirect after 3 seconds
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 5000);
});