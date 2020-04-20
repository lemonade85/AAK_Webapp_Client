import Layout from '../components/layout';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const Home = ({ t }) => {
    return (
        <Layout>
            <div className="jumbotron" style={{ marginLeft: '15px', marginRight: '15px' }}>
                <h1 className="display-4">Home Page!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
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