import React from "react";
import "./styles.css"; 

function App() {
  const user = { regs: 1, name: "Dinesh" };
  return <ParentComponent user={user} />;
}

function ParentComponent(props) {
  return <ChildComponent user={props.user} />;
}

function ChildComponent(props) {
  return (
    <div className="container">
      <UserInfo user={props.user} />
      <GrandchildComponent user={props.user} />
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className="user-info">
      <h2>User Info:</h2>
      <p>Regs: {props.user.regs}</p>
      <p>Name: {props.user.name}</p>
    </div>
  );
}

function GrandchildComponent(props) {
  return <UserActions user={props.user} />;
}

function UserActions(props) {
  return (
    <div className="user-actions">
      <h2>User Actions:</h2>
      <button onClick={() => handleLogout(props.user)}>Logout</button>
    </div>
  );
}

function handleLogout(user) {
  console.log(`Logging out user: ${user.name}`);
}

export default App;
