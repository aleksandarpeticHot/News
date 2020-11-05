import styled from 'styled-components'

export const StyledLoader = styled.div`
border-radius: 50%;
width: 30px;
height: 30px;
border: 4px solid #f3f3f3;
border-top: 4px solid #3498db; 
position: absolute;
left: 50%;
z-index: 20;
top: 50%;
-webkit-animation: spin 2s linear infinite; 
animation: spin 2s linear infinite;
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
export const StyledWrapper = styled.div`
width: 100%;
height: 100%;
opacity: 0.5;
background-color: white;
position: fixed;
`
