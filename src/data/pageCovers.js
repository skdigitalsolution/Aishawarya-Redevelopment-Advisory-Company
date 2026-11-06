const scene = (image, position = 'center') => ({ image: `/assets/profile/${image}.webp`, position });
/** Contextual supplied artwork, not evidence of completed company projects. */
export const pageCovers = {
  '/about-us': scene('developer-meeting'),
  '/founder-leadership': scene('committee-consultation'),
  '/services': scene('planning-meeting'),
  '/society-redevelopment': scene('society-meeting'),
  '/self-redevelopment': scene('residential-building'),
  '/land-banking': scene('development-planning', 'center 65%'),
  '/redevelopment-process': scene('site-inspection'),
  '/projects': scene('new-building', 'center 45%'),
  '/knowledge-centre': scene('document-checks'),
  '/contact-us': scene('member-meeting'),
  '/privacy': scene('legal-review'),
  '/terms': scene('legal-support'),
};
export const articleCovers = {
  'society-redevelopment': scene('society-members'),
  'self-redevelopment': scene('residential-building'),
  'maharera': scene('legal-review'),
  'fsi-tdr': scene('development-planning'),
  'dcpr-2034': scene('advisory-planning'),
  'property-title-verification': scene('document-checks'),
  'deemed-conveyance': scene('legal-support'),
  'developer-selection': scene('developer-meeting'),
  'pmc-appointment': scene('pmc-presentation'),
  'redevelopment-faqs': scene('member-discussion'),
};
export function getPageCover(pathname) {
  if (pathname.startsWith('/knowledge-centre/')) return articleCovers[pathname.split('/').pop()] ?? scene('document-checks');
  return pageCovers[pathname] ?? scene('waterfront');
}
