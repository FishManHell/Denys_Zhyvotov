import styled from "styled-components";

export const WrapperNav = styled.section`
  padding: 20px 0;
  background-color: #0E191B;
`

export const NavigationBlock = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
  line-height: 1.875rem;
  cursor: pointer;

  .active {
    color: #00C667;
    transform: scale(1.1);
  }
    

  a {
    margin-right: 50px;
    color: #fff;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: #00C667;
    }
  }
`

export const ItemNav = styled.li`

`
