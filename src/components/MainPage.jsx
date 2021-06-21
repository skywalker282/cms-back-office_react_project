
import AppMenu from "./AppMenu";
import AppContainer from "./AppContainer";
import AppFooter from "./AppFooter";

const MainPage = props => {

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
          />
          <AppFooter />
        </div>
      );
}

export default MainPage;