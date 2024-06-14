const shareBar = document.querySelector('#share-bar');
const shareBtn = document.querySelector('#share-btn');

shareBtn.addEventListener('click', () => {
  shareBar.classList.toggle('active');
  shareBtn.classList.toggle('active');
});
