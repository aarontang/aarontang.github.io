/* @author tangwt@claude */

(function () {
  'use strict';

  // Category filter for post cards on the homepage
  const filterBar = document.querySelector('.filter-bar');
  if (!filterBar) return;

  const cards = document.querySelectorAll('.post-card');

  filterBar.addEventListener('click', function (e) {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active state
    filterBar.querySelectorAll('.filter-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(function (card) {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
})();
