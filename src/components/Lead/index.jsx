import './styles.scss';

const Lead = function({children, className}) {
  const classes = [className, 'lead'];

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  );
}

export default Lead;