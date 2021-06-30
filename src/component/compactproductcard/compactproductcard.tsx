import React, {memo} from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Product } from '../../types/product';
import { css, StyleSheet } from 'aphrodite';
import * as $ from '../../css';
export const CompactProductCard = memo(({ename, imageurl, reviewcount, rating}: Product) => {
    return <React.Fragment>
        <div className={css(
            $.cs.bg_theme, $.cs.neo_b_sdw_m, $.bdr_rad(1), $.cs.ff_lato, st.cccb
        )}>
            <div className={css($.cs.txt_align_ctr, $.p_rem(-120, '1.2rem 0'), $.cs.bold)}>{ename}</div>
            <div className={css($.cs.row,$.cs.jstfy_content_center, $.cs.bg_white)}>
                <img className={css($.height(224,'px'))} alt="not found" src={imageurl || "../asset/imgcomingsoon.png"}/>
            </div>
            <div className={css($.cs.row, $.cs.jstfy_content_sb, $.cs.align_items_center,$.height(24,'px'), $.fsize(0.9,'em'), $.p_rem(1.6))+" backdrod-blur"}>
                <div className={css($.cs.row, $.cs.align_items_center)}>{reviewcount} Reviews</div>
                <div className={css($.cs.row, $.cs.align_items_center)}>
                    <span>{rating}/5 </span> <span className={css($.cs.txt_accentLighter, $.m_d_px('Left', 0.5))}><BsStarFill/></span>
                </div>
            </div>
        </div>
    </React.Fragment>
})

const st = StyleSheet.create({
    cccb: {
        [$.mobileView]: {
            margin: '14px 24px'
        }
    }
})


