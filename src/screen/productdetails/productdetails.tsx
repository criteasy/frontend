import React, { useContext } from "react"
import { match } from "react-router-dom"
import { SubCategoryBar } from "../../component/subcategorybar/subcategorybar"
import { useDefaultStates } from "../../services/critcommon/critcommon"
import { StyleSheet, css } from 'aphrodite/no-important';


export const ProductDetails = ({match}:{match:any}) => {

    useDefaultStates()
    return <React.Fragment>
        <div className = {css(style.pdc)}>
            <SubCategoryBar category={match.params.category}></SubCategoryBar>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </React.Fragment>
}
const style = StyleSheet.create({
    pdc: {
        marginTop:"75px"
    }
})