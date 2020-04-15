import Navbar from './navbar';
import FooterBar from './footerBar';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Aviculture Association of Kerala</title>

                <link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/static/vendor/icofont/icofont.min.css" rel="stylesheet" />
                <link href="/static/vendor/remixicon/remixicon.css" rel="stylesheet" />

                <link href="/static/css/layout.css" rel="stylesheet" />

                <script src="/static/vendor/jquery/jquery.min.js"></script>
                <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            </Head>
            <Navbar />
            <main id="main">
                {children}
            </main>
            <FooterBar />
        </div>
    );
}