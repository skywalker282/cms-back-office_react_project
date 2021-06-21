import { useState } from "react";

const AppBar = props => {

    let [settingsMenuContext, setSettingsMenuContext] = useState(false);

    const showSettings = () => {
        setSettingsMenuContext(true);
    }

    const switchAuth = context => {
        props.setAuthContext(context)
    }

    const hideSettings = event => {
        event.stopPropagation();
        setSettingsMenuContext(false);
    }

    const onDisplayMenu = event => {
        event.stopPropagation();
        props.setAuthContext({authVisible: false});
        props.setContext(true);
    }

    const disconnect = () => {
        props.handleDisconnect();
    }

    return (
        <>
            <div className="appbar bg-front">
                <i className="material-icons appbar-menu" onClick={onDisplayMenu}>menu</i>
                <h3 className="appbar-title">{props.title}</h3>
                <i className="material-icons appbar-action" onClick={()=> { showSettings()}}>settings</i>
            </div>
            {
                (context => {
                    if (context) {
                        return (
                            <div className="overlay-settings bg-light-light" onClick={ hideSettings}>
                                <ul className="settings-menu bg-light" onClick={event => event.stopPropagation()}>
                                    <li onClick={ hideSettings, () => {switchAuth({authVisible: true, userStatus: "utilisateur"}); props.setContent(' mon compte')}}><i className="material-icons">account_box</i><span> Mon compte</span></li>
                                    <li onClick={ hideSettings, () => { switchAuth({authVisible: true, userStatus: "administrateur"}); props.setContent('gestion des utilisateurs')}}><i className="material-icons">people</i><span> Utilisateurs</span></li>
                                    <li onClick={hideSettings, disconnect}><i className="material-icons">logout</i><span>Déconnection</span></li>
                                </ul>
                            </div>
                        );
                    }
                })(settingsMenuContext)
            }
        </>

    );
}

export default AppBar;
