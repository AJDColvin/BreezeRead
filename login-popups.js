const apiBaseUrl =
    window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3000' // Local backend
        : 'https://breezereadbe-production.up.railway.app'; // Railway backend

async function login(){
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch(`${apiBaseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.token); // Save the JWT token
        alert(data.message);
    } else {
        alert(data.message);
    }

}

async function register(){
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    console.log("TEST")

    const response = await fetch(`${apiBaseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    }); 

    const data = await response.json();
    alert(data.message);

    
}

