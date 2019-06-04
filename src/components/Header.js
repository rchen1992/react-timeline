import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
    height: ${({ theme }) => theme.headerHeight}px;
`;

const InnerContainer = styled.div`
    height: ${({ theme }) => theme.headerHeight}px;
    width: 100%;
    position: fixed;
`;

function Header(props) {
    return (
        <OuterContainer>
            <InnerContainer>{props.children}</InnerContainer>
        </OuterContainer>
    );
}

export default Header;
