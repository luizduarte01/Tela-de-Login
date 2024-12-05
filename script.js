document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!email || !password) {
      alert('Por favor, preencha todos os campos!');
    } else {
      alert(`Bem-vindo, ${email}!`);
    }
  });
  