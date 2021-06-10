// Functional statless component
const Navbar = ({ countersCount, activeCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0">
        <strong>Counter</strong>Anywhere{' '}
        <span className="badge badge-pill badge-primary">
          {countersCount}/{activeCount}
        </span>
      </span>
    </nav>
  );
};
export default Navbar;
