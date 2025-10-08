// Scale Constants for Raasta Realty Components
// Adjust the SCALE_FACTOR to globally scale all elements up or down
// Values: 0.5 = 50% smaller, 0.8 = 20% smaller, 1.0 = original size, 1.2 = 20% larger

export const SCALE_FACTOR = 0.75; // 25% smaller than original

// Base multiplier function
const scale = (value: number): number => Math.round(value * SCALE_FACTOR);
const scaleFloat = (value: number): number =>
  Number((value * SCALE_FACTOR).toFixed(2));

// FONT SIZES (in rem units, but stored as numbers for easy calculation)
export const FONT_SIZES = {
  // Text sizes
  xs: scaleFloat(0.75), // text-xs (12px)
  sm: scaleFloat(0.875), // text-sm (14px)
  base: scaleFloat(1), // text-base (16px)
  lg: scaleFloat(1.125), // text-lg (18px)
  xl: scaleFloat(1.25), // text-xl (20px)
  "2xl": scaleFloat(1.5), // text-2xl (24px)
  "3xl": scaleFloat(1.875), // text-3xl (30px)
  "4xl": scaleFloat(2.25), // text-4xl (36px)
  "5xl": scaleFloat(3), // text-5xl (48px)
  "6xl": scaleFloat(3.75), // text-6xl (60px)
  "7xl": scaleFloat(4.5), // text-7xl (72px)
} as const;

// SPACING (padding, margin, gap)
export const SPACING = {
  0: 0,
  1: scale(4), // 4px
  2: scale(8), // 8px
  3: scale(12), // 12px
  4: scale(16), // 16px
  5: scale(20), // 20px
  6: scale(24), // 24px
  8: scale(32), // 32px
  10: scale(40), // 40px
  12: scale(48), // 48px
  16: scale(64), // 64px
  20: scale(80), // 80px
} as const;

// SIZES (width, height for icons, buttons, etc.)
export const SIZES = {
  // Icon sizes
  iconXs: scale(12), // 12px
  iconSm: scale(16), // 16px
  iconMd: scale(20), // 20px
  iconLg: scale(24), // 24px
  iconXl: scale(28), // 28px
  icon2xl: scale(32), // 32px
  icon3xl: scale(36), // 36px
  icon4xl: scale(40), // 40px
  icon5xl: scale(48), // 48px

  // Button and container sizes
  buttonSm: {
    width: scale(80), // 80px
    height: scale(32), // 32px
  },
  buttonMd: {
    width: scale(120), // 120px
    height: scale(40), // 40px
  },
  buttonLg: {
    width: scale(160), // 160px
    height: scale(48), // 48px
  },

  // Container sizes
  containerXs: scale(32), // 32px
  containerSm: scale(40), // 40px
  containerMd: scale(48), // 48px
  containerLg: scale(64), // 64px
  containerXl: scale(80), // 80px
  container2xl: scale(96), // 96px
  container3xl: scale(112), // 112px
  container4xl: scale(128), // 128px
} as const;

// BORDER RADIUS
export const BORDER_RADIUS = {
  none: 0,
  sm: scale(2), // 2px
  base: scale(4), // 4px
  md: scale(6), // 6px
  lg: scale(8), // 8px
  xl: scale(12), // 12px
  "2xl": scale(16), // 16px
  "3xl": scale(24), // 24px
  full: "50%", // full circle
} as const;

// LAYOUT SPACING (for sections, containers)
export const LAYOUT = {
  sectionPaddingY: scale(80), // py-20 (80px)
  sectionPaddingX: scale(16), // px-4 (16px)
  containerMaxWidth: "7xl", // max-w-7xl (unchanged)
  contentGap: scale(64), // gap-16 (64px)
  cardPadding: scale(32), // p-8 (32px)
  gridGap: scale(32), // gap-8 (32px)
} as const;

// HELPER FUNCTIONS TO GENERATE CSS VALUES
export const css = {
  // Font size with rem unit
  fontSize: (size: keyof typeof FONT_SIZES) => `${FONT_SIZES[size]}rem`,

  // Spacing with px unit
  spacing: (size: keyof typeof SPACING) => `${SPACING[size]}px`,

  // Border radius with px unit
  borderRadius: (size: keyof typeof BORDER_RADIUS) =>
    typeof BORDER_RADIUS[size] === "string"
      ? BORDER_RADIUS[size]
      : `${BORDER_RADIUS[size]}px`,

  // Icon size with px unit
  iconSize: (icon: string) => {
    const key = `icon${icon}` as keyof typeof SIZES;
    return SIZES[key] ? `${SIZES[key]}px` : `${scale(20)}px`; // default 20px
  },

  // Container size with px unit
  containerSize: (size: string) => {
    const key = `container${size}` as keyof typeof SIZES;
    return SIZES[key] ? `${SIZES[key]}px` : `${scale(48)}px`; // default 48px
  },
} as const;

// TAILWIND CLASS MAPPINGS (for easy replacement in templates)
export const TAILWIND_CLASSES = {
  // Font sizes
  "text-xs": `text-[${css.fontSize("xs")}]`,
  "text-sm": `text-[${css.fontSize("sm")}]`,
  "text-base": `text-[${css.fontSize("base")}]`,
  "text-lg": `text-[${css.fontSize("lg")}]`,
  "text-xl": `text-[${css.fontSize("xl")}]`,
  "text-2xl": `text-[${css.fontSize("2xl")}]`,
  "text-3xl": `text-[${css.fontSize("3xl")}]`,
  "text-4xl": `text-[${css.fontSize("4xl")}]`,
  "text-5xl": `text-[${css.fontSize("5xl")}]`,
  "text-6xl": `text-[${css.fontSize("6xl")}]`,
  "text-7xl": `text-[${css.fontSize("7xl")}]`,

  // Padding
  "p-1": `p-[${css.spacing(1)}]`,
  "p-2": `p-[${css.spacing(2)}]`,
  "p-3": `p-[${css.spacing(3)}]`,
  "p-4": `p-[${css.spacing(4)}]`,
  "p-5": `p-[${css.spacing(5)}]`,
  "p-6": `p-[${css.spacing(6)}]`,
  "p-8": `p-[${css.spacing(8)}]`,
  "p-10": `p-[${css.spacing(10)}]`,
  "p-12": `p-[${css.spacing(12)}]`,
  "p-16": `p-[${css.spacing(16)}]`,
  "p-20": `p-[${css.spacing(20)}]`,

  // Padding Y
  "py-1": `py-[${css.spacing(1)}]`,
  "py-2": `py-[${css.spacing(2)}]`,
  "py-3": `py-[${css.spacing(3)}]`,
  "py-4": `py-[${css.spacing(4)}]`,
  "py-5": `py-[${css.spacing(5)}]`,
  "py-6": `py-[${css.spacing(6)}]`,
  "py-8": `py-[${css.spacing(8)}]`,
  "py-10": `py-[${css.spacing(10)}]`,
  "py-12": `py-[${css.spacing(12)}]`,
  "py-16": `py-[${css.spacing(16)}]`,
  "py-20": `py-[${css.spacing(20)}]`,

  // Padding X
  "px-1": `px-[${css.spacing(1)}]`,
  "px-2": `px-[${css.spacing(2)}]`,
  "px-3": `px-[${css.spacing(3)}]`,
  "px-4": `px-[${css.spacing(4)}]`,
  "px-5": `px-[${css.spacing(5)}]`,
  "px-6": `px-[${css.spacing(6)}]`,
  "px-8": `px-[${css.spacing(8)}]`,
  "px-10": `px-[${css.spacing(10)}]`,
  "px-12": `px-[${css.spacing(12)}]`,
  "px-16": `px-[${css.spacing(16)}]`,
  "px-20": `px-[${css.spacing(20)}]`,

  // Margin
  "m-1": `m-[${css.spacing(1)}]`,
  "m-2": `m-[${css.spacing(2)}]`,
  "m-3": `m-[${css.spacing(3)}]`,
  "m-4": `m-[${css.spacing(4)}]`,
  "m-5": `m-[${css.spacing(5)}]`,
  "m-6": `m-[${css.spacing(6)}]`,
  "m-8": `m-[${css.spacing(8)}]`,
  "m-10": `m-[${css.spacing(10)}]`,
  "m-12": `m-[${css.spacing(12)}]`,
  "m-16": `m-[${css.spacing(16)}]`,
  "m-20": `m-[${css.spacing(20)}]`,

  // Margin bottom
  "mb-1": `mb-[${css.spacing(1)}]`,
  "mb-2": `mb-[${css.spacing(2)}]`,
  "mb-3": `mb-[${css.spacing(3)}]`,
  "mb-4": `mb-[${css.spacing(4)}]`,
  "mb-5": `mb-[${css.spacing(5)}]`,
  "mb-6": `mb-[${css.spacing(6)}]`,
  "mb-8": `mb-[${css.spacing(8)}]`,
  "mb-10": `mb-[${css.spacing(10)}]`,
  "mb-12": `mb-[${css.spacing(12)}]`,
  "mb-16": `mb-[${css.spacing(16)}]`,
  "mb-20": `mb-[${css.spacing(20)}]`,

  // Gap
  "gap-1": `gap-[${css.spacing(1)}]`,
  "gap-2": `gap-[${css.spacing(2)}]`,
  "gap-3": `gap-[${css.spacing(3)}]`,
  "gap-4": `gap-[${css.spacing(4)}]`,
  "gap-5": `gap-[${css.spacing(5)}]`,
  "gap-6": `gap-[${css.spacing(6)}]`,
  "gap-8": `gap-[${css.spacing(8)}]`,
  "gap-10": `gap-[${css.spacing(10)}]`,
  "gap-12": `gap-[${css.spacing(12)}]`,
  "gap-16": `gap-[${css.spacing(16)}]`,
  "gap-20": `gap-[${css.spacing(20)}]`,

  // Border radius
  rounded: `rounded-[${css.borderRadius("base")}]`,
  "rounded-sm": `rounded-[${css.borderRadius("sm")}]`,
  "rounded-md": `rounded-[${css.borderRadius("md")}]`,
  "rounded-lg": `rounded-[${css.borderRadius("lg")}]`,
  "rounded-xl": `rounded-[${css.borderRadius("xl")}]`,
  "rounded-2xl": `rounded-[${css.borderRadius("2xl")}]`,
  "rounded-3xl": `rounded-[${css.borderRadius("3xl")}]`,
  "rounded-full": `rounded-full`,

  // Width/Height for common elements
  "w-4": `w-[${scale(16)}px]`,
  "w-5": `w-[${scale(20)}px]`,
  "w-6": `w-[${scale(24)}px]`,
  "w-8": `w-[${scale(32)}px]`,
  "w-10": `w-[${scale(40)}px]`,
  "w-12": `w-[${scale(48)}px]`,
  "w-16": `w-[${scale(64)}px]`,
  "w-20": `w-[${scale(80)}px]`,
  "w-24": `w-[${scale(96)}px]`,
  "w-28": `w-[${scale(112)}px]`,
  "w-32": `w-[${scale(128)}px]`,

  "h-4": `h-[${scale(16)}px]`,
  "h-5": `h-[${scale(20)}px]`,
  "h-6": `h-[${scale(24)}px]`,
  "h-8": `h-[${scale(32)}px]`,
  "h-10": `h-[${scale(40)}px]`,
  "h-12": `h-[${scale(48)}px]`,
  "h-16": `h-[${scale(64)}px]`,
  "h-20": `h-[${scale(80)}px]`,
  "h-24": `h-[${scale(96)}px]`,
  "h-28": `h-[${scale(112)}px]`,
  "h-32": `h-[${scale(128)}px]`,
} as const;

// PRESET COMPONENT CLASSES (commonly used combinations)
export const COMPONENT_CLASSES = {
  // Section containers
  section: `py-[${css.spacing(20)}] px-[${css.spacing(
    4
  )}] relative overflow-hidden`,

  // Card containers
  cardBase: `backdrop-blur-xl border p-[${css.spacing(
    6
  )}] rounded-[${css.borderRadius("xl")}] shadow-xl`,
  cardLarge: `backdrop-blur-xl border p-[${css.spacing(
    8
  )}] rounded-[${css.borderRadius("2xl")}] shadow-2xl`,

  // Button styles
  buttonPrimary: `px-[${css.spacing(8)}] py-[${css.spacing(
    4
  )}] rounded-[${css.borderRadius(
    "xl"
  )}] font-bold transition-all duration-300 hover:scale-105 shadow-xl`,
  buttonSecondary: `px-[${css.spacing(6)}] py-[${css.spacing(
    3
  )}] rounded-[${css.borderRadius(
    "lg"
  )}] font-medium transition-all duration-300 hover:scale-105 shadow-lg`,

  // Icon containers
  iconContainerSm: `w-[${scale(48)}px] h-[${scale(
    48
  )}px] rounded-[${css.borderRadius("xl")}] flex items-center justify-center`,
  iconContainerMd: `w-[${scale(64)}px] h-[${scale(
    64
  )}px] rounded-[${css.borderRadius("2xl")}] flex items-center justify-center`,
  iconContainerLg: `w-[${scale(80)}px] h-[${scale(
    80
  )}px] rounded-[${css.borderRadius("3xl")}] flex items-center justify-center`,

  // Text styles
  headingXl: `text-[${css.fontSize("4xl")}] md:text-[${css.fontSize(
    "5xl"
  )}] font-black`,
  headingLg: `text-[${css.fontSize("3xl")}] md:text-[${css.fontSize(
    "4xl"
  )}] font-black`,
  headingMd: `text-[${css.fontSize("2xl")}] md:text-[${css.fontSize(
    "3xl"
  )}] font-bold`,
  headingSm: `text-[${css.fontSize("xl")}] md:text-[${css.fontSize(
    "2xl"
  )}] font-bold`,

  // Layout
  maxContainer: "max-w-7xl mx-auto relative z-10",
  grid: `grid gap-[${css.spacing(8)}]`,
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
} as const;

const scaleConstants = {
  SCALE_FACTOR,
  FONT_SIZES,
  SPACING,
  SIZES,
  BORDER_RADIUS,
  LAYOUT,
  css,
  TAILWIND_CLASSES,
  COMPONENT_CLASSES,
};

export default scaleConstants;
