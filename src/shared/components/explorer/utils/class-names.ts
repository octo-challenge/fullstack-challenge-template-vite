export const classNames = (
  ...list: (false | null | undefined | string)[]
): string => list.filter(Boolean).join(' ')
