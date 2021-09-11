
import React from "react";
import './form.css' ;
import {Container} from "@material-ui/core" ; 
import leftside from './leftside.gif' ; 
 

export const Leftside = () => {
    return (
        <div>
            <Container >
                <img src = {leftside} height = "400px" width = "400px" />
            </Container>
        </div>
    )
}

