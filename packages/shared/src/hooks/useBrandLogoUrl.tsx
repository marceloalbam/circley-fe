export const useBrandLogoUrl = (brand: string, use: 'filter' | 'product') => {
  const brandCode = brand?.replace(/\s+/g, '-').toLowerCase()
  return `/images/logos/${brandCode}-${use}.webp`
}
