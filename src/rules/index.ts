import type { Rule, Shortcut } from '@unocss/core'

import type { FullTheme } from '../theme'
import { textColor } from './color'
import { container, containerShortcuts } from './container'
import { fontFamily, fontSize } from './font'
import { lineClamp } from './line-clamp'
import {
  alignContent,
  alignItems,
  alignSelf,
  aspectRatio,
  boxDecorationBreak,
  boxSizing,
  breakAfter,
  breakBefore,
  breakInside,
  clear,
  columns,
  display,
  flex,
  flexBasic,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  floats,
  fontSmoothing,
  fontStyle,
  fontVariantNumeric,
  fontWeight,
  gap,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridRow,
  gridTemplateColumns,
  gridTemplateRows,
  height,
  inset,
  isolation,
  justifyContent,
  justifyItems,
  justifySelf,
  letterSpacing,
  lineHeight,
  listStyleImage,
  listStylePosition,
  listStyleType,
  margin,
  objectFit,
  objectPosition,
  order,
  overflow,
  overscrollBehavior,
  padding,
  placeContent,
  placeItems,
  placeSelf,
  position,
  textAlign,
  visibility,
  width,
  zIndex,
} from './simples'
import { spaceBetween } from './space'

export const rules: Rule<FullTheme>[] = [
  // Layout
  ...aspectRatio,
  container,
  ...columns,
  ...breakAfter,
  ...breakBefore,
  ...breakInside,
  ...boxDecorationBreak,
  ...boxSizing,
  ...display,
  ...floats,
  ...clear,
  ...isolation,
  ...objectFit,
  ...objectPosition,
  ...overflow,
  ...overscrollBehavior,
  ...position,
  ...inset,
  ...visibility,
  ...zIndex,
  // Flexbox & Grid
  ...flexBasic,
  ...flexDirection,
  ...flexWrap,
  ...flex,
  ...flexGrow,
  ...flexShrink,
  ...order,
  ...gridTemplateColumns,
  ...gridColumn,
  ...gridTemplateRows,
  ...gridRow,
  ...gridAutoFlow,
  ...gridAutoColumns,
  ...gridAutoRows,
  ...gap,
  ...justifyContent,
  ...justifyItems,
  ...justifySelf,
  ...alignContent,
  ...alignItems,
  ...alignSelf,
  ...placeContent,
  ...placeItems,
  ...placeSelf,
  // Spacing
  ...padding,
  ...margin,
  ...spaceBetween,
  // Sizing
  ...width,
  ...height,
  // Typography
  ...fontFamily,
  ...fontSize,
  ...fontSmoothing,
  ...fontStyle,
  ...fontWeight,
  ...fontVariantNumeric,
  ...letterSpacing,
  ...lineClamp,
  ...lineHeight,
  ...listStyleImage,
  ...listStylePosition,
  ...listStyleType,
  ...textAlign,
  // ...textColor
]

export const shortcuts: Shortcut<FullTheme>[] = [containerShortcuts]
