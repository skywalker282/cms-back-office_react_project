
import {useEffect, useState} from 'react'

import AppMenu from "./AppMenu";
import AppContainer from "./AppContainer";
import AppFooter from "./AppFooter";

const MainPage = props => {

  let [confirmContext, setConfirmContext] = useState({
    visible: false,
    purpose: ""
  });

  let [projects, setProjects] = useState([
    {
      "id": 3,
      "project_title": "machine learning model",
      "project_description": "An application for automatizing dounds transfert in full security",
      "project_link": "blockchain.cris.com",
      "project_image_uri": "blockchain.cris.com/kozeiyorlkan23lp.jpg"
    },
    {
      "id": 3,
      "project_title": "machine learning model",
      "project_description": "An application for automatizing dounds transfert in full security",
      "project_link": "blockchain.cris.com",
      "project_image_uri": "blockchain.cris.com/kozeiyorlkan23lp.jpg"
    },
    {
      "id": 3,
      "project_title": "machine learning model",
      "project_description": "An application for automatizing dounds transfert in full security",
      "project_link": "blockchain.cris.com",
      "project_image_uri": "blockchain.cris.com/kozeiyorlkan23lp.jpg"
    },
    {
      "id": 3,
      "project_title": "machine learning model",
      "project_description": "An application for automatizing dounds transfert in full security",
      "project_link": "blockchain.cris.com",
      "project_image_uri": "blockchain.cris.com/kozeiyorlkan23lp.jpg"
    }
    
  ]);

  const deleteProject = (projectID) => {
    fetch(`http://localhost:5000/admin/api/v1/projects/${projectID}`, {
      method: 'delete'
    })
    .then(data => {
      return data.json();
    })
    .then(response => {
      setConfirmContext = {
        visible: true,
        message: response.message
      }
    })
  }

  const addProject = (projectObject) => {
    const availableProject = {};
    availableProject.projectTitle = projectObject.project_title;
    availableProject.projectDescription = projectObject.project_description;
    availableProject.projectLink = projectObject.project_link;
    availableProject.projectImageURI = projectObject.project_image_link;
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(availableProject);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/admin/api/v1/projects/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


    // fetch(`http://localhost:5000/admin/api/v1/projects/`, {
    //   method: 'POST',
    //     body:  JSON.stringify(
    //       {
    //         "projectTitle": "machine learning model",
    //         "projectDescription": "An application for automatizing dounds transfert in full security",
    //         "projectLink": "blockchain.cris.com",
    //         "projectImageURI": "blockchain.cris.com/kozeiyorlkan23lp.jpg"
    //       }
    //     )
    // })
    // .then(data => {
    //   return data.json();
    // })
    // .then(response => {
    //   setConfirmContext = {
    //     visible: true,
    //     message: response.message
    //   }
    // })
  }

  const dismissDeleteModal = () => {
    setConfirmContext({
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
  }, [confirmContext])

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
            confirmContext = {confirmContext}
            setConfirmContext = {setConfirmContext}
            deleteProject = {deleteProject}
            addProject={addProject}
            dismissDeleteModal= {dismissDeleteModal}
            isUserAuthenticated={props.isUserAuthenticated}
            setIsUserAuthenticated={props.setIsUserAuthenticated}
            addProject={addProject}
          />
          <AppFooter />
        </div>
      );
}

export default MainPage;