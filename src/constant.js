import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.png";
import profileImg2 from "./assets/images/profileimg-2.png";

import {
  FaCode,
  FaMobileAlt,
  FaRobot,
  FaBullhorn,
  FaShieldAlt,
  FaDatabase,
  FaBitcoin,
  FaLightbulb,
  FaHandshake,
  FaStar,
} from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
};

// company details
export const companyDetails = {
  name: "LOLA SOLUTION",
  phone: "+91-9326176427",
  whatsapp: "+91-9326176427",
  email: "infor@lolasolutjon.com",
  address: "d706 Ganga estate chembur mumbai 400071",
  twitter: "https://x.com/lolasolution_in?s=11&t=tLp3BvgseVl9ZAiqZFnjgg",
  linkedin: "",
  instagram:
    "https://www.instagram.com/lola_solution?igsh=MTcwcG1vcWI5ZW1iNA==",
  facebook: "",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services

export const allServices = [
  {
    id: 1,
    title: "Web Development",
    detailContent:
      "Your website is your digital storefront, and we make sure it’s built to impress. Our web development services focus on creating responsive, functional, and visually appealing websites that reflect your brand and drive engagement. From simple landing pages to complex web applications, we ensure that every site we build is easy to navigate, fast, and optimized for both desktop and mobile users, giving your customers the best experience possible.",
    desc: "Your website is often the first touchpoint for your customers, and we make sure it leaves a lasting impression. We specialize in developing custom websites and web applications that are not only visually appealing but also functional, secure, and responsive.",
    icon: <FaCode className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    detailContent:
      "In a world dominated by mobile technology, having a user-friendly, high-performance app is essential. Our mobile app development services deliver custom solutions for both iOS and Android platforms, ensuring your app not only looks great but works seamlessly. Whether you're building a native app, a cross-platform solution, or a hybrid app, we focus on delivering apps that meet your specific business objectives while providing a great user experience.",
    desc: "In a world where everyone is connected through mobile, having a great app is essential. Our team of app developers creates intuitive, robust, and high-performance apps for iOS and Android.",
    icon: <FaMobileAlt className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "AI Architecture & Chatbot Development",
    detailContent:
      "Artificial Intelligence is reshaping industries, and we help businesses leverage this technology to streamline operations and improve customer experiences. Our AI architecture and chatbot development services are designed to integrate intelligent systems into your business, automating tasks, enhancing decision-making, and improving customer support. Whether it’s through AI-driven recommendations or developing interactive chatbots, we create tailored solutions to fit your needs.",
    desc: "Artificial Intelligence is changing the way businesses operate, and we’re here to help you harness its full potential. Our team specializes in building AI solutions, from designing AI architectures to developing intelligent chatbots.",
    icon: <FaRobot className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Digital Marketing & Performance Marketing",
    detailContent:
      "In today’s competitive digital world, your online visibility matters more than ever. Our digital marketing services are designed to boost your brand’s presence, attract the right audience, and convert leads into customers. From SEO and PPC campaigns to social media marketing and content creation, we create strategies that deliver measurable results. We take a performance-focused approach to ensure that your marketing efforts generate the best possible return on investment.",
    desc: "In the digital age, effective marketing is crucial to growing your business. We offer a full suite of digital marketing services that help boost your online visibility, attract the right audience, and convert leads into loyal customers.",
    icon: <FaBullhorn className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "Cybersecurity",
    detailContent:
      "The security of your business data is critical in an increasingly connected world. Our cybersecurity solutions are built to protect your systems from cyber threats, safeguard your sensitive data, and ensure your business stays compliant with industry regulations. From proactive risk assessments and threat monitoring to data encryption and security audits, we provide the tools and expertise needed to secure your digital infrastructure against evolving cyber risks.",
    desc: "In today’s digital world, protecting your business from cyber threats is more important than ever. Our cybersecurity services are designed to safeguard your organization’s data and infrastructure against breaches and attacks.",
    icon: <FaShieldAlt className="w-8 h-8" />,
  },
  {
    id: 6,
    title: "Data Science",
    detailContent:
      "Data is an invaluable asset that can unlock insights and drive smarter decision-making. Our data science services help you extract actionable insights from large datasets, uncover trends, and predict future outcomes. Whether you need advanced analytics, predictive modeling, or data visualization, we empower your business to use data effectively to drive growth and optimize operations.",
    desc: "Unlock the power of your data with our advanced data science services. We help businesses make smarter, data-driven decisions by applying machine learning, data analytics, and predictive modeling.",
    icon: <FaDatabase className="w-8 h-8" />,
  },
  {
    id: 7,
    title: "Blockchain Technology",
    detailContent:
      "Blockchain technology is transforming industries by offering secure, transparent, and efficient solutions. We provide end-to-end blockchain services to help businesses implement decentralized systems, build smart contracts, and develop dApps (decentralized applications). Our blockchain solutions can improve transparency, reduce fraud, and streamline processes, giving your business a competitive edge in the digital landscape.",
    desc: "Blockchain technology is revolutionizing industries by offering secure, transparent, and decentralized solutions. We help businesses integrate blockchain technology to enhance data integrity, streamline transactions, and reduce costs.",
    icon: <FaBitcoin className="w-8 h-8" />,
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Customized Solutions for Every Business",
    desc: "We believe in a tailored approach because every business is unique. We take time to understand your goals and create custom digital solutions that align perfectly with your vision.",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "Our team is equipped with the latest tools and technologies to bring your project to life, ensuring that you stay ahead in the ever-changing digital space.",
  },
  {
    title: "Security and Reliability",
    desc: "At LOLA SOLUTION, we take security seriously. Our solutions are built with stringent security protocols to safeguard your business data and protect it from cyber threats.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We’re not just a service provider; we’re your strategic partner. From conceptualization to deployment and ongoing support, we’re with you every step of the way, ensuring your success in the digital landscape.",
  },
  {
    title: "Agility and Innovation",
    desc: "As technology evolves, so do we. We continuously adapt to the latest trends and innovations to deliver products that not only meet your current needs but are scalable for the future.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  // {
  //   id: 3,
  //   img: require("./assets/images/app_projects/3.webp"),
  //   title: "Glowsy",
  // },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

export const coreValues = [
  {
    id: 1,
    icon: <FaLightbulb className="text-4xl text-blue-500 mx-auto mb-4" />,
    title: "Innovation",
    description:
      "We thrive on pushing boundaries and exploring new ideas, delivering cutting-edge solutions.",
  },
  {
    id: 2,
    icon: <FaHandshake className="text-4xl text-green-500 mx-auto mb-4" />,
    title: "Collaboration",
    description:
      "We work closely with you to understand your business and ensure alignment on your goals.",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-4xl text-yellow-500 mx-auto mb-4" />,
    title: "Integrity",
    description:
      "We pride ourselves on being honest and accountable, building trust and transparency.",
  },
  {
    id: 4,
    icon: <FaStar className="text-4xl text-purple-500 mx-auto mb-4" />,
    title: "Excellence",
    description:
      "We deliver high-quality solutions that exceed expectations every time.",
  },
];

export const whyWorkWithUs = [
  {
    id: 1,
    icon: <MdCheckCircle className="text-3xl text-blue-500 mt-1" />,
    title: "Proven Success",
    description:
      "We have a strong track record of helping businesses achieve their digital goals.",
  },
  {
    id: 2,
    icon: <MdCheckCircle className="text-3xl text-green-500 mt-1" />,
    title: "Experienced Team",
    description:
      "Our team of skilled professionals brings expertise and a passion for innovation to every project.",
  },
  {
    id: 3,
    icon: <MdCheckCircle className="text-3xl text-yellow-500 mt-1" />,
    title: "Client-Focused Approach",
    description:
      "We listen, adapt, and make your goals our own, ensuring your success.",
  },
  {
    id: 4,
    icon: <MdCheckCircle className="text-3xl text-purple-500 mt-1" />,
    title: "Comprehensive Services",
    description:
      "From strategy to support, we provide end-to-end solutions for your digital transformation.",
  },
];

export const reviews = [
  {
    id: 1,
    title: "An Exceptional Experience from Start to Finish",
    content: `We couldn’t be more satisfied with our experience working with ${companyDetails.name}. They built us a website that not only looks amazing but functions seamlessly. Their team took the time to understand our business needs and delivered a solution that truly represents our brand. Since launching the site, we’ve noticed a significant increase in engagement and customer inquiries. We highly recommend their services.`,
    author: "David M., CEO, Tech Solutions",
    profileImg: profileImg2,
  },
  {
    id: 2,
    title: "A Mobile App that Exceeded Expectations",
    content: `${companyDetails.name} was fantastic in developing our mobile app. They listened carefully to our requirements and delivered a final product that’s easy to navigate and highly functional. The app has drastically improved our customer experience, and we’ve seen strong retention and increased downloads since its launch. Their post-launch support has also been outstanding.`,
    author: "Sarah L., Marketing Director, Retail Innovators",
    profileImg: profileImg1,
  },
  {
    id: 3,
    title: "AI Integration That Transformed Our Operations",
    content: `Thanks to ${companyDetails.name}, we now have a powerful AI-driven chatbot that has transformed the way we interact with customers. The AI solution they implemented has significantly reduced response times and streamlined our customer support. We now offer 24/7 assistance, improving customer satisfaction. Their team’s expertise was invaluable throughout the entire process, from development to deployment.`,
    author: "John P., Operations Manager, Fintech Solutions",
    profileImg: profileImg2,
  },
  {
    id: 4,
    title: "Impressive Results from Digital Marketing Campaigns",
    content: `Working with ${companyDetails.name} on our digital marketing strategy has been a game changer. Their team helped refine our SEO efforts and launch a targeted PPC campaign that boosted our lead generation and increased sales. The ROI has been impressive, and we continue to see solid results. Their focus on performance marketing helped us get the most out of our budget.`,
    author: "Emily R., Chief Marketing Officer, E-Commerce Leaders",
    profileImg: profileImg1,
  },
  {
    id: 5,
    title: "Cybersecurity Expertise We Can Rely On",
    content: `As a company handling sensitive data, cybersecurity is a top priority for us. ${companyDetails.name} helped us identify vulnerabilities, implement key security measures, and ensure our systems are robust against threats. Their ongoing support and proactive monitoring have given us confidence that our data is secure. We truly value their expertise and commitment to keeping us safe.`,
    author: "Robert H., IT Director, Global Enterprises",
    profileImg: profileImg2,
  },
  {
    id: 6,
    title: "Data Science Insights That Powered Our Growth",
    content: `The data science team at ${companyDetails.name} has been instrumental in helping us unlock valuable insights from our data. Their ability to analyze and predict trends has given us the tools we need to optimize our strategies and make smarter decisions. We’ve seen a significant improvement in operational efficiency and customer engagement, all thanks to their expertise.`,
    author: "Jessica T., Senior Analyst, Consumer Insights Corp.",
    profileImg: profileImg1,
  },
  {
    id: 7,
    title: "Blockchain Solutions That Transformed Our Business",
    content: `${companyDetails.name} helped us integrate blockchain technology into our operations, and it’s made a huge difference. The transparency and security blockchain offers have streamlined our processes and reduced potential fraud. Their team provided expert guidance throughout the entire implementation and continues to offer valuable support. We’re excited about the future and the impact blockchain will have on our business.`,
    author: "Michael W., Supply Chain Manager, Manufacturing Inc.",
    profileImg: profileImg2,
  },
];
