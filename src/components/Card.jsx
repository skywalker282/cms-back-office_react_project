
import projectImg from '../images/allo-cine.png';
import Swal from 'sweetalert2';
import { useState } from 'react';

const CardPro = props => {

    let [notifShowed, setNotifShowed] = useState(false)
    const handleProjectDelete = (ID) => {
        props.deleteProject(ID)
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
                        <li className="bg-light" onClick={(event) => { handleProjectDelete(props.project.id)}}>Supprimer</li>
                    </ul>
                </div>
            </div>
            {
                (context => {
                    if (context) {
                        return (
                            <div className="delete-overlay">
                                <div className="delete-confirm bg-primary">
                                    <h5>Vous voulez vraiment supprimer le projet <span className="subject">{props.project.project_title.toUpperCase()}</span> ?</h5>
                                    <p>
                                        <span className="bg-danger" onClick={(event) => { props.dismissDeleteModal(); props.setAuthContext({authVisible: true, userStatus: "utilisateur"}); props.setContent(' mon compte')}}>Oui</span>
                                        <span className="bg-light-glass" onClick={(event) => { props.dismissDeleteModal(); setNotifShowed(true)}}>Non</span>
                                    </p>
                                </div>
                            </div>
                        )
                    }
                })(props.deleteContext.visible)
            }
            {
                (context => {
                    if (context) {
                        return (
                            <p className="notif bg-primary">
                                <span>Le projet a été supprimé avec success !</span>
                                <span className="bg-front" onClick={(event) => { setNotifShowed(false)}}>OK</span>
                            </p>
                        )
                    }
                })(notifShowed)
            }
        </>
    );
}

export default CardPro;