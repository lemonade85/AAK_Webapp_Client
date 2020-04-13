import Link from 'next/link';
import LoginForm from './loginForm';
import Head from 'next/head';

export default function Navbar() {
    return (
        <div>
            <Head>
                <link href="/static/css/navBar.css" rel="stylesheet" />
            </Head>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container-fluid d-flex align-items-center">

                    <div className="logo mr-auto">
                        <h1 className="text-light"><a href="#"><span>AAK</span></a></h1>
                        <a href="#"><span>Aviculture Association of Kerala</span></a>
                    </div>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="#header">Home</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Classifieds</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>

                            <li className="get-started dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
                                <LoginForm />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}