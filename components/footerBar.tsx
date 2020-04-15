import Link from 'next/link';
import LoginForm from './loginForm';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const FooterBar = ({ t }) => {
    return (
        <div>
            <Head>
                <link href="/static/css/footerBar.css" rel="stylesheet" />
            </Head>
            <footer id="footer" className="fixed-bottom d-flex align-items-center">
                <section id="sponsors" className="sponsors" style={{ width: '100%' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src="/static/img/sponsors/m1.jpg" title="Avigene" className="img-fluid" alt="" data-aos="zoom-in" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src="/static/img/sponsors/m2.jpg" title="Beaks International" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src="/static/img/sponsors/m3.jpg" title="Agonistics" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src="/static/img/sponsors/m4.jpg" title="Petco" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" />
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div >
    );
}

FooterBar.getInitialProps = async () => ({
    namespacesRequired: ['footerbar'],
});

FooterBar.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('footerbar')(FooterBar);