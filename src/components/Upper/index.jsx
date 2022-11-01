import { useNavigate } from 'react-router-dom';
import { ReactComponent as ImageLogo } from '../../images/logo.svg';

import './styles.scss';

const Upper = function({label}) {
  const navigate = useNavigate();

  const goHome = (e) => {
    e.preventDefault();

    document.body.classList.add('is-loading');

    setTimeout(() => {
      document.body.classList.remove('is-loading');
      navigate('/');
    }, 500);
  }

  return (
    <div className="upper">
      <a className="upper-logo" href="/" onClick={goHome}>
          {label &&
            <span>EFA Championship by</span>
          }
          <ImageLogo />
      </a>

      <div className="upper-lang">
        <button href="/">Eng</button>
        <span></span>
        <button href="/">Esp</button>
      </div>
    </div>
  );
}

export default Upper;