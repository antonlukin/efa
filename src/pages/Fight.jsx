import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Attack from '../components/Attack';
import Gradients from '../components/Gradients';

import AppContext from '../context';

const Fight = function() {
  const [current, setCurrent] = useState(null);
  const [opened, setOpened] = useState(false);

  const context = useContext(AppContext);
  const enemies = context.enemies;

  const navigate = useNavigate();
  const path = useParams();

  useEffect(() => {
    setOpened(false);

    const redirectEmpty = (enemy) => {
      if (enemy > enemies.length) {
        return navigate(`/join/`);
      }

      return navigate(`/fight/${enemy}`);
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

      if (id > enemy) {
        return navigate(`/fight/${enemy}`);
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
  }, [current, navigate, opened, enemies]);

  return (
    <>
      {current &&
        <>
          <Attack opened={opened} current={current} setCurrent={setCurrent} />
          <Gradients isPage={true} />
        </>
      }
    </>
  );
}

export default Fight;