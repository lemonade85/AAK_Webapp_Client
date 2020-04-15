import Head from 'next/head';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const LoginForm = ({ t }) => {
    return (
        <div>
            <Head>
                <link href="/static/css/loginForm.css" rel="stylesheet" />
            </Head>
            <ul id="login-dp" className="dropdown-menu" >
                <li>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="exampleInputEmail2">Username</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Username" required />
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                </div>
                                <div className="form-group">
                                    <span className="or-label">or</span>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-info btn-block">New here ? <b>Join Us</b></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
LoginForm.getInitialProps = async () => ({
    namespacesRequired: ['loginform'],
});

LoginForm.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('loginform')(LoginForm);