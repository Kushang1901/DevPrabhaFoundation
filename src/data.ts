import { Activity, Project, Quote, TeamMember, Blog, BankDetails, TrustLegalDetails } from "./types";

export const IMPACT_COUNTERS = [
  { count: 107, label: "Health Development Camps", suffix: "+" },
  { count: 79, label: "Vocational & Skill Trainings", suffix: "+" },
  { count: 125, label: "Environment Awareness Drives", suffix: "+" },
  { count: 207, label: "Children Educated & Supported", suffix: "+" },
];

export const VISION_MISSION = {
  vision: {
    title: "Our Vision",
    description:
      "An inclusive, equitable, and progressive society where quality healthcare, vocational education, livelihood opportunities, and environmental safety are accessible to every individual, enabling them to lead a life of self-reliance and Dignity.",
    icon: "Eye",
  },
  mission: {
    title: "Our Mission",
    description:
      "To design and execute participatory community-driven projects in medical support, foundational/career-oriented education, women’s vocational skill centers, tree plantations, and micro-agro-entrepreneurships to foster sustainable rural and social progression.",
    icon: "Compass",
  },
  objectives: {
    title: "Our Objectives",
    description:
      "To expand child-centric educational reach, promote preventive healthcare systems, setup micro-level self-help groups for rural women, maintain tree ecosystems, provide quick response disaster relief support, and support youth with employment guidance.",
    icon: "Target",
  },
};

export const QUOTES: Quote[] = [
  {
    text: "A man's mind, stretched by new ideas, may never return to its original dimensions.",
    author: "Oliver Wendell Holmes Jr.",
    role: "",
  },
  {
    text: "Arise, awake, and stop not till the goal is reached.",
    author: "Swami Vivekananda",
    role: "Spiritual Leader & Reformer",
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
    role: "Father of the Nation",
  },

  // {
  //   text: "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great.",
  //   author: "Dr. A.P.J. Abdul Kalam",
  //   role: "Scientist & 11th President of India",
  // },

  // {
  //   text: "Not all of us can do great things. But we can do small things with great love.",
  //   author: "Mother Teresa",
  //   role: "Saint of the Gutters & Nobel Laureate",
  // },
  // {
  //   text: "I do not think in terms of work-life balance. I think in terms of work-life integration. Make your work your passion and you will never work a day in your life.",
  //   author: "Ratan Tata",
  //   role: "Industrialist & Philanthropist",
  // },
  // {
  //   text: "Education is the most powerful weapon which you can use to change the world.",
  //   author: "Nelson Mandela",
  //   role: "Anti-apartheid Activist & President of South Africa",
  // },
];

const womenempowerment = "/images/womenempowerment.jfif";
export const WORKING_AREAS = [
  {
    id: "healthcare",
    title: "Healthcare & Nutrition",
    description:
      "Organizing diagnosis camps, distributing essential pediatric and geriatric supplements, and spreading hygiene awareness in backward clusters.",
    icon: "Activity",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    gradient: "from-sky-700 to-teal-600",
  },
  {
    id: "education",
    title: "Education & Skilling",
    description:
      "Unlocking access to digitized materials, tutoring kids, and supporting foundational literacy for students standard 1 to 10.",
    icon: "BookOpen",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    gradient: "from-blue-900 to-indigo-800",
  },
  {
    id: "women",
    title: "Women Empowerment",
    description:
      "Empowering rural women through tailoring, computer training, financial literacy courses, and setup of collaborative Self-Help Groups (SHGs).",
    icon: "Heart",
    image:
      womenempowerment,
    gradient: "from-rose-700 to-orange-600",
  },
  {
    id: "environment",
    title: "Environment & Climate Change",
    description:
      "Leading sapling plantations, lake cleanup drives, plastic-free campaigns, and solid-waste recycling guidelines for standard households.",
    icon: "Leaf",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    gradient: "from-emerald-700 to-teal-700",
  },
  {
    id: "agro",
    title: "Agro-Entrepreneurship",
    description:
      "Guiding micro-farmers with organic manure composting techniques, solar irrigation methods, and local cooperative crop markets.",
    icon: "Sprout",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
    gradient: "from-amber-700 to-orange-700",
  },
];

const bloodonations = "/images/bloodonations.jpeg";

export const ACTIVITIES: Activity[] = [
  {
    id: "act-1",
    title: "Health Development Camps",
    description:
      "Free medical screening, pediatric vitamins, dental care, and cardiac check-up drives conducted across remote blocks using modern testing equipment.",
    category: "healthcare",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    fullContent:
      "Dev Prabha Foundation coordinates with community healthcare professionals to organize intensive Health Development Camps in underserved locations. These camps offer direct consultations, deliver critical diagnostics for hypertension and blood sugar, and provide free medicines, children's nutrition syrups, and specialized referrals.",
    impact:
      "Over 5,000 households received preventive screenings in the past year.",
  },
  {
    id: "act-2",
    title: "Educational Support Programs",
    description:
      "Supplying notebooks, bicycles for girls from remote villages, tablets, and tutoring lessons to prevent public school drop-outs.",
    category: "education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    fullContent:
      "Under our flagship Shiksha Initiative, we seek to reduce dropout rates among girls and backward classes. DPF provides essential micro-grants, bicycles to bridge transportation gaps to high schools, textbooks, notebooks, and setup of evening smart-study centers equipped with custom study modules.",
    impact: "Supported 200+ kids, maintaining a 98% retention rate in schools.",
  },
  {
    id: "act-3",
    title: "Women Empowerment Workshops",
    description:
      "Comprehensive vocational tutorials in advanced tailoring, embroidery, digital micro-marketing, and managing bank credit schemes.",
    category: "women",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    fullContent:
      "DPF firmly believes that empowering women is the fastest driver of rural welfare. We run vocational schools for sewing and digital skills. Our workshops also guide women in forming Self-Help Groups (SHGs) to easily borrow bank credits and initiate home-made handicraft or spice enterprises.",
    impact:
      "Established 15 functional SHGs, rendering 150+ women financially independent.",
  },
  {
    id: "act-4",
    title: "Food Distribution & Nutrition Drives",
    description:
      "Delivering hot wholesome lunch packets, pregnancy nutrient charts, and dry ration grocery bags to poor construction-migrants.",
    category: "general",
    image:
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=800",
    fullContent:
      "Our daily/weekly Annapurna Drives distribute fresh nutritious cooked meals consisting of standard pulses, grains, and greens. Additionally, we consult lactating and pregnant mothers with custom protein bars and guide sessions on hygienic infants nursing.",
    impact:
      "Over 12,000 warm meals distributed safely during dry spells and slum migrations.",
  },
  {
    id: "act-5",
    title: "Rural Infrastructure Development",
    description:
      "Installing solar-powered street lamps, setting up safe community drinking water filters, and aiding village sanitation paths.",
    category: "rural",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    fullContent:
      "Rural development focuses on hygiene and infrastructure. Dev Prabha Foundation installs automated bio-toilets and high-capacity central water purifiers in primary public spots, while fixing energy shortages via efficient solar lanterns on village corridors.",
    impact:
      "Electrified 12 dark village corridors and served 1,200 villagers with arsenic-free water.",
  },
  {
    id: "act-6",
    title: "Tree Plantation & Environment Conservation",
    description:
      "Afforestation campaigns mapping native medicinal plants and teaching school children about soil conservation and waste management.",
    category: "environment",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    fullContent:
      "Our environmental arm coordinates mass seed distribution and tree planting activities during the monsoon. We focus on fast-growing native shaded trees such as Neem and Peepal alongside educating local community youth about plastic disposal routines.",
    impact:
      "10,000+ native saplings planted with verified community watering watch groups.",
  },
  {
    id: "act-7",
    title: "Skill Training & Digital Literacy",
    description:
      "Basic programming, typing classes, retail management techniques, and interview preparation for youth in suburban zones.",
    category: "education",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    fullContent:
      "We organize computer modules and digital operations tutoring for educated rural youths who struggle to find corporate roles. This includes introductory MS Office suite, basic typing, web search, and communication grooming to prepare them for entry jobs.",
    impact:
      "79 youth certified in digital basics, with 34 placed in nearby urban retail shops.",
  },
  {
    id: "act-8",
    title: "Child Protection & General Welfare",
    description:
      "Child health clinics, vaccine awareness drives, and interactive play sessions in state-run crèches (Anganwadis).",
    category: "general",
    image:
      "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=800",
    fullContent:
      "We safeguard child growth by improving local public daycares. We supply colorful educational toys, primary learning charts, and facilitate pediatric checkups with booster immunization calendars for children from daily wage earners.",
    impact:
      "Over 500 toddlers in village Anganwadis benefitted with quality play material.",
  },
  {
    id: "act-9",
    title: "Career Guidance & Counseling",
    description:
      "Inviting industry professionals to guide rural high school students on competitive examinations, colleges, and trades.",
    category: "education",
    image:
      "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&q=80&w=800",
    fullContent:
      "High school children in villages are often unaware of vocational avenues. DPF brings counselors, engineering and medical professionals, and civil services experts to advise them on educational path opportunities, scholarships, and technical trades.",
    impact:
      "Guided 300+ secondary school elements in shaping career selections.",
  },
  {
    id: "act-10",
    title: "Blood Donation Camps",
    description:
      "Collaborating with authorized government blood banks to save emergency pediatric and surgery patients.",
    category: "healthcare",
    image: bloodonations,
    fullContent:
      "DPF conducts systematic blood registration camps where local volunteers safely donate blood to government-run medical collages and general diagnostics houses. Clean conditions are maintained with nutritious recovery refreshments.",
    impact:
      "Gathered 450+ blood units directly assisting oncology and trauma center networks.",
  },
];

const hospital = "/images/hospital.png";
const medicalcamp = "/images/medicalcamp.jpg";
const canopy = "/images/canopy.png";
const kalyani = "/images/kalyani.png";
export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "DevPrabha Memorial Hospital,",
    description:
      "DevPrabha Memorial Hospital, Sugauli, an upcoming Multispecialty Healthcare Centre is being constructed with support and endowments of people. DevPrabha Memorial Hospital will be a 200 beds Multispecialty Healthcare center for the poor and underprivileged people. It is being constructed to bridge the gap between the healthcare services provided to wealthy and poor people.",
    image: hospital,
    status: "",
    location: "Sugauli, East Champaran, Bihar",
    beneficiaries: "3,500+ Tribal & Rural Students",
    details:
      "DevPrabha Memorial Hospital is an upcoming 200-bed multispecialty healthcare center dedicated to providing affordable and quality medical services to poor and underprivileged communities.",
  },

  {
    id: "proj-2",
    title: "Sanjeevani Free Mega Medical Camps",
    description:
      "A specialized healthcare initiative organizing large-scale diagnostic camps in remote blocks. In partnership with volunteer surgeons and specialists, we provide free eye surgeries, dental check-ups, and pediatric care directly to pockets lacking stable medical infrastructure.",
    image: medicalcamp,
    status: "ongoing",
    location: "Sugauli, East Champaran, Bihar",
    beneficiaries: "8,500+ Tribal & Rural Patients",
    details:
      "Our periodic mega camps bridge the immediate gap for specialized treatments. We offer diagnostic screenings, distribute free corrective eyeglasses, and sponsor critical corrective surgeries for families living below the poverty line.",
  },
  {
    id: "proj-3",
    title: "Green Canopy Community Plantation Drive",
    description:
      "A localized environmental movement focused on restoring biodiversity and establishing community fruit orchards. By involving local youth and schools, we plant native, climate-resilient trees to combat soil erosion and create sustainable ecological zones.",
    image: canopy,
    status: "ongoing",
    location: "Sugauli, East Champaran, Bihar",
    beneficiaries: "25+ Villages & Local Ecosystems",
    details:
      "This green initiative combats rapid deforestation while giving rural communities a source of seasonal fruit income. Over 50,000 saplings have been planted alongside local water bodies to naturally replenish depleting groundwater levels.",
  },
  {
    id: "proj-4",
    title: "Kalyani Women-Led Agro-Kendra Initiative",
    description:
      "An integrated project empowering rural women through sustainable organic farming and micro-enterprise development. We provide training in climate-smart agriculture, high-yield organic composting, and direct farm-to-market trade channels.",
    image: kalyani,
    status: "upcoming",
    location: "Sugauli, East Champaran, Bihar",
    beneficiaries: "1,800+ Women Farmers",
    details:
      "By transforming traditional homemakers into skilled agri-entrepreneurs, this project ensures financial independence. The program supplies initial bio-fertilizers, high-quality seeds, and sets up community grain-banks completely managed by local women self-help groups.",
  },
];

const thakur = "/images/thakur.jpg";
const shob = "/images/shob.jpg";
const birendra = "/images/birendra.png";

export const FOUNDERS: TeamMember[] = [
  {
    name: "Dr. B.B Thakur",
    role: "M.D, F.I.C.P, F.I.A.M.S, F.I.A.C.M, F.A.C.P, F.I.S.P.D",
    image: thakur,
    bio: "An eminent academician and lifelong social worker who dedicated 25 years to formulating grassroots education policies, eventually establishing Dev Prabha Foundation to empower underdeveloped rural margins.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://www.facebook.com/devprabhafoundation/",
    },
  },
  {
    name: "Dr. Shobh Nath Rai",
    role: "IFS (Retd.), PCCF (Karnataka)",
    image: shob,
    bio: "An active healthcare advocate specializing in pediatric nutrition. She pioneered remote maternal clinics across multiple territories, ensuring child vaccine adherence and clean water safety.",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://www.facebook.com/devprabhafoundation/",
    },
  },
  {
    name: "Shri Birendra Kunwar",
    role: "Farmer, Social Worker",
    image: birendra,
    bio: "An active healthcare advocate specializing in pediatric nutrition. She pioneered remote maternal clinics across multiple territories, ensuring child vaccine adherence and clean water safety.",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://www.facebook.com/devprabhafoundation/",
    },
  },
];

export const TEAM: TeamMember[] = [...FOUNDERS];


const gal1 = "/images/gal1.jpg";
const gal2 = "/images/gal2.jpg";
const gal3 = "/images/gal3.png";
const gal4 = "/images/gal4.jpg";
const gal5 = "/images/gal5.jpg";
const gal6 = "/images/gal6.jpg";
const gal7 = "/images/gal7.png";
const gal8 = "/images/gal8.jpg";
const gal9 = "/images/gal1.jpg";
const gal10 = "/images/gal10.jpg";
const gal11 = "/images/gal11.jpg";

export const GALLERY_IMAGES = [
  {
    src: gal1,
    caption:
      "Healthcare doctors diagnosing children under public school health check-up campaigns.",
  },
  {
    src: gal2,
    caption:
      "Happy pupils showing their textbooks in our primary community shelter library.",
  },
  {
    src: gal3,
    caption:
      "A woman artisan practicing high-quality custom embroidery in our suburban cluster center.",
  },
  {
    src: gal4,
    caption:
      "DPF volunteers and school pupils assembling together for a community tree plantation drive.",
  },
  {
    src: gal5,
    caption:
      "Rural evening tutoring sessions designed around playful primary learning material.",
  },
  {
    src: gal6,
    caption:
      "Distribution of wholesome fresh lunches as part of our weekly Annapurna Seva nutrition program.",
  },
  {
    src: gal7,
    caption:
      "Coordinating organic composting guidelines with community agro-entrepreneurs in farm plots.",
  },
  {
    src: gal8,
    caption:
      "Children from a backward block enjoying outdoor sports in our child health safety program.",
  },
  {
    src: gal9,
    caption:
      "Digital Literacy tutorial taking high-schoolers through fundamental computers and typing routines.",
  },
  {
    src: gal10,
    caption:
      "Digital Literacy tutorial taking high-schoolers through fundamental computers and typing routines.",
  },
  {
    src: gal11,
    caption:
      "Digital Literacy tutorial taking high-schoolers through fundamental computers and typing routines.",
  },
];

export const BLOGS: Blog[] = [
  {
    id: "blog-1",
    title: "Importance of Education for Rural Children",
    description:
      "Quality education is the singular driver that breaks hereditary poverty, paving standard career paths and teaching community health ethics to remote rural youngsters.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    date: "May 15, 2026",
    author: "Dr. Devendra Pratap Singh",
    content: [
      "In India's rural segments, formal schooling remains limited due to high transport costs, deficient classroom infrastructure, and farming duties for small families. Yet, secondary schooling is the most robust key to break cycle of general deprivations.",
      "Dev Prabha Foundation addresses this systemic mismatch by delivering comprehensive tutoring networks directly inside village wards, equipping kids with essential typing, reading, and problem-solving tools.",
      "Furthermore, incorporating basic digital tools, simple tab tutorials, and evening interactive quizzes prepares these students for future jobs, building self-esteem and giving confidence to their families.",
    ],
  },
  {
    id: "blog-2",
    title: "Women Empowerment in Modern India",
    description:
      "Empowering rural women through tailoring, typing, and group banking fosters structural changes that uplift entire families and boost education metrics.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    date: "April 28, 2026",
    author: "Smt. Prabha Devi",
    content: [
      "Women hold the key for structural village development. When a mother achieves financial literacy and earns a basic income, she allocates resources to nutritious food, clinical vaccination schedules, and stable schooling for her kids.",
      "Our training centers provide custom classes in embroidery, advanced sewing machine operation, and digital commerce. We empower women with independent savings models so they are not fully dependent.",
      "By forming localized Self-Help Groups (SHGs), rural women share lessons on business safety, obtain interest-free credits, and successfully spearhead cottage industries, changing general societal mindsets.",
    ],
  },
  {
    id: "blog-3",
    title: "Healthcare Awareness in Villages",
    description:
      "Preventive medicine, nutritional guidelines, and clean drinking water are highly effective barriers against vector-borne and lifestyle illness in remote clusters.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    date: "March 12, 2026",
    author: "Dr. Alok Verma",
    content: [
      "A substantial portion of poor rural families undergo heavy asset liquidation due to sudden, high-cost health emergencies that could have easily been avoided with early clinical diagnostics.",
      "Our mobile health vehicles deliver early warning checks of blood glucose, hypertension, and vitamin shortages directly to their streets. Educating residents about boiling water, safe refuse containers, and infant hygiene reduces infections by 60%.",
      "We continue to coordinate with district authorities to establish vaccine programs and provide accessible generic medicine dispensaries, safeguarding working elders and young children alike.",
    ],
  },
];

export const TRUST_DETAILS: TrustLegalDetails = {
  ngoName: "Dev Prabha Foundation",
  ngoType: "Public Charitable Trust (Non-Government)",
  registrationNumber: "2034/2017",
  registrationDate: "04/03/2017",
  darpanId: "BR/2018/0207803",
  section12A: "CIT(E)/Pat/12AA/04(341)/2018-19/1616-20",
  section80G: "CIT(E)/Pat/80G/11(31)/18-19/2861-65",
  registeredOffice: "Bangra, Sugauli, East Champaran, Bihar - 845456, India",
  contactPhone: "+91 9480259311",
  contactEmail: "info@dpf.org.in",
  secondaryEmail: "kbt@dpf.org.in",
  website: "https://dpf.org.in",
};

export const BANK_DETAILS: BankDetails = {
  accountName: "DEV PRABHA FOUNDATION",
  accountNumber: "Available upon verified request",
  ifscCode: "Available upon verified request",
  bankName: "Punjab National Bank",
  branch: "Sugauli, East Champaran, Bihar",
  accountType: "Current Account",
  upiId: "",
  taxExemption: "Eligible for 50% Tax Exemption under Section 80G of Income Tax Act 1961",
  panNumber: "Protected",
};

