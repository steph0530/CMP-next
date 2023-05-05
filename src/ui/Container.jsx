import styled from "styled-components";

export const SmallContainer = styled.div`
  width: 40px;
  height: auto;
  margin: 5px 40px 5px 0px;
`;

export const ScreenWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: #ffffff;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
`;

export const MenuItem = styled.li`
  display: flex;
  jusity-content: center;
  align-items: center;
  gap: 5px;
  margin: 20px;
  cursor: pointer;
  position: relative;
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownWrapper = styled.div`
  position: fixed;
  padding: 5px;
  width: 40px;
  height: auto;
  broder: 1px solid red;
  background-color: red;
`;
