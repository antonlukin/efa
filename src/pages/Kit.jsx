import { useEffect } from 'react';

import Gradients from '../components/Gradients';
import Final from '../components/Final';

const Kit = function() {
  useEffect(() => {
    ['is-opened', 'is-locked'].forEach(cl => {
      document.body.classList.remove(`cursor-hover--${cl}`);
    });
  }, []);

  return (
    <>
      <Final />
      <Gradients isPage={true} />
    </>
  );
}

export default Kit;