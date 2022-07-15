import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

const constructUrl = 'https://cdn-icons-png.flaticon.com/512/';

export const useTechnologies = defineStore({
  id: 'technologies',
  state: () => {
    return {
      technologies: [
        {
          id: uuidv4(),
          title: 'HTML5',
          alt: 'HTML5_icon',
          source:
            'https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/HTML5.png',
        },
        {
          id: uuidv4(),
          title: 'CSS3',
          alt: 'CSS3_icon',
          source: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
        },
        {
          id: uuidv4(),
          title: 'Javascript',
          alt: 'JS_icon',
          source:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
        },
        {
          id: uuidv4(),
          title: 'VueJs',
          alt: 'Vue_icon',
          source: 'https://iconape.com/wp-content/png_logo_vector/vue-js.png',
        },
        {
          id: uuidv4(),
          title: 'Vuetify',
          alt: 'Vuetify_icon',
          source: 'https://avatars.githubusercontent.com/u/22138497?s=200&v=4',
        },
        {
          id: uuidv4(),
          title: 'Nuxt',
          alt: 'Nuxt_icon',
          source: 'https://nuxtjs.ir/logos/nuxt-icon-white.png',
        },
        {
          id: uuidv4(),
          title: 'Node',
          alt: 'Node_icon',
          source:
            'https://iconape.com/wp-content/png_logo_vector/node-js-2.png',
        },
        {
          id: uuidv4(),
          title: 'SASS',
          alt: 'Sass_icon',
          source: 'https://www.pngkey.com/png/full/377-3771917_scss-logo.png',
        },
        {
          id: uuidv4(),
          title: 'MySQL',
          alt: 'MySQL_icon',
          source:
            'data:image/png;base64,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',
        },
        {
          id: uuidv4(),
          title: 'Wordpress',
          alt: 'Wordpress_icon',
          source: `${constructUrl}/1/1177.png`,
        },
        {
          id: uuidv4(),
          title: 'Jira',
          alt: 'Jira_icon',
          source:
            'https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png',
        },
        {
          id: uuidv4(),
          title: 'Elementor',
          alt: 'Elementor_icon',
          source: `${constructUrl}/5968/5968710.png`,
        },
        {
          id: uuidv4(),
          title: 'SEO',
          alt: 'SEO_icon',
          source: 'https://cdn-icons-png.flaticon.com/512/2835/2835542.png',
        },
        {
          id: uuidv4(),
          title: 'Jest',
          alt: 'Jest_icon',
          source:
            'https://ih1.redbubble.net/image.404020083.1876/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u7.jpg',
        },
        {
          id: uuidv4(),
          title: 'Cypress',
          alt: 'Cypress_icon',
          source:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraOeJtNHmgzQMrX2h1WtZz9-1Mdf61zEnqQtYOFY0dWxhb1bOW_l6gu5RGWF4ueeg5AE&usqp=CAU',
        },
        {
          id: uuidv4(),
          title: 'Pinia',
          alt: 'Pinia_icon',
          source: 'https://pinia.vuejs.org/logo.svg',
        },
      ],
      tools: [
        {
          id: uuidv4(),
          title: 'Webpack',
          alt: 'Webpack_icon',
          source:
            'https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png',
        },
        {
          id: uuidv4(),
          title: 'Vite',
          alt: 'Vite_icon',
          source:
            'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png',
        },
        {
          id: uuidv4(),
          title: 'Vue Cli',
          alt: 'VueCli_icon',
          source:
            'https://camo.githubusercontent.com/9923c06abf0bafa26439e1aa4d1b1c713e28160180817b426e006aae46ea1a4b/68747470733a2f2f73332e65752d776573742d322e616d617a6f6e6177732e636f6d2f79616261622f757675652d3531322e706e67',
        },
        {
          id: uuidv4(),
          title: 'Github',
          alt: 'Github_icon',
          source: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
        {
          id: uuidv4(),
          title: 'Npm',
          alt: 'Npm_icon',
          source: 'https://authy.com/wp-content/uploads/npm-logo.png',
        },
        {
          id: uuidv4(),
          title: 'Yarn',
          alt: 'Yarn_icon',
          source:
            'https://iconape.com/wp-content/png_logo_vector/yarn-logo.png',
        },
        {
          id: uuidv4(),
          title: 'Command Line',
          alt: 'CommandLine_icon',
          source:
            'https://miro.medium.com/max/448/1*jMgJtomjZadGljJDLkUzRA.png',
        },
        {
          id: uuidv4(),
          title: 'Cloudflare',
          alt: 'Cloudflare_icon',
          source:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cloudflare_Logo.png/480px-Cloudflare_Logo.png',
        },
        {
          id: uuidv4(),
          title: 'Sentry',
          alt: 'Sentry_icon',
          source:
            'data:image/png;base64,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',
        },
        {
          id: uuidv4(),
          title: 'Pager Duty',
          alt: 'PagerDuty_icon',
          source:
            'https://i1.wp.com/www.effect-tech.com/wp-content/uploads/2017/04/PagerDuty-logo-2.png?ssl=1',
        },
        {
          id: uuidv4(),
          title: 'Pagely',
          alt: 'Pagely_icon',
          source:
            'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wusph8vxieietldcr0hv',
        },
        {
          id: uuidv4(),
          title: 'SQL Server',
          alt: 'SQL_Server_icon',
          source: `${constructUrl}/2772/2772128.png`,
        },
        {
          id: uuidv4(),
          title: 'Contentful',
          alt: 'Contentful_icon',
          source:
            'https://janit.files.wordpress.com/2016/03/127348-b170e132-3b7a-4cd0-8b1c-cb7f9f42103a-centered-medium-1397122761.png',
        },
        {
          id: uuidv4(),
          title: 'Jenkins',
          alt: 'Jenkins_icon',
          source:
            'data:image/png;base64,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',
        },
        {
          id: uuidv4(),
          title: 'Uptrends',
          alt: 'Uptrends_icon',
          source:
            'https://cdn.techjockey.com/web/assets/images/techjockey/products/13252_Uptrends-logo.jpg?d=300',
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
