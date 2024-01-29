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
        <h1 className="title">NORTHCODERS NEWS</h1>
      </Link>
    </>
  );
}

export default Header;
