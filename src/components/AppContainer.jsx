
import AppBar from "./Appbar";
import CardPro from './Card';
import AuthenticationPage from './AuthenticationPage';

const AppContainer = props => {

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
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                                <CardPro />
                            </div>
                            <i className="material-icons btn btn-large btn-circle btn-float-rb bg-front">add</i>
                        </>
                    )
                    }
                })(props.authContext.authVisible)
                    
            }
        </div>
    )
}

export default AppContainer;
