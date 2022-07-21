import styled from 'styled-components';

export const Button = styled.button`
    width: ${(props) => props.width};
    height:40px;
    background: #FAA500;
    border-radius: ${(props) => props.borda};
    color:#fff;
    outline:none;
    border:none;
    margin-left: ${(props) => props.tamanho};
    font-size: ${(props) => props.fontSize};
    line-height:24px;
    cursor:pointer;
`;

export const ContainerTipBar = styled.div`
    padding: 20px;
    width: 22%;
    max-width: 308px;
    height: 64px;
    background: #EFEFEF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TitleSection = styled.h2`
font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 32px;
text-align: center;
margin-bottom: ${(props) => props.marginBottom};
`;

export const TitleFooter = styled.h3`
color:#353535;
font-size:16px;
font-family: 'Titillium Web';
font-weight: 700;
font-size: 16px;
`;