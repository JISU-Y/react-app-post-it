import React from "react";

const modal = ({ open, close, type, msg, todoList, removePostit }) => {
  //   alert(`${type} warning! ${msg}`);

  return (
    <div className={open ? "modal open" : "modal"}>
      {open ? (
        <section>
          <header>
            {type}
            <button className="close" onClick={close}>
              X
            </button>
          </header>
          <main>{msg}</main>
          <footer>
            <button className="close" onClick={() => removePostit(todoList.id)}>
              yes
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default modal;
