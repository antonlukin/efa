import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Upper from '../Upper';
import Button from '../Button';

import DecorsUniform from '../../images/decors/uniform.png';

import transfer from '../../utils/transfer';

import './styles.scss';

const Uniform = function() {
  const [tshirt, setTshirt] = useState(null);
  const [label, setLabel] = useState({name: '', number: ''});

  const canvas = useRef();

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeName = (e) => {
    if (e.target.validity.valid) {
      setLabel({...label, name: e.target.value});
    }
  }

  const changeNumber = (e) => {
    if (e.target.validity.valid) {
      setLabel({...label, number: e.target.value});
    }
  }

  const saveUniform = (event) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...label, lang: i18n.language}),
    }

    const showError = (error) => {
      console.error(error);
    }

    const uploadResults = async () => {
      event.target.dataset.loading = true;

      try {
        const answer = await fetch('/share/upload/', options);
        const result = await answer.json();

        delete event.target.dataset.loading;

        if (!result.success) {
          return showError(result.data);
        }

        localStorage.setItem('share', JSON.stringify(result.data));

        transfer(() => navigate('/kit/'));
      } catch(error) {
        showError(error);
      }
    }

    uploadResults();
  }

  useEffect(() => {
    const image = new Image();
    image.src = DecorsUniform;

    image.addEventListener('load', () => {
      setTshirt(image);
    });
  }, []);

  useEffect(() => {
    const writeNumber = (ctx, size, number) => {
      const position = {};
      position.x = size / 2 - size / 12;
      position.y = size / 2 + size / 6;

      ctx.font = size / 3 + "px Damn";
      const text = number.toUpperCase();

      ctx.fillText(text, position.x, position.y, position.x);
    }

    const writeName = (ctx, size, number) => {
      const position = {};
      position.x = size / 2 - size / 12;
      position.y = size / 2 - size / 6;

      let fontsize = 50;
      const text = number.toUpperCase();

      do {
        fontsize--;
        ctx.font = fontsize + "px Damn";
      } while (ctx.measureText(text).width > position.x);

      ctx.fillText(text, position.x, position.y, position.x);
    }

    const drawCanvas = () => {
      const parent = canvas.current.parentNode;
      const offset = Math.min(parent.offsetWidth, parent.offsetHeight / 1.125);

      const width = offset / 1080 * 870;
      const height = offset;

      canvas.current.width = width * window.devicePixelRatio;
      canvas.current.height = height * window.devicePixelRatio;
      canvas.current.style.width = width + "px";
      canvas.current.style.height = height + "px";

      const ctx = canvas.current.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#000';

      ctx.drawImage(tshirt, 0, 0, canvas.current.width, canvas.current.height);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      writeNumber(ctx, width, label.number);
      writeName(ctx, width, label.name);
    }


    if (tshirt) {
      drawCanvas();

      // Redraw canvas on resize
      window.addEventListener('resize', drawCanvas);
    }

    return () => {
      window.removeEventListener('resize', drawCanvas);
    }
  }, [label, tshirt]);

  return (
    <div className="uniform">
      <header className="uniform-header">
        <Upper />
      </header>

      <div className="uniform-screen">
        <h2>{t(`uniform.welcome`)}</h2>

        <figure>
          <canvas ref={canvas} />

          {!tshirt &&
            <span></span>
          }
        </figure>

        <fieldset>
          <p>
            <input
              type="text"
              placeholder={t(`uniform.name`)}
              value={label.name}
              pattern=".{1,14}"
              onChange={changeName}
            />
          </p>

          <p>
            <input
              type="text"
              placeholder={t(`uniform.number`)}
              value={label.number}
              onChange={changeNumber}
              pattern="[0-9]{1,2}"
            />
          </p>

          <Button
            disabled={label.name && label.number ? false : true}
            onClick={saveUniform}
          >
            {t(`uniform.get`)}
          </Button>
        </fieldset>
      </div>
    </div>
  );
}

export default Uniform;