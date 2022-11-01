import Upper from '../Upper';

import DecorAdult from '../../images/decors/adult.png';
import DecorChild from '../../images/decors/child.png';

import './styles.scss';

const Header = function() {
  return (
    <div className="header">
      <div className="header-upper">
        <Upper />
      </div>

      <h1 className="header-title">
        <strong>EFA Championship </strong>
        <span>(Championship of Eco-Friendly Actions)</span>
      </h1>

      <div className="header-mesh">
        <img
          src={DecorAdult}
          alt="Mesh adult"
          width="887"
          height="484"
          data-image="adult"
          onLoad={(e) => e.target.dataset.loaded = 'loaded'}
        />

        <img
          src={DecorChild}
          alt="Mesh child"
          width="490"
          height="383"
          data-image="child"
          onLoad={(e) => e.target.dataset.loaded = 'loaded'}
        />
      </div>

      <div className="header-separator">
        <span>Fight for the future</span>
        <span>Fight for the future</span>
        <span>Fight for the future</span>
        <span>Fight for the future</span>
        <span>Fight for the future</span>
      </div>
    </div>
  );
}

export default Header;