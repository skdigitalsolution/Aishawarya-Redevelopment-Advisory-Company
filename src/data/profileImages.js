export const profileImage = (name) => `${import.meta.env.BASE_URL}assets/profile/${name}.webp`;
export const activitySlides = [
  { image: 'society-meeting', title: 'Society Redevelopment Advisory', text: 'Start with member needs, clear records and a shared plan.', to: '/society-redevelopment', alt: 'Illustration of society members discussing redevelopment with advisers' },
  { image: 'advisory-planning', title: 'Professional Consultation', text: 'Discuss the options with the right professionals before making decisions.', to: '/about-us', alt: 'Illustration of a consultation team reviewing architectural plans' },
  { image: 'property-consultation', title: 'Planning and Feasibility', text: 'Review the property, building condition and practical development options.', to: '/services#architectural-planning', alt: 'Illustration of advisers discussing a building model and site plans' },
  { image: 'developer-meeting', title: 'Developer Selection', text: 'Compare experience, financial strength and the terms of each proposal.', to: '/services#developer-checks', alt: 'Illustration of a professional developer evaluation meeting' },
  { image: 'legal-review', title: 'Legal and Documentation', text: 'Organize ownership papers and coordinate checks with qualified legal advisers.', to: '/services#title-search', alt: 'Illustration of a legal adviser reviewing property records' },
  { image: 'site-inspection', title: 'Construction Monitoring', text: 'Follow site progress, agreed milestones and the issues that need attention.', to: '/services#construction-quality', alt: 'Illustration of engineers reviewing work at a construction site' },
  { image: 'residential-building', title: 'Redevelopment and Handover', text: 'Coordinate inspections, completion records and the move into the new building.', to: '/services#handover-support', alt: 'Illustration of a modern residential building used to explain handover' },
];
export const processImages = ['society-members', 'document-checks', 'pmc-presentation', 'planning-meeting', 'proposal-review', 'commercial-negotiation', 'site-inspection', 'new-building'];
export const processActivities = [
 ['Review building age and the structural report.', 'Collect society records and member needs.', 'Agree on the next discussion and missing information.'],
 ['List property cards, conveyance and approved plans.', 'Record missing papers and follow-up owners.', 'Arrange legal checks before key decisions.'],
 ['Compare PMC experience, team and fees.', 'Check independence and reporting arrangements.', 'Record the society’s choice and agreed scope.'],
 ['Study the site with an architect and engineer.', 'Check costs, member needs and development options.', 'Make the assumptions and risks clear.'],
 ['Compare carpet area, corpus and transit rent.', 'Review quality, amenities, timeline and funding.', 'Check security and handover terms with advisers.'],
 ['Record agreed terms and responsibilities.', 'Coordinate independent legal review.', 'Check required decisions before signing.'],
 ['Track site milestones, costs and open issues.', 'Share updates and record member questions.', 'Follow up with the appointed professionals.'],
 ['Review occupation permissions and inspection records.', 'List unfinished work, warranties and maintenance papers.', 'Coordinate possession and close outstanding items.'],
];
