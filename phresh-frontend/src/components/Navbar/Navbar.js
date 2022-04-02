import React from "react"
import {
  EuiAvatar,
  EuiIcon,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderLinks,
  EuiHeaderLink,
} from "@elastic/eui"
import loginIcon from "../../assets/img/loginIcon.svg"
import styled from "styled-components"

const LogoSection = styled(EuiHeaderLink)`
  padding: 0 2rem;
`

export default function Navbar({ ...props }) {
  return (
    <EuiHeader style={props.style || {}}>
      <EuiHeaderSection>
        <EuiHeaderSectionItem border="right">
          <LogoSection href="/">
            <EuiIcon type="cloudDrizzle" color="#1E90FF" size="l" /> Phresh
          </LogoSection>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem border="right">
          <EuiHeaderLinks aria-label="app navigation links">
            <EuiHeaderLink iconType="tear" href="#">
              Find cleaners
            </EuiHeaderLink>

            <EuiHeaderLink iconType="tag" href="#">
              Find jobs
            </EuiHeaderLink>

            <EuiHeaderLink iconType="help" href="#">
              Help
            </EuiHeaderLink>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderSection>
        <EuiHeaderSectionItemButton aria-label="User avatar">

          {/* тут видимо что-то с бэка прилетать должно, и не работает поэтому я там костыль вставил ниже

          {user?.profile ? (
            <EuiAvatar size="l" name={user.profile.full_name} imageUrl={user.profile.image} />
          ) : (
            <EuiAvatar size="l" color="#1E90FF" name="user" imageUrl={loginIcon} />
          )}

          */}

          {/* вот заглушка-костыль */}
          <EuiAvatar size="l" color="#1E90FF" name="user" imageUrl={loginIcon} />

        </EuiHeaderSectionItemButton>
      </EuiHeaderSection>

      
    </EuiHeader>
  )
}

