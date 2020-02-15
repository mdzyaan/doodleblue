import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const InfoWrapper = styled.div`
    min-width:600px;
`;

const InfoElementWrapper = styled.div`
    display: flex;
`;

const InfoLabel = styled.span`
    min-width: 100px;
    text-align: left;
`;

const InfoValue = styled.span`
    min-width: 200px;
    text-align: left;
`;

export default ({data, onEdit}) => {


    const { fullName, address, phone, email, id, company } = data;
    return (
        <InfoWrapper>
            <Button onClick={(e) => onEdit(data)}>Edit</Button>
            <InfoElementWrapper>
                <InfoLabel>Name</InfoLabel>
                <InfoValue>: {fullName}</InfoValue>
            </InfoElementWrapper>
            <InfoElementWrapper>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>: {email}</InfoValue>
            </InfoElementWrapper>
            <InfoElementWrapper>
                <InfoLabel>Phone</InfoLabel>
                <InfoValue>: {phone}</InfoValue>
            </InfoElementWrapper>
            <InfoElementWrapper>
                <InfoLabel>Address</InfoLabel>
                <InfoValue>: {address}</InfoValue>
            </InfoElementWrapper>
            <InfoElementWrapper>
                <InfoLabel>Company</InfoLabel>
                <InfoValue>: {company}</InfoValue>
            </InfoElementWrapper>
        </InfoWrapper>
    );
}