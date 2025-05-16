// Greeting based on time of day
function greetUser() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// Toggle dark/light mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Apply saved theme on load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Theme';
    toggleBtn.style.position = 'fixed';
    toggleBtn.style.top = '10px';
    toggleBtn.style.right = '10px';
    toggleBtn.style.zIndex = '9999';
    toggleBtn.style.padding = '0.5rem 1rem';
    toggleBtn.style.backgroundColor = '#006699';
    toggleBtn.style.color = '#fff';
    toggleBtn.style.border = 'none';
    toggleBtn.style.cursor = 'pointer';

    toggleBtn.onclick = toggleDarkMode;
    document.body.appendChild(toggleBtn);
});

// Form validation
function validateContactForm() {
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const errorMessages = document.getElementById('error-messages');
    const errors = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{7,15}$/;

    if (!emailRegex.test(email.value)) {
        errors.push('Invalid email format.');
    }

    if (!phoneRegex.test(phone.value)) {
        errors.push('Invalid phone number format.');
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.map(e => <li>${e}</li>).join('');
        return false;
    } else {
        errorMessages.innerHTML = '';
        return true;
    }
}

// Toggle project details visibility
function toggleProjectDetails(id) {
    const details = document.getElementById(id);
    if (details) {
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    }
}