import Category from "./Components/Category";
import Pages from "./Pages/Pages";
import { Link, BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Yummify</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 5.5rem;
  font-weight: 400;
  font-family:"Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 3.5rem;
  }
`;
export default App;