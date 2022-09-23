import 'regenerator-runtime'; /* for async await transpile */
import "@fortawesome/fontawesome-free/css/all.css";
import '../styles/main.css';
import './component/headerBar.js';
import './component/hero.js';
import './component/contentList.js';
import './component/footerBar.js';

import main from './view/main';

document.addEventListener('DOMContentLoaded', main);