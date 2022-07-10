import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import './style.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

export const NavMenu = () => {
  return (
    <Container>
      <NavList>
        <NavItem to="/">
          <NavContent>
            <HomeOutlinedIcon className="icon" />
            <Text> Home</Text>
          </NavContent>
        </NavItem>
        <NavItem to="/people">
          <NavContent>
            <PeopleAltOutlinedIcon className="icon" />
            <Text> People</Text>
          </NavContent>
        </NavItem>
        <NavItem to="/photos">
          <NavContent>
            <PhotoOutlinedIcon className="icon" />
            <Text>Photos</Text>
          </NavContent>
        </NavItem>
        <NavItem to="/profile">
          <NavContent>
            <PermIdentityOutlinedIcon className="icon" />
            <Text>Profile</Text>
          </NavContent>
        </NavItem>
        <NavItem to="/settings">
          <NavContent>
            <SettingsOutlinedIcon className="icon" />
            <Text>Settings</Text>
          </NavContent>
        </NavItem>
      </NavList>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  /* height: 320px; */
  background: #ffffff;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`

const NavList = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
`

const NavItem = styled(NavLink)`
  padding: 0 5rem;
  width: 100%;
  transition: all 0.2s;

  &:last-child > a {
    border-bottom: 0px;
  }
  &:hover {
    background-color: #f4f6fa;
  }

  position: relative;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: 5px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:hover:after {
    background-color: #1778f2;
  }
  &:hover span,
  &:hover .icon {
    color: #1778f2;
  }
`

const NavContent = styled.span`
  text-decoration: none;
  display: flex;
  padding: 2rem 1rem;
  color: #505d6f;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
`

const Text = styled.span`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  transition: all 0.5s;
`
