import React from "react";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite/no-important";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Click Here
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To provide feedback, please enter your details here.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="ename"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="outlined-multiline-static"
            label="Feedback"
            multiline
            rows={4}
            type="feedback"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <div id="root"></div>
      </body>
    </div>
  );
}

export const Footer = () => {
  return (
    <React.Fragment>
      <div className={css(styles.critfooter)}>
        <Link className={css(styles.critLogo)} to="/">
          <img
            className={css(styles.critImg)}
            src="/asset/criteasylogo.png"
            alt=""
          />
        </Link>

        <table>
          <tr>
            <td>
              <div className={css(styles.head)}>COMPANY</div>
            </td>

            <td>
              <div className={css(styles.headinsta)}>CONNECT US AT</div>
            </td>

            <td>
              <div className={css(styles.headinsta)}>YOUR FEEDBACK MATTERS</div>
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              <div className={css(styles.subject)}>
                <p>About US</p>
                <p>Legal</p>
                <p>Privacy Center</p>
                <p>
                  <a
                    className={css(styles.sublink)}
                    href="https://www.termsfeed.com/live/25f13767-afbb-4af5-8c6d-ad58177c4b52"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>Cookies</p>
              </div>{" "}
            </td>

            <td>
              <div className={css(styles.headinsta)}>
                <Link to="/">
                  <img
                    className={css(styles.instaImg)}
                    src="/asset/insta.png"
                    alt=""
                  />
                </Link>
              </div>
            </td>

            <td>
              <div className={css(styles.headinsta)}>
                <p>
                  <FormDialog />
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
};

const mobileView = "@media only screen and (max-width: 830px)";

const styles = StyleSheet.create({
  critfooter: {
    height: "400px",
    display: "block",
    backgroundColor: "rgb(17, 17, 17)",
  },

  head: {
    fontFamily: "sans serif",
    fontSize: "18px",
    paddingLeft: "300px",
    paddingTop: "20 px",
    //fontWeight: 500,
    color: "grey",
    //textDecoration:"underline",
  },

  subject: {
    fontFamily: "sans serif",
    fontSize: "18px",
    paddingLeft: "300px",
    paddingTop: "40 px",
    //fontWeight: 500,
    color: "white",
    //textDecoration:"underline",
  },

  sublink: {
    textDecoration: "none",
    color: "white",
  },

  instaImg: {
    height: "60px",
    [mobileView]: {
      height: "18px",
    },
  },

  instacli: {
    height: "120px",
    paddingLeft: "50px",
    [mobileView]: {
      height: "18px",
    },
  },

  headinsta: {
    display: "flex",
    fontFamily: "sans serif",
    fontSize: "18px",
    paddingLeft: "200px",
    //paddingTop: "0 px",
    //fontWeight: 500,
    color: "grey",
    //textDecoration:"underline",
  },

  critLogo: {
    display: "flex",
    margin: "0 10px",
    paddingLeft: "40px",
    paddingTop: "30px",

    [mobileView]: {
      boxSizing: "border-box",
      margin: "0 0",
      padding: "0 !important",
      width: "68px",
    },
  },

  critImg: {
    height: "40px",
    [mobileView]: {
      height: "18px",
    },
  },
});
