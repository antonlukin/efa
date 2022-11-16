import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Uniform from '../components/Uniform';

import AppContext from '../context';

const Join = function() {
  const context = useContext(AppContext);
  const enemies = context.enemies;

  const navigate = useNavigate();

  useEffect(() => {
    ['is-opened', 'is-locked'].forEach(cl => {
      document.body.classList.remove(`cursor-hover--${cl}`);
    });
  }, []);

  useEffect(() => {
    const storage = window.localStorage.getItem('enemy') || 0;

    if (storage <= enemies.length) {
      navigate('/fight/');
    }
  }, [navigate, enemies]);

  useEffect(() => {
    const storage = localStorage.getItem('share');

    if (storage !== null) {
      navigate('/kit/');
    }
  }, [navigate]);

  return (
    <Uniform />
  );
}

export default Join;