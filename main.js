document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password') {
    alert('Login successful!');
    window.location.replace("project.html");     
    
  } else {
    document.getElementById('login-message').textContent = 'Invalid username or password';
  }
});