async function login(){
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('https://breezereadbe-production.up.railway.app/login', {
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
    // might not be able to get like this. Look into forms in HTML.
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    console.log("TEST")

    const response = await fetch('https://breezereadbe-production.up.railway.app/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    }); 

    const data = await response.json();
    alert(data.message);
    
}

