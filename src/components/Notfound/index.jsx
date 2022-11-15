import Upper from '../Upper';

import UniformNotfound from '../../images/uniforms/notfound.png';

import './styles.scss';

const Notfound = function() {
  return (
    <div className="notfound">
      <header className="notfound-header">
        <Upper />
      </header>

      <section className="notfound-tshirt">
        <figure>
          <img src={UniformNotfound} alt="Uniform backside" />
        </figure>
      </section>
    </div>
  );
}

export default Notfound;