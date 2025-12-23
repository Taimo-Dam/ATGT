// Traffic signs state
let signCategoryFilter = 'all';

// Initialize traffic signs
function initializeTrafficSigns() {
  renderTrafficSigns();
}

// Render traffic signs
function renderTrafficSigns() {
  const signsContent = document.getElementById('signsContent');
  const categories = getSignCategories();
  const filteredSigns = filterSignsByCategory(signCategoryFilter);
  
  signsContent.innerHTML = `
    <div class="page-header">
      <h2>Biển báo giao thông</h2>
      <p>Tìm hiểu về các loại biển báo giao thông phổ biến và ý nghĩa của chúng</p>
    </div>

    <!-- Category Filter -->
    <div class="signs-filters">
      <button class="btn ${signCategoryFilter === 'all' ? 'primary' : 'outline'}" 
              onclick="updateSignCategory('all')">
        Tất cả
      </button>
      ${categories.map(category => `
        <button class="btn ${signCategoryFilter === category ? 'primary' : 'outline'}" 
                onclick="updateSignCategory('${category}')">
          ${category}
        </button>
      `).join('')}
    </div>

    <!-- Signs Grid -->
    <div class="signs-grid">
      ${filteredSigns.map(sign => renderSignCard(sign)).join('')}
    </div>

    <!-- Info Cards -->
    <div class="info-cards">
      <div class="info-card red">
        <div class="info-card-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <h4 class="info-card-title">Biển cấm</h4>
        </div>
        <p class="info-card-text">
          Hình tròn, nền đỏ, viền trắng. Cấm một hành động cụ thể.
        </p>
      </div>

      <div class="info-card yellow">
        <div class="info-card-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <h4 class="info-card-title">Biển báo nguy hiểm</h4>
        </div>
        <p class="info-card-text">
          Hình tam giác đều, viền đỏ, nền trắng/vàng. Cảnh báo nguy hiểm.
        </p>
      </div>

      <div class="info-card blue">
        <div class="info-card-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          <h4 class="info-card-title">Biển hiệu lệnh</h4>
        </div>
        <p class="info-card-text">
          Hình tròn, nền xanh, hình vẽ trắng. Quy định bắt buộc.
        </p>
      </div>

      <div class="info-card green">
        <div class="info-card-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="3,11 22,2 13,21 11,13 3,11"/>
          </svg>
          <h4 class="info-card-title">Biển chỉ dẫn</h4>
        </div>
        <p class="info-card-text">
          Hình chữ nhật/vuông, nền xanh, chữ trắng. Chỉ dẫn thông tin.
        </p>
      </div>
    </div>

    <!-- Tips Section -->
    <div class="card" style="background-color: var(--muted);">
      <div class="card-header">
        <h3 style="display: flex; align-items: center; gap: 0.5rem;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Mẹo nhớ biển báo
        </h3>
      </div>
      <div class="card-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
          <div>
            <h5 style="font-weight: 600; margin-bottom: 0.5rem;">Theo hình dạng:</h5>
            <div style="font-size: 0.875rem; line-height: 1.6;">
              <p>• <strong>Tròn đỏ:</strong> Cấm làm điều gì đó</p>
              <p>• <strong>Tam giác đỏ:</strong> Cảnh báo nguy hiểm</p>
              <p>• <strong>Tròn xanh:</strong> Bắt buộc làm điều gì đó</p>
              <p>• <strong>Chữ nhật xanh:</strong> Thông tin chỉ dẫn</p>
            </div>
          </div>
          <div>
            <h5 style="font-weight: 600; margin-bottom: 0.5rem;">Theo màu sắc:</h5>
            <div style="font-size: 0.875rem; line-height: 1.6;">
              <p>• <strong>Đỏ:</strong> Cấm hoặc cảnh báo</p>
              <p>• <strong>Xanh dương:</strong> Chỉ dẫn hoặc bắt buộc</p>
              <p>• <strong>Vàng:</strong> Cảnh báo tạm thời</p>
              <p>• <strong>Trắng:</strong> Nền cho các ký hiệu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render individual sign card
function renderSignCard(sign) {
  const iconSVG = getSignIcon(sign.id);
  
  return `
    <div class="sign-card">
      <div class="sign-image">
        <img src="${sign.imageUrl}" alt="${sign.name}" loading="lazy" 
             onerror="this.style.display='none'">
        <div class="sign-overlay">
          <button class="btn secondary" onclick="viewSignDetail(${sign.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Xem chi tiết
          </button>
        </div>
      </div>
      
      <div class="sign-content">
        <div class="sign-header">
          <div class="sign-icon">
            ${iconSVG}
          </div>
          <div style="flex: 1;">
            <h3 class="sign-title">${sign.name}</h3>
            <span class="badge secondary">${sign.category}</span>
          </div>
        </div>
        
        <div class="sign-details">
          <div class="sign-detail">
            <div class="sign-detail-label">MÔ TẢ</div>
            <div class="sign-detail-text">${sign.description}</div>
          </div>
          <div class="sign-detail">
            <div class="sign-detail-label">Ý NGHĨA</div>
            <div class="sign-detail-text">${sign.meaning}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Get sign icon based on ID
function getSignIcon(signId) {
  const icons = {
    1: '<path d="M5 7h14l-7 7-7-7z"/>',
    2: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    3: '<polygon points="3,11 22,2 13,21 11,13 3,11"/>',
    4: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    5: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><circle cx="12" cy="16" r="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    6: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
  };
  
  const pathData = icons[signId] || icons[1];
  
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${pathData}
    </svg>
  `;
}

// Update sign category filter
function updateSignCategory(category) {
  signCategoryFilter = category;
  renderTrafficSigns();
}

// View sign detail (could open modal or navigate to detail page)
function viewSignDetail(signId) {
  const sign = trafficSigns.find(s => s.id === signId);
  if (!sign) return;
  
  // For now, just alert with details
  alert(`${sign.name}\n\nMô tả: ${sign.description}\n\nÝ nghĩa: ${sign.meaning}`);
  
  // In a real application, you might want to:
  // - Open a modal with detailed information
  // - Navigate to a dedicated sign detail page
  // - Show an expanded view with more images and examples
}