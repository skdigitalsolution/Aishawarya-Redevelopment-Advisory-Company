// Stable tints sampled from supplied cover artwork; no per-frame colour changes.
export const navigationTints = {
  "advisory-planning": "226 226 226",
  "budget-planning": "239 241 241",
  "building-review": "208 205 203",
  "commercial-negotiation": "222 222 222",
  "committee-consultation": "228 226 224",
  "completed-building": "212 212 209",
  "construction-progress": "207 204 199",
  "developer-meeting": "212 213 214",
  "development-planning": "211 211 204",
  "document-checks": "223 221 220",
  "legal-review": "216 214 212",
  "legal-support": "237 239 241",
  "member-discussion": "206 202 197",
  "member-meeting": "214 210 207",
  "new-building": "210 210 204",
  "old-building": "192 191 188",
  "planning-meeting": "215 212 209",
  "pmc-presentation": "227 226 225",
  "property-consultation": "214 213 214",
  "proposal-review": "214 215 214",
  "residential-building": "210 213 210",
  "site-inspection": "206 203 196",
  "society-meeting": "213 212 211",
  "society-members": "226 225 224",
  "waterfront": "197 190 194"
};
export function navigationTint(pathname, coverImage) {
  if (pathname === '/') return '218 227 234';
  return navigationTints[coverImage.split('/').pop().replace('.webp', '')] ?? '228 226 218';
}
