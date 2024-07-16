import { styled } from 'styled-components';
import logo from '../../assets/logo.png';
import './Footer.css';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg);
    padding: 2rem;
    box-sizing: border-box;
    border-top: 4px solid var(--color-blue);
    box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const LogoImage = styled.img`
    width: 10.528rem; /* Tamaño específico del logo */
    height: auto; /* Altura automática para mantener la proporción */
    background-color: var(--color-bg);
`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <LogoContainer className='logo'>
                <LogoImage src={logo} alt="Logo" />
            </LogoContainer>
        </StyledFooter>
    );
}

export default Footer;
