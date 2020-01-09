import React from 'react';
import styled from 'styled-components';
import Constants from 'utils/constants';

const ListWrapper = styled.ul`
  color: ${({ theme }) => theme.color.light};
  list-style: none;
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-right: 20px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ListItem = styled.ul`
  cursor: pointer;
`;

const DesktopMenu = () => (
  <ListWrapper>
    {Constants.MENU_ITEMS.map(item => (
      <ListItem key={item}>{item}</ListItem>
    ))}
  </ListWrapper>
);

export default DesktopMenu;
