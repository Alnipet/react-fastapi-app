import React from "react";
import {
  EuiAvatar,
  EuiIcon,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderLinks,
  EuiHeaderLink,
} from "@elastic/eui";
import loginIcon from "../../assets/img/loginIcon.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoSection = styled(EuiHeaderLink)`
  padding: 0 2rem;
`;

export default function Navbar({ user, ...props }) {
  return (
    <EuiHeader style={props.style || {}}>
      <EuiHeaderSection>
        <EuiHeaderSectionItem border="right">
          <LogoSection href="/">
            <EuiIcon type="cloudDrizzle" color="#1E90FF" size="l" /> Фреш
          </LogoSection>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem border="right">
          <EuiHeaderLinks aria-label="app navigation links">
            <EuiHeaderLink iconType="tear" href="#">
              Найти уборщиков
            </EuiHeaderLink>

            <EuiHeaderLink iconType="tag" href="#">
              Найти работу
            </EuiHeaderLink>

            <EuiHeaderLink iconType="help" href="#">
              Помощь
            </EuiHeaderLink>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderSection>
        <EuiHeaderSectionItemButton aria-label="User avatar">
          {user?.profile ? (
            <EuiAvatar
              size="l"
              name={user.profile.full_name}
              imageUrl={user.profile.image}
            />
          ) : (
            <Link to="/login">
              <EuiAvatar
                size="l"
                color="#1E90FF"
                name="user"
                imageUrl={loginIcon}
              />
            </Link>
          )}
        </EuiHeaderSectionItemButton>
      </EuiHeaderSection>
    </EuiHeader>
  );
}
