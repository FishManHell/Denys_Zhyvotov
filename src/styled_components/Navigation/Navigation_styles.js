import styled from "styled-components";

export const WrapperNav = styled.section`
  padding: 20px 0;
  background-color: #1B2A2C;
`

export const NavigationBlock = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const Logo = styled.div`
  width: 70px;
  border: 1px solid #00C667;
  padding: 5px;
  border-radius: 10px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
  line-height: 1.875rem;
  cursor: pointer;

  a {
    margin-right: 50px;
    color: #fff;
    font-weight: 600;

    &:hover {
      color: #00C667;
    }
  }
`

export const ItemNav = styled.li`

`
