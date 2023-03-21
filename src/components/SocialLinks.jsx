import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/yoel-preza-8031b51a6/"
        aria-label="Check out my GitHub profile."
        className="link-icons"
      > <FaLinkedin />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaGithub />


      </a>

      {blog && (
        <a target="_blank"
          rel="noreferrer"
          href="https://certificates.soyhenry.com/new-cert?id=58bd4f5b43fbda54aa60041413a04cf27cbf3e045d1da817f2836b03a7f6559d" aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  );
}
