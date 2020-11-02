import styled from 'styled-components'

export const StyledMenu = styled.div`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li button {
  display: block;
  color: black;
  text-align: center;
  border-radius: 5px;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #4183c4;
   }
}

li a:hover {
  background-color: #111;
}
.active {
  background-color: #111 !important;
}

.active-lang {
  background-color: antiquewhite;
}


`
