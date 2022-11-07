import { useNavigate } from 'react-router-dom';

import Upper from '../Upper';
import Button from '../Button';
import transfer from '../../utils/transfer';

import UniformNotfound from '../../images/uniforms/notfound.png';

import './styles.scss';

const Notfound = function() {
  const navigate = useNavigate();

  const transferPage = () => {
    transfer(() => navigate('/'));
  }

  return (
    <div className="notfound">
      <header className="notfound-header">
        <Upper label={true} />
      </header>

      <section className="notfound-tshirt">
        <figure>
          <img src={UniformNotfound} alt="Uniform backside" />
        </figure>

        <Button onClick={transferPage}>Back</Button>
      </section>
    </div>
  );
}

export default Notfound;