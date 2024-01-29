import { useEffect, useState } from "react";
import { fetchAllUsers } from "../utils/utils";
import { Link, Navigate } from "react-router-dom";

function Login({ setUser }) {
  const [isLoading, setIsLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [enteredUser, setEnteredUser] = useState("");
  const [canLogin, setCanLogin] = useState(false);

  useEffect(() => {
    fetchAllUsers().then((data) => {
      setAllUsers(data);
      setIsLoading(false);
    });
  }, [canLogin]);

  const handleOnChange = (event) => {
    setEnteredUser(event.target.value);
  };

  const handleLoginRequest = () => {
    for (const user of allUsers) {
      if (enteredUser === user.username) {
        setUser(user);
        setCanLogin(true);
        break;
      } else {
        setCanLogin(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="isLoading">
        <h2>Page is Loading</h2>
      </div>
    );
  } else if (canLogin) {
    return <Navigate to="/articles" />;
  } else {
    return (
      <>
        <div className="login-form">
          <h2>Login</h2>
          <br />
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            onChange={(event) => {
              handleOnChange(event);
            }}
          ></input>
          <br />
          {canLogin ? (
            <Link to="/articles">
              <button
                onClick={() => {
                  handleLoginRequest();
                }}
              >
                Login
              </button>
            </Link>
          ) : (
            <Link>
              <button
                onClick={() => {
                  handleLoginRequest();
                }}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </>
    );
  }
}

export default Login;
