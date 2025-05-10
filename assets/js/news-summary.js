// assets/js/news-summary.js

(function(){
  const container = document.getElementById('all-news-list');
  if (!container) return;

  fetch('../pages/news/news-list.json')
    .then(res => res.json())
    .then(list => {
      // فقط ۵ خبر اول
      list.slice(0, 5).forEach(item => {
        const div = document.createElement('div');
        div.className = 'app';
        div.innerHTML = `
          <div class="app-info">
            <img src="${item.thumb}" alt="${item.title}">
            <div class="app-text">
              <div class="app-title">${item.title}</div>
              <div class="app-subtitle">${item.summary}</div>
            </div>
          </div>
          <div class="app-actions">
            <div class="app-date">${item.date}</div>
            <a href="cards/${item.file}">
              <button class="button">جزئیات</button>
            </a>
          </div>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => console.error('Error loading news:', err));
})();
