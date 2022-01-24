import styled from "styled-components";

export const SectionResume = styled.section`
  padding: 0 0 100px 0;
`

export const WrapperResume = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const BlockButtonResume = styled.div`
  width: 216px;
  height: 55px;
  border: 3px solid #00CF74;
  margin-top: 30px;
  &:hover {
    border: 3px solid #fff;
    background-color: #00CD6B;
    transition: all linear 0.4s;
    a {
      color: #282828;
    }
  }
`

export const DownloadButton = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00CF74;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.25rem;
`
