import { Link } from "react-router-dom";

function Header({ setUser }) {
  return (
    <>
      <Link
        onClick={() => {
          setUser({});
        }}
        to="/"
      >
        <h1>NORTHCODERS NEWS</h1>
      </Link>
    </>
  );
}

export default Header;
