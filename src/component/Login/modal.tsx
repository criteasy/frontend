import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { StyleSheet, css } from "aphrodite/no-important";

const Modal = (props: any) => {
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className={css(styles.modal)} onClick={props.onClose}>
        <div
          className={css(styles.modalcontent)}
          onClick={(e) => e.stopPropagation()}
        >
          <span onClick={props.onClose} className={css(styles.close)}>
            &times;
          </span>
          {/*
          <div className={css(styles.container)}>
            
            <div className={css(styles.box, styles.boxtwo)}>
              <span className={css(styles.account)}>Login with Email</span>
            </div>
            
            <div className={css(styles.box, styles.boxthree)}>
              <input
                type="text"
                className={css(styles.inputbox)}
                placeholder="Username"
              />
            </div>
            <div className={css(styles.box, styles.boxfour)}>
              <input
                type="password"
                className={css(styles.inputbox)}
                placeholder="Password"
              />
            </div>
            <div className={css(styles.box, styles.boxsix, styles.account)}>
              <button className={css(styles.log)}>Login</button>
              <span className={css(styles.labelspan)}>
                Create an account / Forgot password ?
              </span>
            </div>
            <div className={css(styles.dividerbox, styles.boxfive)}>
              <hr className={css(styles.left)} />
              <span>Or</span>
              <hr className={css(styles.right)} />
            </div>
          <div className={css(styles.box, styles.flexbox, styles.account)}>
            Sign in with
            <img className={css(styles.sign)} src="/asset/Google.png" />
          </div>*/}

          <div className={css(styles.flexcontainer)}>
            {/*<div className={css(styles.row)}>
             <span className={css(styles.flexitem)}>2</span>*/}
            <div className={css(styles.box, styles.flexbox, styles.account)}>
              Sign in with
              <img className={css(styles.sign)} src="/asset/Google.png" />
            </div>

            {/*</div>*/}
          </div>

          {/*
            <div className={css(styles.box, styles.flexbox, styles.account)}>
              Sign in with
              <img className={css(styles.sign)} src="/asset/facebook.png" />
            </div>
          </div>*/}
        </div>
      </div>
    </CSSTransition>,

    document.body
  );
};

export default Modal;

const mobileView = "@media only screen and (max-width: 830px)";

const styles = StyleSheet.create({
  modalcontent: {
    backgroundColor: "#fefefe",
    margin: "auto",
    padding: "20px",
    border: "1px solid #888",
    width: "30%",
    height: "40%",
    borderRadius: "20px",
    // alignItems: "center",
  },

  close: {
    color: "#aaaaaa",
    float: "right",
    fontWeight: "bold",
  },

  container: {
    display: "grid",
    gridTemplate: "repeat(3, 150fr) / repeat(2, 150fr)",
    gap: "10px",
  },
  modal: {
    position: "fixed",
    left: "0",
    top: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "unset",
    transition: "all 0.3s ease-in-out",
  },

  box: {
    height: "30px",
    border: "1px",
    borderRadius: "40px",
  },

  dividerbox: {
    height: "15px",

    borderRadius: "40px",
  },

  boxtwo: {
    gridColumn: "1 / 3",
    textAlign: "left",
    height: "auto",
  },
  boxthree: {
    gridColumn: "1 / 3",
    textAlign: "center",
  },
  boxfour: {
    gridColumn: "1 / 3",
    textAlign: "center",
  },
  boxfive: {
    gridColumn: "1 / 3",
    textAlign: "center",
  },
  boxsix: {
    gridColumn: "1 / 3",

    fontSize: "0.9rem",
  },
  inputbox: {
    height: "25px",
    borderRadius: "25px",
    width: "100%",
    border: "1px solid gray",
    paddingInlineStart: "20px",
  },
  log: {
    width: "40%",
    height: "25px",
    borderRadius: "25px",
    background: "#00327c",
    color: "aliceblue",
    float: "left",
  },
  /*
  input:focus::placeholder {
    color: transparent;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }*/
  img: {
    width: "50%",
    height: "fit-content",
  },

  left: {
    width: "40%",
    float: "left",
    color: "#000",
    backgroundColor: "black",
  },

  right: {
    width: "40%",
    float: "right",
    color: "#000",
    backgroundColor: "black",
  },

  flexbox: {
    display: "flex",
    width: "50%",
    height: "20%",
    background: "white",
    margin: "1px",
    justifyContent: "space-evenly",
    border: "1px solid gray",
    boxShadow: "5px 5px 5px grey inset",
    justifyItem: "center",
    //alignItems: "center",
    alignSelf: "center",
  },
  sign: {
    width: "20px",
    height: "20px",
  },

  account: {
    minHeight: "30px",
    display: "inline-flex",
    alignItems: "center",
  },

  labelspan: {
    alignSelf: "flex-end",
    margin: "auto" /* optional */,
  },

  flexcontainer: {
    height: "80%",
    width: "100%",
    padding: "0",
    margin: "0",
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
