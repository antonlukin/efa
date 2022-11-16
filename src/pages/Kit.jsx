import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Gradients from '../components/Gradients';
import Final from '../components/Final';

const Kit = function() {
  const [share, setShare] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    ['is-opened', 'is-locked'].forEach(cl => {
      document.body.classList.remove(`cursor-hover--${cl}`);
    });
  }, []);

  useEffect(() => {
    const storage = localStorage.getItem('share');

    const getShare = () => {
      try {
        const data = JSON.parse(storage);

        if (data.story && data.work) {
          return setShare(data);
        }
      } catch(e) {
      }

      navigate('/');
    }

    getShare();
  }, [navigate]);

  return (
    <>
      <Final share={share} />
      <Gradients isPage={true} />
    </>
  );
}

export default Kit;