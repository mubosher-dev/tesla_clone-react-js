import React from 'react'
import styled from 'styled-components'


function Footer() {
  
  const data = [
      "Tesla © 2022",
      "Privacy & Legal",
      "Contact",
      "Careers",
      "News",
      "Engage",
      "Locations"
  ]

  return (
    <FooterContainer>
        {data.map(data => {
            return <h4>{data}</h4>
        })}
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.footer`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:15px;
    flex-wrap:wrap;
    h4{
        margin-right:10px;
        cursor:pointer;
        font-size:14px;
    }
`;