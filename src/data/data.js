export const topSkillsLogos = [
  "/assets/icons8-react-native-500.png",
  "/assets/icons8-javascript-500.png",
  "/assets/icons8-node-js-512.png",
  "/assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png",
  "/assets/icons8-sql-100.png",
  "/assets/icons8-redux-500.png",
];

export const sideBarLinks = [
  { to: "sms:0585940960", icon: "/assets/icons8-old-phone-64.png" },
  {
    to: "https://www.linkedin.com/in/yonatan-ariel/",
    icon: "/assets/icons8-linkedin-250.png",
  },
  {
    to: "https://api.whatsapp.com/send?phone=0585940960",
    icon: "/assets/icons8-whatsapp-240.png",
  },
  { to: "mailTo:yonatanariel1000", icon: "/assets/icons8-email-64.png" },
];

export const headerLinks = [
  { text: "About", destiny: "about me", offset: -130 },
  { text: "Skills", destiny: "skills", offset: -100 },
  { text: "Projects", destiny: "projects", offset: 30 },
];

export const aboutMeData = {
  bigScreenTxt: [
    { txt: "Coding is my true love.", time: 3000 },
    { txt: "Driven by this passion, I'm highly motivated", time: 2000 },
    { txt: " to continuously expand my knowledge,", time: 2000 },
    { txt: "enabling me to adapt quickly to new challenges", time: 2400 },
    { txt: " and technologies.", time: 2000 },
    { txt: "I genuinely enjoy working with people and ", time: 2000 },
    { txt: "possess the capability to lead when necessary.", time: 2000 },
  ],
  smallScreenTxt: [
    { txt: "Coding is my true love.", time: 2800 },
    { txt: "Driven by this passion,  ", time: 3000 },
    { txt: "I'm highly motivated to", time: 2200 },
    { txt: "continuously expand my ", time: 2200 },
    { txt: "knowledge, enabling me to", time: 2200 },
    { txt: "adapt quickly to new", time: 2200 },
    { txt: "challenges and technologies.", time: 2000 },
    { txt: "I genuinely enjoy working", time: 3500 },
    { txt: "with people and possess", time: 2200 },
    { txt: "the capability to lead", time: 2200 },
    { txt: "when necessary.", time: 2200 },
  ],
  facts: [
    {
      text: "Single",
      img: "/assets/icons8-account-100.png",
    },
    {
      text: "Frontend",
      img: "/assets/icons8-heart-96.png",
    },
    {
      text: "Code 24/7",
      img: "/assets/icons8-last-24-hours-64.png",
    },
    {
      text: "22 Years Old",
      img: "/assets/icons8-elderly-person-100.png",
    },
    {
      text: "Lives In Israel",
      img: "/assets/icons8-star-of-david-100.png",
    },
    {
      text: "English & Hebrew",
      img: "/assets/icons8-translation-96.png",
    },
    {
      text: "Workout & Football",
      img: "/assets/icons8-dumbbell-100.png",
    },
  ],
};

export const skills = [
  {
    name: "Frotend",
    content: [
      { name: "React", icon: "/assets/icons8-react-native-500.png" },
      { name: "Next.JS 13", icon: "/assets/image.png" },
      { name: "JavaScript", icon: "/assets/icons8-javascript-500.png" },
      { name: "HTML5", icon: "/assets/icons8-html-100.png" },
      { name: "CSS3", icon: "/assets/icons8-css-100.png" },
      {
        name: "Redux & Redux Toolkit",
        icon: "/assets/icons8-redux-500.png",
      },
      {
        name: "Axios",
        icon: "/assets/574565_logo_axios-media-veed-remove-background.png",
        invert: true,
      },
      {
        name: "Tailwind CSS",
        icon: "/assets/icons8-tailwind-css-240.png",
      },
    ],
  },
  {
    name: "Backend",
    content: [
      { name: "NodeJS", icon: "/assets/icons8-node-js-512.png" },
      { name: "Express", icon: "/assets/icons8-express-js-150.png" },
      { name: "SQL", icon: "/assets/icons8-sql-100.png" },
      {
        name: "MongoDB",
        icon: "/assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png",
      },
      {
        name: "Mongoose",
        icon: "/assets/274-2749343_mongoose-js-logo-hd-png-download-veed-remove-background.png",
        invert: true,
      },
      {
        name: "Rest APIs",
        icon: "/assets/1_mbP4Bjrs8Hshx7IgjsUNSg-veed-remove-background.png",
        invert: true,
      },
      {
        name: "Bcrypt",
        icon: "/assets/default_2be036aaca5c71baf790e00f1ef80dd37a625905.png",
        invert: true,
      },
      {
        name: "JsonWebToken",
        icon: "/assets/jw6371j74d-jwt-logo-json-web-token-authentication-with-node-js--veed-remove-background.png",
        invert: true,
      },
    ],
  },
  {
    name: "Tools",
    content: [
      { name: "Jira", icon: "/assets/icons8-jira-250.png" },
      { name: "Figma", icon: "/assets/icons8-figma-150.png" },
      { name: "Git ", icon: "/assets/icons8-git-150.png" },
      { name: "GitHub", icon: "/assets/icons8-github-250.png" },
      { name: "VSCode", icon: "/assets/icons8-vs-code-250.png" },
      {
        name: "PostMan",
        icon: "/assets/postman_logo_icon_144970.png",
        invert: true,
      },
      {
        name: "Netlify",
        icon: "/assets/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-96.png",
      },
      {
        name: "Render",
        icon: "/assets/render-logo-818C47ACCA-seeklogo.com.png",
        invert: true,
      },
    ],
  },
  {
    name: "Soft skills",
    content: [
      { name: "Problem solver", icon: "" },
      { name: "Quick Learner", icon: "" },
      { name: "Multitasker", icon: "" },
      { name: "People person", icon: "" },
      { name: "Calm Under Pressure", icon: "" },
      { name: "Reliable", icon: "" },
      { name: "Adaptable", icon: "" },
    ],
  },
];

export const projects = [
  {
    name: "Chexi",
    description: "A music app",
    embedId: "jwihEcUi6Mo",
    technologies: [
      { name: "React", icon: "/assets/icons8-react-native-500.png" },
      {
        name: "MongoDB",
        icon: "/assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png",
      },
      { name: "NodeJS", icon: "/assets/icons8-node-js-512.png" },
    ],
    links: [
      {
        name: "Github Frontend",
        src: "https://github.com/YonatanAriel/Chexi",
        icon: "/assets/icons8-github-250.png",
      },
      {
        name: "GitHub Backend",
        src: "https://github.com/YonatanAriel/Chexi-server",
        icon: "/assets/icons8-github-250.png",
      },
      {
        name: "Website",
        src: "https://chexi.netlify.app/",
        icon: "/assets/icons8-website-96.png",
      },
    ],
    img: "/assets/1692049251885.jpeg",
  },
  {
    name: "B&B",
    description: "A website for a B&B",
    embedId: "yaalZNCi2XA",

    technologies: [
      { name: "React", icon: "/assets/icons8-react-native-500.png" },
      {
        name: "Redux",
        icon: "/assets/icons8-redux-500.png",
      },
      { name: "CSS", icon: "/assets/icons8-css-100.png" },
    ],
    links: [
      {
        name: "GitHub",
        src: "https://github.com/YonatanAriel/Hamin-hasela-haze",
        icon: "/assets/icons8-github-250.png",
      },
    ],
    img: "/assets/‏‏צילום מסך (11).png",
  },
  {
    name: "Memory",
    description: "A Football memory game",
    embedId: "f_U-jYMibRc",
    technologies: [
      { name: "HTML", icon: "/assets/icons8-html-100.png" },
      {
        name: "JS",
        icon: "/assets/icons8-javascript-500.png",
      },
      { name: "CSS", icon: "/assets/icons8-css-100.png" },
    ],
    links: [
      {
        name: "Github",
        src: "https://github.com/YonatanAriel/Football-Memory-Game",
        icon: "/assets/icons8-github-250.png",
      },
      {
        name: "Website",
        src: "https://football-field-memory-game.netlify.app/levels/levels.html",
        icon: "/assets/icons8-website-96.png",
      },
    ],
    img: "/assets/‏‏צילום מסך (10).png",
  },
  {
    name: "Bemida",
    description: "A website for a furniture start-up",
    technologies: [
      { name: "React", icon: "/assets/icons8-react-native-500.png" },
      {
        name: "MongoDB",
        icon: "/assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png",
      },
      { name: "Express", icon: "/assets/icons8-express-js-150.png" },
    ],
    links: [
      {
        name: "Github front",
        src: "https://github.com/Bemida/client",
        icon: "/assets/icons8-github-250.png",
      },
      {
        name: "Github back",
        src: "https://github.com/Bemida/server",
        icon: "/assets/icons8-github-250.png",
      },
    ],
  },
];

export const contactLinks = [
  {
    copy: "yonatanariel1000@gmail.com",
    to: "mailTo:yonatanariel1000",
    txt: "Email",
    img: "/assets/icons8-email-64.png",
  },
  {
    copy: "0585940960",
    to: "sms:0585940960",
    txt: "Phone number",
    img: "/assets/icons8-phone-64.png",
  },
  {
    copy: "https://api.whatsapp.com/send?phone=0585940960",
    to: "https://api.whatsapp.com/send?phone=0585940960",
    txt: "WhatsApp",
    img: "/assets/icons8-whatsapp-256.png",
  },
  {
    copy: "https://www.linkedin.com/in/yonatan-ariel/",
    to: "https://www.linkedin.com/in/yonatan-ariel/",
    txt: "LinkedIn",
    img: "/assets/icons8-linkedin-250.png",
  },
  {
    copy: "https://github.com/YonatanAriel",
    to: "https://github.com/YonatanAriel",
    txt: "GitHub",
    img: "/assets/icons8-github-250.png",
  },
  {
    copy: "https://drive.google.com/file/d/1kGp945ABszFEn5y-MgqUwPa9jtCI2lL0/view?usp=sharing",
    to: "https://drive.google.com/file/d/1kGp945ABszFEn5y-MgqUwPa9jtCI2lL0/view?usp=sharing",
    txt: "Resume",
    img: "/assets/icons8-resume-50.png",
  },
];
