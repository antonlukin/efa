import { useMemo, useContext } from 'react';
import useFollowCursor from '../../hooks/useFollowCursor';

import AppContext from '../../context';

import './styles.scss';

const Cursor = function() {
  const { x, y } = useFollowCursor();
  const context = useContext(AppContext);

  const styles = useMemo(() => ({
    top: y,
    left: x,
  }), [x, y]);

  const classes = ['cursor'];

  if (context.cursor) {
    classes.push = [context.cursor];
  }

  return (
    <>
      {context.cursor &&
        <div className={classes.join(' ')} style={styles}>
          <p>Open</p>
        </div>
      }
    </>
  );
}

export default Cursor;