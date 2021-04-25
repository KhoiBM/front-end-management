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
  background-size: cover;
  background-attachment: fixed;
  transition: all 0.3s ease 0s;

`
export const ButtonConfirm = styled.button`
width: 90%;
  height: 50px;
  border: 2px solid var(--primary-color-main);
  border-radius: 1px;
  margin-top: 2rem;
  background-color: var(--primary-color-main);
  color: #fff;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 700;
  transition: all 0.3s ease 0s;


  &:hover {
    background-color: var(--primary-color-main);
  border: 1px solid var(--primary-color-main);
  box-shadow: rgb(0 0 0 / 10%) 0px 0.3rem 1rem;
  cursor: pointer;
  transform: scale(1.015);
  }

  &:focus {
  /* outline: 1px dashed var(--primary-color-main); */
  outline-offset: 4px;
}
 `


export const IconWrapper = styled.div`
position: absolute;
  right: 8px;
  top: 8px;

`

export const IconLink = styled.div`
color: var(--primary-color-main);
transform: scale(2) !important;
transition: all 0.3s ease 0s;

  &:hover {
    color: var(--primary-color-main);
}
  &:focus{
  /* outline: 1px dashed var(--primary-color-main); */
}

`

export const InputLabel = styled.label`
width: 90%;
margin-top:8px;
margin-bottom:8px;
`
