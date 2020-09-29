import React, {useState} from 'react'
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
    const [searchtype, setSearchType] = useState(true)
    const [searchRes, setSearchRes] = useState(true)
    function searchTypeChange(e,t){
        setSearchType(e)
        
        setSearchRes(t)
        console.log(t);
    }
    return (
        <StatsWrapper>
           <ListingEl dataCallback = {(h,t)=>searchTypeChange(h,t)}></ListingEl>
          
           <ContentEl mode={searchtype} newList={searchRes}></ContentEl>
           
           
        </StatsWrapper>
    )
}
