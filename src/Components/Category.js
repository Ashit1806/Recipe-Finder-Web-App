import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger, GiNoodles, GiIndianPalace } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <GiHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Indian"}>
        <GiIndianPalace />
        <h4>Indian</h4>
      </SLink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #5d3fd3, #5d3fd3);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
    position: relative;
    top: 0.5rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
    position: absolute;
    bottom: 3.5rem;
  }
  &.active {
    background: linear-gradient(to right, #FF4433, #FF4433);
    svg{
      color: #fff;
    }
    h4{
      color: #fff;
    }
  }
`;
//   const Svg = styled(GiHamburger)`
//   width: 24rem;
//   height: 24rem;
//   color: black;
// `

export default Category;
