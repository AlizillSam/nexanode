export const brand = {
  name: 'NexaNode',
  nameParts: ['Nexa', 'Node'] as const,
  tagline: 'Where Automation Meets Intelligence',
  mission:
    'Bringing enterprise-grade IoT, automation, and AI content production to Pakistani businesses.',
  metaDescription:
    'NexaNode is a Pakistan-based technology company deploying industrial & home IoT networks, enterprise RPA bot fleets, and an in-house AI content studio — with local, on-ground support.',
  email: 'hello@nexanode.pk',
  careersEmail: 'careers@nexanode.pk',
  phone: '+92 300 1234567',
  whatsapp: '923001234567',
  whatsappDisplay: '+92 300 1234567',
  address: 'Suite 402, Emerald Tower, Clifton, Karachi, Pakistan',
  hours: 'Mon–Sat, 9:00 AM – 7:00 PM (PKT)',
  socials: {
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/923001234567',
  },
  promoCode: 'LAUNCH20',
  slotsLeft: 7,
}

export type ServiceColor = 'primary' | 'cyan' | 'violet' | 'success'

export type SubService = {
  slug: string
  name: string
  short: string
  description: string
  includes: string[]
  whoFor: string
  price: string
}

export type Service = {
  slug: string
  name: string
  navDescription: string
  headline: string
  intro: string
  icon: string
  color: ServiceColor
  image: string
  whatsIncluded: string[]
  whoFor: string
  timeline: string
  startingPrice: string
  process: { title: string; body: string }[]
  caseStudy: { title: string; client: string; result: string }
  faqs: { q: string; a: string }[]
  subServices: SubService[]
}

export const services: Service[] = [
  {
    slug: 'home-iot',
    name: 'Home & Building IoT',
    navDescription: 'Smart lighting, security, and climate — controlled from your phone.',
    headline: 'Smart Homes, Built Around You',
    intro:
      'We design and install connected home systems that are actually reliable — lighting, security, climate, and voice control that work together on one app, backed by local support.',
    icon: 'house',
    color: 'cyan',
    image: '/images/home-iot.png',
    whatsIncluded: [
      'On-site survey and custom automation plan',
      'Single-app control for every connected device',
      'Voice assistant integration (Alexa / Google Home)',
      'Secure local + cloud hub with encrypted access',
      'Handover training for your household',
      'Optional maintenance retainer',
    ],
    whoFor:
      'Homeowners, apartment residents, and building managers who want convenience, security, and lower energy bills without juggling five different apps.',
    timeline: '3–10 days',
    startingPrice: 'From PKR 30,000',
    process: [
      { title: 'Discover', body: 'We walk your space and map what you want automated.' },
      { title: 'Design', body: 'We spec the devices, hub, and scenes for your layout.' },
      { title: 'Deploy', body: 'Our team installs, configures, and tests everything.' },
      { title: 'Support', body: 'We train you and stay on call for tweaks.' },
    ],
    caseStudy: {
      title: 'Smart Home Retrofit — DHA Lahore',
      client: 'Private Residence',
      result: 'Retrofitted a 5-bedroom home with unified lighting, locks, and climate in 6 days.',
    },
    faqs: [
      { q: 'Will this work with my existing appliances?', a: 'In most cases yes — we use smart plugs, relays, and IR bridges to bring older devices online.' },
      { q: 'Do I need fast internet?', a: 'A basic broadband connection is enough. Core automations keep running locally even if the internet drops.' },
      { q: 'Is it secure?', a: 'All access is encrypted and hub-authenticated. We never expose devices directly to the public internet.' },
    ],
    subServices: [
      { slug: 'starter-setup', name: 'Smart Home Starter Setup', short: 'A simple first step into home automation.', description: 'The easiest way to go smart: app-controlled lighting and plugs on one hub, installed and configured for you.', includes: ['Smart lighting for up to 4 rooms', 'Smart plugs for key appliances', '1 central hub', 'Mobile app control', 'Basic automation scenes'], whoFor: 'First-time smart-home owners who want a clean, no-hassle starting point.', price: 'PKR 45,000' },
      { slug: 'security-surveillance', name: 'Smart Security & Surveillance', short: 'See and secure your home from anywhere.', description: 'Motion-activated cameras, smart locks, and instant alerts so you always know what is happening at home.', includes: ['Motion-activated cameras', 'Smart door locks', 'Real-time phone alerts', 'Cloud + local recording', 'Remote lock/unlock'], whoFor: 'Families and frequent travellers who want peace of mind and remote access.', price: 'PKR 75,000' },
      { slug: 'climate-energy', name: 'Smart Climate & Energy Monitoring', short: 'Comfort that pays for itself.', description: 'Automated AC/thermostat control and a live energy dashboard that helps you cut your monthly bill.', includes: ['Smart thermostat / AC control', 'Live energy consumption dashboard', 'Scheduling & geofencing', 'High-usage alerts', 'Monthly savings report'], whoFor: 'Households and offices fighting high electricity bills in the Pakistani climate.', price: 'PKR 60,000' },
      { slug: 'full-smart-home', name: 'Full Smart Home Package', short: 'Everything, working as one system.', description: 'Lighting, security, climate, and voice control bundled into one cohesive, professionally installed system.', includes: ['Whole-home smart lighting', 'Security & surveillance suite', 'Climate & energy control', 'Voice assistant integration', 'Custom automation scenes', 'Priority handover training'], whoFor: 'Homeowners who want the complete experience installed in one go.', price: 'PKR 150,000' },
      { slug: 'voice-automation', name: 'Voice Assistant & Automation Scenes', short: 'Talk to your home.', description: 'Custom routines and voice control that tie your existing smart devices into effortless daily scenes.', includes: ['Alexa / Google Home setup', 'Custom voice routines', '“Good morning” / “Away” scenes', 'Multi-device grouping', 'Family voice profiles'], whoFor: 'People who already own smart devices and want them to feel seamless.', price: 'PKR 30,000' },
    ],
  },
  {
    slug: 'industrial-iot',
    name: 'Industrial IoT',
    navDescription: 'Turn machines, meters, and sensors into a live dashboard.',
    headline: 'Turn Your Factory Floor Into a Live Dashboard',
    intro:
      'We instrument your plant with sensors and gateways, then stream everything into a real-time dashboard — so you catch failures before they cost you a shift.',
    icon: 'factory',
    color: 'primary',
    image: '/images/industrial-iot.png',
    whatsIncluded: [
      'Site assessment and sensor plan',
      'Industrial-grade sensors and gateways',
      'Real-time cloud dashboard & reporting',
      'Downtime and anomaly alerting',
      'Integration with existing SCADA/ERP',
      'Operator and management training',
    ],
    whoFor:
      'Factory owners, plant managers, and operations heads who are running blind on machine health, energy use, or output.',
    timeline: '3–8 weeks',
    startingPrice: 'From PKR 250,000',
    process: [
      { title: 'Discover', body: 'We audit your machines, utilities, and pain points.' },
      { title: 'Design', body: 'We select sensors and design the data pipeline.' },
      { title: 'Deploy', body: 'We install hardware and stand up the dashboard.' },
      { title: 'Support', body: 'We tune alerts and monitor system health.' },
    ],
    caseStudy: {
      title: 'Smart Warehouse Rollout — Karachi',
      client: 'Textile Exporter',
      result: 'Live machine-health monitoring cut unplanned downtime by an estimated 30%.',
    },
    faqs: [
      { q: 'Do you support older machines?', a: 'Yes. We use external sensors (vibration, temperature, current) so we do not need vendor APIs to monitor legacy equipment.' },
      { q: 'Where does the data live?', a: 'You choose — cloud, on-premise, or hybrid. We can keep sensitive plant data entirely on-site.' },
      { q: 'Can it integrate with our ERP?', a: 'We expose clean APIs and can push data into most ERP/MES systems.' },
    ],
    subServices: [
      { slug: 'asset-monitoring', name: 'Remote Asset Monitoring', short: 'Know your machine health in real time.', description: 'Sensors plus a cloud dashboard that show the health of every critical machine, from anywhere.', includes: ['Vibration & temperature sensors', 'Cloud monitoring dashboard', 'Historical trend logging', 'Threshold alerts', 'Multi-site view'], whoFor: 'Plants with critical rotating equipment that cannot afford surprise failures.', price: 'PKR 250,000' },
      { slug: 'predictive-maintenance', name: 'Predictive Maintenance Setup', short: 'Fix it before it breaks.', description: 'Vibration and temperature analytics that flag degrading equipment and alert you before downtime hits.', includes: ['Predictive analytics engine', 'Downtime alerting', 'Failure-pattern detection', 'Maintenance scheduling', 'Monthly health reports'], whoFor: 'Operations teams tired of reactive, emergency repairs.', price: 'PKR 350,000' },
      { slug: 'scada-integration', name: 'SCADA / Industrial Dashboard Integration', short: 'One screen for the whole plant.', description: 'Real-time plant-wide monitoring and reporting, integrated with your control systems.', includes: ['SCADA data integration', 'Custom KPI dashboards', 'Automated shift reports', 'Role-based access', 'Alarm management'], whoFor: 'Larger facilities that need a unified operational view.', price: 'PKR 400,000' },
      { slug: 'energy-metering', name: 'Smart Energy & Utility Metering', short: 'Track every unit you consume.', description: 'Facility-wide automated metering of electricity, gas, and water with cost breakdowns per line.', includes: ['Smart energy meters', 'Per-line consumption tracking', 'Cost allocation reports', 'Peak-load alerts', 'Sustainability reporting'], whoFor: 'Facilities where utility bills are a major, unexplained cost.', price: 'PKR 300,000' },
      { slug: 'custom-sensor-network', name: 'Custom Sensor Network Deployment', short: 'Built for your exact floor.', description: 'A bespoke sensor and gateway rollout engineered around your specific factory or warehouse.', includes: ['Custom sensor selection', 'Gateway & network design', 'Site-wide installation', 'Data pipeline setup', 'Ongoing calibration'], whoFor: 'Complex sites that off-the-shelf kits cannot cover.', price: 'Custom — Get Quote' },
    ],
  },
  {
    slug: 'rpa-automation',
    name: 'RPA & Enterprise Automation',
    navDescription: 'Software bots that do the copy-paste work for you.',
    headline: 'Stop Paying People to Copy-Paste',
    intro:
      'We find the repetitive, rule-based work draining your team and hand it to software bots — so your people do judgement work, not data entry.',
    icon: 'bot',
    color: 'violet',
    image: '/images/rpa-automation.png',
    whatsIncluded: [
      'Process discovery workshop',
      'ROI-backed automation roadmap',
      'Bot development & testing',
      'Integration with your existing tools',
      'Governance, logging & error handling',
      'Bot monitoring and support',
    ],
    whoFor:
      'Finance, operations, HR, and support teams buried in repetitive back-office work across spreadsheets, portals, and email.',
    timeline: '2–10 weeks',
    startingPrice: 'From PKR 40,000',
    process: [
      { title: 'Discover', body: 'We map your manual workflows and quantify the cost.' },
      { title: 'Design', body: 'We prioritise by ROI and design each bot.' },
      { title: 'Deploy', body: 'We build, test, and roll out the bots.' },
      { title: 'Support', body: 'We monitor, fix, and optimise over time.' },
    ],
    caseStudy: {
      title: 'Invoice Automation Bot — Lahore',
      client: 'Accounting Firm',
      result: 'Automated invoice entry that saved roughly 120 staff-hours per month.',
    },
    faqs: [
      { q: 'Which platforms do you build on?', a: 'UiPath, Automation Anywhere, and Microsoft Power Automate — we recommend based on your stack and budget.' },
      { q: 'Will bots break when software updates?', a: 'We build resilient bots with error handling and monitor them, fixing breakages fast under a maintenance plan.' },
      { q: 'Do we need to replace our systems?', a: 'No. Bots work on top of your existing applications, exactly like a human user would.' },
    ],
    subServices: [
      { slug: 'automation-audit', name: 'Process Discovery & Automation Audit', short: 'Find out what is worth automating.', description: 'A structured assessment of your manual workflows with a clear, ROI-backed report on what to automate first.', includes: ['Workflow interviews & mapping', 'Automation opportunity scoring', 'ROI & payback estimates', 'Prioritised roadmap', 'Executive summary report'], whoFor: 'Any organisation that suspects it is wasting hours but is not sure where.', price: 'PKR 40,000' },
      { slug: 'single-bot', name: 'Single-Process Bot Build', short: 'Automate one painful workflow.', description: 'We build, test, and deploy one production-ready bot for a single high-value process.', includes: ['One end-to-end automated workflow', 'Error handling & logging', 'System integrations', 'User acceptance testing', '30-day post-launch support'], whoFor: 'Teams with one obvious, repetitive process (invoice entry, data migration).', price: 'PKR 120,000' },
      { slug: 'multi-department', name: 'Multi-Department Automation Package', short: 'Automate across teams.', description: 'Three to five automated workflows spanning multiple departments, delivered as one coordinated project.', includes: ['3–5 automated workflows', 'Cross-team integration', 'Central bot orchestration', 'Shared monitoring dashboard', 'Team training'], whoFor: 'Growing companies ready to scale automation beyond one team.', price: 'PKR 350,000' },
      { slug: 'whatsapp-crm-automation', name: 'WhatsApp / CRM Workflow Automation', short: 'Automate customer conversations.', description: 'Automated customer messaging, order updates, and lead workflows connected to WhatsApp and your CRM.', includes: ['WhatsApp Business API flows', 'CRM lead & order sync', 'Automated replies & routing', 'Broadcast campaigns', 'Reporting dashboard'], whoFor: 'D2C brands and sales teams drowning in manual WhatsApp follow-ups.', price: 'PKR 80,000' },
      { slug: 'enterprise-rollout', name: 'Enterprise RPA Rollout', short: 'A governed bot fleet.', description: 'A full bot fleet with governance, orchestration, and support across UiPath, Automation Anywhere, or Power Automate.', includes: ['Full bot fleet deployment', 'Centre-of-excellence setup', 'Governance & security controls', 'Orchestration & scheduling', 'SLA-backed support'], whoFor: 'Large enterprises standardising automation across the organisation.', price: 'Custom — Get Quote' },
    ],
  },
  {
    slug: 'ai-content',
    name: 'AI Content Generation',
    navDescription: 'A 4-machine AI studio: script, voice, video, publish.',
    headline: "Content, Produced by Our AI Studio — Not a Freelancer's Inbox",
    intro:
      'Our in-house AI content studio runs a four-machine pipeline — scripting, voice, video, and publishing — so you get consistent, on-brand short-form content on a schedule, not on a maybe.',
    icon: 'clapperboard',
    color: 'violet',
    image: '/images/ai-content.png',
    whatsIncluded: [
      'Brand voice & content strategy setup',
      'AI-scripted, on-brand copy',
      'AI voiceover and audio production',
      'AI-generated short-form video',
      'Multi-platform formatting & publishing',
      'Monthly performance reporting',
    ],
    whoFor:
      'D2C brands, agencies, and businesses that need a steady stream of social/video content without hiring a full production team.',
    timeline: 'Ongoing monthly',
    startingPrice: 'From PKR 15,000',
    process: [
      { title: 'Script', body: 'PC1 drafts on-brand scripts for each platform.' },
      { title: 'Audio', body: 'PC2 produces AI voiceover and narration.' },
      { title: 'Video', body: 'PC3 generates and edits the short-form video.' },
      { title: 'Publish', body: 'PC4 handles QC, rendering, and multi-platform publishing.' },
    ],
    caseStudy: {
      title: 'AI Content Pipeline Launch',
      client: 'D2C E-commerce Brand',
      result: 'Stood up a monthly pipeline producing 40+ short-form videos across 3 platforms.',
    },
    faqs: [
      { q: 'Who owns the content?', a: 'You do. All delivered scripts, audio, and video are yours to use commercially, in full.' },
      { q: 'Is it obviously “AI”?', a: 'No. We direct, edit, and QC every asset so it stays on-brand and human-feeling.' },
      { q: 'Can you match our brand voice?', a: 'Yes — we set up a brand voice profile up front so every batch is consistent.' },
    ],
    subServices: [
      { slug: 'script-writing', name: 'AI Script Writing Package', short: 'On-brand scripts, in batches.', description: 'AI-generated scripts for social, video, and ads — directed and edited to match your brand voice.', includes: ['Batch of platform-ready scripts', 'Brand voice tuning', 'Hooks & CTA variations', 'SEO-aware copy', '1 revision round'], whoFor: 'Brands that need a steady flow of content ideas and scripts.', price: 'PKR 15,000' },
      { slug: 'voice-audio', name: 'AI Voice & Audio Production', short: 'Studio-quality voice, no studio.', description: 'AI voiceover, narration, and podcast audio, produced and cleaned to broadcast quality.', includes: ['AI voiceover in multiple voices', 'Narration & podcast audio', 'Noise cleanup & mastering', 'Background music mix', 'Multiple format exports'], whoFor: 'Creators and brands needing voice content without recording sessions.', price: 'PKR 20,000' },
      { slug: 'video-generation', name: 'AI Video Generation Package', short: 'Reels, TikToks, and Shorts.', description: 'Full AI-produced short-form videos, edited and formatted for every vertical platform.', includes: ['AI-generated short-form videos', 'Captions & motion graphics', 'Platform-specific formatting', 'Brand overlays', 'Batch delivery'], whoFor: 'Brands that want to be everywhere on short-form video.', price: 'PKR 35,000' },
      { slug: 'full-pipeline', name: 'Full AI Content Pipeline', short: 'End-to-end, every month.', description: 'A monthly batch running through all four machines — script, audio, video, publish — on a schedule.', includes: ['Monthly content calendar', 'Scripts, audio & video', 'Multi-platform publishing', 'Performance reporting', 'Dedicated content lead'], whoFor: 'Businesses that want a reliable, hands-off content engine.', price: 'PKR 90,000 / mo' },
      { slug: 'infrastructure-setup', name: 'AI Content Infrastructure Setup', short: 'Build your own studio.', description: 'We build your in-house AI content pipeline and bots so your team can run it themselves.', includes: ['Pipeline architecture design', 'Machine & tool setup', 'Custom automation bots', 'Team training & handover', 'Documentation'], whoFor: 'Agencies and larger brands that want to own their production stack.', price: 'Custom — Get Quote' },
    ],
  },
  {
    slug: 'maintenance',
    name: 'Maintenance & Upgradation',
    navDescription: 'We keep your IoT and RPA systems running and up to date.',
    headline: 'Already Automated? We Keep It Running.',
    intro:
      'Automation is only valuable while it works. We monitor, patch, fix, and upgrade already-deployed IoT and RPA systems — whether we built them or not.',
    icon: 'wrench',
    color: 'success',
    image: '/images/maintenance.png',
    whatsIncluded: [
      'Full diagnostic of your existing setup',
      'Proactive monitoring & patching',
      'Bot and device issue resolution',
      'Performance optimisation',
      'Legacy system upgrade paths',
      'Guaranteed response times (SLA plans)',
    ],
    whoFor:
      'Any business already running IoT or RPA systems that need dependable upkeep, faster fixes, or a path off ageing setups.',
    timeline: 'Ongoing / per-project',
    startingPrice: 'From PKR 20,000',
    process: [
      { title: 'Discover', body: 'We audit the current state of your deployment.' },
      { title: 'Design', body: 'We plan the maintenance or upgrade scope.' },
      { title: 'Deploy', body: 'We fix, patch, and upgrade as agreed.' },
      { title: 'Support', body: 'We keep monitoring under your chosen plan.' },
    ],
    caseStudy: {
      title: 'Legacy RPA Recovery',
      client: 'Logistics Company, Karachi',
      result: 'Recovered a fleet of broken bots and cut recurring failures to near zero.',
    },
    faqs: [
      { q: 'Do you maintain systems you did not build?', a: 'Yes. We start with a health check, then take over monitoring and support.' },
      { q: 'How fast do you respond?', a: 'Standard plans respond within one business day; the Priority SLA plan guarantees faster, defined response times.' },
      { q: 'Can you upgrade very old setups?', a: 'Usually. Our Legacy System Upgrade service migrates unsupported IoT and RPA setups to modern, supportable stacks.' },
    ],
    subServices: [
      { slug: 'health-check', name: 'IoT System Health Check', short: 'A full diagnostic of your setup.', description: 'A one-time diagnostic and report on the health of your existing IoT deployment.', includes: ['Full system audit', 'Security & connectivity review', 'Risk & gap report', 'Prioritised fix list', 'Improvement recommendations'], whoFor: 'Anyone unsure whether their existing deployment is healthy.', price: 'PKR 20,000' },
      { slug: 'maintenance-retainer', name: 'Monthly Maintenance Retainer', short: 'Ongoing peace of mind.', description: 'Continuous monitoring, patching, and support to keep your systems running smoothly.', includes: ['Proactive monitoring', 'Regular patching & updates', 'Priority issue handling', 'Monthly status reports', 'Discounted change requests'], whoFor: 'Businesses that depend on their systems staying online.', price: 'PKR 25,000 / mo' },
      { slug: 'bot-maintenance', name: 'RPA Bot Maintenance & Optimization', short: 'Keep your bots healthy.', description: 'We fix broken bots, adapt them to changes, and optimise them for speed and reliability.', includes: ['Bot failure resolution', 'Adaptation to app changes', 'Performance optimisation', 'Error-rate monitoring', 'Change request handling'], whoFor: 'Teams whose bots break every time an app updates.', price: 'PKR 30,000 / mo' },
      { slug: 'legacy-upgrade', name: 'Legacy System Upgrade', short: 'Move off ageing tech.', description: 'Migrating old or unsupported IoT and RPA setups to modern, secure, supportable platforms.', includes: ['Legacy system assessment', 'Migration plan', 'Data & workflow migration', 'Modern platform setup', 'Zero-downtime cutover'], whoFor: 'Businesses stuck on unsupported or fragile old systems.', price: 'Custom — Get Quote' },
      { slug: 'priority-sla', name: 'Priority SLA Support Plan', short: 'Guaranteed response times.', description: 'A dedicated support line with guaranteed response times for mission-critical operations.', includes: ['Guaranteed response times', 'Dedicated support line', 'Priority escalation', 'Quarterly reviews', 'Named account engineer'], whoFor: 'Operations where downtime is simply not an option.', price: 'PKR 50,000 / mo' },
    ],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function getSubService(serviceSlug: string, subSlug: string) {
  const service = getService(serviceSlug)
  const sub = service?.subServices.find((s) => s.slug === subSlug)
  return service && sub ? { service, sub } : null
}

export const serviceOptions = [
  'Home IoT',
  'Industrial IoT',
  'RPA',
  'AI Content',
  'Maintenance',
  'Not Sure Yet',
] as const

export type Package = {
  name: string
  bestFor: string
  oneTimePrice: string
  monthlyPrice: string
  features: string[]
  popular?: boolean
  cta: string
}

export const packages: Package[] = [
  {
    name: 'Starter',
    bestFor: 'Small businesses automating one thing',
    oneTimePrice: 'From PKR 50,000',
    monthlyPrice: 'From PKR 8,000 / mo',
    features: [
      '1 IoT setup OR 1 RPA bot OR 1 content batch',
      'Free initial consultation',
      'Single-app / single-dashboard control',
      'Handover training',
      '30 days of support',
    ],
    cta: 'Start Small',
  },
  {
    name: 'Growth',
    bestFor: 'Mid-size businesses scaling up',
    oneTimePrice: 'From PKR 250,000',
    monthlyPrice: 'From PKR 45,000 / mo',
    features: [
      'Mix of IoT + RPA setups',
      'Monthly AI content plan included',
      'Unified monitoring dashboard',
      'Priority issue handling',
      'Quarterly optimisation reviews',
      'Team training',
    ],
    popular: true,
    cta: 'Scale Up',
  },
  {
    name: 'Enterprise',
    bestFor: 'Large operations, multi-site',
    oneTimePrice: 'Custom — Get Quote',
    monthlyPrice: 'Custom — Get Quote',
    features: [
      'Full-stack multi-site deployment',
      'Enterprise RPA bot fleet',
      'Maintenance retainer included',
      'Priority SLA support',
      'Dedicated account engineer',
      'Governance & security controls',
    ],
    cta: 'Talk to Sales',
  },
]

export type Project = {
  title: string
  client: string
  service: string
  serviceColor: ServiceColor
  startDate: string
  estimatedDays: number
  status: 'in-progress'
  description: string
  tech: string[]
  image: string
}

export const projects: Project[] = [
  {
    title: 'Smart Warehouse Rollout',
    client: 'Textile Exporter, Karachi',
    service: 'Industrial IoT',
    serviceColor: 'primary',
    startDate: '2026-08-20',
    estimatedDays: 21,
    status: 'in-progress',
    description: 'Live machine-health and inventory monitoring across a 40,000 sq ft warehouse.',
    tech: ['LoRaWAN', 'Node-RED', 'Grafana', 'MQTT'],
    image: '/images/industrial-iot.png',
  },
  {
    title: 'Invoice Automation Bot',
    client: 'Accounting Firm, Lahore',
    service: 'RPA',
    serviceColor: 'violet',
    startDate: '2026-08-28',
    estimatedDays: 10,
    status: 'in-progress',
    description: 'A bot that reads incoming invoices and posts them straight into the accounting system.',
    tech: ['UiPath', 'OCR', 'REST API'],
    image: '/images/rpa-automation.png',
  },
  {
    title: 'AI Content Pipeline Launch',
    client: 'D2C E-commerce Brand',
    service: 'AI Content',
    serviceColor: 'violet',
    startDate: '2026-08-15',
    estimatedDays: 14,
    status: 'in-progress',
    description: 'A four-machine studio producing 40+ short-form videos every month.',
    tech: ['LLM Scripting', 'AI Voice', 'AI Video', 'Auto-Publish'],
    image: '/images/ai-content.png',
  },
  {
    title: 'Smart Home Retrofit',
    client: 'Private Residence, DHA Lahore',
    service: 'Home IoT',
    serviceColor: 'cyan',
    startDate: '2026-08-30',
    estimatedDays: 7,
    status: 'in-progress',
    description: 'Unified lighting, security, and climate control for a 5-bedroom home.',
    tech: ['Zigbee', 'Home Assistant', 'Smart Locks'],
    image: '/images/home-iot.png',
  },
  {
    title: 'Predictive Maintenance Pilot',
    client: 'Steel Re-Rolling Mill, Gujranwala',
    service: 'Industrial IoT',
    serviceColor: 'primary',
    startDate: '2026-08-25',
    estimatedDays: 28,
    status: 'in-progress',
    description: 'Vibration sensors on critical motors feeding a downtime-prediction dashboard.',
    tech: ['Vibration Sensors', 'Edge Gateway', 'ML Alerts'],
    image: '/images/industrial-iot.png',
  },
  {
    title: 'WhatsApp Order Automation',
    client: 'Restaurant Chain, Islamabad',
    service: 'RPA',
    serviceColor: 'violet',
    startDate: '2026-09-01',
    estimatedDays: 12,
    status: 'in-progress',
    description: 'Automated order-taking and confirmations across five branches via WhatsApp.',
    tech: ['WhatsApp API', 'Power Automate', 'CRM Sync'],
    image: '/images/rpa-automation.png',
  },
]

export const stats = [
  { label: 'Devices Deployed', value: 1500, suffix: '+' },
  { label: 'Processes Automated', value: 420, suffix: '+' },
  { label: 'Hours Saved for Clients', value: 25000, suffix: '+' },
  { label: 'Happy Clients', value: 60, suffix: '+' },
]

export const whyChooseUs = [
  { icon: 'map-pin', title: 'Pakistan-based, on-ground support', body: 'A local team that shows up, not a ticket queue in another timezone.' },
  { icon: 'gift', title: 'Free first consultation', body: 'We assess your needs and recommend a path before you spend a rupee.' },
  { icon: 'clapperboard', title: 'In-house AI content studio', body: 'A real 4-machine production pipeline, not outsourced freelancers.' },
  { icon: 'zap', title: 'Fast deployment timelines', body: 'Clear scopes and quick rollouts, from days to a few weeks.' },
  { icon: 'tag', title: 'Transparent starting prices', body: 'Published starting prices for every service — no mystery quotes.' },
  { icon: 'shield-check', title: 'Maintenance included', body: 'We do not disappear after handover; we keep it running.' },
]

export const howWeWork = [
  { step: '01', title: 'Discover', body: 'A free consultation to understand your goals, constraints, and budget.' },
  { step: '02', title: 'Design', body: 'A tailored plan with clear scope, timeline, and transparent pricing.' },
  { step: '03', title: 'Deploy', body: 'Our team installs, builds, and tests everything on the ground.' },
  { step: '04', title: 'Support', body: 'Training, monitoring, and maintenance so it keeps delivering value.' },
]

export const testimonials = [
  { quote: 'NexaNode turned our factory floor into something we can actually see and manage. Downtime is no longer a mystery.', name: 'Bilal Ahmed', role: 'Operations Head, Textile Manufacturer', company: 'Karachi' },
  { quote: 'Their invoice bot paid for itself in the first two months. Our accounts team finally does real work.', name: 'Sana Malik', role: 'Finance Director, Accounting Firm', company: 'Lahore' },
  { quote: 'We went from posting once a week to daily on every platform. The AI studio is a game changer for a small brand.', name: 'Hamza Sheikh', role: 'Founder, D2C Brand', company: 'Islamabad' },
  { quote: 'The smart home install was clean, fast, and it just works. Local support that actually picks up the phone.', name: 'Ayesha Khan', role: 'Homeowner', company: 'DHA Lahore' },
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: '5-signs-your-business-needs-rpa',
    title: '5 Signs Your Business Needs RPA',
    excerpt: 'If your team spends hours moving data between systems, you are paying people to do robot work. Here is how to spot it.',
    category: 'RPA',
    date: '2026-09-01',
    readTime: '5 min read',
    author: 'NexaNode Team',
    image: '/images/rpa-automation.png',
    content: [
      'Robotic Process Automation (RPA) is one of the fastest ways for a Pakistani business to reclaim wasted hours — but only if you point it at the right problems. Here are five clear signals that your organisation is ready.',
      '1. Your team copies data between systems. If people manually re-type information from one portal, spreadsheet, or email into another, a bot can do it faster and without errors.',
      '2. The same report is built by hand every week. Recurring, rule-based reporting is textbook automation territory.',
      '3. Errors from manual entry cost you money. Every mis-keyed invoice or order is a bot-preventable loss.',
      '4. You cannot scale without hiring. If growth means more data-entry staff, automation breaks that link.',
      '5. Staff are burning out on boring work. Bots free your people for judgement work that actually needs a human.',
      'If two or more of these sound familiar, a short automation audit will usually reveal a fast payback. That is exactly where we recommend starting.',
    ],
  },
  {
    slug: 'what-smart-home-automation-costs-in-pakistan',
    title: 'What Smart Home Automation Actually Costs in Pakistan',
    excerpt: 'A realistic breakdown of what you pay to go smart in 2026 — from a starter kit to a full-home system.',
    category: 'Home IoT',
    date: '2026-08-24',
    readTime: '6 min read',
    author: 'NexaNode Team',
    image: '/images/home-iot.png',
    content: [
      'Smart home pricing in Pakistan is more accessible than most people assume. The key is matching the system to how you actually live, rather than buying every gadget on the shelf.',
      'A starter setup — smart lighting, a few smart plugs, and a hub — typically lands around PKR 45,000 installed. It is the cheapest way to feel the difference.',
      'Security-focused setups with cameras and smart locks start near PKR 75,000, while climate and energy monitoring runs around PKR 60,000 and often pays for itself in reduced bills.',
      'A full smart home bundling lighting, security, climate, and voice control sits around PKR 150,000 — the sweet spot for new homes or major renovations.',
      'The real cost differentiator is not hardware; it is reliable installation and local support. That is what keeps a smart home from becoming a pile of disconnected apps.',
    ],
  },
  {
    slug: 'how-ai-is-changing-content-production',
    title: 'How AI Is Changing Content Production for Small Brands',
    excerpt: 'Small brands can now produce content at agency volume — if they treat AI as a pipeline, not a magic button.',
    category: 'AI Content',
    date: '2026-08-18',
    readTime: '5 min read',
    author: 'NexaNode Team',
    image: '/images/ai-content.png',
    content: [
      'For years, consistent content was a rich-brand luxury. AI has quietly changed that — but only for teams who treat it as a production pipeline rather than a one-click gimmick.',
      'The winning approach separates the work into stages: scripting, voice, video, and publishing. Each stage is tuned and quality-checked, exactly like a real studio.',
      'This is why our AI content studio runs on four dedicated machines. Specialised stages produce far more consistent, on-brand output than a single tool trying to do everything.',
      'The result for a small brand is agency-level volume — dozens of short-form videos a month — without agency-level cost or the chaos of a freelancer inbox.',
      'AI does not remove the need for creative direction. It removes the grind, so your team can focus on strategy and brand.',
    ],
  },
  {
    slug: 'iot-in-pakistani-manufacturing-2026',
    title: 'IoT in Pakistani Manufacturing: Where We Are in 2026',
    excerpt: 'Industrial IoT adoption is accelerating on the factory floor. Here is what is working locally right now.',
    category: 'Industrial IoT',
    date: '2026-08-10',
    readTime: '7 min read',
    author: 'NexaNode Team',
    image: '/images/industrial-iot.png',
    content: [
      'Industrial IoT in Pakistan has moved from pilot projects to real production deployments. Manufacturers are past asking “why” and are now asking “how fast”.',
      'The highest-ROI starting point is almost always machine-health monitoring. Cheap vibration and temperature sensors on critical equipment catch failures before they cost a full shift.',
      'Energy metering is a close second. With utility costs climbing, per-line consumption tracking often reveals savings that fund the rest of a deployment.',
      'The biggest barrier is not technology — it is integration with legacy machines. External sensors solve most of this without needing vendor cooperation.',
      'By 2026, the factories pulling ahead are the ones treating their floor as a live, queryable dataset rather than a black box.',
    ],
  },
  {
    slug: 'uipath-vs-automation-anywhere-vs-power-automate',
    title: 'Choosing Between UiPath, Automation Anywhere & Power Automate',
    excerpt: 'The three major RPA platforms compared for Pakistani businesses — cost, learning curve, and fit.',
    category: 'RPA',
    date: '2026-08-03',
    readTime: '8 min read',
    author: 'NexaNode Team',
    image: '/images/rpa-automation.png',
    content: [
      'There is no universally “best” RPA platform — only the best fit for your stack, budget, and team. Here is how the big three compare for Pakistani businesses.',
      'UiPath is the most mature and capable, with the deepest feature set. It suits ambitious, enterprise-scale automation programmes but carries a higher licence cost.',
      'Automation Anywhere is cloud-native and strong on analytics, a good middle ground for organisations that want scalability without heavy on-premise infrastructure.',
      'Power Automate is the pragmatic choice for Microsoft-heavy shops. If your business already runs on Microsoft 365, it offers the lowest barrier to entry and cost.',
      'Our advice: pick the platform after the process audit, not before. The right workflows make the platform decision obvious.',
    ],
  },
  {
    slug: 'behind-the-scenes-4-machine-ai-content-studio',
    title: 'Behind the Scenes: Our 4-Machine AI Content Studio',
    excerpt: 'A look inside the pipeline that turns a brief into finished, published video — script to publish.',
    category: 'AI Content',
    date: '2026-07-27',
    readTime: '6 min read',
    author: 'NexaNode Team',
    image: '/images/ai-content.png',
    content: [
      'Our AI content studio is not one clever app — it is four dedicated machines, each owning one stage of production. Here is how a brief becomes a published video.',
      'PC1 — Scripting. It drafts platform-specific scripts tuned to your brand voice, complete with hooks and calls to action.',
      'PC2 — Audio. It produces AI voiceover and narration, then cleans and masters the audio to broadcast quality.',
      'PC3 — Video. It generates and edits the short-form video, adding captions, motion graphics, and brand overlays.',
      'PC4 — Publish. It runs final QC, renders each platform format, and handles scheduled multi-platform publishing.',
      'Splitting the work this way is the whole trick: specialised stages produce output far more consistent than one tool doing everything at once.',
    ],
  },
]

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}

export const faqs = [
  { q: 'What does the free consultation include?', a: 'A no-obligation call or visit where we understand your goals, assess your current setup, and recommend the right service and package — before you commit to anything.' },
  { q: 'What are typical project timelines?', a: 'Home IoT and simple bots take a few days to two weeks. Industrial IoT and multi-department automation run two to eight weeks. AI content is an ongoing monthly service.' },
  { q: 'Do you support businesses outside Karachi, Lahore, and Islamabad?', a: 'Yes. Those are our primary hubs, but we take on projects across Pakistan and coordinate on-site visits for deployment and support.' },
  { q: 'What are your payment terms?', a: 'Most projects run on milestone-based payments — a deposit to begin, a stage payment at deployment, and a balance on handover. Retainers are billed monthly.' },
  { q: 'What happens after deployment?', a: 'Every project includes a handover and support window. You can then move onto a maintenance retainer for ongoing monitoring, patching, and fixes.' },
  { q: 'How do you handle data privacy for IoT devices?', a: 'All device access is encrypted and authenticated. For sensitive industrial data, we can keep everything on-premise so nothing leaves your site.' },
  { q: 'Do you work with existing / legacy systems?', a: 'Yes. We regularly maintain and upgrade systems we did not build, and our Legacy System Upgrade service migrates unsupported setups to modern platforms.' },
  { q: 'Is there a minimum project size?', a: 'No hard minimum. Our Starter package and single-service options are designed for small businesses automating just one thing.' },
  { q: 'Who owns the AI-generated content?', a: 'You do — completely. All scripts, audio, and video we deliver are yours to use commercially without restriction.' },
  { q: 'What is your refund / cancellation policy?', a: 'Consultations are free. For paid projects, deposits cover work already scoped and started; unused milestone payments are refundable per the terms in your agreement. Retainers can be cancelled with 30 days notice.' },
]

export const team = [
  { name: 'Founder & CEO', role: 'Vision, strategy, and client partnerships', initials: 'CE' },
  { name: 'Lead IoT Engineer', role: 'Home & industrial deployment architecture', initials: 'IO' },
  { name: 'RPA Solutions Architect', role: 'Enterprise automation design & governance', initials: 'RP' },
  { name: 'AI Content Studio Lead', role: 'Runs the 4-machine content pipeline', initials: 'AI' },
  { name: 'Business Development Manager', role: 'Consultations, scoping, and onboarding', initials: 'BD' },
]

export const milestones = [
  { year: '2026', title: 'Founded', body: 'NexaNode is established in Karachi with a mission to localise enterprise automation.' },
  { year: '2026', title: 'Core Team Assembled', body: 'IoT, RPA, and AI content specialists join to form the founding team.' },
  { year: '2026', title: 'AI Content Studio Built', body: 'The in-house 4-machine content pipeline goes live.' },
  { year: '2026', title: 'Website Launch', body: 'NexaNode opens for business online.' },
  { year: '2026', title: 'First Client Onboarded', body: 'Our first deployments go live across IoT, RPA, and content.' },
  { year: 'Next', title: 'Expansion', body: 'Dedicated presence planned for Lahore and Islamabad.', future: true },
]

export const values = [
  { icon: 'shield-check', title: 'Reliability', body: 'We build systems that keep working long after handover.' },
  { icon: 'tag', title: 'Transparent Pricing', body: 'Published starting prices and clear scopes — no surprise quotes.' },
  { icon: 'map-pin', title: 'Local-First Support', body: 'On-ground Pakistani team that actually shows up.' },
  { icon: 'sparkles', title: 'Continuous Innovation', body: 'We keep our stack and studio on the cutting edge.' },
]
