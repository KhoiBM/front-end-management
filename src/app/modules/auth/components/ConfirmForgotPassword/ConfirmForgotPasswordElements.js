import styled from 'styled-components'


export const FormWrapper = styled.form`
border-radius: 4px;
border: 0 solid var(--border-color-main);
background-color:#fff;
width: 22rem;
min-height:450px;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
`

export const InputLabel = styled.label`
width: 80%;
margin-top:8px;
margin-bottom:8px;
`


export const InputText = styled.input`
width: 100%;
height: 50px;
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
