import React, { useContext, useRef } from "react";
import { Search } from "../search/search";
import { SearchContext } from "../../screen/maincontainer/maincontainer";
import { Link as Links } from "react-router-dom";
import { StyleSheet, css } from "aphrodite/no-important";
import SignUp from "../Login/loginpage";

//import './topnavbar.scss';

export const TopNavbar = () => {
  const searchContext = useContext(SearchContext);
  return (
    <React.Fragment>
      <nav className={css(styles.navbarShadow)}></nav>
      <nav className={css(styles.navbar)}>
        <div className={css(styles.critNav)}>
          <Links className={css(styles.critLogo)} to="/">
            <img
              className={css(styles.critImg)}
              src="/asset/criteasylogo.png"
              alt=""
            />
          </Links>
          {searchContext.showSearch ? <Search /> : null}
          <div className={css(styles.userAction)}>
            {/* <SignUp /> */}
            <img
              src="/asset/shivam.jpeg"
              alt=""
              className={css(styles.img)}
            />{" "}
            <span className={css(styles.userActionAnchor)}>Shivam Verma</span>
          </div>

          <div className={css(styles.userActionsContent)}>
            <span className={css(styles.uacSpan)}>Shivam Verma</span>
            <span className={css(styles.uacSpan)}>LogIn</span>
            <span className={css(styles.uacSpan)}>Setting</span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

const mobileView = "@media only screen and (max-width: 830px)";

const styles = StyleSheet.create({
  navbarShadow: {
    boxShadow: "0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #dadce0",
    position: "fixed",
    top: "0",
    minHeight: "75px",
    width: "100vw",
  },

  navbar: {
    backgroundColor: "#FFF",
    position: "fixed",
    top: 0,
    zindex: 10,
    boxSizing: "border-box",
    display: "block",
    width: "100%",

    //overflow:"hidden",
  },

  critNav: {
    height: "75px",
    fontWeight: 400,
    padding: "0 50px",
    fontSize: "14px",
    width: "100vw",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    //position:"fixed",
    [mobileView]: {
      padding: "0 10px",
      width: "100vw",
      fontSize: "10px",
    },
  },

  critLogo: {
    display: "flex",
    margin: "0 10px",
    alignItems: "center",
    justifyContent: "center",
    //zIndex:200,
    //backdropfilter:"blur(40px)",

    // position:"fixed",
    [mobileView]: {
      boxSizing: "border-box",
      margin: "0 0",
      padding: "0 !important",
      width: "68px",
    },
  },

  critImg: {
    height: "30px",
    //zIndex:1,
    // position:"fixed",
    //backdropfilter:"blur(40px)",
    [mobileView]: {
      height: "18px",
    },
  },

  menuContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
  },
  span: {
    fontWeight: 700,
    fontSize: 14,
    verticalAlign: "middle",
    margin: 0,
    //outline:"none",
  },
  img: {
    borderRadius: "100%",
    width: 30,
    height: 30,
  },
  userAction: {
    margin: "0 1rem",
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
    padding: "10px 0px",
    ":hover ~ div": {
      display: "block",
    },
  },
  userActionAnchor: {
    marginLeft: "10px",
    outline: "none",
    textDecoration: "none",
    ":visited": {
      color: "#333",
    },
    ":link": {
      color: "#333",
    },
    [mobileView]: {
      margin: "0 0px",
      maxWidth: "30px",
    },
  },
  userActionsContent: {
    position: "absolute",
    backgroundColor: "#f9f9f984",
    minWidth: "130px",
    boxshadow:
      "12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(112, 112, 112, 0.205)",
    borderRadius: "20px",
    padding: "12px 16px",
    right: "30px",
    top: "54px",
    zIndex: 200,
    overflow: "auto",
    display: "none",
    backdropFilter: "blur(40px)",
    ":hover": {
      display: "block",
    },
    [mobileView]: {
      right: "5px",
      top: "54px",
      zIndex: 200,
      overflow: "auto",
      display: "none",
    },
  },
  uacSpan: {
    color: "black",
    padding: "8px 12px",
    textDecoration: "none",
    display: "block",
    textShadow: "1px 1px 0 #fff",
    cursor: "pointer",
    transition: "all 0.5s",
    ":hover": {
      backgroundColor: "#ddd",
      borderRadius: "10px",
    },
  },
});
