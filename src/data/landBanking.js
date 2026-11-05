export const landFields = [
 { name: 'fullName', label: 'Full Name', required: true, autoComplete: 'name' },
 { name: 'mobile', label: 'Mobile Number', required: true, type: 'tel', inputMode: 'tel', maxLength: 14, autoComplete: 'tel' },
 { name: 'email', label: 'Email Address', required: true, type: 'email', autoComplete: 'email' },
 { name: 'landLocation', label: 'Land Location', required: true, maxLength: 150 },
 { name: 'landArea', label: 'Total Land Area (include units)', required: true, maxLength: 100 },
 { name: 'zoning', label: 'Zoning Status', type: 'select', required: true, options: ['Residential', 'Commercial', 'Industrial', 'Agricultural', 'Mixed use', 'Not sure', 'Other'] },
 { name: 'roadWidth', label: 'Road Access Width (metres, if known)', type: 'number', min: 0, max: 1000 },
 { name: 'expectedPrice', label: 'Expected Price (include currency, if known)', maxLength: 100 },
 { name: 'ownership', label: 'Property Ownership / Enquirer Type', required: true, type: 'select', options: ['Individual owner', 'Joint owners', 'Company / partnership', 'Society / trust', 'Agent representing an owner', 'Other / not sure'] },
 { name: 'message', label: 'Additional Message', type: 'textarea', maxLength: 1500 },
];
export const landChecks = [
 { title: '1. Property Title Checks', description: 'Collect ownership history, property cards or 7/12 extracts, survey details and available dispute records. Qualified legal advisers review ownership, claims and missing records before a transaction is agreed.' },
 { title: '2. Land Use and Development Study', description: 'Review location, access, current land use, planning limits and infrastructure with the appointed technical team. Study possible uses and costs against the actual site conditions rather than an assumed return.' },
 { title: '3. Government Permissions and Compliance', description: 'Identify the land-use, conversion, environmental and other permissions relevant to the proposal. Record what is already approved, what is pending and which authority or professional is responsible for the next step.' },
];
