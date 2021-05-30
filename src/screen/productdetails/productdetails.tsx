import React, { useContext } from "react"
import { match } from "react-router-dom"
import { SubCategoryBar } from "../../component/subcategorybar/subcategorybar"
import { useDefaultStates } from "../../services/critcommon/critcommon"
import { StyleSheet, css } from 'aphrodite/no-important';
import { BsFileDiff, BsFileText, BsFillStarFill, BsReplyAllFill } from 'react-icons/bs';

const ProductDetails = ({match}:{match:any}) => {

    useDefaultStates()
    return <React.Fragment>
        <nav className = {css(style.mt75)}>
        <SubCategoryBar category={match.params.category}></SubCategoryBar>
        </nav>
        <aside >
            <ul className={css(style.aside)}>
                <li><BsFillStarFill/></li>
                <li><BsFileText/></li>
                <li><BsFileDiff/></li>
                <li><BsReplyAllFill/></li>
            </ul>
        </aside>
            

        <section>
            <div>
                <div></div>
                <div></div>
            </div>
        </section>
    </React.Fragment>
}
const style = StyleSheet.create({
    mt75: {
        marginTop:"75px"
    },
    aside: {
        margin: 0,
        padding: 20,
        listStyle: 'none',
        position:'fixed',
        background: '#fff',
        display: 'flex',
        flexFlow: 'column nowrap',
        width:'10px',
        boxShadow:'4px 0px 10px rgba(0, 0, 0, 0.12)',
        
    },
})

export default ProductDetails