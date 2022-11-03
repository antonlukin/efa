import './styles.scss';

const Gradients = function({isPage}) {
  const classes = ['gradients'];

  if (isPage) {
    classes.push('is-page');
  }

  return (
    <div className={classes.join(' ')}>
      {!isPage &&
        <>
          <div className="gradient-1"></div>
          <div className="gradient-2"></div>
          <div className="gradient-3"></div>
          <div className="gradient-4"></div>
          <div className="gradient-5"></div>
          <div className="gradient-6"></div>
        </>
      }

      {isPage &&
        <>
          <div className="gradient-7"></div>
          <div className="gradient-8"></div>
          <div className="gradient-9"></div>
        </>
      }
    </div>
  );
}

export default Gradients;