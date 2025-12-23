// Study mode state
let studyQuestions = [];
let currentStudyIndex = 0;
let showStudyAnswer = false;
let selectedStudyAnswer = null;
let categoryFilter = 'all';
let searchQuery = '';
let studiedQuestions = new Set(JSON.parse(localStorage.getItem('studiedQuestions') || '[]'));

// Initialize study mode
function initializeStudyMode() {
  loadStudyQuestions();
  renderStudyMode();
}

// Load questions based on filters
function loadStudyQuestions() {
  let questions = filterQuestionsByCategory(categoryFilter);
  questions = searchQuestions(searchQuery, questions);
  studyQuestions = questions;
  
  // Reset index if out of bounds
  if (currentStudyIndex >= studyQuestions.length) {
    currentStudyIndex = 0;
    resetStudyQuestion();
  }
}

// Render study mode
function renderStudyMode() {
  const studyContent = document.getElementById('studyContent');
  
  if (studyQuestions.length === 0) {
    studyContent.innerHTML = `
      <div class="text-center">
        <h2 class="mb-2">Ôn tập câu hỏi</h2>
        <p style="color: var(--muted-foreground); margin-bottom: 2rem;">
          Không tìm thấy câu hỏi phù hợp với bộ lọc của bạn
        </p>
        <button class="btn primary" onclick="clearStudyFilters()">
          Xóa bộ lọc
        </button>
      </div>
    `;
    return;
  }
  
  const currentQuestion = studyQuestions[currentStudyIndex];
  const categories = getQuestionCategories();
  
  studyContent.innerHTML = `
    <div class="page-header">
      <h2>Ôn tập câu hỏi</h2>
      <p>Học từng câu một cách chi tiết với giải thích đầy đủ</p>
    </div>

    <!-- Filters -->
    <div class="study-filters">
      <div class="study-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input type="text" class="form-input" placeholder="Tìm kiếm câu hỏi..." 
               value="${searchQuery}" oninput="updateSearchQuery(this.value)">
      </div>
      <div class="study-filter">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"/>
        </svg>
        <select class="form-select" onchange="updateCategoryFilter(this.value)">
          <option value="all" ${categoryFilter === 'all' ? 'selected' : ''}>Tất cả chủ đề</option>
          ${categories.map(category => `
            <option value="${category}" ${categoryFilter === category ? 'selected' : ''}>
              ${category}
            </option>
          `).join('')}
        </select>
      </div>
    </div>

    <!-- Question Info -->
    <div class="study-info">
      <div class="quiz-info">
        <span class="badge">Câu ${currentStudyIndex + 1}/${studyQuestions.length}</span>
        <span class="badge secondary">${currentQuestion.category}</span>
        ${studiedQuestions.has(currentQuestion.id) ? 
          '<span class="badge success">Đã học</span>' : ''
        }
      </div>
      <div class="study-stats">
        Đã học: ${studiedQuestions.size}/${trafficQuestions.length} câu
      </div>
    </div>

    <!-- Question Card -->
    <div class="card question-card">
      <div class="card-header">
        <h3>${currentQuestion.question}</h3>
      </div>
      <div class="card-body">
        <div class="question-options">
          ${currentQuestion.options.map((option, index) => {
            let optionClass = 'option';
            
            if (!showStudyAnswer) {
              if (selectedStudyAnswer === index) {
                optionClass += ' selected';
              }
            } else {
              if (index === currentQuestion.correctAnswer) {
                optionClass += ' correct';
              } else if (selectedStudyAnswer === index && index !== currentQuestion.correctAnswer) {
                optionClass += ' incorrect';
              }
            }
            
            return `
              <label class="${optionClass}" ${!showStudyAnswer ? `onclick="selectStudyAnswer(${index})"` : ''}>
                <input type="radio" name="study-question-${currentQuestion.id}" value="${index}" 
                       ${selectedStudyAnswer === index ? 'checked' : ''} 
                       ${showStudyAnswer ? 'disabled' : ''}>
                <span>${option}</span>
              </label>
            `;
          }).join('')}
        </div>

        ${showStudyAnswer ? `
          <div class="explanation-box">
            <div class="explanation-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 11l3 3 8-8m-4 0a9 9 0 11-16 2l3-3 3.5 3.5"/>
              </svg>
              <span class="explanation-title">
                Đáp án đúng: ${currentQuestion.options[currentQuestion.correctAnswer]}
              </span>
            </div>
            <div class="explanation-text">
              <strong>GIẢI THÍCH:</strong><br>
              ${currentQuestion.explanation}
            </div>
            ${selectedStudyAnswer !== null ? `
              <div class="explanation-feedback ${selectedStudyAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}">
                ${selectedStudyAnswer === currentQuestion.correctAnswer ? 
                  '🎉 Chính xác! Bạn đã trả lời đúng.' : 
                  '💡 Hãy ghi nhớ thông tin này để lần sau không nhầm lẫn.'
                }
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Actions -->
        <div class="quiz-navigation mt-6">
          <button class="btn outline" onclick="previousStudyQuestion()" 
                  ${currentStudyIndex === 0 ? 'disabled' : ''}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Câu trước
          </button>

          <div class="quiz-actions">
            ${!showStudyAnswer ? `
              <button class="btn outline" onclick="toggleStudyAnswer()" style="color: #3b82f6; border-color: rgba(59, 130, 246, 0.3);">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                Xem đáp án
              </button>
            ` : `
              <button class="btn outline" onclick="hideStudyAnswer()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <path d="M1 1l22 22"/>
                </svg>
                Ẩn đáp án
              </button>
            `}
          </div>

          <button class="btn primary" onclick="nextStudyQuestion()" 
                  ${currentStudyIndex === studyQuestions.length - 1 ? 'disabled' : ''}>
            Câu tiếp
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Navigation -->
    <div class="card quick-nav">
      <div class="card-header">
        <h3>Điều hướng nhanh</h3>
      </div>
      <div class="card-body">
        <div class="nav-grid">
          ${studyQuestions.map((question, index) => `
            <button class="nav-button ${index === currentStudyIndex ? 'active' : ''} ${studiedQuestions.has(question.id) ? 'studied' : ''}" 
                    onclick="jumpToStudyQuestion(${index})">
              ${index + 1}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Update search query
function updateSearchQuery(query) {
  searchQuery = query;
  currentStudyIndex = 0;
  resetStudyQuestion();
  loadStudyQuestions();
  renderStudyMode();
}

// Update category filter
function updateCategoryFilter(category) {
  categoryFilter = category;
  currentStudyIndex = 0;
  resetStudyQuestion();
  loadStudyQuestions();
  renderStudyMode();
}

// Clear all filters
function clearStudyFilters() {
  categoryFilter = 'all';
  searchQuery = '';
  currentStudyIndex = 0;
  resetStudyQuestion();
  loadStudyQuestions();
  renderStudyMode();
}

// Select study answer
function selectStudyAnswer(answerIndex) {
  selectedStudyAnswer = answerIndex;
  showStudyAnswer = true;
  
  // Mark question as studied
  const currentQuestion = studyQuestions[currentStudyIndex];
  studiedQuestions.add(currentQuestion.id);
  localStorage.setItem('studiedQuestions', JSON.stringify([...studiedQuestions]));
  
  renderStudyMode();
}

// Toggle answer visibility
function toggleStudyAnswer() {
  showStudyAnswer = true;
  
  // Mark question as studied even if no answer selected
  const currentQuestion = studyQuestions[currentStudyIndex];
  studiedQuestions.add(currentQuestion.id);
  localStorage.setItem('studiedQuestions', JSON.stringify([...studiedQuestions]));
  
  renderStudyMode();
}

// Hide answer
function hideStudyAnswer() {
  showStudyAnswer = false;
  renderStudyMode();
}

// Navigate to next question
function nextStudyQuestion() {
  if (currentStudyIndex < studyQuestions.length - 1) {
    currentStudyIndex++;
    resetStudyQuestion();
    renderStudyMode();
  }
}

// Navigate to previous question
function previousStudyQuestion() {
  if (currentStudyIndex > 0) {
    currentStudyIndex--;
    resetStudyQuestion();
    renderStudyMode();
  }
}

// Jump to specific question
function jumpToStudyQuestion(index) {
  currentStudyIndex = index;
  resetStudyQuestion();
  renderStudyMode();
}

// Reset question state
function resetStudyQuestion() {
  showStudyAnswer = false;
  selectedStudyAnswer = null;
}