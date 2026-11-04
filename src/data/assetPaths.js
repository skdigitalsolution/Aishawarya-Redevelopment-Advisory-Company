/** Prefix client assets for root hosting or a GitHub Pages repository subpath. */
export function withBaseAssets(value) {
  if (typeof value === 'string') {
    return value.startsWith('/assets/') ? `${import.meta.env?.BASE_URL ?? '/'}${value.slice(1)}` : value;
  }
  if (Array.isArray(value)) return value.map(withBaseAssets);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, withBaseAssets(item)]));
  return value;
}
