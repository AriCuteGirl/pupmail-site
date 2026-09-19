const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.shot').forEach((shot) => shot.addEventListener('click', () => {
  lightboxImage.src = shot.dataset.full;
  lightbox.showModal();
}));
lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
