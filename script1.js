
// <!--search bar-->
document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const contents = document.querySelectorAll('.content-item');
  contents.forEach(content => {
    const title = content.querySelector('h3').innerText.toLowerCase();
    if (title.includes(query)) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});

const data = {
  trending: [
    { title: 'Movie 1', img: 'download (2).jpg'  },
    { title: 'Movie 2', img: 'download (3).jpg' },
    { title: 'Movie 3', img: 'download (4).jpg'  },
    { title: 'Movie 4', img: 'download (5).jpg' },
    { title: 'Movie 5', img: 'download.jpg' },
    { title: 'Movie 2', img: 'download (3).jpg' },
    { title: 'Movie 3', img: 'download (4).jpg'  },
    { title: 'Movie 4', img: 'download (5).jpg' },
  ],
  recommended: [
    { title: 'Series 1', img: 'images (3).jpg ' },
    { title: 'Series 2', img: 'images (4).jpg' },
    { title: 'Series 3', img: 'images (5).jpg' },
    { title: 'Series 4', img: 'new-hindi-web-series-june-2023.jpg' },
    { title: 'Series 1', img: 'images (3).jpg ' },
    { title: 'Series 2', img: 'images (4).jpg' },
    { title: 'Series 3', img: 'images (5).jpg' },
    { title: 'Series 4', img: 'new-hindi-web-series-june-2023.jpg' },
   
  ]
};



let displayedRecommended = 2; // Number of items initially displayed
const increment = 2; // Number of items to load on "Load More"

// Function to load content
function loadContent(section, contentId, limit = null) {
  const container = document.getElementById(contentId);
  container.innerHTML = ''; // Clear existing content
  const items = limit ? section.slice(0, limit) : section;
  items.forEach(item => {
    const contentItem = document.createElement('div');
    contentItem.classList.add('content-item');
    contentItem.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
     
    `;
    contentItem.addEventListener('click', () => {
      window.location.href = `content.html?title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}&img=${encodeURIComponent(item.img)}`;
    });
    container.appendChild(contentItem);
  });
}

// Load trending and recommended content on page load
window.addEventListener('DOMContentLoaded', () => {
  loadContent(data.trending, 'trendingContent');
  loadContent(data.recommended, 'recommendedContent', displayedRecommended);

  // Show modal on page load
  const loginModal = document.getElementById('loginModal');
  loginModal.style.display = 'block';
});

// Load more recommended content
document.getElementById('loadMore').addEventListener('click', () => {
  displayedRecommended += increment;
  loadContent(data.recommended, 'recommendedContent', displayedRecommended);
});

// Handle modal close
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('loginModal').style.display = 'none';
});

// Switch between forms
document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('forgotPasswordForm').style.display = 'block';
});

document.getElementById('newUserLink').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('backToLoginFromForgot').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('forgotPasswordForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('backToLoginFromRegister').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Handle login logic (e.g., validate against a database)
  alert(`Logged in as ${username}`);
  document.getElementById('loginModal').style.display = 'none';
});

// Handle forgot password form submission
document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  // Handle forgot password logic (e.g., send reset link to email)
  alert(`Password reset link sent to ${email}`);
  document.getElementById('loginModal').style.display = 'none';
});

// Handle register form submission
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  const newEmail = document.getElementById('newEmail').value;
  const newPassword = document.getElementById('newPassword').value;
  // Handle registration logic (e.g., save new user to a database)
  alert(`Registered as ${newUsername}`);
  document.getElementById('loginModal').style.display = 'none';
});

