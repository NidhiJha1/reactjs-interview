import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Data from '../Data';
import { Root } from './StyledComponets';


const DataWrapper = styled.div`

`;

const DataHeadingWrapper = styled.div`
display:flex;
width:100%;
justify-content:space-between;
background-color:#d2d4d3;
padding:20px;
`;

const DataHeading = styled.div`
width:14%;
`;

const DataList = styled.div`
display:flex;
width:100%;
justify-content:space-between;
margin-top:20px;
`;

const EmpData = styled.div`
width:14%;
`;
const ActionButton = styled.button`
margin-right:10px;
`;

const Image = styled.img`
width:20px;
height:20px;
border-radius:50%;
`;
const EmployeeList = () => {
    const [empData,setEmpData] =useState(Data);
    const history = useHistory()
    const EditData = (id) => {
        history.push(`/add/${id}`);
        console.log(id);
    };
    const DeleteData = (id) => {
        console.log(id);
        setEmpData(previousEmpData => previousEmpData.filter((data) => data.id != id));
        window.alert(`employee Id : ${id} data sucessfully deleted`);
    }

    return (
        <Root>
            <DataHeadingWrapper>
                <DataHeading></DataHeading>
                <DataHeading>First Name</DataHeading>
                <DataHeading>Last Name</DataHeading>
                <DataHeading>DOB</DataHeading>
                <DataHeading>Designation</DataHeading>
                <DataHeading>Experience</DataHeading>
                <DataHeading>Action</DataHeading>
            </DataHeadingWrapper>
            {empData.map((emp, index) => {
                return (
                    <DataWrapper key={index}>
                        <DataList>
                            <EmpData><Image src={emp.profile_img_Link} /></EmpData>
                            <EmpData>{emp.first_name}</EmpData>
                            <EmpData>{emp.last_name}</EmpData>
                            <EmpData>{emp.dob}</EmpData>
                            <EmpData>{emp.Designation}</EmpData>
                            <EmpData>{emp.Experience}years</EmpData>
                            <EmpData>
                                <ActionButton onClick={() => EditData(emp.id)}>Edit</ActionButton>
                                <ActionButton onClick={() => DeleteData(emp.id)}>Delete</ActionButton>
                            </EmpData>
                        </DataList>
                    </DataWrapper>
                )
            })}
        </Root>
    )
}

export default EmployeeList;