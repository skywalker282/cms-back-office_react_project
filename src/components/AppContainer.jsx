
import AppBar from "./Appbar";
import CardPro from './Card';
import AuthenticationPage from './AuthenticationPage';
import { useState } from "react";

const AppContainer = props => {

    let [addItemContext, setAddItemContext] = useState(false);

    return (
        <div className="container bg-light">
            <AppBar 
                handleDisconnect={props.handleDisconnect} 
                setContext={props.setContext} 
                title={props.contentContext.toUpperCase()}
                authContext={props.authContext}
                setAuthContext={props.setAuthContext}
                setContent={props.setContent}
            />
            {
                (context => {
                    if (context) {
                        return <AuthenticationPage authContext={props.authContext}/>
                        
                    } else {return (
                        <>
                            <div className="container__body">
                                {
                                    props.projects.map(projectObject => {
                                        return <CardPro 
                                            setAuthContext={props.setAuthContext}
                                            authContext={props.authContext}
                                            setContent={props.setContent} 
                                            project={projectObject}
                                            deleteContext = {props.deleteContext}
                                            deleteProject = {props.deleteProject}
                                            dismissDeleteModal = {props.dismissDeleteModal} />;
                                    })
                                }
                            </div>
                            <i className="material-icons btn btn-large btn-circle btn-float-rb bg-front" onClick={() => { setAddItemContext(true)}}>add</i>
                            {
                                (context => {
                                    if (context) {
                                        return (
                                            <div className="add-overlay" onClick={event => {event.stopPropagation(); setAddItemContext(false)}}>
                                                <div className="add-modal bg-primary" onClick={event => {event.stopPropagation()}}>
                                                <h2>AJOUT D'UN PROJET</h2>
                                                <div className="form">
                                                    <form>
                                                        <p>
                                                            <label htmlFor="title">Titre</label>
                                                            <input type="text" name="project_title" id="title"/>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="title">Titre</label>
                                                            <input type="text" name="project_title" id="title"/>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="title">Description</label>
                                                            <textarea name="text_description" id="project_description" cols="30" rows="10"></textarea>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="project_link">Lien du projet</label>
                                                            <input type="text" name="project_link" id="project_link"/>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="project_image">Image</label>
                                                            <input type="file" name="project_image" id="project_image"/>
                                                            <label className="bg-front file" htmlFor="project_image">Choisir une image</label>
                                                        </p>
                                                        <p>
                                                            <input type="submit" value="Ajouter" className="bg-primary-light"/>
                                                        </p>
                                                    </form>
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })(addItemContext)
}
                        </>
                    )
                    }
                })(props.authContext.authVisible)
                    
            }
        </div>
    )
}

export default AppContainer;
