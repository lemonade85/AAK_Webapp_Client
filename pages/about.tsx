import Layout from '../components/layout';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const About = ({ t }) => {
    return (
        <Layout>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>{t('heading-label')}</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                            <ul>
                                <li><i className="ri-check-double-line"></i>{t('li-one')}</li>
                                <li><i className="ri-check-double-line"></i>{t('li-two')}</li>
                            </ul>
                            <p>{t('p-one')}</p>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <p>{t('p-two')}</p>
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