import React, { useContext } from "react"
import { match } from "react-router-dom"
import { SubCategoryBar } from "../../component/subcategorybar/subcategorybar"
import { useDefaultStates } from "../../services/critcommon/critcommon"
import { StyleSheet, css } from 'aphrodite/no-important';
import { BsFileDiff, BsFileText, BsFillStarFill, BsReplyAllFill } from 'react-icons/bs';
import * as $ from "../../css";

const ProductDetails = ({match}:{match:any}) => {

    useDefaultStates()
    return <React.Fragment>
        <nav className={
            css($.m_d_px('Top', 7.5))
        }>
            <SubCategoryBar category={match.params.category}></SubCategoryBar>
        </nav>   
        <div className = { 
            css(
                $.cs.row,
                $.cs.flex_nowrap,
            )
        }>
            <div className={css($.mcs.disp_none)}>
                <aside>
                    <div 
                        className={
                            css(
                                $.m_rem(0),
                                $.p_rem(2),
                                // $.width(1),
                                $.cs.bg_theme,
                                $.cs.col,
                                $.cs.flex_nowrap,
                                style.aside,
                                $.cs.jstfy_content_sb,
                                $.cs.align_items_center
                            )
                        }
                    >
                        <div className = {css(style.a_icons, style.active)}><BsFillStarFill/></div>
                        <div className = {css(style.a_icons)}><BsFileText/></div>
                        <div className = {css(style.a_icons)}><BsFileDiff/></div>
                        <div className = {css(style.a_icons)}><BsReplyAllFill/></div>
                    </div>
                </aside>
            </div >
            <div className = {
                css(
                    $.cs.width100p
                )
            }>
                  
                  
                <div className={css($.cs.bg_theme, $.cs.width100p, $.height(-1,'', "calc(100vh - 123px)"), style.topBorder)}>
                    <div className={
                            css($.cs.row, $.cs.flex_nowrap,$.mcs.flex_wrap, $.cs.jstfy_content_center)
                        }
                    >
                        <div className={
                            css($.m_rem(5),
                                $.cs.neo_b_sdw_l,
                                $.width(30),
                                $.height(35),
                                $.bdr_rad(2.5),
                                $.cs.row, $.cs.flex_nowrap, $.cs.jstfy_content_center, $.cs.align_items_center,
                            )
                        }>
                            <div className={ css(
                                    $.cs.row, $.cs.flex_nowrap, $.cs.jstfy_content_center, $.cs.align_items_center, 
                                    $.cs.bg_white,
                                    $.width(30),
                                )}>
                                <img className={
                                    css($.max_height(25), $.max_width(100,'%'))
                                } src="/asset/4.jpg" alt="" />
                            </div>

                        </div>

                        <div className={
                            css($.width(-1,'','calc(70%)'), $.height(-2, '', 'auto'), $.m_d_rem('Top',5.1), $.m_d_rem('Left', 2))
                        }>
                            <div className={css($.cs.width100p, $.cs.ff_lato, $.fsize(2))}>
                                One Plus Nord 
                            </div>
                            <div className={
                                css($.cs.row, $.m_d_rem('Top', 2))
                            }>
                                <div className={
                                    css($.m_d_rem('Right', 2))
                                }>ratings</div>
                                <div className={
                                    css($.m_d_rem('Right', 2))
                                }>ratings</div>
                                <div className={
                                    css($.m_d_rem('Right', 2))
                                }>ratings</div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>

       

    </React.Fragment>
}
const style = StyleSheet.create({
    aside: {
        height: 'calc(100vh - 123px)',
        boxShadow: 'inset 7px 7px 14px rgba(174, 174, 192, 0.2), inset -7px -7px 14px #FFFFFF'
    },
    a_icons: {
        borderRadius: '100%',
        border: '2px solid transparent',
        boxShadow: '7px 7px 10px rgba(174, 174, 192, 0.2), -7px -7px 10px #FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        padding:'1rem',
        alignItems: 'center',
        cursor: 'pointer',
        color: '#777',
        fontSize: '1.8rem',
        ':hover': {
            borderColor: $.accentColor
        },
    },
    active: {
        borderColor: $.accentColor
    },
    topBorder:{
        borderTop:'0.1px solid transparent'
    },
    brdrgrey: {
        border: `20px solid ${$.themeLightGreyColor}`
    }


})

export default ProductDetails