import Layout from '../components/layout';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const About = ({ t }) => {
    return (
        <Layout>
            <section id="about" className="about" style={{ marginTop: '5%' }}>
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>About Us</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

About.getInitialProps = async () => ({
    namespacesRequired: ['about-page'],
});

About.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('about-page')(About);