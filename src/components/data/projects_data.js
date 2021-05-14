
import portfolio from '../../assets/projects_images/portfolio.JPG'
import messenger from '../../assets/projects_images/messenger-clone.JPG'
import amazon from '../../assets/projects_images/amzon-clone.JPG'
import news from '../../assets/projects_images/web-tintuc.JPG'

const data_projects = [
    {
        name: 'Amazon Clone',
        image: amazon,
        deployed_url: 'https://e-clone-d601a.web.app/',
        github_url: '',
        category: ['react.js']
    },

    {
        name: 'Messenger Clone',
        image: messenger,
        deployed_url: 'https://messenger-clone-7a4fe.web.app/',
        github_url: '',
        category: ['firebase', 'react.js']
    },

    {
        name: 'Dev Portfolio',
        image: portfolio,
        deployed_url: 'https://ngocdong1999.github.io/ngocdong1999/',
        github_url: 'https://github.com/ngocdong1999/ngocdong1999',
        category: ['html-css']
    },
    {
        name: 'News',
        image: news,
        deployed_url: '',
        github_url: 'https://github.com/ngocdong1999/tintuc-website',
        category: ['laravel']
    },
]

export default data_projects;