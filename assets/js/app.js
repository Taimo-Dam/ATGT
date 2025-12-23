// Global state
let currentPage = 'dashboard';
let quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || [];

// DOM Elements
const pages = {
  dashboard: document.getElementById('dashboardPage'),
  quiz: document.getElementById('quizPage'),
  study: document.getElementById('studyPage'),
  signs: document.getElementById('signsPage')
};

const backButtonContainer = document.getElementById('backButtonContainer');
const backButton = document.getElementById('backButton');
const darkModeToggle = document.getElementById('darkModeToggle');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeDarkMode();
  updateDashboardStats();
  showQuizHistoryIfExists();
  
  // Event listeners
  backButton.addEventListener('click', () => navigateToPage('dashboard'));
  darkModeToggle.addEventListener('click', toggleDarkMode);
});

// Navigation functions
function navigateToPage(page) {
  currentPage = page;
  
  // Hide all pages
  Object.values(pages).forEach(pageEl => {
    pageEl.classList.remove('active');
  });
  
  // Show current page
  pages[page].classList.add('active');
  
  // Show/hide back button
  if (page === 'dashboard') {
    backButtonContainer.style.display = 'none';
  } else {
    backButtonContainer.style.display = 'block';
  }
  
  // Add fade-in animation
  pages[page].classList.add('fade-in');
  
  // Remove animation class after animation completes
  setTimeout(() => {
    pages[page].classList.remove('fade-in');
  }, 300);
}

// Page navigation functions called from HTML
function startQuiz() {
  navigateToPage('quiz');
  initializeQuiz();
}

function startStudy() {
  navigateToPage('study');
  initializeStudyMode();
}

function viewSigns() {
  navigateToPage('signs');
  initializeTrafficSigns();
}

// Dark mode functionality
function initializeDarkMode() {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    document.body.classList.add('dark');
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
}

// Dashboard functions
function updateDashboardStats() {
  const highestScoreEl = document.getElementById('highestScore');
  const totalTestsEl = document.getElementById('totalTests');
  
  if (quizHistory.length > 0) {
    const highestScore = Math.max(...quizHistory.map(h => h.score));
    const totalTests = quizHistory.length;
    
    highestScoreEl.textContent = `${highestScore}/10`;
    totalTestsEl.textContent = totalTests;
  } else {
    highestScoreEl.textContent = '--';
    totalTestsEl.textContent = '0';
  }
}

function showQuizHistoryIfExists() {
  const historySection = document.getElementById('quizHistorySection');
  const historyList = document.getElementById('quizHistoryList');
  
  if (quizHistory.length > 0) {
    historySection.style.display = 'block';
    
    // Show last 5 attempts
    const recentHistory = quizHistory.slice(-5).reverse();
    
    historyList.innerHTML = recentHistory.map(history => `
      <div class="result-item ${history.score >= 8 ? 'correct' : 'incorrect'}">
        <div class="result-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${history.score >= 8 ? 
              '<path d="M9 11l3 3 8-8m-4 0a9 9 0 11-16 2l3-3 3.5 3.5"/>' : 
              '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
            }
          </svg>
          <div class="result-content">
            <div class="mb-1">
              <strong>${history.score}/${history.total} câu đúng</strong>
              <span class="badge ${history.score >= 8 ? 'success' : ''}" style="margin-left: 0.5rem;">
                ${history.score >= 8 ? 'Đạt' : 'Chưa đạt'}
              </span>
            </div>
            <div class="text-muted-foreground">${history.date}</div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Quiz completion handler
function handleQuizComplete(score, total) {
  const newHistory = {
    score: score,
    total: total,
    date: new Date().toLocaleDateString('vi-VN')
  };
  
  quizHistory.push(newHistory);
  localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
  
  updateDashboardStats();
  showQuizHistoryIfExists();
}

// Utility functions
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function createElement(tag, className = '', innerHTML = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
}

function createSVG(pathData, className = '') {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  if (className) svg.className = className;
  
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathData);
  svg.appendChild(path);
  
  return svg;
}

// Error handling
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
});

// Prevent form submission refresh
document.addEventListener('submit', function(e) {
  e.preventDefault();
});