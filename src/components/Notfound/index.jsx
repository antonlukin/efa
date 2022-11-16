import { useTranslation } from 'react-i18next';

import Upper from '../Upper';

import './styles.scss';

const Notfound = function() {
  const { i18n } = useTranslation();

  return (
    <div className="notfound">
      <header className="notfound-header">
        <Upper />
      </header>

      <section className="notfound-tshirt">
        <figure>
          <img data-image="rotation" src={require(`../../images/decors/notfound-${i18n.language}.png`)} alt="" />
        </figure>
      </section>
    </div>
  );
}

export default Notfound;