// ========== Equal height cards ==========
function setEqualCardHeights() {
  const cards = document.querySelectorAll('.alumni-card');
  let maxHeight = 0;

  // reset heights
  cards.forEach(card => card.style.height = 'auto');

  // find tallest
  cards.forEach(card => {
    if (card.offsetHeight > maxHeight) maxHeight = card.offsetHeight;
  });

  // set all cards to tallest
  cards.forEach(card => card.style.height = maxHeight + 'px');
}

window.addEventListener('load', setEqualCardHeights);
window.addEventListener('resize', setEqualCardHeights);

// ========== Modal functionality ==========
const cards = document.querySelectorAll('.alumni-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // lock background scroll
  });
});

const closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
    document.body.style.overflow = ''; // restore scroll
  });
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    document.body.style.overflow = '';
  }
});

