import Layout from '../components/layout';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const NewMember = ({ t }) => {
    return (
        <Layout>
            <section id="newmember" className="newmember">
                <div>
                    New Member Registration
                </div>
            </section>
        </Layout >
    );
}

NewMember.getInitialProps = async () => ({
    namespacesRequired: ['newmember-page'],
});

NewMember.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('contact-page')(NewMember);