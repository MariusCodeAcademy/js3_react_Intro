// Functional statless component

const handleInvert = () => {
  console.log('handle');
};

const Navbar = (props) => {
  const myClasses = 'navbar navbar-light bg-light';
  return (
    <nav className={props.navColors}>
      {/* <h2 style={{ fontSize: '1em' }}>Blue</h2> */}
      <span className="navbar-brand mb-0">
        <strong>Counter</strong>Anywhere{' '}
        <span className="badge badge-pill badge-primary">
          {props.countersCount}/{props.activeCount}
        </span>
      </span>
      <button onClick={handleInvert} className="btn btn-outline-info">
        Inverterreris
      </button>
    </nav>
  );
};
export default Navbar;

// -1 panaudoti app state esanti   light: 'bg-light navbar-light',    <nav > tage

// 0.01 lvl mygtukas yra navbar.js atspausdina kazka konsoleje

// 0.1 lvl mygtukas yra navbar.js padaro nav tamsu, texta sviesu

// 1lvl mygtukas yra App.js padaro nav tamsu, texta sviesu

// 2lvl mygtukas toglina navbara is sviesaus i tamsu

// 10lvl mygtukas yra counters.js componente ir atlieka 2lvl veiksksma
