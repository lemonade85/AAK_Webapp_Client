import Head from 'next/head';
import PropTypes from 'prop-types';
import { i18n, Link, withTranslation } from '../i18n';
import { useRouter } from 'next/router';
import LoginForm from './loginForm';

function chooseLang(params: any) {
    i18n.changeLanguage(i18n.language === 'en' ? 'ml' : 'en');
}
const Navbar = ({ t }) => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <link href="/static/css/navBar.css" rel="stylesheet" />
            </Head>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container-fluid d-flex align-items-center">
                    <div className="logo mr-auto">
                        <a href="/about"><img src="./static/img/logo.png" title={t('logo-title')} alt="AAK" className="logo img-fluid" /></a>
                    </div>
                    <button id="langBtn" className="btn btn-sm" onClick={chooseLang} title={t('lang-button-title')}>EN/ML</button>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li title={t('link-home')} className={(router.pathname === '/') ? 'active' : ''}><Link href="/"><a><span className="icofont-home"> Home</span></a></Link></li>
                            <li title={t('link-about')} className={(router.pathname === '/about') ? 'active' : ''}><Link href="/about"><a>About</a></Link></li>
                            <li title={t('link-faq')} className={(router.pathname === '/faq') ? 'active' : ''}><Link href="/faq"><a>FAQ</a></Link></li>
                            <li title={t('link-classifides')} className={(router.pathname === '/classifieds') ? 'active' : ''}><Link href="/classifieds"><a>Classifieds</a></Link></li>
                            <li title={t('link-contact')} className={(router.pathname === '/contact') ? 'active' : ''}><Link href="/contact"><a>Contact</a></Link></li>
                            <li title={t('login-join-btn')} className="get-started dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown"><b>Login / Join</b> <span className="caret"></span></a>
                                <LoginForm />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

Navbar.getInitialProps = async () => ({
    namespacesRequired: ['navbar']
});

Navbar.propTypes = {
    t: PropTypes.func.isRequired
};

export default withTranslation('navbar')(Navbar);