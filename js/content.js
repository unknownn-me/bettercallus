document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.ig-post');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.getElementById('closeModal');

  if (posts.length > 0 && modal && modalImg && closeBtn) {
    posts.forEach(post => {
      post.addEventListener('click', () => {
        const fullSrc = post.getAttribute('data-src');
        modalImg.src = fullSrc;
        modal.style.display = 'block';
        // tiny timeout to allow display:block to apply before adding opacity class
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
      });
    });

    const closeModal = () => {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300); // Wait for transition
    };

    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside the image
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });
  }
});
