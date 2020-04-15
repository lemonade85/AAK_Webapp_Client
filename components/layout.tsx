import Navbar from './navbar';
import FooterBar from './footerBar';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.t('title')}</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

                <link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/static/vendor/icofont/icofont.min.css" rel="stylesheet" />
                <link href="/static/vendor/remixicon/remixicon.css" rel="stylesheet" />

                <link href="/static/css/layout.css" rel="stylesheet" />

                <script src="/static/vendor/jquery/jquery.min.js"></script>
                <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            </Head>
            <Navbar />
            <main id="main">
                {props.children}
            </main>
            <FooterBar />
        </div>
    );
}

Layout.getInitialProps = async () => ({
    namespacesRequired: ['layout']
})

Layout.propTypes = {
    t: PropTypes.func.isRequired
}

export default withTranslation('layout')(Layout);