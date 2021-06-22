
import {useEffect, useState} from 'react'

import AppMenu from "./AppMenu";
import AppContainer from "./AppContainer";
import AppFooter from "./AppFooter";

const MainPage = props => {

  let [deleteContext, setDeleteContext] = useState({
    visible: true,
    message: ""
  });

  let [projects, setProjects] = useState([
    {
      "project_title": "machine learning model",
      "project_description": "An application for automatizing dounds transfert in full security",
      "project_link": "blockchain.cris.com",
      "project_image_uri": "blockchain.cris.com/kozeiyorlkan23lp.jpg"
    },
    {
      "project_title": "machine learning model",
      "project_description": "An application for automatizing dounds transfert in full security",
      "project_link": "blockchain.cris.com",
      "project_image_uri": "blockchain.cris.com/kozeiyorlkan23lp.jpg"
    },
    {
      "project_title": "machine learning model",
      "project_description": "An application for automatizing dounds transfert in full security",
      "project_link": "blockchain.cris.com",
      "project_image_uri": "blockchain.cris.com/kozeiyorlkan23lp.jpg"
    },
    {
      "project_title": "machine learning model",
      "project_description": "An application for automatizing dounds transfert in full security",
      "project_link": "blockchain.cris.com",
      "project_image_uri": "blockchain.cris.com/kozeiyorlkan23lp.jpg"
    }
    
  ]);

  const deleteProject = (projectID) => {
    fetch(`http://localhost:5000/api/v1/projects/${projectID}`, {
      method: 'delete'
    })
    .then(data => {
      return data.json();
    })
    .then(response => {
      setDeleteContext = {
        visible: true,
        message: response.message
      }
    })
  }

  const dismissDeleteModal = () => {
    setDeleteContext({
      visible: false
    })
  }
   useEffect(()=> {
    fetch('http://localhost:5000/api/v1/projects/')
    .then(data => {
      return data.json();
    })
    .then(projectsList=> {
      setProjects(projectsList)
    })
  }, [])

    return (
        <div className="app">
          <AppMenu
            setContent={ props.setContent}
            context={ props.context}
            setContext={ props.setSideMenuContext}
            contentContext={ props.contentContext}
          />
          <AppContainer
            setContent={props.setContent}
            authContext={props.authContext}
            setAuthContext={props.setAuthContext}
            setContext={ props.setSideMenuContext}
            contentContext={ props.contentContext}
            handleDisconnect={ props.handleDisconnect}
            projects={projects}
            deleteContext = {deleteContext}
            deleteProject = {deleteProject}
            dismissDeleteModal= {dismissDeleteModal}
          />
          <AppFooter />
        </div>
      );
}

export default MainPage;