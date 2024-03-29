import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p> }
      <WrappedComponent {...props} />
    </div>
  );
};

const withAuthWarning = (WrappedComponent) => {
  return (props) => (
    <div>
    { props.isAuthenticated ? (
        <WrappedComponent {...props}/>
      ) : (
        <p>Please log in to view the info!</p>
      )
    }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details." />, document.getElementById("root"));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details." />, document.getElementById("root"));