import React from 'react';
import {createIconSet} from 'react-native-vector-icons';
// @ts-ignore
import iconfontInfo from '../../../assets/icons/iconfont.json';

const glyphmap: any = {};
iconfontInfo.glyphs.forEach((glyph: any) => {
    glyphmap[glyph.font_class] = unescape(`%u${glyph.unicode}`);
});

export default createIconSet(
    glyphmap,
    iconfontInfo.font_family,
    'iconfont.ttf'
)