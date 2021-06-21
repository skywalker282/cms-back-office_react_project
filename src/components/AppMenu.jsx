import { useState } from "react";
import menuImg from "../images/coderillustrate.jpg";

const AppMenu = props => {

    let [dropdownContext, setDropdownContext] = useState(false);

    const onContextChange = context => {
        props.setContent(context);
    };

    const onDismissMenu = event => {
        event.stopPropagation();
        props.setContext(false);
    }

    const switchMenuDisplay =() => {
        if(props.context === true) {
            return "display";
        }

        return "dismiss";
    }

    let classMenuID = switchMenuDisplay();

    const toggleDropDown =() => {
        if (dropdownContext) {
            setDropdownContext(false)
        } else if (!dropdownContext) {
            setDropdownContext(true);
        }
    }

    const onDropUp =() => {
        setDropdownContext(false)
    }

    let switchDropMenuDisplay =() => {
        if (dropdownContext) {
            return "display"
        }
        return "dismiss";
    }

    let classDropMenu = switchDropMenuDisplay();

    return (
        <div className={classMenuID}>
            <div className="menu-overlay bg-light-glass" onClick = {onDismissMenu}>
                <div className="app-menu bg-light" onClick={event => event.stopPropagation()}>
                    <div className="app-menu__media">
                        <img src={menuImg} alt="menu_img"/>
                    </div>
                    <ul className="app-menu__menu">
                        <li className="menu-action" onClick = {toggleDropDown}>
                            <span><i className="material-icons">home_work</i>{props.contentContext.toUpperCase().includes('GESTION')||props.contentContext.toUpperCase().includes('UTILISATEURS') ? "PROJECTS": props.contentContext.toUpperCase()}</span><i className="material-icons">{dropdownContext ? "keyboard_arrow_down": "keyboard_arrow_right"}</i>
                        </li>
                        <ul className={classDropMenu}>
                                <li onClick = {(event) => { onContextChange('project')}}><i className="material-icons">work</i> PROJECT</li>
                                <li onClick = {(event) => { onContextChange('compétence')}}><i className="material-icons">bolt</i> COMPÉTENCES</li>
                                <li onClick = {(event) => { onContextChange('images')}}><i className="material-icons">image</i> IMAGES</li>
                                <li onClick = {(event) => { onContextChange('textes')}}><i className="material-icons">text_fields</i> TEXTES</li>
                        </ul>
                        <li className="menu-action" onClick = {onDismissMenu}><i className="material-icons">edit</i> MODIFICATIONS</li>
                        <li className="menu-action" onClick = {onDismissMenu}><i className="material-icons">add_circle_outline</i> AJOUTS</li>
                        <li className="menu-action" onClick = {onDismissMenu}><i className="material-icons">delete</i> SUPPRESSIONS</li>
                    </ul>
                    <h4 className="footer-logo">Cris Cirhuza</h4>
                </div>
            </div>
        </div>
    );
};

export default AppMenu;
