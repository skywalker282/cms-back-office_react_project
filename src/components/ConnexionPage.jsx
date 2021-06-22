
const ConnexionPage = props => {

    return (
            <div className="connexion-page bg-light-light">
                <header className="page-header">
                    <h2>PORFOLIO DATA MANAGEMENT PAGE</h2>
                    <p><i className="material-icons">help</i> Besoin d'aide ?</p>
                </header>
                <p className="page-say">
                    Let's build great and higher well designed software to solve
                    your problems together <br/>
                    <q>The greatest freedom in most tight permissivness</q>
                </p>
                <div className="page-body">
                    <section className="content">
                        <form className="connexion-form" onSubmit={props.handleConnect}>
                        <p>
                            <label htmlFor="name">First name</label>
                        </p>
                        <p>
                            <input type="text" id="name" required/>
                        </p>
                        <p>
                            <label htmlFor="last-name">Last name</label>
                        </p>
                        <p>
                            <input type="last-name" id="last-name" required/>
                        </p>
                        <p>
                            <label htmlFor="email">E-mail</label>
                        </p>
                        <p>
                            <input type="e-mail" id="email" required/>
                        </p>
                        <p>
                            <label htmlFor="password">Mot de passe</label>
                        </p>
                        <p>
                            <input type="password" id="password" required/>
                        </p>
                        <p>
                            <input
                            type="submit"
                            className="form-submit bg-front"
                            value="Connexion"
                            />
                        </p>
                        </form>
                    </section>
                </div>
            <div className="page-footer bg-light-glass">
                <div className="footer-notif">
                    <p>
                        This is the private platform for the fullstack software
                        developer Cris Cirhuza. <br /> If you hava not receive an
                        invitation from him; please quit quitely this page.
                    </p>
                </div>
                <p className="footer-copy">
                    Copyright &copy; All rights reserved 2021
                </p>
            </div>
        </div>
    )
}

export default ConnexionPage;
