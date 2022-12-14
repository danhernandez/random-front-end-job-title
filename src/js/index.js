const Prefix = [
  '',
  'Associate',
  'Passionate',
  'Junior',
  'Mid-weight',
  'Senior',
  'Chief',
  'Lead',
  'Principle',
  'Full-stack',
  'Head',
  'Head of'
]

const Infix = [
  'Astro',
  'Kubernetes',
  'Eleventy',
  'SvelteKit',
  'Alpine.js',
  'Docusaurus',
  'Jest',
  'Lit',
  'UI',
  'CSS',
  'Gulp',
  'Ruby',
  'Kafka',
  'Laravel',
  'CoffeeScript',
  'REST',
  'Flexbox',
  'CSS Grid',
  'Babel',
  'Html',
  'ES6',
  'Svelte',
  'WebGL',
  'WebRTC',
  'WebSocket',
  'Shadow DOM',
  'WASM',
  'Git',
  'Rust',
  'XML',
  'Mulesoft',
  'Meteor',
  'Node',
  'Vim',
  'Grunt',
  'Webpack',
  'Flutter',
  'React',
  'Preact',
  'Salesforce',
  'React Native',
  'Typescript',
  'Ionic',
  'Scss',
  'Styled Components',
  'Snowpack',
  'Immer',
  'Lottie',
  'ChakraCore',
  'Deno',
  'Netlify',
  'Elm',
  'Rome',
  'esbuild',
  'Turbopack',
  'Turborepo',
  'Lerna',
  'npx',
  'Sass',
  'CSS-in-JS',
  'Grunt',
  'Post Css',
  'Bulma',
  'SMACSS',
  'ITCSS',
  'ESlint',
  'JsHint',
  'Browserify',
  'Parcel',
  'Electron',
  'AVA',
  'Puppeteer',
  'Rollup',
  'Tauri',
  'NativeScript',
  'Vue',
  'Native Apps',
  'Capacitor',
  'NW.js',
  'Expo',
  'Quasar',
  'Playwright',
  'JavaScript',
  'WebDriver IO',
  'Vitest',
  'Vite',
  'Appium',
  'TestCafe',
  'JSON',
  'Remix',
  'Bootstrap',
  'Cypress',
  'Storybook',
  'OOCSS',
  'Apollo',
  'Gatsby',
  'Web Components',
  'ShadowDOM',
  'RxJS',
  'Stencil',
  'Mocha',
  'Storyblok',
  'Elm',
  'Flow',
  'Next JS',
  'Nuxt JS',
  'ColdFusion',
  'Nuxt JS',
  'Dojo',
  'GraphQL',
  'Redux',
  'Jekyll',
  'Sketch',
  'MobX',
  'iFrame',
  'Qwik',
  'BEMIT',
  'Powershell'
]

const Suffix = [
  'Architect',
  'Engineer',
  'Lead',
  'Leader',
  'Innovator',
  'Developer',
  'Disruptor',
  'Coach',
  'Thought Leader',
  'Consultant',
  'Supervisor',
  'Manager',
  'Creator',
  'Director',
  'Associate',
  'Advocate',
  'Technician',
  'Assistant',
  'Officer',
  'Relations',
  'Evangelist',
  'Futurist'
]

const colors = [
  '#5614B0, #DBD65C',
  '#114357, #F29492',
  '#6a3093, #a044ff',
  '#B24592, #F15F79',
  '#C02425, #F0CB35',
  '#403A3E, #BE5869',
  '#c2e59c, #64b3f4',
  '#FFB75E, #ED8F03',
  '#8E0E00, #1F1C18',
  '#76b852, #8DC26F',
  '#00C9FF, #92FE9D',
  '#f46b45, #eea849',
  '#fc00ff, #00dbde',
  '#2c3e50, #3498db',
  '#085078, #85D8CE',
  '#1D976C, #93F9B9',
  '#EB3349, #F45C43',
  '#DD5E89, #F7BB97',
  '#4CB8C4, #3CD3AD',
  '#FF512F, #DD2476',
  '#F09819, #EDDE5D',
  '#1FA2FF, #12D8FA, #A6FFCB'
]

const getRandom = From => From[Math.floor(Math.random() * From.length)]

const jobTitle = `${getRandom(Prefix)} ${getRandom(Infix)} ${getRandom(Suffix)}`
let root = document.documentElement

root.style.setProperty('--color-values', getRandom(colors));
root.style.setProperty('--rotation-value', `${Math.floor(Math.random() * 360)}deg`);

document.getElementById('Title').innerText = jobTitle;
document.getElementsByTagName('Button')[0].addEventListener('click', () => window.location.reload(true))
