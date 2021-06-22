
import projectImg from '../images/allo-cine.png';
import Swal from 'sweetalert2';
import { useState } from 'react';

const CardPro = props => {

    let [notifShowed, setNotifShowed] = useState({
        visible:false,
        purpose: ""
    })
    const handleProjectDelete = (ID) => {
        props.deleteProject(ID);
    }

    return (
        <>
            <div className="card bg-light">
                <img className="card-media" src={projectImg} alt="card-img"/>
                <div className="card-content">
                    <ul className="card-body">
                        <li>Title : <span>{props.project.project_title.toUpperCase()}</span></li>
                        <li>description : <span>{props.project.project_description}</span></li>
                        <li><a href={props.project.project_link}>Voir plus</a></li>
                    </ul>
                    <ul className="card-action">
                        <li className="bg-light">Modifier</li>
                        <li className="bg-light">Details</li>
                        <li className="bg-light" onClick={(event) => {props.setAuthContext({authVisible: true, userStatus: "utilisateur", check: "delete_project"}); props.setContent('mon compte')}}>Supprimer</li>
                    </ul>
                </div>
            </div>
            {
                (context => {
                    if (context) {
                        return (
                            <div className="delete-overlay">
                                <div className="delete-confirm bg-primary">
                                    {
                                        (context => {
                                            switch (context) {
                                                case "delete_project":
                                                    return (
                                                        <h5>Vous voulez vraiment supprimer le projet <span className="subject">{props.project.project_title.toUpperCase()}</span> ?</h5>
                                                    )
                                                case "add_project":
                                                    return (
                                                        <h5>Vous voulez ajouter le nouveau projet ? </h5>
                                                    )
                                            
                                                default:
                                                    break;
                                            }
                                        })(props.confirmContext.purpose)
                                    }
                                    <p>
                                        <span 
                                        className="bg-danger" 
                                        onClick={
                                            (event) => { props.dismissDeleteModal();  
                                            setNotifShowed({visible: true, purpose: props.confirmContext.purpose}); 
                                            props.confirmContext.purpose === "delete_project" ? handleProjectDelete(props.project.id): props.addProject(props.confirmContext.data)}}>Oui</span>
                                        <span className="bg-light-glass" onClick={(event) => { props.dismissDeleteModal()}}>Non</span>
                                    </p>
                                </div>
                            </div>
                        )
                    }
                })(props.confirmContext.visible)
            }
            {
                (context => {
                    if (context) {
                        return (
                            <p className="notif bg-primary">
                                {
                                    (purpose => {
                                        switch (purpose) {
                                            case "delete_project":
                                                return (
                                                    <span>Le projet a été supprimé avec success !</span>
                                                )
                                            case "add_project":
                                                return (
                                                    <span>Le projet a ajouté avec succès !</span>
                                                )
                                            default:
                                                break;
                                        }
                                    })(notifShowed.purpose)
                                }
                                <span className="bg-front" onClick={(event) => { setNotifShowed(false)}}>OK</span>
                            </p>
                        )
                    }
                })(notifShowed.visible)
            }
        </>
    );
}

export default CardPro;