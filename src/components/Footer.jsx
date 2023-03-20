import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  
  background: ${({ theme }) =>
      theme.name === "light"
        ? "yellow"
        : "red"};

  a {
    margin: 0 1rem;
    color: black;

    &:hover {
      color: #fbfdff;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <SocialLinks /> 
     
      <h3>Thank you for visiting! </h3> 

      
    </StyledFooter>
  );
}
