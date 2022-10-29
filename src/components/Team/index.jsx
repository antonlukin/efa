import Lead from '../../components/Lead';

import './styles.scss';

const Team = function() {
  return (
    <section className="team">
      <Lead className="team-start">
        <h2>Eco-team</h2>
        <p>
          This is a team of players <a href="/">who care</a>.
          They are aware of the environmental problems,
          know how to fight them and ready to take action.
        </p>

        <p>
          Study all the opponent's players to get
          an <a href="/">eco-team</a> uniform with your last name and favorite number.
        </p>
      </Lead>

      <h3 className="team-amount">
        <strong>1246</strong> people already joined the Eco-team
      </h3>

      <table className="team-results">
        <thead>
          <tr>
            <td>Line</td>
            <td>Name</td>
            <td>Number</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1.</td>
            <td>Ronaldo</td>
            <td>17</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Ivan</td>
            <td>24</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>George</td>
            <td>7</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>George</td>
            <td>7</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>George</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Team;