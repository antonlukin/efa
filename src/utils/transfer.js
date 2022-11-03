export default function transfer(navigate, path) {
  setTimeout(() => {
    navigate(path);

    setTimeout(() => {
      document.body.classList.remove('is-loading');
    }, 250);
  }, 250);

  document.body.classList.add('is-loading');
}