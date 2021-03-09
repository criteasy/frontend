import React, {useContext , useRef} from 'react';
import { Search } from '../search/search';
import { SearchContext } from '../../screen/maincontainer/maincontainer';
import { Link } from 'react-router-dom';

import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { StyleSheet, css } from 'aphrodite/no-important';
//import './topnavbar.scss';

export const TopNavbar = () => {
  const searchContext = useContext(SearchContext);
    const dropdownRef = useRef(null);
  const [isActive, setIsActive ] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  

  
    return <React.Fragment>

<nav className={css(styles.navbarShadow)}></nav>
        <nav className={css(styles.navbar)}> 
            <div className={css(styles.critNav)}>
                <Link className={css(styles.critLogo)} to="/">
                    <img className={css(styles.critImg)} src="/asset/criteasylogo.png" alt="" />
                </Link>
                {searchContext.showSearch?<Search/>:null}

<div className="container">
        <div className={css(styles.menuContainer)}>
          <button onClick={onClick} className={css(styles.menuTrigger, styles.hover)}>
            <span className={css(styles.span)}>Shivam Verma</span>
            <img className={css(styles.img)}
              src="/asset/shivam.jpeg"
              alt="User avatar"
            />
          </button>
          { isActive && 
            <nav
              ref={dropdownRef}
              className={css(styles.menu, styles.menuActive)}
            >
              <ul className={css(styles.ul)}>
                <li className={css(styles.li)}>
                  <a className={css(styles.lia)} href="#">Shivam Verma</a>
                </li>
                <li className={css(styles.li)}>
                  <a className={css(styles.lia)} href="#">Setting</a>
                </li>
                <li className={css(styles.li)}>
                  <a className={css(styles.lia)} href="#">Logout</a>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
      </div>
      </nav>
    </React.Fragment>
}



const styles = StyleSheet.create({
    
  navbarShadow:{
    boxShadow: "0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #dadce0",
    position: "fixed",
    top: "0",
    minHeight:"75px",
    width: "100vw"
},

navbar:{
  backgroundColor: "#FFF",
  position: "fixed",
  top: 0,
  zindex: 1,
  boxSizing: "border-box",
  display:"block",
  
  //overflow:"hidden",
  
},

critNav: {
  height: "75px",
  fontWeight: 400,
  padding: "0 50px",
  fontSize: "14px",
  width: "calc(100vw - 100px)",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
  //position:"fixed",
  
},

critLogo: {
  display: "flex",
  margin: "0 10px",
  alignItems: "center",
  justifyContent: "center",
  //zIndex:200,
  //backdropfilter:"blur(40px)",
  
 // position:"fixed",
  
},

critImg: {
  height: "30px",
  //zIndex:1,
 // position:"fixed",
 //backdropfilter:"blur(40px)",

},

    menuContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      right: 0,
    },
    span: {
      fontWeight: 700,
      fontSize: 14,
      verticalAlign: 'middle',
      margin: 0,
      //outline:"none",
    },
    img: {
      borderRadius: "100%",
      width:30,
      height:30,
    },
    menuTrigger: {
      background: 'white',
      borderRadius: 90,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4px 6px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
      border: 'none',
      verticalAlign: 'middle',
      transition: 'boxShadow 0.4s ease',
      marginLeft: 'auto',
    },
    hover: {  
      ':hover': {
          boxShadow: '0 1px 8px rgba(0, 0, 0, 0.3)'
      }
    },
    menu: {
      background: 'white',
      borderRadius: 8,
      position: 'absolute',
      top: 50,
      right: 0,
      width: 250,
      boxShadow: '0 1px 8px rgba(0, 0, 0, 0.3)',
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(-20px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease, visibility 0.4s',
      //zindex:200
    },
    menuActive: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
      outline:"none",
      //zIndex:200
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    li: {
      borderBottom: '1px solid #dddddd',
    },
    lia: {
      textDecoration: 'none',
      color: '#333333',
      padding: '15px 20px',
      display: 'block'
    }
  });



