import Fade from '@successtar/react-reveal/Fade';

import './styles.scss';

const Lead = function({children, className}) {
  const classes = [className, 'lead']

  return (
    <div className={classes.join(' ')}>
      <Fade>
        {children}
      </Fade>
    </div>
  );
}

export default Lead;