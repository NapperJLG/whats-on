import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: block;
  height: auto;
  position: relative;
`;

export const DropdownHeader = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 38px;
  border: 1px solid black;
  background: white;
`;

export const DropdownTitle = styled.div`
  padding: 8px 44px 8px 12px;
`;

export const DropdownList = styled.ul<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  z-index: 999;
  right: 0;
  left: 0;
  border: 1px solid black;
  background: white;
  margin: 0;
  padding-left: 8px;
`;

export const DropdownItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 24px;
  height: 100%;
  margin-right: 8px;
  cursor: pointer;
`;

export const DropdownArrow = styled.img<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 17%;
`;
