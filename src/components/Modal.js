import React from "react";

const modal = ({ modalType, close, todoList, removePostit }) => {
  return (
    <div className={modalType.open ? "modal open" : "modal"} onClick={close}>
      {modalType.open ? (
        <section>
          <header>
            {modalType.type}
            <button className="close" onClick={close}>
              X
            </button>
          </header>
          <main>{modalType.msg}</main>
          <footer>
            <button
              className="close"
              onClick={() => {
                removePostit(todoList.id);
              }}
            >
              yes
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default modal;
