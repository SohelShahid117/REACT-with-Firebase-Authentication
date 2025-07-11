import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

const OnAuthStateChange = () => {
  const [userrr, setUserrr] = useState(null);
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log(user.email);
        setUserrr(user);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("User is signed out");
      }
    });
  }, [auth]);
  return (
    <div>
      {/* user login ache kina seta dekar jonno OnAuthStateChange needed */}
      {/* <p>OnAuthStateChange</p> */}
      <div>
        {userrr ? (
          <p>
            Welcome!
            <span className="text-xl font-semibold ml-1">{userrr.email}</span>
          </p>
        ) : (
          <p>Login please</p>
        )}
      </div>
    </div>
  );
};

export default OnAuthStateChange;
