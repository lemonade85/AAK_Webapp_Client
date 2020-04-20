import Head from 'next/head';
import PropTypes from 'prop-types';
import { Link, withTranslation } from '../i18n';

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
                                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder={t('username')} required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder={t('password')} required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block btn-lg">{t('member-login')}</button>
                                </div>
                                <div className="form-group or-label">
                                    <span>{t('or')}</span>
                                </div>
                                <div className="form-group">
                                    <Link href="/newmember"><button className="btn btn-info btn-block btn-lg">{t('new-joinus')}</button></Link>
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