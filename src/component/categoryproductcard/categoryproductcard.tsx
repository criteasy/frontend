import React, { memo } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import * as $ from '../../css';

export const CategoryProductCard = memo(({ subCategoryName, productList }: { subCategoryName: string, productList: Product[] }) =>
    <React.Fragment>
        {productList && productList.length > 0 ?
            <div className={css($.bdr_rad(2), $.cs.bg_theme, $.cs.neo_b_sdw_l, $.m_d_rem('Left', 2.4), $.m_d_rem('Right', 2.4), $.cs.col, $.cs.jstfy_content_center, $.cs.align_items_center, $.cs.flex_wrap, $.cs.width_auto, $.max_width(51), $.p_d_rem('Top', 1), $.p_d_rem('Bottom', 2), $.p_d_rem('Left', 0.5), $.p_d_rem('Right', 0.5), $.mcs.width100p)} key={subCategoryName}>

                <Link to={`/crit/${subCategoryName}`}>
                    <div className={css($.cs.txt_align_ctr, $.cs.ff_lato)}>
                        {subCategoryName}
                    </div>
                </Link>

                <div className={css($.cs.row, $.cs.flex_wrap, $.cs.jstfy_content_center, $.max_width(45), $.cs.width_mx_Content, $.mcs.width100p)}>
                    {productList.map(eachProduct =>
                        
                        <Link key={eachProduct.entid} to={`/crit/${eachProduct.subcategory}/${eachProduct.entid}`}>
                        
                            <div className={css($.width(20), $.m_rem(0.8), $.bdr_rad(1.5), localStyles.border_1px_grey)}>
                                <div className={css($.cs.txt_align_ctr,$.p_px(0.5), $.cs.bold, $.cs.ff_lato)}>{eachProduct.ename}</div>
                                <div className={css($.cs.row, $.cs.jstfy_content_center, $.cs.bg_white)}>
                                    <img alt="not found" src={eachProduct.imageurl || "asset/imgcomingsoon.png"} className={css($.max_width(18), $.height(15))} />
                                </div>
                                <div className={`${css($.cs.row, $.cs.jstfy_content_sb, $.p_rem(1), $.cs.align_items_center, localStyles.fs15, )} backdrod-blur`}>
                                    <div className={css($.cs.row, $.cs.align_items_center)}>
                                        {eachProduct.reviewcount} Reviews
                                    </div>
                                    <div className={css($.cs.row, $.cs.align_items_center)}>
                                        <span>{eachProduct.rating}/5 </span> 
                                        <span className={css($.cs.txt_accentLighter, $.cs.flex_nowrap, $.cs.jstfy_content_center, $.cs.align_items_center, $.m_d_rem('Left',0.5), $.cs.row_inline)}>
                                            <BsStarFill />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div> : null
        }
    </React.Fragment>
)



const localStyles = StyleSheet.create({
    border_1px_grey:{
        border: '1px solid rgb(192, 192, 192)',
    },
    fs15: {
        fontSize:'1.5rem'
    }
})