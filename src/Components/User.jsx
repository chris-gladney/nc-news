import { useEffect, useState } from "react";

function User({ user }) {
  const [viewWholeProfile, setViewWholeProfile] = useState(false);

  useEffect(() => {}, [viewWholeProfile]);

  if (!viewWholeProfile) {
    return (
      <>
        <img
          src={user.avatar_url}
          className="unclicked-profile"
          onClick={() => {
            setViewWholeProfile(true);
          }}
        />
      </>
    );
  } else {
    return (
      <div className="clicked-profile">
        <img
          src={user.avatar_url}
          onClick={() => {
            setViewWholeProfile(false);
          }}
        />
        <h3>Hello <br /> {user.name}!</h3>
        <p>{user.username}</p>
      </div>
    );
  }
}

export default User;
