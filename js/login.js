// Login Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Basic validation
        if (!email || !password) {
          showError('Имэйл болон нууц үгээ оруулна уу');
          return;
        }
  
        // Here you would send login request to your backend
        // For now, we'll simulate a login
        console.log('Login attempt:', { email, password });
  
        // Simulate successful login
        showSuccess('Амжилттай нэвтэрлээ!');
        
        // Store user session (in a real app, use proper authentication)
        localStorage.setItem('user', JSON.stringify({ email, loggedIn: true }));
        
        // Redirect to homepage after 1 second
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      });
    }
  });