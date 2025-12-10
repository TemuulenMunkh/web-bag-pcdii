// Toggle password visibility
function togglePassword(fieldId) {
    const passwordInput = fieldId 
      ? document.getElementById(fieldId)
      : document.getElementById('password');
    const toggleIcon = passwordInput.nextElementSibling;
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.textContent = '🙈';
    } else {
      passwordInput.type = 'password';
      toggleIcon.textContent = '👁️';
    }
  }
  
  // Show error message
  function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
      setTimeout(() => {
        errorDiv.style.display = 'none';
      }, 5000);
    }
  }
  
  // Show success message
  function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    if (successDiv) {
      successDiv.textContent = message;
      successDiv.style.display = 'block';
      setTimeout(() => {
        successDiv.style.display = 'none';
      }, 3000);
    }
  }
  
  // Social login functions
  function loginWithGoogle() {
    console.log('Login with Google');
    alert('Google нэвтрэлт удахгүй нэмэгдэнэ');
  }
  
  function loginWithFacebook() {
    console.log('Login with Facebook');
    alert('Facebook нэвтрэлт удахгүй нэмэгдэнэ');
  }
  
  function signupWithGoogle() {
    console.log('Signup with Google');
    alert('Google бүртгэл удахгүй нэмэгдэнэ');
  }
  
  function signupWithFacebook() {
    console.log('Signup with Facebook');
    alert('Facebook бүртгэл удахгүй нэмэгдэнэ');
  }
  
  // Check if user is logged in
  function checkAuth() {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        return JSON.parse(user);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
  
  // Logout function
  function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
  }