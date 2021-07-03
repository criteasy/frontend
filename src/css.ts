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
export const primaryColor = '#ffffff'
export const accentColor = '#fcd365'
export const accentColorLighter = '#FABC12'
export const shadowDarkColor = 'rgba(174, 174, 192, 0.4)'
export const shadowLightColor = 'rgba(255, 255, 255, 0.787)'
export const themeLightGreyColor = '#EBECF0'


export const mobileView = '@media only screen and (max-width: 830px)'

const cached = (type: string, key: string, val: ()=>any): StyleDeclarationValue => {
    if (!cache[type])
        cache[type] = {[key]: val()};
    else if (!cache[type][key])
        cache[type][key] = val();  
    return cache[type][key].c;
}

// STYLE GENRATOR functions
export const m_rem = (len: number): StyleDeclarationValue => cached('m_rem', ''+len, ()=>SS.create({c:{margin: `${len}rem`}} as DStyle));
export const p_rem = (len: number, val?:string): StyleDeclarationValue => cached('p_rem', ''+(len || val), ()=>SS.create({c:{padding: `${val?val:len+'rem'}`}} as DStyle));
export const m_px = (len: number): StyleDeclarationValue => cached('m_px', ''+len, ()=>SS.create({c:{margin: `${len*10}px`}} as DStyle));
export const p_px = (len: number): StyleDeclarationValue => cached('p_px', ''+len, ()=>SS.create({c:{padding: `${len*10}px`}} as DStyle));
export const m_d_rem = (dir: Direction, len: number): StyleDeclarationValue => cached('m_d_rem', dir+'_'+len, ()=>SS.create({c:{[`margin${dir}`]: `${len}rem`}} as DStyle));
export const p_d_rem = (dir: Direction, len: number): StyleDeclarationValue => cached('p_d_rem', dir+'_'+len, ()=>SS.create({c:{[`padding${dir}`]: `${len}rem`}} as DStyle));
export const m_d_px = (dir: Direction, len: number): StyleDeclarationValue => cached('m_d_px', dir+'_'+len, ()=>SS.create({c:{[`margin${dir}`]: `${len*10}px`}} as DStyle));
export const p_d_px = (dir: Direction, len: number): StyleDeclarationValue => cached('p_d_px', dir+'_'+len, ()=>SS.create({c:{[`padding${dir}`]: `${len*10}px`}} as DStyle));

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
    neo_b_sdw_l: {
        boxShadow: `-12px -12px 20px ${shadowLightColor},  12px 12px 20px ${shadowDarkColor}`
    },

    neo_b_sdw_m: {
        boxShadow: `-7px -7px 12px ${shadowLightColor},  7px 7px 12px ${shadowDarkColor}`
    },
    neo_b_sdw_s: {
        boxShadow: `-3px -3px 5px ${shadowLightColor},  3px 3px 5px ${shadowDarkColor}`
    },

    drk_b_sdw_l: {
        boxShadow: `12px 12px 20px ${shadowDarkColor}`
    },

    neo_b_sdw_il: {
        boxShadow: `inset -12px -12px 20px ${shadowLightColor}, inset 12px 12px 20px ${shadowDarkColor}`
    },

    neo_b_sdw_im: {
        boxShadow: `inset -7px -7px 12px ${shadowLightColor}, inset 7px 7px 12px ${shadowDarkColor}`
    },

    neo_b_sdw_is: {
        boxShadow: `inset -3px -3px 5px ${shadowLightColor}, inset 3px 3px 5px ${shadowDarkColor}`
    },

    drk_b_sdw_il: {
        boxShadow: `inset 12px 12px 20px ${shadowDarkColor}`
    },

    light_text_shadow: {
        textShadow: '1px 1px 0 #fff'
    },

    yellow_text_shadow: {
        textShadow: '1px 1px 0 #fae5a5'
    },

    //postion
    position_rel: {
        position: 'relative',
    },
    position_abs: {
        position: 'absolute',
    },
    position_fixed: {
        position: 'fixed'
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

    disp_none: {
        [mobileView]: {
            display: 'none'
        }
    },
    jstfy_content_center:{
        [mobileView]: {
            justifyContent: 'center'
        }
    },
    jstfy_content_sb:{
        [mobileView]: {
            justifyContent: 'space-between'
        }
    },
    align_items_center: {
        [mobileView]: {
            alignItems: 'center'
        }
    },
    align_content_center: {
        [mobileView]: {
            alignContent:'center'
        }
    },
    flex_wrap: {
        [mobileView]: {
            flexWrap: 'wrap'
        }
    },
    flex_nowrap: {
        [mobileView]: {
            flexWrap: 'nowrap'
        }
    },    
})

export const bdr_rad = (n: number, unit='px'): StyleDeclarationValue => cached('b_rad', ''+n+unit, ()=>SS.create({c:{borderRadius:`${(n*10)+unit}`}}));
export const width = (size:number, unit='rem', calc=""): StyleDeclarationValue => cached('width', calc || ''+size+unit, ()=>SS.create({c:{width:`${calc?calc:size+unit}`}}));
export const max_width = (size:number, unit='rem', calc=""): StyleDeclarationValue => cached('mxwidth', calc || ''+size+unit, ()=>SS.create({c:{maxWidth:`${calc?calc:size+unit}`}}));
export const height = (size:number, unit='rem', calc=""): StyleDeclarationValue => cached('height', calc || ''+size+unit, ()=>SS.create({c:{height:`${calc?calc:size+unit}`}}));
export const max_height = (size:number, unit='rem', calc=""): StyleDeclarationValue => cached('mxheight', calc || ''+size+unit, ()=>SS.create({c:{maxHeight:`${calc?calc:size+unit}`}}));
export const fsize = (size:number, unit='rem'): StyleDeclarationValue => cached('fsize', ''+size+unit, ()=>SS.create({c:{fontSize:`${size+unit}`}}));

// for mobiles
export const border_radius_ms = (n: number): StyleDeclarationValue => cached('brad_ms', ''+n, ()=>SS.create({c:{[mobileView]:{borderRadius:`${n*10}px`}}}));
export const width_ms = (size:number, unit='rem', calc=""): StyleDeclarationValue => cached('width_ms', calc || ''+size+unit, ()=>SS.create({c:{[mobileView]:{width:`${calc?calc:size+unit}`}}}));
export const max_width_ms = (size:number, unit='rem', calc=""): StyleDeclarationValue => cached('mxwidth_ms', calc || ''+size+unit, ()=>SS.create({c:{[mobileView]: {maxWidth:`${calc?calc:size+unit}`}}}))
export const height_ms = (size:number, unit='rem', calc=""): StyleDeclarationValue => cached('height_ms', calc || ''+size+unit, ()=>SS.create({c:{[mobileView]:{height:`${calc?calc:size+unit}`}}}));
export const max_height_ms = (size:number, unit='rem', calc=""): StyleDeclarationValue => cached('mxHeight_ms', calc || ''+size+unit, ()=>SS.create({c:{[mobileView]:{maxHeight:`${calc?calc:size+unit}`}}}));
export const fsize_ms = (size:number): StyleDeclarationValue => cached('fsize_ms', ''+size, ()=>SS.create({c:{[mobileView]: {fontSize:`${size}rem`}}}));
