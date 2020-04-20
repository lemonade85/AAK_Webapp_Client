import Layout from '../components/layout';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withTranslation } from '../i18n';

const Contact = ({ t }) => {
    return (
        <Layout>
            <Head>
                <link href="/static/css/contact.css" rel="stylesheet" />
            </Head>

            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>{t('heading-label')}</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-4 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="info" title={t('addr-title')}>
                                    <i className="ri-map-pin-line"></i>
                                    <p>{t('addr-l1')}<br />{t('addr-l2')}</p>
                                </div>
                                <div className="contact-about">
                                    <p>{t('contact-about')}</p>
                                    <div className="social-links" data-aos="fade-up" data-aos-delay="100">
                                        <a href="#" className="facebook"><i className="icofont-whatsapp"></i></a>
                                        <a href="#" className="facebook"><i className="icofont-telegram"></i></a>
                                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-8" data-aos="fade-up" data-aos-delay="300">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder={t('placeholder-name')} data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder={t('placeholder-email')} data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder={t('placeholder-subject')} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder={t('placeholder-message')}></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">{t('send-btn')}</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    );
}

Contact.getInitialProps = async () => ({
    namespacesRequired: ['contact-page'],
});

Contact.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('contact-page')(Contact);