document.addEventListener('DOMContentLoaded', () => {
  // الحصول على العناصر المطلوبة
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  // التحقق من وجود العناصر
  if (menuToggle && nav) {
    // إضافة حدث عند الضغط على زر القائمة
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active'); // إضافة/إزالة كلاس "active"
    });
  } else {
    console.warn('Menu toggle or navigation menu not found.');
  }
});