import React, { Component } from 'react'
import EmployeeList from './EmployeeList';
import styled from 'styled-components';
import { Button, Root } from './StyledComponets';
import {useHistory} from 'react-router-dom';

const ButtonContainer = styled.div`
 width:100%;
 display:flex;
 justify-content:right;
 margin:20px 0;
`;
const Home = () =>{
   const history = useHistory();
    return(
        <Root>
            <ButtonContainer>
               <Button onClick={() => history.push('/add')}>Add Employee</Button>
            </ButtonContainer>
           <EmployeeList/>
        </Root>
    )
}

export default Home;