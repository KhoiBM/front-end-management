import styled from 'styled-components'
import bgAuth from "src/app/assets/image/bg_auth.jpeg"
export const ConfirmFormContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-image: url(${bgAuth});
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  transition: all 0.3s ease 0s;
`