export default function transfer(callback) {
  setTimeout(() => {
    window.scrollTo(0, 0);

    callback();

    setTimeout(() => {
      document.body.classList.remove('is-loading');
    }, 250);
  }, 250);

  document.body.classList.add('is-loading');
}