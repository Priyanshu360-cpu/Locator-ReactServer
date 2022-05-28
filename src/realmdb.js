import React from 'react';
import * as Realm from "realm-web";
const app = new Realm.App({ id: "" });

function UserDetail({ user }) {
    return (
      <div>
        <h1>Logged in with anonymous id: {user.id}</h1>
      </div>
    );
  }

  function Login({ setUser }) {
    const loginAnonymous = async () => {
      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user);
    };
    return <button onClick={loginAnonymous}>Log In</button>;
  }
  const App = () => {
    const [user, setUser] = React.useState(app.currentUser);
    return (
      <div className="App">
        <div className="App-header">
          {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
        </div>
      </div>
    );
  };
  export default App;
  