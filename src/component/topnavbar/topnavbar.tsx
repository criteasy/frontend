import React,{useContext} from 'react';
import './topnavbar.scss';
import { Search } from '../search/search';
import { SearchContext } from '../../screen/maincontainer/maincontainer';
import { Link } from 'react-router-dom';
export const TopNavbar = () => {
    const searchContext = useContext(SearchContext);
    return <React.Fragment>
        <nav className="navbar-shadow"></nav>
        <nav className="navbar"> 
            <div className="crit-nav">
                <Link className="crit-logo" to="/">
                    <img src="/asset/criteasylogo.png" alt="" />
                </Link>
                {searchContext.showSearch?<Search/>:null}
                <div className="user-actions">
                    <img src="/asset/shivam.jpeg" alt=""/> <a href="/profile" className="xl-only">Shivam Verma</a>
                    <div className="user-actions-content backdrop-blur">
                        <span>Shivam Verma</span>
                        <span>Logout</span>
                        <span>Setting</span>

                    </div>
                </div>
            </div>
            
        </nav>
    </React.Fragment>
}
