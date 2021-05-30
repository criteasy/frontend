import React from 'react';
import { SubCategoryBar } from '../../component/subcategorybar/subcategorybar';
import { CategoryProduct } from '../../component/products/categoryproduct/categoryproduct';
import { useDefaultStates } from '../../services/critcommon/critcommon';
import {m_d_px} from '../../css';
import { css } from 'aphrodite';
const Crit = ({match}:{match:any}) => {
    // set default states
    useDefaultStates()

    // return crit category page UI
    return <React.Fragment>
        
        <div className={css(m_d_px('Top', 7.5))}>
            <SubCategoryBar category={match.params.category}></SubCategoryBar>
            <CategoryProduct category={match.params.category}></CategoryProduct>
        </div>
    </React.Fragment>
}

export default Crit
