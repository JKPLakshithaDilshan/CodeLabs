import { Service, Project, FAQItem, Technology } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'java-project-support',
    title: 'SE Java Project Support',
    description: 'Looking for affordable Java development? We build only the specific frontend or backend parts you need for your group project.',
    iconName: 'Coffee',
    features: [
      'Complete Frontend + Backend development support',
      'CRUD operations, search, filter & form validation',
      'Proposal, SRS, UML diagrams & report writing',
      'Viva exam guidance & line-by-line code explanation',
      'Work aligned with marking schemes & on-time delivery',
      'Unlimited revisions & modification support'
    ]
  },
  {
    id: 'programming-tutoring',
    title: 'Programming Tutoring',
    description: 'Master core concepts and syntax with 1-on-1 personalized mentoring tailored to your syllabus.',
    iconName: 'GraduationCap',
    features: ['Structured curriculum guides', 'Hands-on live coding sessions', 'Support for beginners to advanced learners']
  },
  {
    id: 'debugging-support',
    title: 'Code Debugging & Fixes',
    description: 'Stuck on a tricky bug or compilation error? Let us diagnose, refactor, and explain the fix.',
    iconName: 'BugOff',
    features: ['Line-by-line code reviews', 'Error explanation & analysis', 'Optimized and clean refactored solutions']
  },
  {
    id: 'project-guidance',
    title: 'Project Guidance',
    description: 'Get end-to-end support for your university assignments, capstones, and personal portfolio projects.',
    iconName: 'Compass',
    features: ['Architectural design advising', 'System analysis & documentation assistance', 'Best-practice coding structures']
  },
  {
    id: 'database-design',
    title: 'Database Architecture',
    description: 'Learn or build database schemas that are high-performing, normalized, and securely structured.',
    iconName: 'Database',
    features: ['Entity-Relationship (ER) modeling', 'SQL query optimization & scripting', 'Normalization (1NF, 2NF, 3NF) guidance']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Frontend Craft',
    description: 'Transform rough concepts into intuitive, breathtaking web interfaces that look premium.',
    iconName: 'Figma',
    features: ['Interactive prototyping & Figma mockups', 'Responsive mobile-first coding', 'Apple-inspired minimalist design style']
  },
  {
    id: 'documentation-support',
    title: 'Technical Documentation',
    description: 'High-quality UML diagrams, API specifications, and database dictionaries that satisfy professors.',
    iconName: 'FileText',
    features: ['UML Class, Sequence & Use Case diagrams', 'Comprehensive system architecture specs', 'Academic formatting alignment']
  },
  {
    id: 'full-stack-dev',
    title: 'Full Stack Development',
    description: 'Get comprehensive assistance in building complete modern web applications from frontend to backend.',
    iconName: 'Cpu',
    features: ['API route development', 'Secure authentication integration', 'State management & hosting assistance']
  },
  {
    id: 'technical-mentoring',
    title: 'Career & Tech Mentoring',
    description: 'Prepare for interviews, master Git workflows, and set yourself up for internships in the tech industry.',
    iconName: 'Sparkles',
    features: ['Mock technical interview runs', 'Git & version control best practices', 'Resume and GitHub profile reviews']
  }
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'Java', category: 'languages', color: '#E76F51' },
  { name: 'Python', category: 'languages', color: '#3776AB' },
  { name: 'JavaScript', category: 'languages', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'languages', color: '#3178C6' },
  { name: 'React', category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', color: '#000000' },
  { name: 'Tailwind CSS', category: 'frontend', color: '#06B6D4' },
  { name: 'MySQL', category: 'backend', color: '#4479A1' },
  { name: 'PHP', category: 'backend', color: '#777BB4' },
  { name: 'Spring Boot', category: 'backend', color: '#6DB33F' },
  { name: 'Git & GitHub', category: 'tools', color: '#F05032' },
  { name: 'Figma', category: 'tools', color: '#F24E1E' }
];

export const PROJECTS: Project[] = [
  {
    id: 'property-sales',
    title: 'Premium Property Sales System',
    description: 'A responsive real estate listing and sales management platform built to demonstrate advanced search filters, photo carousels, and agent scheduling.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Full Stack Web App',
    features: ['Dynamic advanced search filters', 'Interactive layout scheduler', 'Virtual tour mock integration']
  },
  {
    id: 'salon-booking',
    title: 'Salon & Spa Appointment Manager',
    description: 'A stylish and user-friendly appointment booking portal featuring beautiful calendar components, dynamic timeslot availability, and real-time SMS reminder flow mocks.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Next.js', 'MySQL', 'Tailwind CSS'],
    category: 'Full Stack / Database',
    features: ['Fluid calendar timeline grid', 'Automated vacancy conflict resolution', 'Interactive service cart selection']
  },
  {
    id: 'student-mgmt',
    title: 'Academic Student Management System',
    description: 'A robust educational portal for student enrollment, grade distribution analysis, transcript generation, and detailed department administration dashboards.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
    category: 'Backend / Enterprise',
    features: ['Complex grade GPA calculations', 'Secure role-based views (Student/Admin)', 'Excel/PDF grade report exports']
  },
  {
    id: 'hotel-booking',
    title: 'Luxury Hotel & Room Booking Engine',
    description: 'An elegant resort reservation engine illustrating date-range calculations, secure guest checkout flows, dynamic price updates, and visual occupancy heatmaps.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'PHP', 'MySQL'],
    category: 'Full Stack Web App',
    features: ['Dynamic room tier pricing rules', 'Rich image galleries with swiping', 'Detailed invoices and email mock notifications']
  },
  {
    id: 'banking-db',
    title: 'Secure Banking Transaction Schema',
    description: 'An academic showcase of highly normalized database architecture containing stored procedures, trigger-based logs, and ACID compliance checking mechanisms.',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80',
    technologies: ['MySQL', 'SQL Server', 'Database Tuning'],
    category: 'Database Design / SQL',
    features: ['Trigger auditing for double-entry tracking', 'Stored procedures for interest calculation', 'Optimized index execution tree layouts']
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-commerce Experience',
    description: 'A visual-first catalog exploration site featuring a persistent cart, clean slider controls, filter widgets, elegant slide-out menus, and instant loading.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Git'],
    category: 'Frontend Craft',
    features: ['Frictionless sliding cart drawer', 'Instant client-side tag filtering', 'Aesthetic glassmorphism price tags']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'languages',
    question: 'What programming languages and frameworks do you support?',
    answer: 'We provide mentoring and support for all major academic languages including Java (Spring Boot), Python (Data Science/Flask/Django), JavaScript/TypeScript (React, Next.js, Node.js), PHP (Vanilla/Laravel), SQL databases (MySQL, PostgreSQL), and essential developer tools like Git, GitHub, and Figma.'
  },
  {
    id: 'how-contact',
    question: 'How can I contact CodeLabs to get started?',
    answer: 'The fastest and easiest way is to click any of our "Contact on WhatsApp" buttons. You will be connected directly to a technical mentor who will review your syllabus, error logs, or project goals and offer immediate feedback on how we can guide you.'
  },
  {
    id: 'online-support',
    question: 'Do you provide online sessions or remote tutoring?',
    answer: 'Yes, 100%! All our tutoring, debugging sessions, and project walk-throughs are conducted online via screensharing platforms (Google Meet or Zoom). We can schedule interactive sessions that fit around your university timetable.'
  },
  {
    id: 'pricing-guideline',
    question: 'Are your services student-friendly in pricing?',
    answer: 'Absolutely. We understand that university students operate on tight budgets. Our pricing is highly transparent, task-specific, and tailored to be extremely fair. We offer clear flat rates for troubleshooting specific bugs or milestone-based payments for semester-long project guidance.'
  },
  {
    id: 'code-ownership',
    question: 'Will I understand the code we work on together?',
    answer: 'That is our primary goal! We do not just build things for you in a black box. Every line of code we write together is thoroughly commented on, and we provide focused explanations and structural charts so you feel 100% confident defending your project in front of your professors or examiners.'
  }
];
