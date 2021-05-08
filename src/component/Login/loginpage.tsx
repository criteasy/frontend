import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "50px 50px 50px 50px",
  },

  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 35,
    //borderRadius: "5em"
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Login / Create an account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login with Email
            </Typography>
            <form className={classes.form} noValidate>
              <Grid
                container
                spacing={2}
                alignContent="center"
                textAlign="justify"
              >
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="uname"
                    label="Username"
                    name="uname"
                    autoComplete="uname"
                    classes={{
                      root: classes.root,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    style={{
                      borderRadius: 35,
                      width: 270,
                      height: 50,
                      backgroundColor: "#13327C",
                      padding: "18px 36px",
                      fontSize: "18px",
                    }}
                    variant="contained"
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>&nbsp; </span>
                  </div>

                  <Link href="#" variant="body2">
                    &nbsp;&nbsp;&nbsp;&nbsp;Create an account / Forgot Password
                  </Link>
                </Grid>
                <Grid spacing={10} item xs={12} sm={6}>
                  <Divider variant="middle" />
                </Grid>
                <Grid spacing={10} item xs={12} sm={6}>
                  <Divider variant="middle" />
                </Grid>

                <Grid spacing={10} item xs={12} sm={6}>
                  <Button
                    style={{
                      borderRadius: 35,
                      width: 270,
                      height: 50,
                      backgroundColor: "#8F8F8F",
                      padding: "18px 36px",
                      fontSize: "18px",
                    }}
                    variant="contained"
                  >
                    Sign in with &nbsp;{" "}
                    <img height={30} width={30} src="/asset/Google.png" />
                  </Button>
                </Grid>
                <Grid spacing={10} item xs={12} sm={6}>
                  <Button
                    style={{
                      borderRadius: 35,
                      width: 270,
                      height: 50,
                      backgroundColor: "#8F8F8F",
                      padding: "18px 36px",
                      fontSize: "18px",
                    }}
                    variant="contained"
                  >
                    Sign in with &nbsp;{" "}
                    <img height={30} width={30} src="/asset/facebook.png" />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
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
