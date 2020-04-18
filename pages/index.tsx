import Layout from '../components/layout';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const Home = ({ t }) => {
    return (
        <Layout>
            <div className="container">
                Home Page
            </div>
        </Layout>

    );
}

Home.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

Home.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home);