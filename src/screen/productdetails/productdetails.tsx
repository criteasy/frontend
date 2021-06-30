import React, { useContext } from "react"
import { match } from "react-router-dom"
import { SubCategoryBar } from "../../component/subcategorybar/subcategorybar"
import { useDefaultStates } from "../../services/critcommon/critcommon"
import { StyleSheet, css } from 'aphrodite/no-important';
import { BsFileDiff, BsFileText, BsFillStarFill, BsReplyAllFill } from 'react-icons/bs';
import * as $ from "../../css";

const anim = (top:number)=> {
    const wave = {
        'from':{
            top: '14rem',
            transform: 'translateX(-50%) rotate(0deg)'
        },
        'to':{
            top: `${top}rem`,
            transform: 'translateX(-50%) rotate(360deg)'
        }
    }

    return StyleSheet.create({
        'c': {
            ':before':{
                animationName: [wave],
            }
        }
    }).c

}



const ProductDetails = ({match}:{match:any}) => {

    useDefaultStates()

    const [rating, reviews, popularity] = [4.5, 900, '78%']
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
                <div className={css($.cs.bg_theme, $.cs.width100p, $.height(-100123,'', "calc(100vh - 123px)"), style.main_cont)}>
                    <div className={
                        css($.cs.row, $.cs.flex_nowrap,$.mcs.flex_wrap, $.mcs.jstfy_content_center)
                    }>
                        <div className={
                            css($.m_rem(5),
                                $.cs.neo_b_sdw_l,
                                $.width(30),
                                $.height(35),
                                $.bdr_rad(2.5),
                                $.cs.bg_theme,
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
                            css($.cs.width_auto, $.height(-2, '', 'auto'), $.m_d_rem('Top',5.1), $.m_d_rem('Left', 2))
                        }>
                            <div className={css($.cs.width100p, $.cs.ff_lato, $.fsize(2.4))}>
                                One Plus Nord 
                            </div>
                            <div className={
                                css($.cs.row, $.m_d_rem('Top', 2), $.mcs.jstfy_content_sb, $.cs.ff_lato, $.fsize(1.8))
                            }>
                                <div className={css($.m_d_rem('Left', 0), $.m_d_rem('Right',2))}>
                                    <div className={
                                        css(style.crx_inf, style.rating_0, anim(((5-rating)/5)*14))
                                    }>
                                        4.5
                                    </div>
                                    <div className={css($.cs.col, $.cs.align_items_center)}>
                                        Rating
                                    </div>
                                </div>
                                <div className={css($.m_d_rem('Left', 2), $.m_d_rem('Right',2))}>
                                    <div className={
                                        css(style.crx_inf, style.reviews_1, anim(((1000-reviews)/1000)*14))
                                    }>
                                        900
                                    </div>
                                    <div className={css($.cs.col, $.cs.align_items_center)}>
                                        Total&nbsp;Reviews
                                    </div>
                                </div>
                                <div className={css($.m_d_rem('Left', 2), $.m_d_rem('Right',0))}>
                                    <div className={
                                        css(style.crx_inf, style.popular_2, anim(((100-parseInt(popularity))/100)*14))
                                    }>
                                        78%
                                    </div>
                                    <div className={css($.cs.col, $.cs.align_items_center)}>
                                        Popularity
                                    </div>
                                </div>
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
            borderColor: '#aaa'
        },
    },
    active: {
        borderColor: '#aaa'
    },
    main_cont:{
        borderTop:'0.1px solid transparent',
        overflowY: 'auto',
        padding:"0 20rem"
    },
    crx_inf: {
        borderRadius:'100%',
        width: '14rem',
        height: '14rem',
        textAlign: 'center',
        display: 'flex',
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px',
        boxShadow: `-12px -12px 20px #fff,  12px 12px 20px ${$.shadowDarkColor}`,
        border: `6px solid ${$.themeLightGreyColor}`,
        position: 'relative',
        overflow: 'hidden',
        zIndex:1,
        ':before': {
            content: '\' \'',
            display: 'block',
            position: 'absolute',
            width: '28rem',
            height: '28rem',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '40%',
            animationIterationCount: 'initial',
            animationTimingFunction: 'ease-in-out',
            animationFillMode: 'forwards',
            zIndex:-1,
        }
    },
    rating_0: {
        ':before': {
            background: $.accentColor,
            animationDuration: '4s, 1200ms',

        }
    },
    reviews_1:{
        ':before': {
            background: '#ccc',
            animationDuration: '4.4s, 1200ms',
        }
    },
    popular_2: {
        ':before': {
            background: '#4679F0',
            animationDuration: '4.8s, 1200ms',
        }
    } 
});



export default ProductDetails