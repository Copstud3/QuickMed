import {
  arrowDown,
  checkMark,
  Facebook,
  Instagram,
  LeafLeft,
  LeafRight,
  Linkedin,
  X,
  XMark,
  YouTube,
} from "../assets/icons";
import {
  FeaturesLogo1,
  FeaturesLogo2,
  FeaturesLogo3,
  FeaturesLogo4,
  HowItWorksImg1,
  HowItWorksImg2,
  HowItWorksImg3,
  HowItWorksImg4,
  KintsugiLogo,
  MagnoliaLogo,
  OdeaoLabs,
  PeoplePictures,
  QuickMedLogo,
  SisyphusLogo,
  StackedLabLogo,
  WarpspeedLogo,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#howItWorks", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const heroLogos = [
  { id: "odeaolabs", src: OdeaoLabs },
  { id: "kintsugi", src: KintsugiLogo },
  { id: "stacked-lab", src: StackedLabLogo },
  { id: "magnolia", src: MagnoliaLogo },
  { id: "warpspeed", src: WarpspeedLogo },
  { id: "sisyphus", src: SisyphusLogo },
];

export const features = [
  {
    imgURL: FeaturesLogo1,
    name: "Auto-Generates Notes",
    note: "Create detailed clinical notes with just a few clicks. No more typing everything out manually.",
  },
  {
    imgURL: FeaturesLogo2,
    name: "Smart Templates",
    note: "Pick from ready-to-use templates that fit your needs, making documentation a breeze.",
  },
  {
    imgURL: FeaturesLogo3,
    name: "Syncs with EHR",
    note: "Connects with your electronic health records to pull in patient info automatically",
  },
  {
    imgURL: FeaturesLogo4,
    name: "Voice to text",
    note: "Dictate your notes and let our tool handle the typing.",
  },
];

export const howItWorks = [
  {
    imgURL: HowItWorksImg1,
    name: "Input Patient Data",
    note: "Enter or import patient information into the system with ease",
  },
  {
    imgURL: HowItWorksImg2,
    name: "Select Template",
    note: "Choose from a range of customizable templates.",
  },
  {
    imgURL: HowItWorksImg3,
    name: "Review and Edit",
    note: "The tool automatically generates a draft based on the input, which you can review and make adjustments to as necessary.",
  },
  {
    imgURL: HowItWorksImg4,
    name: "Finalize and Save",
    note: "Approve the final document and save it directly to your electronic health record system.",
  },
];

export const pricing = [
  {
    title: "Basic",
    price: "Free",
    interval: "",
    label: "Get Started",
    content: [
      "End-to-End Encryption",
      "HIPAA Compliance",
      "Email Support",
      "1,000 Patient Records",
    ],
    excluded: [
      "Priority Support",
      "Advanced Analytics",
      "24/7 Dedicated Support",
      "Custom Integrations",
    ],
  },
  {
    title: "Professional",
    price: "$299",
    interval: "/month",
    label: "Get Started",
    content: [
      "End-to-End Encryption",
      "HIPAA Compliance",
      "Email Support",
      "10,000 Patient Records",
      "Priority Support",
      "Advanced Analytics",
    ],
    excluded: ["24/7 Dedicated Support", "Custom Integrations"],
  },
  {
    title: "Enterprise",
    price: "Custom",
    interval: "",
    label: "Contact sales",
    content: [
      "End-to-End Encryption",
      "HIPAA Compliance",
      "Email Support",
      "Unlimited Patient Records",
      "Priority Support",
      "Advanced Analytics",
      "24/7 Dedicated Support",
      "Custom Integrations",
    ],
    excluded: [],
  },
];

export const faqs = [
  {
    title: "How do I enter patient information?",
    content: "To enter patient information, you can...",
  },
  {
    title: "What if I don't see a template that fits my needs?",
    content: "If you don't see a suitable template, you can...",
  },
  {
    title: "Is my patient data secure?",
    content: "Your patient data is secured through...",
  },
  {
    title: "Can I make changes to the draft?",
    content: "Yes, you can make changes to the draft by...",
  },
  {
    title: "How do I save the document to my EHR system?",
    content: "To save the document to your EHR system, follow these steps...",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", link: "/" },
      { name: "Career", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Features", link: "/" },
      { name: "Pricing", link: "/" },
    ],
  },
  {
    title: "Support   ",
    links: [
      { name: "FAQ", link: "/" },
      { name: "Contact Support", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: X, alt: "X fka Twitter logo" },
  { src: Linkedin, alt: "Linkedin logo" },
  { src: Facebook, alt: "Facebook logo" },
  { src: Instagram, alt: "Instagram logo" },
  { src: YouTube, alt: "Youtube logo" },
];
