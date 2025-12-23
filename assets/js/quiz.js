// Quiz state
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswers = {};
let timeLeft = 600; // 10 minutes
let isCompleted = false;
let showResults = false;
let quizTimer = null;

// Initialize quiz
function initializeQuiz() {
  // Reset state
  currentQuizQuestions = getRandomQuestions(10);
  currentQuestionIndex = 0;
  selectedAnswers = {};
  timeLeft = 600;
  isCompleted = false;
  showResults = false;
  
  // Clear any existing timer
  if (quizTimer) {
    clearInterval(quizTimer);
  }
  
  // Start timer
  startQuizTimer();
  
  // Render quiz
  renderQuiz();
}

// Start quiz timer
function startQuizTimer() {
  quizTimer = setInterval(() => {
    if (timeLeft > 0 && !isCompleted) {
      timeLeft--;
      updateTimerDisplay();
    } else if (timeLeft === 0) {
      completeQuiz();
    }
  }, 1000);
}

// Update timer display
function updateTimerDisplay() {
  const timerEl = document.querySelector('.timer');
  if (timerEl) {
    const timeSpan = timerEl.querySelector('span');
    timeSpan.textContent = formatTime(timeLeft);
    
    // Add warning class when time is low
    if (timeLeft < 60) {
      timerEl.classList.add('warning');
    } else {
      timerEl.classList.remove('warning');
    }
  }
}

// Render quiz
function renderQuiz() {
  const quizContent = document.getElementById('quizContent');
  
  if (showResults) {
    renderQuizResults();
    return;
  }
  
  const currentQuestion = currentQuizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuizQuestions.length) * 100;
  
  quizContent.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-info">
        <span class="badge">${currentQuestionIndex + 1}/${currentQuizQuestions.length}</span>
        <span class="badge secondary">${currentQuestion.category}</span>
      </div>
      <div class="timer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
        <span>${formatTime(timeLeft)}</span>
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar" style="width: ${progress}%"></div>
    </div>

    <div class="card question-card">
      <div class="card-header">
        <h3>${currentQuestion.question}</h3>
      </div>
      <div class="card-body">
        <div class="question-options">
          ${currentQuestion.options.map((option, index) => `
            <label class="option ${selectedAnswers[currentQuestion.id] === index ? 'selected' : ''}">
              <input type="radio" name="question-${currentQuestion.id}" value="${index}" 
                     ${selectedAnswers[currentQuestion.id] === index ? 'checked' : ''}
                     onchange="selectAnswer(${index})">
              <span>${option}</span>
            </label>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="quiz-navigation">
      <button class="btn outline" onclick="previousQuestion()" 
              ${currentQuestionIndex === 0 ? 'disabled' : ''}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        Câu trước
      </button>
      
      <div class="quiz-actions">
        <button class="btn outline" onclick="completeQuiz()">
          Nộp bài
        </button>
        <button class="btn primary" onclick="nextQuestion()" 
                ${selectedAnswers[currentQuestion.id] === undefined ? 'disabled' : ''}>
          ${currentQuestionIndex === currentQuizQuestions.length - 1 ? 'Hoàn thành' : 'Câu tiếp'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  `;
}

// Select answer
function selectAnswer(answerIndex) {
  const currentQuestion = currentQuizQuestions[currentQuestionIndex];
  selectedAnswers[currentQuestion.id] = answerIndex;
  
  // Update UI
  const options = document.querySelectorAll('.option');
  options.forEach((option, index) => {
    option.classList.toggle('selected', index === answerIndex);
  });
  
  // Enable next button
  const nextBtn = document.querySelector('.quiz-actions .btn.primary');
  nextBtn.disabled = false;
}

// Navigate to next question
function nextQuestion() {
  if (currentQuestionIndex < currentQuizQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuiz();
  } else {
    completeQuiz();
  }
}

// Navigate to previous question
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuiz();
  }
}

// Complete quiz
function completeQuiz() {
  isCompleted = true;
  showResults = true;
  
  // Clear timer
  if (quizTimer) {
    clearInterval(quizTimer);
    quizTimer = null;
  }
  
  // Calculate score
  const correctAnswers = currentQuizQuestions.filter(
    question => selectedAnswers[question.id] === question.correctAnswer
  ).length;
  
  // Save to history
  handleQuizComplete(correctAnswers, currentQuizQuestions.length);
  
  renderQuizResults();
}

// Render quiz results
function renderQuizResults() {
  const quizContent = document.getElementById('quizContent');
  
  const correctAnswers = currentQuizQuestions.filter(
    question => selectedAnswers[question.id] === question.correctAnswer
  ).length;
  
  const percentage = Math.round((correctAnswers / currentQuizQuestions.length) * 100);
  const isPassed = correctAnswers >= 8;
  
  quizContent.innerHTML = `
    <div class="card results-card">
      <div class="card-header">
        <h3 style="display: flex; align-items: center; gap: 0.5rem;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: ${isPassed ? '#10b981' : '#ef4444'};">
            ${isPassed ? 
              '<path d="M9 11l3 3 8-8m-4 0a9 9 0 11-16 2l3-3 3.5 3.5"/>' : 
              '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
            }
          </svg>
          Kết quả bài thi
        </h3>
      </div>
      <div class="card-body">
        <div class="results-score" style="color: ${isPassed ? '#10b981' : '#ef4444'};">
          ${correctAnswers}/${currentQuizQuestions.length}
        </div>
        <p class="results-description">câu trả lời đúng (${percentage}%)</p>
        
        <div class="badges" style="justify-content: center; margin-bottom: 1.5rem;">
          <span class="badge ${isPassed ? 'success' : 'danger'}" 
                style="${!isPassed ? 'background-color: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); color: #ef4444;' : ''}">
            ${isPassed ? '🎉 Đạt yêu cầu' : '😔 Chưa đạt yêu cầu'}
          </span>
        </div>
        
        <div class="flex justify-center gap-2">
          <button class="btn primary" onclick="restartQuiz()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
              <path d="M3 21v-5h5"/>
            </svg>
            Làm bài mới
          </button>
          <button class="btn outline" onclick="navigateToPage('dashboard')">
            Về trang chủ
          </button>
        </div>
      </div>
    </div>

    <div class="results-details">
      <h3 class="mb-4">Chi tiết kết quả:</h3>
      ${currentQuizQuestions.map((question, index) => {
        const userAnswer = selectedAnswers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;
        
        return `
          <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="result-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${isCorrect ? 
                  '<path d="M9 11l3 3 8-8m-4 0a9 9 0 11-16 2l3-3 3.5 3.5"/>' : 
                  '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
                }
              </svg>
              <div class="result-content">
                <p class="mb-2"><strong>Câu ${index + 1}:</strong> ${question.question}</p>
                <div class="result-answers">
                  ${userAnswer !== undefined ? `
                    <p style="color: ${isCorrect ? '#10b981' : '#ef4444'}; margin-bottom: 0.25rem;">
                      <strong>Bạn chọn:</strong> ${question.options[userAnswer]}
                    </p>
                  ` : ''}
                  ${!isCorrect ? `
                    <p style="color: #10b981; margin-bottom: 0.25rem;">
                      <strong>Đáp án đúng:</strong> ${question.options[question.correctAnswer]}
                    </p>
                  ` : ''}
                </div>
                <p class="result-explanation">
                  <strong>Giải thích:</strong> ${question.explanation}
                </p>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Restart quiz
function restartQuiz() {
  showResults = false;
  initializeQuiz();
}