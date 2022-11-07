export default function transfer(callback) {
  setTimeout(() => {
    callback();

    setTimeout(() => {
      document.body.classList.remove('is-loading');
    }, 250);
  }, 250);

  document.body.classList.add('is-loading');
}