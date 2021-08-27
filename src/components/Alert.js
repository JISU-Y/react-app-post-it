import React from "react";

const alert = ({ type, msg }) => {
  //   alert(`${type} warning! ${msg}`);

  return (
    <div className="alert">
      {/* modal alert */}
      <h2>
        {type} warning! {msg}
      </h2>
    </div>
  );
};

export default alert;
