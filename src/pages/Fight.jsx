import { useState, useEffect } from 'react';

import Attack from '../components/Attack';
import Gradients from '../components/Gradients';
import Uniform from '../components/Uniform';

import AttackData from '../data/attack';

const Fight = function() {
  const [current, setCurrent] = useState(1);
  const [uniform, setUniform] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('enemy');

    if (saved !== null) {
      setCurrent(parseInt(saved));

      if (saved > AttackData.length) {
        setUniform(true);
      }
    }
  }, [current]);

  return (
    <>
      {uniform
        ? <Uniform />
        : <Attack current={current} setCurrent={setCurrent} />
      }

      <Gradients isPage={true} />
    </>
  );
}

export default Fight;