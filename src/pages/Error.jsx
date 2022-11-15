import { useEffect } from 'react';

import Notfound from '../components/Notfound';
import Gradients from '../components/Gradients';

const Fight = function() {
  useEffect(() => {
    ['is-opened', 'is-locked'].forEach(cl => {
      document.body.classList.remove(`cursor-hover--${cl}`);
    });
  }, []);

  return (
    <>
      <Notfound />
      <Gradients isPage={true} />
    </>
  );
}

export default Fight;