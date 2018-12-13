import styled from 'styled-components';

export const ColorLink = styled.span`
  display: inline-block;
  cursor: pointer;
  padding-bottom: 3px;
  border-bottom: 3px solid red;
  border-color: ${props => props.borderColor};
`;

export const Popover = styled.div`
  position: absolute;
  z-index: 2;
  top: 44px;
`;

export const Panel = styled.div`
  margin-top: 10px;
  font-size: 1em;
  font-weight: normal;
  position: relative;
  text-align: left;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
