import React, { useState,useEffect} from 'react'
import styled from 'styled-components';
import { Button, Root } from './StyledComponets';
import Data from '../Data';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ButtonContainer = styled.div`
 width:100%;
 display:flex;
 justify-content:center;
 margin:20px 0;
`;

const Form= styled.form`
max-width:600px;
margin:20px auto;
`;

const InputWrapper = styled.div`
width:100%;
`;

const Label = styled.div`
font-weight:500;
font-size:14px;
margin-bottom:15px;
`;

const Input = styled.input`
width:100%;
padding:10px 20px;
`;
const AddEmployeeForm = () =>{
    const [empData,setEmpData] = useState(Data);
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [dob,setDob] = useState();
    const [designation,setDesignation] = useState();
    const [imageLink,setImageLink] = useState();
    const [experience,setExperience] = useState();
    const [empid,setEmpId] = useState();
    const history = useHistory();
    const {id} = useParams();
    console.log(id);
    
    const FilterData = (id) =>{
       const data= Data.filter(data => {
           return data.id == id;
       }) ;
       console.log(data);
    }
    useEffect(() =>{
        if(id){
           console.log(id);
           FilterData();
        } 
    },[id]);



    const submitHandler = (e) => {
        e.preventDefault();
        console.log(firstName,lastName,dob,designation,imageLink,experience);
        const FormData = {
            id:empid,
            first_name:firstName, 
            last_name:lastName, 
            dob:dob, 
            Designation:designation,
            profile_img_Link:imageLink,
            Experience:experience,
        };
        Data.push(FormData);
        setFirstName('');
        setLastName('');
        setDob('');
        setDesignation('');
        setImageLink('');
        setExperience('');
        history.push('/');
    } 
    return(
        <Root>
          <Form onSubmit={submitHandler}>
          <InputWrapper>
                 <Label>Employee id</Label>
                 <Input type="number" value={empid} onChange={(e) => setEmpId(e.target.value)} required/>
              </InputWrapper>
              <InputWrapper>
                 <Label>First Name</Label>
                 <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
              </InputWrapper>
              <InputWrapper>
                 <Label>Last Name</Label>
                 <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
              </InputWrapper>
              <InputWrapper>
                 <Label> DOB</Label>
                 <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required/>
              </InputWrapper>
              <InputWrapper>
                 <Label>Designation </Label>
                 <Input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required/>
              </InputWrapper>
              <InputWrapper>
                 <Label>Profile Photo Link - any image link </Label>
                 <Input type="text" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required/>
              </InputWrapper>
              <InputWrapper>
                 <Label>Experience </Label>
                 <Input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} required/>
              </InputWrapper>
              <ButtonContainer>
                  <Button type='submit'>Submit</Button>
              </ButtonContainer>
          </Form>
        </Root>
    )
}

export default AddEmployeeForm;