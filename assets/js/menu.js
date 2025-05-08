const menuItems3 = document.querySelectorAll('.nav-item3');
const menus3     = document.querySelectorAll('.mega-menu3');

menuItems3.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
    const target = item.dataset.target;
    menus3.forEach(menu => {
      if (menu.id === target) menu.classList.toggle('active');
      else menu.classList.remove('active');
    });
  });
});
window.addEventListener('click', e => {
  if (!e.target.closest('.nav-item3') && !e.target.closest('.mega-menu3')) {
    menus3.forEach(menu => menu.classList.remove('active'));
  }
});
