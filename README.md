# unocss-preset-tailwindcss (WIP)

A unocss preset that aligns with Tailwind CSS.

Aims to provide a seamless transition for Tailwind users to unocss-preset-tailwindcss.

Switch language: [English](./README.md) | [中文](./README.zh-CN.md)

## Why

unocss is fast, has a great VS Code plugin, and integrates better with frontend toolchains. However, the official built-in preset-wind for unocss does not strictly follow Tailwind's rules, it's too flexible and lacks rule documentation.

Tailwind includes a set of very high design standards, which ensures that my pages look good even without a designer's involvement.

I want developers to focus only on Tailwind's official documentation while enjoying the excellent experience provided by unocss.

For example:

> In `preset-wind`, `m<num>` and `m-<num>` are the same, and `<num>` can have any value. In `Tailwind`, there are fixed specifications, and only `m-[5px]` is considered a user-defined value.

```html
<!-- unocss preset-wind -->
<div class="m-6 m5"></div>
<!-- output -->
<style>
  .m-6 {
    margin: 1.5rem;
  }
  .m5 {
    margin: 1.25rem;
  }
</style>
```

## Progress

### Base Styles

- [] Preflight

### Layout

- [x] Aspect Ratio
- [x] Container
- [x] Columns
- [x] Break After
- [x] Break Before
- [x] Break Inside
- [x] Box Decoration Break
- [x] Box Sizing
- [x] Display
- [x] Floats
- [x] Clear
- [x] Isolation
- [x] Object Fit
- [x] Object Position
- [x] Overflow
- [x] Overscroll Behavior
- [x] Position
- [x] Top / Right / Bottom / Left
- [x] Visibility
- [x] Z-Index

### Flexbox & Grid

- [x] Flex Basis
- [x] Flex Direction
- [x] Flex Wrap
- [x] Flex
- [x] Flex Grow
- [x] Flex Shrink
- [x] Order
- [x] Grid Template Columns
- [x] Grid Column Start / End
- [x] Grid Template Rows
- [x] Grid Row Start / End
- [x] Grid Auto Flow
- [x] Grid Auto Columns
- [x] Grid Auto Rows
- [x] Gap
- [x] Justify Content
- [x] Justify Items
- [x] Justify Self
- [x] Align Content
- [x] Align Items
- [x] Align Self
- [x] Place Content
- [x] Place Items
- [x] Place Self

### Spacing

- [x] Padding
- [x] Margin
- [x] Space Between

### Sizing

- [x] Width
- [x] Min-Width
- [x] Max-Width
- [x] Height
- [x] Min-Height
- [x] Max-Height

### Typography

- [x] Font Family
- [x] Font Size
- [x] Font Smoothing
- [x] Font Style
- [x] Font Weight
- [x] Font Variant Numeric
- [x] Letter Spacing
- [x] Line Clamp
- [x] Line Height
- [x] List Style Image
- [x] List Style Position
- [x] List Style Type
- [x] Text Align
- [] Text Color
- [] Text Decoration
- [] Text Decoration Color
- [] Text Decoration Style
- [] Text Decoration Thickness
- [] Text Underline Offset
- [] Text Transform
- [] Text Overflow
- [] Text Indent
- [] Vertical Align
- [] Whitespace
- [] Word Break
- [] Hyphens
- [] Content

### Backgrounds

- [] Background Attachment
- [] Background Clip
- [] Background Color
- [] Background Origin
- [] Background Position
- [] Background Repeat
- [] Background Size
- [] Background Image
- [] Gradient Color Stops

### Borders

- [] Border Radius
- [] Border Width
- [] Border Color
- [] Border Style
- [] Divide Width
- [] Divide Color
- [] Divide Style
- [] Outline Width
- [] Outline Color
- [] Outline Style
- [] Outline Offset
- [] Ring Width
- [] Ring Color
- [] Ring Offset Width
- [] Ring Offset Color

### Effects

- [] Box Shadow
- [] Box Shadow Color
- [] Opacity
- [] Mix Blend Mode
- [] Background Blend Mode

### Filters

- [] Blur
- [] Brightness
- [] Contrast
- [] Drop Shadow
- [] Grayscale
- [] Hue Rotate
- [] Invert
- [] Saturate
- [] Sepia
- [] Backdrop Blur
- [] Backdrop Brightness
- [] Backdrop Contrast
- [] Backdrop Grayscale
- [] Backdrop Hue Rotate
- [] Backdrop Invert
- [] Backdrop Opacity
- [] Backdrop Saturate
- [] Backdrop Sepia

### Tables

- [] Border Collapse
- [] Border Spacing
- [] Table Layout
- [] Caption Side

### Transitions & Animation

- [] Transition Property
- [] Transition Duration
- [] Transition Timing Function
- [] Transition Delay
- [] Animation

### Transforms

- [] Scale
- [] Rotate
- [] Translate
- [] Skew
- [] Transform Origin

### Interactivity

- [] Accent Color
- [] Appearance
- [] Cursor
- [] Caret Color
- [] Pointer Events
- [] Resize
- [] Scroll Behavior
- [] Scroll Margin
- [] Scroll Padding
- [] Scroll Snap Align
- [] Scroll Snap Stop
- [] Scroll Snap Type
- [] Touch Action
- [] User Select
- [] Will Change

### SVG

- [] Fill
- [] Stroke
- [] Stroke Width

### Accessibility

- [] Screen Readers

### Official Plugins

- [] Typography
- [] Forms
- [] Aspect Ratio
- [] Container Queries
