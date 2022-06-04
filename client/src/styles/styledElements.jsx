import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const NavBar = styled.nav`
    background: #34a0ff;
    /* height: 85px; */
    height: ${props => props.show ? 'auto': '85px'};
    display: flex;
    justify-content : space-between ;
    padding: 0.2rem calc((100vw - 1000px) /2 );
`;

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style-type: none;
    height: auto; 
    @media screen and (max-width: 768px) {
        /* display: none; */
        display: ${props => props.show ? 'block' : 'none'};
    }
`

export const NavList = styled.li`
    display: flex;
    @media screen and (max-width: 768px) {
        line-height: 3rem;
        padding: 3rem 0;
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    &.active {
        color: #000;
    }
`

export const FooterCon = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
`

export const Bars = styled(FaBars)`
    color: #fff;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 100%);
        cursor: pointer;
        font-size: 1.8rem;
    }
` 