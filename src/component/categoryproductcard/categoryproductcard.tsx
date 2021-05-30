import React, { memo } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import * as style from '../../css';

export const CategoryProductCard = memo(({ subCategoryName, productList }: { subCategoryName: string, productList: Product[] }) =>
    <React.Fragment>
        {productList && productList.length > 0 ?
            <div className={css(style.border_radius(2).c, style.cs.bg_theme, style.cs.neomorphic_box_shadow_l, style.m_d_rem('Left', 2.4).c, style.m_d_rem('Right', 2.4).c, style.cs.col, style.cs.jstfy_content_center, style.cs.align_items_center, style.cs.flex_wrap, style.cs.width_auto, style.max_width(51).c, style.p_d_rem('Top', 1).c, style.p_d_rem('Bottom', 2).c, style.p_d_rem('Left', 0.5).c, style.p_d_rem('Right', 0.5).c, style.mcs.width100p)} key={subCategoryName}>

                <Link to={`/crit/${subCategoryName}`}>
                    <div className={css(style.cs.txt_align_ctr, style.cs.ff_lato)}>
                        {subCategoryName}
                    </div>
                </Link>

                <div className={css(style.cs.row, style.cs.flex_wrap, style.cs.jstfy_content_center, style.max_width(45).c, style.cs.width_mx_Content, style.mcs.width100p)}>
                    {productList.map(eachProduct =>
                        
                        <Link key={eachProduct.entid} to={`/crit/${eachProduct.subcategory}/${eachProduct.entid}`}>
                        
                            <div className={css(style.width(20).c, style.m_rem(0.8).c, style.border_radius(1.5).c, localStyles.border_1px_grey)}>
                                <div className={css(style.cs.txt_align_ctr,style.p_px(0.5).c, style.cs.bold, style.cs.ff_lato)}>{eachProduct.ename}</div>
                                <div className={css(style.cs.row, style.cs.jstfy_content_center, style.cs.bg_white)}>
                                    <img alt="not found" src={eachProduct.imageurl || "asset/imgcomingsoon.png"} className={css(style.max_width(18).c, style.height(15).c)} />
                                </div>
                                <div className={`${css(style.cs.row, style.cs.jstfy_content_sb, style.p_rem(1).c, style.cs.align_items_center, localStyles.fs15, )} backdrod-blur`}>
                                    <div className={css(style.cs.row, style.cs.align_items_center)}>
                                        {eachProduct.reviewcount} Reviews
                                    </div>
                                    <div className={css(style.cs.row, style.cs.align_items_center)}>
                                        <span>{eachProduct.rating}/5 </span> 
                                        <span className={css(style.cs.txt_accentLighter, style.cs.flex_nowrap, style.cs.jstfy_content_center, style.cs.align_items_center, style.m_d_rem('Left',0.5).c, style.cs.row_inline)}>
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