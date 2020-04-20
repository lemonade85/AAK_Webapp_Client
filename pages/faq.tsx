import Layout from '../components/layout';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Head from 'next/head';

const NewMember = ({ t }) => {
    return (
        <Layout>
            <Head>
                <link href="/static/css/faq.css" rel="stylesheet" />
            </Head>
            <section id="faq" className="faq accordion-section clearfix mt-3" aria-label="Question Accordions">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>{t('heading-label')}</h2>
                    </div>
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                        <div className="panel panel-default">
                            <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
                                        What are the benefits of Solodev CMS?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapse0" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                                <div className="panel-body px-3 mb-4">
                                    <p>With Solodev CMS, you and your visitors will benefit from a finely-tuned technology stack that drives the highest levels of site performance, speed and engagement - and contributes more to your bottom line. Our users fell in love with:</p>
                                    <ul>
                                        <li>Light speed deployment on the most secure and stable cloud infrastructure available on the market.</li>
                                        <li>Scalability – pay for what you need today and add-on options as you grow.</li>
                                        <li>All of the bells and whistles of other enterprise CMS options but without the design limitations - this CMS simply lets you realize your creative visions.</li>
                                        <li>Amazing support backed by a team of Solodev pros – here when you need them.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                        How easy is it to build a website with Solodev CMS?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                <div className="panel-body px-3 mb-4">
                                    <p>Building a website is extremely easy. With a working knowledge of HTML and CSS you will be able to have a site up and running in no time.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Layout >
    );
}

NewMember.getInitialProps = async () => ({
    namespacesRequired: ['faq-page'],
});

NewMember.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('faq-page')(NewMember);