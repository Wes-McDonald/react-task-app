import React from "react";
import "./home.css";


const HomeContainer = () => {
    return(
        <div>
            This is the Home component
        </div>
    )
};

// const LoggedInWarning = (WrappedComponent) => {
//     return (props) => {
//         return(
//             <>
//                 {props.isAuth ? <WrappedComponent {...props} /> : <LoginContainer />}
//             </>
//         )
//     }
// }

// const HomeContainerWithLogin = LoggedInWarning(HomeContainer);

export default HomeContainer;