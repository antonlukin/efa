import { Fade } from 'react-awesome-reveal';

import './styles.scss';

const Lead = function({children, className}) {
  const classes = [className, 'lead']

  return (
    <div className={classes.join(' ')}>
      <Fade fraction={0.5} triggerOnce={true}>
        {children}
      </Fade>
    </div>
  );
}

export default Lead;