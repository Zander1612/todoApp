const rexpname = /^[a-zA-Z ]{2,30}$/;
const rexpemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const rexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const matchInput = document.getElementById('match-input');
const btn = document.getElementById('form-btn');

