// Signup Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Check password strength
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      passwordInput.addEventListener('input', function(e) {
        const password = e.target.value;
        const strengthBar = document.getElementById('strengthBar');
        
        if (!strengthBar) return;
        
        let strength = 0;
        if (password.length >= 6) strength++;
        if (password.length >= 10) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        
        strengthBar.className = 'password-strength-bar';
        if (strength <= 2) {
          strengthBar.classList.add('weak');
        } else if (strength <= 3) {
          strengthBar.classList.add('medium');
        } else {
          strengthBar.classList.add('strong');
        }
      });
    }
  
    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;
  
        // Validation
        if (!fullname || !email || !phone || !password || !confirmPassword) {
          showError('Бүх талбарыг бөглөнө үү');
          return;
        }
  
        if (password.length < 6) {
          showError('Нууц үг 6-аас дээш тэмдэгттэй байх ёстой');
          return;
        }
  
        if (password !== confirmPassword) {
          showError('Нууц үг таарахгүй байна');
          return;
        }
  
        if (!terms) {
          showError('Үйлчилгээний нөхцөлийг зөвшөөрнө үү');
          return;
        }
  
        // Here you would send signup request to your backend
        console.log('Signup data:', { fullname, email, phone, password });
  
        // Simulate successful signup
        showSuccess('Амжилттай бүртгэгдлээ!');
        
        // Store user data (in a real app, use proper authentication)
        localStorage.setItem('user', JSON.stringify({ 
          fullname, 
          email, 
          phone,
          loggedIn: true 
        }));
        
        // Redirect to login page after 1 second
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1000);
      });
    }
  });