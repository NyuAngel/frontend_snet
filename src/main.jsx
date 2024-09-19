import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import TimeAgo from 'javascript-time-ago';
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';
import './assets/css/normalize.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';

// Importar el paquete de localización
import es from 'javascript-time-ago/locale/es';

// Registrar el idioma
TimeAgo.addDefaultLocale(es);

createRoot(document.getElementById('root')).render(
    <App />
)