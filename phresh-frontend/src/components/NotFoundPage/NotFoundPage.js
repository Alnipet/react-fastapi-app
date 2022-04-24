import React from "react";
import styled from "styled-components";

const NotFoundSection = styled.section`
  margin-left: 25px;
`;

export default function NotFoundPage() {
  return (
    <NotFoundSection>
      <h1>NotFound.</h1>
      <h1>Упс! Похоже, страницы не существует...</h1>
    </NotFoundSection>
  );
}
