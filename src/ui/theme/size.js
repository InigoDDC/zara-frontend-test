import { rem } from 'polished'

export const sizes = {
  /** 8px */
  small: rem(8),
  /** 16px */
  base: rem(16),
  /** 24px */
  medium: rem(24),
  /** 32px */
  large: rem(32),
  /** 48px */
  xLarge: rem(48),
  /** scale with base 4 */
  scale: factor => rem(4 * factor)
}
