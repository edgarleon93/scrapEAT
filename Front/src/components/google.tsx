import { useEffect, useState } from "react";

import jwt_decode from "jwt-decode";

interface User {
  name?: string;
  picture?: string;
  [key: string]: any;
}

function GoogleAuth() {
  const [user, setUser] = useState<User>({});
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  let handleCallbackResponse = (response: any) => {
    console.log(response.credential);
    let userObject: User = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv")!.hidden = true;
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: googleClientId,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv")!, {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  let handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUser({});
    document.getElementById("signInDiv")!.hidden = false;
  };

  return (
    <div className="App">
      <div id="signInDiv"></div>

      {Object.keys(user).length !== 0 && (
        <button onClick={handleLogout}>Sign Out</button>
      )}

      {user && (
        <div>
          <h1>{user.name}</h1>
          <img src={user.picture} alt="" />
        </div>
      )}
    </div>
  );
}

export default GoogleAuth;
