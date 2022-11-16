import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Attack from '../components/Attack';
import Gradients from '../components/Gradients';

import AppContext from '../context';

const Fight = function() {
  const [current, setCurrent] = useState(null);
  const [opened, setOpened] = useState(false);
  const [skipped, setSkipped] = useState(false);

  const context = useContext(AppContext);
  const enemies = context.enemies;

  const navigate = useNavigate();
  const path = useParams();

  useEffect(() => {
    ['is-opened', 'is-locked'].forEach(cl => {
      document.body.classList.remove(`cursor-hover--${cl}`);
    });
  }, []);

  useEffect(() => {
    setOpened(false);

    const redirectEmpty = (enemy) => {
      if (enemy > enemies.length) {
        return navigate('/kit/');
      }

      return navigate(`/fight/${enemy}/`);
    }

    const updateEnemy = () => {
      const storage = window.localStorage.getItem('enemy');

      let enemy = 1;

      if (storage !== null) {
        enemy = parseInt(storage);
      }

      if (!/\d+/.test(path.id)) {
        return redirectEmpty(enemy);
      }

      const id = parseInt(path.id);

      if (id < 1) {
        return redirectEmpty(enemy);
      }

      if (id > enemy) {
        return navigate(`/fight/${enemy}/`);
      }

      if (id < enemy) {
        setOpened(true);
        enemy = id;
      }

      if (enemy > enemies.length) {
        return navigate(`/join/`);
      }

      if (enemy <= enemies.length) {
        setCurrent(enemy);
      }
    }

    updateEnemy();
  }, [path, navigate, enemies]);

  useEffect(() => {
    const updateUrl = () => {
      document.body.classList.remove('is-loading');

      if (current > enemies.length) {
        return navigate(`/join/`);
      }

      return navigate(`/fight/${current}/`);
    }

    if (current) {
      const storage = window.localStorage.getItem('enemy') || 0;

      if (current > parseInt(storage)) {
        window.localStorage.setItem('enemy', current);
      }

      updateUrl();
    }

    const storage = localStorage.getItem('share');

    if (storage !== null) {
      setSkipped(true);
    }
  }, [current, navigate, opened, enemies]);

  return (
    <>
      {current &&
        <>
          <Attack skipped={skipped} opened={opened} current={current} setCurrent={setCurrent} />
          <Gradients isPage={true} />
        </>
      }
    </>
  );
}

export default Fight;