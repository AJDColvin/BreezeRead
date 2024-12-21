let loggedIn = false;

const apiBaseUrl =
    window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3000' // Local backend
        : 'https://breezereadbe-production.up.railway.app'; // Railway backend

function checkLoggedIn() {
    if (loggedIn) {
        loggedInPopup();
    }
    else {
        openPopup('popup-login');
    }
}

function loggedInPopup(){
    openPopup('popup-logged-in');
    const username = document.getElementById('login-username').value;
    console.log(username);
    document.getElementById("username_placeholder").innerHTML = `${username}`;
    console.log(`${username}`);

}

async function login(){
    //username not defined globally?
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
        loggedIn = true;
        alert(data.message);
        closePopup('popup-login');
        loggedInPopup();
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

function logout(){

    loggedIn = false;
    closePopup('popup-logged-in');

}


