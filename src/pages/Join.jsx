import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Uniform from '../components/Uniform';

import AppContext from '../context';

const Join = function() {
  const enemies = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    const storage = window.localStorage.getItem('enemy') || 0;

    if (storage <= enemies.length) {
      navigate('/fight/');
    }
  }, [navigate, enemies]);

  return (
    <Uniform />
  );
}

export default Join;