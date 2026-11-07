import { withBaseAssets } from './assetPaths.js';
export const content = withBaseAssets({
  company: {
    name: 'Aishwarya Redevelopment Advisory Company',
    shortName: 'AISHWARYA',
    descriptor: 'Redevelopment Advisory Company',
    tagline: 'Redevelopment | Advisory | Investment | Execution',
    logo: '/assets/company-logo.jpg',
    logoAlt: 'Aishwarya redevelopment company emblem',
    intro:
      'Aishwarya Redevelopment Advisory Company is a Mumbai-based real estate redevelopment advisory and consultancy firm. We help cooperative housing societies, property owners and stakeholders organize information, evaluate options and coordinate the professionals involved in a redevelopment project.',
    background:
      'Our company materials describe an advisory practice built around society readiness, documentation, PMC coordination, developer evaluation, commercial comparison and ongoing project communication. Our role is to support informed decisions and professional coordination throughout the redevelopment journey.',
    philosophy:
      'Clear records, realistic feasibility and accountable communication should guide each project decision. We work with the society’s appointed professionals and keep member priorities central to the advisory process.',
  },
  contact: {
    label: 'Get in Touch',
    title: "Let's Discuss Your Society's Future",
    description: 'Discuss your society redevelopment goals with our experts and get a customized roadmap.',
    formTitle: 'Request a Consultation',
    phone: '+91-9137304005',
    phoneHref: 'tel:+919137304005',
    email: 'sachin.aishwaryaredevelopment@gmail.com',
    additionalEmails: [
      { label: 'Director', address: 'sachin@aishwaryaredevelopment.com' },
      { label: 'Support', address: 'support@aishwaryaredevelopment.com' },
      { label: 'General enquiries', address: 'info@aishwaryaredevelopment.com' },
    ],
    address: 'Mumbai, Maharashtra, India',
    office: 'Office: Goregaon, Mumbai',
    whatsapp: 'https://wa.me/919137304005',
    submit: 'Submit Enquiry',
    sending: 'Sending…',
    success: 'Thank you. Your enquiry has been sent.',
    error: 'Your enquiry could not be sent. Please try again or contact us directly.',
    unconfigured: 'Online enquiries are not configured yet. Please call or email us.',
    required: 'Please complete this field.',
    invalidPhone: 'Please enter a valid 10-digit phone number.',
    placeholder: 'Tell us about your redevelopment requirement...',
    fields: [
      {
        name: 'fullName',
        label: 'Full Name',
      },
      {
        name: 'phone',
        label: 'Phone Number',
      },
      {
        name: 'society',
        label: 'Society Name',
      },
      {
        name: 'location',
        label: 'Location (Area)',
      },
      {
        name: 'message',
        label: 'Message',
      },
    ],
  },
  founder: {
    name: 'Mr. Sachin Murudkar',
    role: 'Founder & Director',
    image: '/assets/founder.jpg',
    alt: 'Mr. Sachin Murudkar, Founder & Director of Aishwarya Redevelopment Advisory Company',
    intro:
      'Mr. Sachin Murudkar leads Aishwarya with a focus on legal clarity, realistic feasibility and the interests of housing societies and property owners.',
    experience:
      'The supplied leadership profile describes a decade of work across Mumbai’s redevelopment and land advisory landscape, including cooperative housing societies, self-redevelopment, CTS plot workflows and title due diligence.',
    philosophy:
      'His approach brings member priorities, property documentation, technical feasibility and developer capability into the same conversation. Long-term value and transparent advice guide the firm’s professional coordination.',
    vision:
      'To help societies and landowners make informed redevelopment decisions through clear documentation, responsible planning and sustained professional support.',
    specializations: [
      'Society and self-redevelopment strategy',
      'Title review and CTS property documentation coordination',
      'Developer evaluation and tender comparison',
      'Feasibility, valuation and development potential',
      'Joint venture and commercial structuring',
      'Municipal and regulatory liaison coordination',
    ],
  },
  values: [
    {
      title: 'Vision',
      body: 'Support well-informed redevelopment that respects communities and the long-term potential of their property.',
    },
    {
      title: 'Mission',
      body: 'Give societies and landowners clear advice, organized documentation and professional coordination from readiness to handover.',
    },
    {
      title: 'Values',
      body: 'Transparency, professional independence, documentation discipline, realistic planning and respect for member interests.',
    },
  ],
  why: [
  {
    "title": "Multiple Professional Options",
    "description": "Compare suitable PMCs and developers against the society’s needs.",
    "icon": "Building2"
  },
  {
    "title": "Society-Focused Support",
    "description": "Keep member needs and the society’s decisions at the centre of the work.",
    "icon": "Users"
  },
  {
    "title": "Better Deal Negotiation",
    "description": "Compare the full offer and seek clear written terms.",
    "icon": "Handshake"
  },
  {
    "title": "Proper Documentation",
    "description": "Organize property papers, meeting records and agreed commitments.",
    "icon": "FileText"
  },
  {
    "title": "Legal Support",
    "description": "Coordinate checks and questions with qualified legal professionals.",
    "icon": "Scale"
  },
  {
    "title": "Budget Clarity",
    "description": "Review costs, payment commitments and changes with the right advisers.",
    "icon": "Coins"
  },
  {
    "title": "Clear Communication",
    "description": "Share regular updates and follow up on member questions.",
    "icon": "Headphones"
  },
  {
    "title": "Responsibility Throughout the Process",
    "description": "Record who is responsible and track agreed actions at each stage.",
    "icon": "ShieldCheck"
  }
],
  expertise: [
    {
      title: 'Society Redevelopment',
      description: 'A structured path from member readiness to handover.',
      icon: 'Users',
      to: '/society-redevelopment',
    },
    {
      title: 'Self-Redevelopment',
      description: 'Understand the responsibilities of a society-led project.',
      icon: 'Building2',
      to: '/self-redevelopment',
    },
    {
      title: 'Legal & Regulatory Advisory',
      description: 'Coordinate title review, records and compliance inputs.',
      icon: 'Scale',
      to: '/services#legal-regulatory-advisory',
    },
    {
      title: 'Financial & Investment Advisory',
      description: 'Assess funding structures, budgets and investment assumptions.',
      icon: 'Coins',
      to: '/services#financial-investment-advisory',
    },
    {
      title: 'Land Acquisition & Due Diligence',
      description: 'Review ownership, land use and transaction requirements.',
      icon: 'MapPin',
      to: '/land-banking',
    },
    {
      title: 'Project Management Consultancy',
      description: 'Coordinate appointed professionals, milestones and reporting.',
      icon: 'Settings',
      to: '/services#technical-project-consultancy',
    },
    {
      title: 'Construction Monitoring',
      description: 'Track progress and specialist quality reviews.',
      icon: 'HardHat',
      to: '/services#construction-monitoring-handover-support',
    },
    {
      title: 'Property Valuation',
      description: 'Evaluate market evidence and property-specific assumptions.',
      icon: 'ChartNoAxesCombined',
      to: '/services#land-property-advisory',
    },
  ],
  stats: [
    {
      value: 10,
      suffix: '+',
      label: 'Years Experience',
      icon: 'Building2',
      verified: true,
      source: 'Client-supplied leadership profile',
    },
    {
      value: 100,
      suffix: '+',
      label: 'Societies Advised',
      icon: 'Users',
      verified: true,
      source: 'Client-supplied leadership profile',
    },
    {
      value: 200,
      suffix: '+',
      label: 'Title & Due Diligence Cases',
      icon: 'FileText',
      verified: true,
      source: 'Client-supplied leadership profile',
    },
    {
      value: 500,
      suffix: '+',
      label: 'CTS Plot Workflows',
      icon: 'Layers',
      verified: true,
      source: 'Client-supplied leadership profile',
    },
  ],
  home: {
    heroLabel: "MUMBAI'S REDEVELOPMENT & REAL ESTATE ADVISORY PARTNER",
    headline: 'Transforming Old Horizons into',
    highlight: 'Modern Landmarks',
    subheadline:
      'Aishwarya Redevelopment Advisory Company helps housing societies, property owners, and stakeholders navigate redevelopment through informed decisions, transparent advisory, and professional coordination.',
    introTitle: 'Your Trusted Redevelopment Advisory Partner',
    founderTitle: 'Leadership Built on Experience & Trust',
    expertiseTitle: 'Comprehensive Real Estate & Redevelopment Advisory',
    processTitle: 'Your Redevelopment Journey, Simplified',
    whyTitle: 'Why Housing Societies Trust Aishwarya',
    projectsTitle: 'Our Projects & Advisory Experience',
    assessmentTitle: 'Is Your Housing Society Ready for Redevelopment?',
    faqTitle: 'Building Confidence Through Clarity',
  },
  ui: {
    services: 'Explore Our Services',
    consult: 'Book a Consultation',
    about: 'Learn More About Us',
    founder: 'Meet Our Founder',
    allServices: 'Explore All 20 Services',
    process: 'Understand the Full Process',
    cases: 'View All Case Studies',
    menu: 'Open navigation',
    closeMenu: 'Close navigation',
    skip: 'Skip to content',
    more: 'Read guide',
    back: 'Back to Knowledge Centre',
    notFound: 'This page could not be found',
    backHome: 'Return to Home',
    whatsapp: 'Chat on WhatsApp',
    all: 'All',
    search: 'Search resources',
    privacy: 'Privacy & Enquiry Information',
    terms: 'Website Terms',
    loading: 'Loading page…',
    readiness: 'Request an Initial Assessment',
    submit: 'Submit Enquiry',
    prepare: 'Preparing…',
    sending: 'Sending…',
  },
  labels: {
    company: 'ABOUT AISHWARYA',
    founder: 'FOUNDER & LEADERSHIP',
    expertise: 'OUR ADVISORY EXPERTISE',
    process: 'THE REDEVELOPMENT JOURNEY',
    why: 'OUR APPROACH',
    projects: 'PROJECTS & CASE STUDIES',
    assessment: 'SOCIETY READINESS',
    faqs: 'QUESTIONS & CLARITY',
    contact: 'GET IN TOUCH',
    knowledge: 'KNOWLEDGE CENTRE',
  },
  topicPages: {
    SocietyRedevelopment: {
      slug: 'society-redevelopment',
      title: 'Society Redevelopment',
      subtitle: 'A clear, coordinated approach to society-led decisions.',
      intro:
        'We support cooperative housing societies through readiness, professional appointments, proposal evaluation and project coordination. Decisions remain with the society, informed by its appointed legal and technical advisers.',
      image: '/assets/architecture.webp',
      items: [
        {
          title: 'Redevelopment Feasibility Study',
          description: 'Review technical, financial and planning assumptions with appointed specialists.',
          icon: 'ClipboardList',
        },
        {
          title: 'Society Readiness Assessment',
          description: 'Clarify member priorities, records, ownership questions and the current stage.',
          icon: 'Users',
        },
        {
          title: 'PMC Appointment Assistance',
          description: 'Compare independent consultants and define their scope and reporting.',
          icon: 'Settings',
        },
        {
          title: 'Developer Selection',
          description: 'Review relevant capability, funding and delivery history.',
          icon: 'Scale',
        },
        {
          title: 'Tendering & Proposal Comparison',
          description: 'Use a common brief and record commercial and technical differences.',
          icon: 'ChartNoAxesCombined',
        },
        {
          title: 'Commercial Negotiation',
          description: 'Coordinate discussion of rehabilitation, specifications, rent and safeguards.',
          icon: 'Handshake',
        },
        {
          title: 'Legal Documentation',
          description: 'Work with the appointed lawyer to review and document agreed terms.',
          icon: 'FileText',
        },
        {
          title: 'Construction Monitoring',
          description: 'Track reporting, specialist site reviews and outstanding commitments.',
          icon: 'HardHat',
        },
        {
          title: 'Final Handover Support',
          description: 'Coordinate completion documents, possession formalities and follow-up.',
          icon: 'KeyRound',
        },
      ],
    },
    SelfRedevelopment: {
      slug: 'self-redevelopment',
      title: 'Self-Redevelopment',
      subtitle: 'Greater involvement calls for careful preparation.',
      intro:
        'Self-redevelopment means the society organizes the project and appoints professional advisers, funding partners and contractors as required. It may provide greater control over design, procurement and project decisions, while placing greater financial, compliance and delivery responsibility on the society.',
      image: '/assets/architecture.webp',
      items: [
        {
          title: 'Potential Advantages',
          description:
            'Consider control over project choices, transparent procurement and allocation of project outcomes. Benefits depend on feasibility and execution; profits or extra area are not guaranteed.',
          icon: 'ClipboardList',
        },
        {
          title: 'Financial Planning',
          description:
            'Prepare a complete cash-flow plan covering construction, professional fees, permissions, rehabilitation, finance and contingency.',
          icon: 'Users',
        },
        {
          title: 'Project Feasibility',
          description: 'Assess member requirements, site conditions, development potential, market assumptions and project risks.',
          icon: 'Settings',
        },
        {
          title: 'Funding & Bank Coordination',
          description:
            'Organize lender discussions and appraisal records. Loan approval, terms and drawdown remain subject to the lender’s assessment.',
          icon: 'Scale',
        },
        {
          title: 'PMC Appointment',
          description: 'Appoint an independent team with a written scope, deliverables and reporting responsibilities.',
          icon: 'ChartNoAxesCombined',
        },
        {
          title: 'Contractor Evaluation',
          description: 'Compare relevant experience, capacity, specifications, commercial terms and contractual safeguards.',
          icon: 'Handshake',
        },
        {
          title: 'Construction Oversight',
          description: 'Coordinate specialist supervision, progress reporting, cost review and issue resolution.',
          icon: 'FileText',
        },
        {
          title: 'Legal & Regulatory Requirements',
          description:
            'Obtain project-specific advice on ownership, member decisions, applicable approvals, registration and contractual obligations.',
          icon: 'HardHat',
        },
      ],
    },
    LandBanking: {
      slug: 'land-banking',
      title: 'Land Banking & Advisory',
      subtitle: 'Evaluate land with a clear view of ownership, use and development potential.',
      intro:
        'The supplied land banking presentation focuses on landowner and investor representation, transaction structuring, title review, development feasibility and coordination of land-use requirements. We present these as advisory services, without guarantees of clear title, liquidity, approvals or investment returns.',
      image: '/assets/concept.webp',
      items: [
        {
          title: 'Strategic Land Banking',
          description: 'Assess long-term holding objectives, location, access, infrastructure assumptions and exit options.',
          icon: 'ClipboardList',
        },
        {
          title: 'Land Acquisition Advisory',
          description: 'Define the acquisition brief and coordinate commercial, legal and technical inputs.',
          icon: 'Users',
        },
        {
          title: 'Land Brokerage',
          description: 'Support property sourcing, owner representation, transaction discussion and closing coordination.',
          icon: 'Settings',
        },
        {
          title: 'Title Verification',
          description: 'Coordinate a qualified legal review of ownership records, title history and encumbrances.',
          icon: 'Scale',
        },
        {
          title: 'Land Due Diligence',
          description: 'Identify documentary gaps, access issues, disputes, land-use constraints and matters requiring specialist review.',
          icon: 'ChartNoAxesCombined',
        },
        {
          title: 'Land Valuation',
          description: 'Review market evidence, permitted use and site-specific assumptions with valuation professionals.',
          icon: 'Handshake',
        },
        {
          title: 'Joint Venture Structuring',
          description: 'Compare outright acquisition, joint venture and development arrangements against the parties’ objectives.',
          icon: 'FileText',
        },
        {
          title: 'Development Potential',
          description: 'Coordinate highest-and-best-use analysis, planning inputs and feasibility assumptions.',
          icon: 'HardHat',
        },
        {
          title: 'Investment Advisory',
          description: 'Examine holding periods, cash flows, risks and alternatives. No investment return is assured.',
          icon: 'KeyRound',
        },
        {
          title: 'Regulatory Approvals',
          description: 'Coordinate review of zoning, conversion, environmental and local authority requirements where applicable.',
          icon: 'MapPin',
        },
      ],
    },
  },
  form: {
    intro:
      'No online submission service is configured. This form prepares your details for an email or WhatsApp handoff. You review and send the message in your chosen app.',
    ready: 'Your draft is ready. Nothing has been sent. Choose email or WhatsApp below and send the message there.',
    sent: 'Your enquiry has been sent. Our team will review the details.',
    failed: 'Your enquiry could not be sent. Please try again, call us or email the team.',
    email: 'Open email draft',
    whatsapp: 'Open WhatsApp draft',
    invalid: 'Please check the highlighted fields.',
    required: 'This field is required.',
    mobile: 'Enter a valid 10-digit Indian mobile number.',
    emailError: 'Enter a valid email address.',
    numberError: 'Enter a positive value within the allowed range; building age and member count must be whole numbers.',
    enquiryTypes: [
      'Society Redevelopment',
      'Self-Redevelopment',
      'Land Banking & Advisory',
      'Legal & Regulatory Advisory',
      'Project Consultancy',
      'Other',
    ],
    notAdvice:
      'This questionnaire organizes information for a professional review. It does not estimate entitlement, project value, additional area or eligibility.',
    assessmentIntro:
      'Share the information you have. Unknown conveyance or structural audit details can be recorded as “Not sure”. The team can explain which records to gather next.',
    optional: 'Optional',
    choose: 'Select an option',
    channel: 'Choose how to contact the team',
    privacy:
      'Your details stay in this browser until you choose a handoff or submit through a configured enquiry service. Do not include identity documents or confidential records.',
  },
  footer: {
    description: 'Professional redevelopment advisory for societies, landowners and property stakeholders in Mumbai.',
    copyright: '© 2026 Aishwarya Redevelopment Advisory Company. All rights reserved.',
    note: 'Advisory and consultancy services. Site-specific legal, technical and financial conclusions require review by qualified professionals.',
    linksTitle: 'Explore',
    servicesTitle: 'Advisory Services',
    contactTitle: 'Contact',
    statsNote: 'Figures are stated in the client-supplied leadership profile.',
  },
});
