
export const CONTACT_INFO = {
  GITHUB: 'https://github.com/shubho738',
  LINKEDIN: 'https://www.linkedin.com/in/shubhankar-chakraborty-3b11442b5/',
  EMAIL: 'sbhankar245@proton.me'
}  


export const ABOUT: string = "Hello, My name is Shubhankar. I'm a React developer passionate about crafting dynamic and responsive web applications. I strive to create code that is clean and easily maintainable, prioritizing an engaging and efficient user experience. Alongside my front-end knowledge, I possess basic backend skills, ensuring a  more comprehensive understanding of the full development stack. I am committed to continuous learning, embracing new tools and methodologies to remain adaptive in this ever-evolving landscape."


export const TECH_STACK = [
  { id: '1', tech: 'React' },
  { id: '2', tech: 'Next.js' },
  { id: '3', tech: 'Typescript' },
  { id: '4', tech: 'Tailwind' },
  { id: '5', tech: 'SASS' },
  { id: '6', tech: 'Responsive Design' },
  { id: '7', tech: 'State Management Libraries' },
  { id: '8', tech: 'GIT' },
  { id: '9', tech: 'RESTful API' },
  { id: '10', tech: 'Backend Basics' },
  { id: '11', tech: 'Node.js' },
  {id: '12', tech: 'DBMS'}
]



export const PROJECTS = [
  {
    id: '1', 
    title: 'Hamony Heaven', 
    image: '/hh.png',
    liveHref: 'https://harmony-heaven.vercel.app',
    githubHref: 'https://github.com/shubho738/harmony-heaven',

    overview: `

A fully responsive, full-stack ecommerce platform showcasing a range of standard functionalities essential for a smooth online shopping journey. Explore features such as intuitive product browsing, effortless cart management, and payment processing. Powered by Next.js 13's App Router and React Server Components, ensuring optimized performance.`,

    techstack: ['Next / App Router', 'React Server Components', 'NextAuth', 'Redux',  'TypeScript', 'Tailwind', 'SWR', 'Prisma', 'Mongodb', 'Stripe'],
  },

  {
    id: '2', 
    title: 'Wander Connect', 
    image: '/wonderConnectScreenshot.png',
    liveHref: 'https://wander-connect.vercel.app',
    githubHref: 'https://github.com/shubho738/wander-connect',
    overview: `
A fully responsive, full-stack social media platform tailored for travelers, offering standard functionalities alongside a specialized feature for creating and sharing travel journals. Utilizing 'Infinite Scrolling', the platform efficiently manages server load, ensuring smooth browsing experiences for users.`,
    techstack: ['Next / Pages Router', 'NextAuth', 'Redux', 'TypeScript', 'SCSS', 'SWR', 'React Query', 'Prisma', 'Mongodb'],
  }
] 