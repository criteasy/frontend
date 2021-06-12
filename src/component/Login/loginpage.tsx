import React, { useState } from "react";
import Modal from "../Login/modal";

export default function SignUp() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </Modal>
    </div>

    /* <div>
<button id="myBtn" onClick={handleClickOpen}>
  Open Modal
</button>
<div id="myModal" className={css(styles.modal)}>
  <div className={css(styles.modalcontent)}>
    <span className={css(styles.close)} onClick={handleClose}>
      &times;
    </span>
    <div className={css(styles.container)}></div>
  </div>
</div>
</div> */
  );
}
