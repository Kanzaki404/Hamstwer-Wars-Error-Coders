import React from 'react'
import ListingEl from '../components/StatsComp/ListingMenu'
import ContentEl from '../components/StatsComp/Content'
import styled from "styled-components";

const StatsWrapper = styled.div`
padding-top: 50px;
padding-bottom: 50px;
min-height: 100vh; 

background-color: #790000;
`


export default function Stats() {
    return (
        <StatsWrapper>
           <ListingEl></ListingEl>
          
           <ContentEl></ContentEl>
           
           
        </StatsWrapper>
    )
}
