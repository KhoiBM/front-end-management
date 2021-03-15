import styled from 'styled-components'
// import bgAuth from "../../../../../app/assets/image/bg_auth.jpeg"
// export const ForgotPasswordCodeContainer = styled.div`
// display:flex;
// justify-content:center;
// align-items:center;
// position: absolute;
//   top: 0px;
//   right: 0px;
//   bottom: 0px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
//   overflow: scroll;
//   background-image: url(${bgAuth});
//   background-repeat: no-repeat;
//   background-position: center top;
//   background-attachment: fixed;
//   backdrop-filter: blur(10px);
// `
export const IconWrapper = styled.div`
  position: absolute;
  right: 3px;
  top: 3px;

`
export const IconLink = styled.div`
    color: var(--primary-color-main);
    &:hover{
      color: var(--primary-color-dark);
    }
    &:focus{
      outline: 1px dashed var(--primary-color-dark);
    }

`
export const FormWrapper = styled.form`
border-radius: 4px;
border: 0 solid var(--border-color-main);
background-color:#fff;
width: 20rem;
height:200px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;

`

export const InputLabel = styled.label`
width:80%
`
export const InputText = styled.input`
width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #000;
  border-radius: 4px;
  text-indent: 5px;
  text-decoration: none;
  font-style: italic;
  font-weight: 500;
  border: 0 solid var(--border-color-main);
  background-color: var(--bg-secondary-color-main);
  &:focus{
    border-bottom: 2px solid var(--primary-color-main);
  }
  &::placeholder{
    text-indent:8px
  }
`
export const ButtonConfirm = styled.button`
  width: 80%;
  height: 40px;
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
  background-color: var(--primary-color-dark);
  box-shadow: rgb(0 0 0 / 10%) 0px 0.3rem 1rem;
  cursor: pointer;
  transform: scale(1.015);
  }

  &:focus {
  outline: 1px dashed var(--primary-color-dark);
  outline-offset: 4px;
}


 `
