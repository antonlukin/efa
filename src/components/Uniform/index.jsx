import { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Upper from '../Upper';
import Button from '../Button';

import UniformFront from '../../images/uniforms/front.png';
import UniformBack from '../../images/uniforms/back.png';

import AppContext from '../../context';

import './styles.scss';

const Uniform = function() {
  const [frontside, setFrontside] = useState(null);
  const [backside, setBackside] = useState(null);

  const [label, setLabel] = useState({name: '', number: ''});
  const [reverted, setReverted] = useState(false);

  const canvasFrontside = useRef();
  const canvasBackside = useRef();
  const canvasParent = useRef();

  const context = useContext(AppContext);
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

  const saveUniform = (e) => {
    e.preventDefault();

    context.uniform = canvasBackside.current.toDataURL("image/png");

    navigate('/kit/');

    // const link = document.createElement('a');
    // document.body.appendChild(link);

    // link.setAttribute('download', 'T-Shirt.png');
    // link.setAttribute('href', canvasFrontside.current.toDataURL("image/png"));
    // link.click();
  }

  useEffect(() => {
    const imageFront = new Image();
    imageFront.src = UniformFront;

    const imageBack = new Image();
    imageBack.src = UniformBack;

    imageFront.addEventListener('load', () => {
      setFrontside(imageFront);
    })

    imageBack.addEventListener('load', () => {
      setBackside(imageBack);
    })
  }, []);

  useEffect(() => {
    const writeNumber = (ctx, size, number) => {
      const position = {};
      position.x = size / 2 - size / 12;
      position.y = size / 2 + size / 15;

      ctx.font = size / 3 + "px Damn";
      const text = number.toUpperCase();

      ctx.fillText(text, position.x, position.y, position.x);
    }

    const writeFront = (ctx, size, number) => {
      const position = {};
      position.x = size / 1.625;
      position.y = size / 3;

      ctx.font = size / 6 + "px Damn";
      const text = number.toUpperCase();

      ctx.fillText(text, position.x, position.y, position.x);
    }

    const writeName = (ctx, size, number) => {
      const position = {};
      position.x = size / 2 - size / 12;
      position.y = size / 2 - size / 4.25;

      let fontsize = 50;
      const text = number.toUpperCase();

      do {
        fontsize--;
        ctx.font = fontsize + "px Damn";
      } while (ctx.measureText(text).width > position.x);

      ctx.fillText(text, position.x, position.y, position.x);
    }

    const initCanvas = (canvas, image, size) => {
      canvas.current.width = size * window.devicePixelRatio;
      canvas.current.height = size * window.devicePixelRatio;
      canvas.current.style.width = size + "px";
      canvas.current.style.height = size + "px";

      const ctx = canvas.current.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#000';

      ctx.drawImage(image, 0, 0, canvas.current.width, canvas.current.height);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      return ctx;
    }

    const drawBackCanvas = (size) => {
      const ctx = initCanvas(canvasBackside, backside, size);

      writeNumber(ctx, size, label.number);
      writeName(ctx, size, label.name);
    }

    const drawFrontCanvas = (size) => {
      const ctx = initCanvas(canvasFrontside, frontside, size);

      writeFront(ctx, size, label.number);
    }

    const drawCanvas = () => {
      const parent = canvasParent.current;
      const offset = Math.min(parent.offsetWidth, parent.offsetHeight);

      const size = offset / 1.125;

      if (reverted) {
        return drawFrontCanvas(size);
      }

      return drawBackCanvas(size);
    }

    if (frontside && backside) {
      drawCanvas();

      // Redraw canvas on resize
      window.addEventListener('resize', drawCanvas);
    }

    return () => {
      window.removeEventListener('resize', drawCanvas);
    }
  }, [label, frontside, backside, reverted]);

  return (
    <div className="uniform">
      <header className="uniform-header">
        <Upper label={true} />
      </header>

      <div className="uniform-screen">
        <h2>Welcome to the eco-team!</h2>

        <figure>
          <figcaption ref={canvasParent} data-side={reverted ? 'front' : 'back'}>
            <canvas ref={canvasFrontside} />
            <canvas ref={canvasBackside} />
          </figcaption>

          <nav>
            <button
              onClick={() => setReverted(true)}
              disabled={reverted ? true : false}
              >
              T-Shirt frontside
            </button>
            <button
              onClick={() => setReverted(false)}
              disabled={reverted ? false : true}
              >
              T-Shirt backside
            </button>
          </nav>
        </figure>

        <fieldset>
          <p>
            <input
              type="text"
              placeholder="Your name"
              value={label.name}
              pattern=".{1,14}"
              onChange={changeName}
            />
          </p>

          <p>
            <input
              type="text"
              placeholder="Your number"
              value={label.number}
              onChange={changeNumber}
              pattern="[0-9]{1,2}"
            />
          </p>

          <Button
            disabled={label.name && label.number ? false : true}
            onClick={saveUniform}
          >
            Get the kit!
          </Button>
        </fieldset>
      </div>
    </div>
  );
}

export default Uniform;