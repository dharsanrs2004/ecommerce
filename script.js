document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('show-menu');
    });

    // Update location
    const updateLocation = document.getElementById('update-location');
    updateLocation.addEventListener('click', (e) => {
        e.preventDefault();
        // Here you would typically open a modal or navigate to a page to update the location
        alert('Update your delivery location here.');
    });

    // Populate category select
    const categorySelect = document.getElementById('category-select');
    const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Toys & Games'];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase().replace(' ', '-');
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    // Language and currency change
    const langCurrency = document.getElementById('lang-currency');
    langCurrency.addEventListener('change', (e) => {
        const [lang, currency] = e.target.value.split('-');
        console.log(`Changed to ${lang} language and ${currency} currency`);
        // Here you would update the page language and currency
    });

    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchBar.querySelector('input').value;
        const category = categorySelect.value;
        console.log(`Searching for "${query}" in category: ${category}`);
        // Here you would perform the search and update the page
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Countdown timer
    const countdownItems = document.querySelectorAll('.countdown-item');
    let countdownDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000; // 4 days from now

    function updateCountdown() {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownItems[0].querySelector('.value').textContent = days.toString().padStart(2, '0');
        countdownItems[1].querySelector('.value').textContent = hours.toString().padStart(2, '0');
        countdownItems[2].querySelector('.value').textContent = minutes.toString().padStart(2, '0');
        countdownItems[3].querySelector('.value').textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown').textContent = "EXPIRED";
        }
    }

    let countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Form submission
    const supplierForm = document.querySelector('.request-form form');
    supplierForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const itemNeed = document.getElementById('item-need').value;
        const quantity = document.getElementById('quantity').value;
        console.log(`Sending inquiry for ${quantity} units of: ${itemNeed}`);
        // Here you would typically send this data to your backend
    });
});

const form = document.getElementById('request-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = document.getElementById('item').value;
  const quantity = document.getElementById('quantity').value;

  // Here, you can add your logic to send the request to suppliers
  console.log(`Item: ${item}, Quantity: ${quantity}`);

  // Reset the form after submission
  form.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('emailInput');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (isValidEmail(email)) {
            // Here you would typically send the email to your server
            console.log('Subscribing with email:', email);
            alert('Thank you for subscribing!');
            form.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});