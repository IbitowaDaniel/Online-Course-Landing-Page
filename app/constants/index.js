import { FevCourse1, FevCourse2, FevCourse3, FevCourse4, ArrowEven, ArrowOdd, FreeCourse, } from "@app/assets";
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';


export const Navigation = [
  { name: 'Home', path: "home" },
  { name: 'Courses', path: 'courses' },
  { name: 'Pricing', path: 'pricing' },
  { name: 'FAQs', path: 'faqs' },
];


export const FeaturesData = [
  {
    heading: 'Quality Features',
    headingSecondary: 'Tutorials that people love most',
    items: [
      {
        id: 1,
        imgSrc: FevCourse1,
        altText: 'Favourite Course 1',
        rating: 5,
        review: '5.0 (392 reviews)',
        heading: 'How to work with prototype design with adobe xd featuring tools',
        views: '2,538 students watched',
      },
      {
        id: 2,
        imgSrc: FevCourse2,
        altText: 'Favourite Course 2',
        rating: 4,
        review: '4.5 (524 reviews)',
        heading: 'Create multiple artboard by using figma prototyping tools development',
        views: '3,532 students watched',
      },
      {
        id: 3,
        imgSrc: FevCourse3,
        altText: 'Favourite Course 3',
        rating: 5,
        review: '5.0 (392 reviews)',
        heading: 'Convert your web layout theming easily with sketch zeplin extension',
        views: '1,037 students watched',
      }
    ]
  },
];

export const CoreFeaturesData = [
  {
    heading: 'core features',
    headingSecondary: 'Smart Jackpots that you may love this anytime & anywhere',
    text: 'Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
    btnText: 'Explore details',
    stats: [
      {
        id: 1,
        statNo: '80k+',
        statText: 'We have more than students',
        statColor: 'text-primary',
      },
      {
        id: 2,
        statNo: '150+',
        statText: 'Free online tutorial videos available',
        statColor: 'text-[#ff753a]',
        statTranslate: '-translate-y-9 lg:-translate-y-12',
      },
      {
        id: 3,
        statNo: '90+',
        statText: 'Daily updated blog post maintain',
        statColor: 'text-[#fa578e]',
      },
      {
        id: 4,
        statNo: '&3M',
        statText: 'Job posted everyday with qualification',
        statColor: 'text-[#e682ff]',
        statTranslate: '-translate-y-9 lg:-translate-y-12',
      }
    ]
  }
];

export const QualityFeaturesData = [
  {
    heading: 'quality features',
    headingSecondary: 'Popular Designing Course',
    courses: [
      {
        id: 1,
        imgSrc: FevCourse1,
        rating: 5,
        review: '5.0 (392 reviews)',
        views: '2,538 students watched',
        heading: 'Professional graphic design tutorial full course with exercise file',
        text: 'Get your tutorials delivered at let home collect sample from the victory of the managments.',
        btnText: '7 Video Classes | 4 hrs',
        courseList: [
          {
            content: 'How to reduce file pixel dimentions without loosing quality',
          },
          {
            content: 'How to make logo pixel perfects with different extension',
          },
          {
            content: 'Create vector file from restarize layer styles',
          },
          {
            content: 'Make color gradient with photoshop build-in tools',
          },
        ],
      },
      {
        id: 2,
        imgSrc: FevCourse2,
        rating: 4,
        review: '4.5 (524 reviews)',
        views: '3,532 students watched',
        heading: 'Become ultimate photoshop expert within 30 days',
        text: 'Get your tutorials delivered at let home collect sample from the victory of the managments.',
        btnText: '12 Video Classes | 6 hrs',
        courseList: [
          {
            content: 'How to reduce file pixel dimentions without loosing quality',
          },
          {
            content: 'How to make logo pixel perfects with different extension',
          },
          {
            content: 'Create vector file from restarize layer styles',
          },
          {
            content: 'Make color gradient with photoshop build-in tools',
          },
        ],
      },
      {
        id: 3,
        imgSrc: FevCourse3,
        rating: 5,
        review: '5.0 (392 reviews)',
        views: '1,037 students watched',
        heading: 'After effects animation tutorial with photoshop documents',
        text: 'Get your tutorials delivered at let home collect sample from the victory of the managments.',
        btnText: '8 Video Classes | 4 hrs',
        courseList: [
          {
            content: 'How to reduce file pixel dimentions without loosing quality',
          },
          {
            content: 'How to make logo pixel perfects with different extension',
          },
          {
            content: 'Create vector file from restarize layer styles',
          },
          {
            content: 'Make color gradient with photoshop build-in tools',
          },
        ],
      },
      {
        id: 4,
        imgSrc: FevCourse4,
        rating: 5,
        review: '5.0 (392 reviews)',
        views: '1,037 students watched',
        heading: 'Adobe illustrator vector art design mockup illustrations',
        text: 'Get your tutorials delivered at let home collect sample from the victory of the managments.',
        btnText: '10 Video Classes | 4 hrs',
        courseList: [
          {
            content: 'How to reduce file pixel dimentions without loosing quality',
          },
          {
            content: 'How to make logo pixel perfects with different extension',
          },
          {
            content: 'Create vector file from restarize layer styles',
          },
          {
            content: 'Make color gradient with photoshop build-in tools',
          },
        ],
      },
    ]
  }
];

export const ProductFunctionData = [
  {
    heading: 'Whats the function',
    headingSecondary: "Let's see how it works",
    features: [
      {
        id: 1,
        img: ArrowEven,
        title: 'Set disbursement Instructions',
        text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
      {
        id: 2,
        img: ArrowOdd,
        title: 'Assembly retrieves funds from your account',
        text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
      {
        id: 3,
        img: ArrowEven,
        title: 'Assembly initiates disbursement',
        text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
      {
        id: 4,
        title: 'Customer receives funds payment',
        text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
    ],
  },
];

export const FreeTutorialData = [
  {
    heading: 'free tutorial',
    headingSecondary: 'Smart Jackpots that you may love this anytime & anywhere',
    text: 'Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
    btnText: 'Explore details',
    imgSrc: FreeCourse,
    imgAlt: 'Free Course Image',
  }
];

export const FAQsData = [
  {
    subTitle: "any questions",
    mainTitle: 'Frequently asked question',
    features: [
      {
        id: 1,
        title: 'How to contact with riders emergency?',
        contents: 'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
      },
      {
        id: 2,
        title: 'Do I need any background knowledge or prerequisites?',
        contents: 'Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much when the mud dries it acts as protection from the sunburns and insects.',
      },
      {
        id: 3,
        title: 'What is your refund policy and criterial?',
        contents: 'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.',
      },
      {
        id: 4,
        title: 'Unable to fully access the free courses',
        contents: "If you're looking to hunt a unicorn, but don't know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.",
      },
    ],
    CTAtitle: 'Do you have any question? Please ask here we are ready to support with',
    CtAtext: 'If you have more questions and it is not listed here, please feel free to make a manual support and reach out to our support team.',
    CTAbtn: 'Ask your Question',
  }
];


export const FooterData = [
  {
    id: 1,
    header: 'About Us',
    items: [
      {
        path: '/',
        label: 'Support Center',
      },
      {
        path: '/',
        label: 'Customer Support',
      },
      {
        path: '/',
        label: 'About Us',
      },
      {
        path: '/',
        label: 'Copyright',
      },
    ],
  },
  {
    id: 2,
    header: 'Our Information',
    items: [
      {
        path: '/',
        label: 'Return Policy ',
      },
      {
        path: '/',
        label: 'Privacy Policy',
      },
      {
        path: '/',
        label: 'Terms & Conditions',
      },
      {
        path: '/',
        label: 'Site Map',
      },
    ],
  },
  {
    id: 3,
    header: 'My Account',
    items: [
      {
        path: '/',
        label: 'Press inquiries',
      },
      {
        path: '/',
        label: 'Social media ',
      },
      {
        path: '/',
        label: 'directories',
      },
      {
        path: '/',
        label: 'Images & B-roll',
      },
    ],
  },
  {
    id: 4,
    header: 'Contact',
    items: [
      {
        path: '/',
        label: 'Facebook',
        media: <FaFacebook />,
        btnColor: 'text-[#3B5998]',
      },
      {
        path: '/',
        label: 'Twitter',
        media: <FaTwitter />,
        btnColor: "text-[#55ACEE]",
      },
      {
        path: '/',
        label: 'Instagram',
        media: <FaInstagram />,
        btnColor: 'text-[#e4405f]',
      },
      {
        path: '/',
        label: 'Dribbble',
        media: <FaDribbble />,
        btnColor: 'text-[#E74D89]',
      },
    ],
  }
];


