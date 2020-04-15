import Link from 'next/link';
import LoginForm from './loginForm';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const Navbar = ({ t }) => {
    return (
        <div>
            <Head>
                <link href="/static/css/navBar.css" rel="stylesheet" />
            </Head>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container-fluid d-flex align-items-center">

                    <div className="logo mr-auto">
                        <a href="index.html"><img src="./static/img/logo.png" title={t('title')} alt="" className="logo img-fluid" /></a>
                    </div>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><Link href=""><a><span className="icofont-home"> Home</span></a></Link></li>
                            <li><Link href="/about"><a>About</a></Link></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Classifieds</a></li>
                            <li><a href="/contact">Contact</a></li>

                            <li className="get-started dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login/Join</b> <span className="caret"></span></a>
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
    namespacesRequired: ['navbar'],
})

Navbar.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('navbar')(Navbar)