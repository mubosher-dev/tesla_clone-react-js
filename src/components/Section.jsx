import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

function Section({ imgUrl, title, decription, leftButtonText, rightButtonText,downCheck }) {
    
    function scrolClick(e){
        document.body.scrollTop = 4000;
        document.documentElement.scrollTop = 4000;
    }

    return (
        <Wrap bgImg={imgUrl}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{decription}</p>
                </ItemText>
            </Fade>
            <Grid>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>
                        {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
                    </ButtonGroup>
                </Fade>

                {downCheck && <DownArrow 
                onClick={scrolClick}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Feather-arrows-arrow-down.svg/1024px-Feather-arrows-arrow-down.svg.png"/>}
            </Grid>
        </Wrap>
    )
}
export default Section;

const Wrap = styled.div`
    width:100%;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-image:${(props) => `url(${props.bgImg})`};
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`;

const ItemText = styled.div`
    padding-top:20vh;
    text-align:center;
    z-index:-1;
`;


const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
        justify-content:space-between;
    }
`;



const LeftButton = styled.div`
    background-color:rgb(61,63,68);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    font-size:12px;
    text-transform:uppercase;
    cursor:pointer;
    margin:10px 10px;
`;


const RightButton = styled(LeftButton)`
    background-color:rgb(233,233,233);
    color:black;
    opacity:0.85;
`;

const DownArrow = styled.img`
    display:inline-flex;
    height:30px;
    width:30px;
    object-fit:contain;
    overflow-x:hidden;
    cursor:pointer;
    margin:20px auto;
    animation:animateDown 1.5s infinite ease-in-out;
`;

const Grid = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;