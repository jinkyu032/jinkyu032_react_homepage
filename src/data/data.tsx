import {CalendarIcon, FlagIcon} from '@heroicons/react/24/outline';

import CVIcon from '../components/Icon/CVIcon';
import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
// import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  PublicationsItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jinkyu Kim',
  description: 'Jinkyu Kim - Ph.D. student at SNU Computer Vision Lab',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  // Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  actions: [
    // {
    //   // href: '../pdf/Jinkyu_Kim_CV.pdf',
    //   href: '../images/portfolio/portfolio-11.jpg',
    //   text: 'Resume',
    //   primary: true,
    //   //Icon: ArrowDownTrayIcon,
    // },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a Ph.D. student at the{' '}
        <a className="text-stone-100" href="https://cv.snu.ac.kr/">
          <strong>SNU Computer Vision Lab</strong>
        </a>{' '}
        under the supervision of{' '}
        <a className="text-stone-100" href="https://cv.snu.ac.kr/index.php/~bhhan/">
          <strong>Prof. Bohyung Han</strong>
        </a>
        . <br />
        My research interests include machine learning and computer vision, with recent work on diffusion sampler
        optimization and federated learning.
        {/* I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder. */}
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  imageSrc: heroImage,
  name: `I'm Jinkyu Kim.`,
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Ph.D. student majoring in machine learning and computer vision. I find it fascinating to witness how emerging technologies drive progress in our world, and my goal is to contribute to this development.`,
  aboutItems: [
    //{label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    {label: 'Birth', text: '1995.03', Icon: CalendarIcon},
    {label: 'Nationality', text: 'South Korea', Icon: FlagIcon},
    //{label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    // {label: 'Study', text: 'Seoul National University', Icon: AcademicCapIcon},
    //{label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  // {
  //   name: 'Spoken languages',
  //   skills: [
  //     {
  //       name: 'English',
  //       level: 10,
  //     },
  //     {
  //       name: 'French',
  //       level: 4,
  //     },
  //     {
  //       name: 'Spanish',
  //       level: 3,
  //     },
  //   ],
  // },
  // {
  //   name: 'Frontend development',
  //   skills: [
  //     {
  //       name: 'React',
  //       level: 9,
  //     },
  //     {
  //       name: 'Typescript',
  //       level: 7,
  //     },
  //     {
  //       name: 'GraphQL',
  //       level: 6,
  //     },
  //   ],
  // },
  // {
  //   name: 'Backend development',
  //   skills: [
  //     {
  //       name: 'Node.js',
  //       level: 8,
  //     },
  //     {
  //       name: 'Rust',
  //       level: 5,
  //     },
  //     {
  //       name: 'Golang',
  //       level: 4,
  //     },
  //   ],
  // },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Mar 2021 - Current',
    location: 'Seoul National University',
    title: 'Ph.D. Student',
    content: <p>Electrical and Computer Engineering </p>,
  },
  {
    date: 'Mar 2014 - Feb  2021',
    location: 'Seoul National University',
    title: 'B.S.',
    content: <p>Electrical and Computer Engineering </p>,
  },
];

export const publications: PublicationsItem[] = [
  {
    authors: 'Jinkyu Kim, Jinyoung Choi, Bohyung Han',
    linkurl: 'https://arxiv.org/abs/2607.06609',
    title: 'D2PO: Optimizing Diffusion Samplers via Dynamic Preference',
    content: <p>ECCV 2026</p>,
  },
  {
    authors: 'Seonguk Seo*, Jinkyu Kim*, Geeho Kim*, Bohyung Han',
    linkurl: 'https://arxiv.org/abs/2401.04928v1',
    title: 'Relaxed Contrastive Learning for Federated Learning',
    content: <p>CVPR 2024</p>,
  },
  {
    authors: 'Geeho Kim*, Jinkyu Kim*, Bohyung Han',
    linkurl: 'https://arxiv.org/abs/2201.03172v2',
    title: 'Communication-Efficient Federated Learning with Accelerated Client Gradient',
    content: <p>CVPR 2024</p>,
  },
  {
    authors: 'Jinkyu Kim*, Geeho Kim*, Bohyung Han',
    linkurl: 'https://arxiv.org/abs/2207.06936',
    title: 'Multi-Level Branched Regularization for Federated Learning',
    content: <p>ICML 2022</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jun 2019 - Aug 2019    ',
    location: 'Samsung Seoul R&D Campus',
    title: 'Intern',
    content: <p></p>,
  },
  {
    date: 'Apr 2016 - Apr 2018',
    location: 'Republic of Korea Airforce',
    title: 'Military Service',
    content: <p></p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    "If you have any questions or if there's anything you'd like to discuss, please feel free to send me an email.",
  items: [
    {
      type: ContactType.Email,
      text: 'jinkyu(at)snu(dot)ac(dot)kr',
      href: 'mailto:jinkyu@snu.ac.kr',
    },
    {
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/jinkyu032',
    },
    {
      type: ContactType.GoogleScholar,
      text: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=qsbgoXIAAAAJ&hl=ko',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: 'CV',
    Icon: CVIcon,
    href: 'https://drive.google.com/file/d/1ch2FUJD9PP17DKk0JU_6BXgpbdYPqX1A/view?usp=sharing',
  },
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jinkyu032'},
  {
    label: 'Google Scholar',
    Icon: GoogleScholarIcon,
    href: 'https://scholar.google.com/citations?user=qsbgoXIAAAAJ&hl=ko',
  },
];
