import { StyleSheet as SS, CSSProperties, StyleDeclarationMap, StyleDeclarationValue } from 'aphrodite/no-important';
interface DStyle {
    c: CSSProperties | StyleDeclarationMap
}

interface ReturnStyle {c: StyleDeclarationValue }

interface cacheStyle {
    [key:string]:
        {[key:string]: ReturnStyle }
     
}

// cache
/// cache implementation of styles

const cache: cacheStyle = {

} 

type Direction = 'Top' | 'Right' | 'Bottom' | 'Left'


// const varibles for styles
const primaryColor = '#ffffff'
const accentColor = '#fcd365'
const accentColorLighter = '#FABC12'
const shadowDarkColor = '#BABECC'
const shadowLightColor = 'rgba(255, 255, 255, 0.787)'
const themeLightGreyColor = '#EBECF0'


const mobileView = '@media only screen and (max-width: 830px)'

// STYLE GENRATOR functions
export const m_rem = (len: number): StyleDeclarationValue => {
    if (!(cache.m_rem && cache.m_rem[''+len]))
        cache.m_rem = {[''+len]: SS.create({c:{margin: `${len}rem`}} as DStyle)}
    return cache?.m_rem[''+len].c
}


export const p_rem = (len: number): StyleDeclarationValue => {
    if (!(cache.p_rem && cache.p_rem[''+len]))
        cache.p_rem = {[''+len]: SS.create({c:{padding: `${len}rem`}} as DStyle)}
    return cache?.p_rem[''+len].c
}

export const m_px = (len: number): StyleDeclarationValue => {
    if (!(cache?.m_px && cache.m_px[''+len]))
        cache.m_px = {[''+len]: SS.create({c:{margin: `${len*10}px`}} as DStyle)}
    return cache?.m_px[''+len].c
}

export const p_px = (len: number): StyleDeclarationValue => {
    if (!(cache?.p_px && cache.p_px[''+len]))
        cache.p_px = {[''+len]: SS.create({c:{padding: `${len*10}px`}} as DStyle)}
    return cache?.p_px[''+len].c
}

export const m_d_rem = (dir: Direction, len: number): StyleDeclarationValue => {
    if (!(cache?.m_d_rem && cache.m_d_rem[dir+'_'+len]))
        cache.m_d_rem = {[dir+'_'+len]: SS.create({c:{[`margin${dir}`]: `${len}rem`}} as DStyle)}
    return cache?.m_d_rem[dir+'_'+len].c
}

export const p_d_rem = (dir: Direction, len: number): StyleDeclarationValue => {
    if (!(cache?.p_d_rem && cache.p_d_rem[dir+'_'+len]))
        cache.p_d_rem = {[dir+'_'+len]: SS.create({c:{[`padding${dir}`]: `${len}rem`}} as DStyle)}
    return cache?.p_d_rem[dir+'_'+len].c
}

export const m_d_px = (dir: Direction, len: number): StyleDeclarationValue => {
    if (!(cache?.m_d_px && cache.m_d_px[dir+'_'+len]))
        cache.m_d_px = {[dir+'_'+len]: SS.create({c:{[`margin${dir}`]: `${len}px`}} as DStyle)}
    return cache?.m_d_px[dir+'_'+len].c
}

export const p_d_px = (dir: Direction, len: number): StyleDeclarationValue => {
    if (!(cache?.p_d_px && cache.p_d_px[dir+'_'+len]))
        cache.p_d_px = {[dir+'_'+len]: SS.create({c:{[`padding${dir}`]: `${len}px`}} as DStyle)}
    return cache?.p_d_px[dir+'_'+len].c
}


const bgColor = (color:string): CSSProperties | StyleDeclarationMap => ({backgroundColor: color})
const txtColor = (color:string): CSSProperties | StyleDeclarationMap => ({color: color})



export const cs = SS.create({


    // background color
    bg_white:bgColor('white'),
    bg_black:bgColor('black'),
    bg_theme: bgColor(themeLightGreyColor),
    bg_accentLighter: bgColor(accentColorLighter),
    // text color
    txt_white: txtColor('white'),
    txt_black: txtColor('black'),
    txt_accentLighter: txtColor(accentColorLighter),


    
    // shadows
    neomorphic_box_shadow_l: {
        boxShadow: `-12px -12px 20px ${shadowLightColor},  12px 12px 20px ${shadowDarkColor}`
    },

    neomorphic_box_shadow_m: {
        boxShadow: `-7px -7px 12px ${shadowLightColor},  7px 7px 12px ${shadowDarkColor}`
    },

    light_text_shadow: {
        textShadow: '1px 1px 0 #fff'
    },

    yellow_text_shadow: {
        textShadow: '1px 1px 0 #fae5a5'
    },


    // display
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    row_inline: {
        display:'inline-flex',
        flexDirection: 'row'
    },
    col_inline: {
        display: 'inline-flex',
        flexDirection: 'column'
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
    },
    jstfy_content_center:{
        justifyContent: 'center'
    },
    jstfy_content_sb:{
        justifyContent: 'space-between'
    },
    align_items_center: {
        alignItems: 'center'
    },
    align_content_center: {
        alignContent:'center'
    },
    flex_wrap: {
        flexWrap: 'wrap'
    },
    flex_nowrap:{
        flexWrap: 'nowrap'
    },


    // width
    width100p: {
        width:'100%'
    },
    width_auto:{
        width: 'auto'
    },
    width_mx_Content:{
        width: 'max-content'
    },
        // max width
    max_width100p: {
        maxWidth:'100%'
    },
    max_width_auto:{
        maxWidth: 'auto'
    },
    max_width_mx_Content:{
        maxWidth: 'max-content'
    },

    // zIndexes
    zInd1:{
        zIndex:1
    },

    // alignments
    txt_align_ctr: {
        textAlign:'center'
    },


    // fonts
    bold: {
        fontWeight: 'bold'
    },
    ff_lato: {
        fontFamily: "'Lato', sans-serif",
    }

});

export const mcs = SS.create({
        // width
    width100p: {
        [mobileView]:{
            width:'100%'
        }
    },
    width_auto:{
        [mobileView]:{
            width: 'auto'
        }
    },
    width_mx_Content:{
        [mobileView]:{
            width: 'max-content'
        }
    },

    max_width100p: {
        [mobileView]:{
            maxWidth:'100%'
        }
    },
    max_width_auto:{
        [mobileView]:{
            maxWidth: 'auto'
        }
    },
    max_width_mx_Content:{
        [mobileView]:{
            maxWidth: 'max-content'
        }
    },

    
})




export const border_radius = (n: number): StyleDeclarationValue => {
    if (!(cache?.brad && cache.brad[''+n])) {
        cache.brad = {[''+n]: SS.create({c:{borderRadius:`${n*10}px`}})}
    }
    return cache?.brad[''+n].c

}

export const width = (size:number): StyleDeclarationValue => {
    if (!(cache?.width && cache.width[''+size])) {
        cache.width = {[''+size]: SS.create({c:{width:`${size}rem`}})}
    }
    return cache?.width[''+size].c
}

export const max_width = (size:number): StyleDeclarationValue => {
    if (!(cache?.mxwidth && cache.mxwidth[''+size])) {
        cache.mxwidth = {[''+size]: SS.create({c:{maxWidth:`${size}rem`}})}
    }
    return cache?.mxwidth[''+size].c
}

export const height = (size:number): StyleDeclarationValue => {
    if (!(cache?.height && cache.height[''+size])) {
        cache.height = {[''+size]: SS.create({c:{height:`${size}rem`}})}
    }
    return cache?.height[''+size].c
}

export const max_height = (size:number): StyleDeclarationValue => {
    if (!(cache?.mxHeight && cache.mxHeight[''+size])) {
        cache.mxHeight = {[''+size]: SS.create({c:{maxHeight:`${size}rem`}})}
    }
    return cache?.mxHeight[''+size].c
}

export const fsize = (size:number): StyleDeclarationValue => {
    if (!(cache?.fsize && cache.fsize[''+size])) {
        cache.fsize = {[''+size]: SS.create({c:{fontSize:`${size}rem`}})}
    }
    return cache?.fsize[''+size].c
}



// for mobiles


export const border_radius_ms = (n: number): StyleDeclarationValue => {
    if (!(cache?.brad_ms && cache.brad_ms[''+n])) {
        cache.brad_ms = {[''+n]: SS.create({c:{[mobileView]:{borderRadius:`${n*10}px`}}})}
    }
    return cache?.brad_ms[''+n].c

}

export const width_ms = (size:number): StyleDeclarationValue => {
    if (!(cache?.width_ms && cache.width_ms[''+size])) {
        cache.width_ms = {[''+size]: SS.create({c:{[mobileView]:{width:`${size}rem`}}})}
    }
    return cache?.width_ms[''+size].c
}

export const max_width_ms = (size:number): StyleDeclarationValue => {
    if (!(cache?.mxwidth_ms && cache.mxwidth_ms[''+size])) {
        cache.mxwidth_ms = {[''+size]: SS.create({c:{[mobileView]: {maxWidth:`${size}rem`}}})}
    }
    return cache?.mxwidth_ms[''+size].c
}

export const height_ms = (size:number): StyleDeclarationValue => {
    if (!(cache?.height_ms && cache.height_ms[''+size])) {
        cache.height_ms = {[''+size]: SS.create({c:{[mobileView]:{height:`${size}rem`}}})}
    }
    return cache?.height_ms[''+size].c
}

export const max_height_ms = (size:number): StyleDeclarationValue => {
    if (!(cache?.mxHeight_ms && cache.mxHeight_ms[''+size])) {
        cache.mxHeight_ms = {[''+size]: SS.create({c:{[mobileView]:{maxHeight:`${size}rem`}}})}
    }
    return cache?.mxHeight_ms[''+size].c
}

export const fsize_ms = (size:number): StyleDeclarationValue => {
    if (!(cache?.fsize_ms && cache.fsize_ms[''+size])) {
        cache.fsize_ms = {[''+size]: SS.create({c:{[mobileView]: {fontSize:`${size}rem`}}})}
    }
    return cache?.fsize_ms[''+size].c
}
