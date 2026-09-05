import { Children } from "react";

 export default function Tabs({children,buttonsContainer ="menu",buttons}){
    const ButtonsContainer = buttonsContainer;
    return(
        <>
        <ButtonsContainer>
        {buttons}
        </ButtonsContainer>
        {children}
        </>

    )
 }