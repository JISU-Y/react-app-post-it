import React from "react";

const modal = ({
  modalType,
  close,
  todoList,
  removePostit,
  handleEditDone,
}) => {
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
                if (modalType.type === "remove") {
                  removePostit(todoList.id);
                } else if (modalType.type === "editDone") {
                  handleEditDone();
                }
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
