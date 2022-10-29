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
        <img data-image="adult" src={DecorAdult} alt="Mesh adult" />
        <img data-image="child" src={DecorChild} alt="Mesh child" />
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