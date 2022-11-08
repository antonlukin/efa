import './styles.scss';

const Grid = function() {
  return (
    <div className="grid">
      <div className="grid-uniform">
        <figure>
          <img src="" alt="" />
          <figcaption>Download your uniform</figcaption>
        </figure>
      </div>

      <div className="grid-stories">
        <figure>
          <figcaption>Share your unifrom to Stories</figcaption>
        </figure>
      </div>

      <div className="grid-learn">
        <figure>
          <figcaption>Learn more about Tiger Soda</figcaption>
        </figure>
      </div>

      <div className="grid-souces">
        <figure>
          <figcaption>Check the project’s sources</figcaption>
        </figure>
      </div>

      <div className="grid-guide">
        <figure>
          <figcaption>Download the eco-guide</figcaption>
        </figure>
      </div>

      <div className="grid-standings">
        <figure>
          <figcaption>See yourself in the standings</figcaption>
        </figure>
      </div>

      <div className="grid-share">
        <figure>
          <figcaption>Share the project</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Grid;