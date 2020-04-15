import Layout from '../components/layout';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const Contact = ({ t }) => {
    return (
        <Layout>
            <section id="contact" className="contact" style={{ marginTop: '5%' }}>
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="contact-about">
                                <h3>Vesperr</h3>
                                <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                                <div className="social-links">
                                    <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                                    <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                            <div className="info">
                                <div>
                                    <i className="ri-map-pin-line"></i>
                                    <p>A108 Adam Street<br />New York, NY 535022</p>
                                </div>

                                <div>
                                    <i className="ri-mail-send-line"></i>
                                    <p>info@example.com</p>
                                </div>

                                <div>
                                    <i className="ri-phone-line"></i>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    );
}

Contact.getInitialProps = async () => ({
    namespacesRequired: ['about-page'],
});

Contact.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('about-page')(Contact);