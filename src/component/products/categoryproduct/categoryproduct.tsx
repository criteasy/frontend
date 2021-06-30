import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { Link } from 'react-router-dom';
import { useProductHook } from '../../../hooks/products/producthooks';
import { CompactProductCard } from '../../compactproductcard/compactproductcard'
import { StoreInfo } from '../../storeinfo/storeinfo';
import * as $ from '../../../css';
export const CategoryProduct = ({category}:{category: string}) => {
    const inCategoryroduct = useProductHook(category)
    const totalItemCounts = 18614
    const totalReviewsCount = 129344
    return <React.Fragment>
        <div className={css($.cs.bg_theme, $.p_rem(-3010, '30px 1rem'))}>
            <div className={css($.m_d_px('Bottom',5))}>
                <div className={css($.cs.bold, $.fsize(1.4,'em'), $.p_rem(-200,'20px 0'))}>
                    Top Picks
                </div>
                <div className={css(st.c_prod_cont_bdy)}>
                {
                    inCategoryroduct.map(eachInCategoryroduct => <Link to={"/crit/"+category+"/"+eachInCategoryroduct.entid} key={eachInCategoryroduct.entid}><CompactProductCard {...eachInCategoryroduct}></CompactProductCard></Link>)
                }
                </div>
            </div>

            <div className={css($.m_d_px('Bottom',5))}>
                <div className={css($.cs.bold, $.fsize(1.4,'em'), $.p_rem(-200,'20px 0'))}>
                    More from Store
                </div>
                <div className={css(st.c_prod_cont_bdy)}>
                {
                    inCategoryroduct.map(eachInCategoryroduct => <Link to={"/crit/"+category+"/"+eachInCategoryroduct.entid} key={eachInCategoryroduct.entid}><CompactProductCard key={eachInCategoryroduct.entid} {...eachInCategoryroduct}></CompactProductCard></Link>)
                }
                </div>
            </div>
            
        </div>
        <StoreInfo category={category.slice(0,1).toUpperCase()+category.slice(1,)} items={totalItemCounts} totalreviews={totalReviewsCount}/>
    </React.Fragment>

}
const st = StyleSheet.create({
    c_prod_cont_bdy: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(25.6rem,1fr))',
        gridGap: '2.88rem',
    }
})