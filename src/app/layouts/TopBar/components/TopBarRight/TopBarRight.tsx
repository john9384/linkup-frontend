import React from 'react'
import styled from 'styled-components'
import AvatarImg from 'app/assets/avatar-3637425__340.png'
import { Avatar } from './Avatar'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import SearchIcon from '@mui/icons-material/Search'
import './icon.css'
import { useDispatch } from 'react-redux'
import { authActions } from 'app/pages/auth/slice'
import { useNavigate } from 'react-router-dom'

export const TopBarRight = () => {
  const [dropdownState, setDropdownState] = React.useState(false)
  const toggleDropdown = () => {
    setDropdownState(!dropdownState)
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => {
    dispatch(authActions.logoutUser())
    navigate('/auth/login')
  }

  return (
    <Container>
      <Form>
        <SearchIconDiv>
          <SearchIcon className="icon" />
        </SearchIconDiv>
        <SearchInput placeholder="Search"></SearchInput>
      </Form>
      <Button>
        <AddCircleOutlineIcon />
        <ButtonText>Create</ButtonText>
      </Button>
      <AvatarWrapper onClick={toggleDropdown}>
        <Avatar imgSrc={AvatarImg} imgAlt={''} />
      </AvatarWrapper>
      {dropdownState && (
        <Dropdown>
          <DropdownItem onClick={logout}>Signout</DropdownItem>
        </Dropdown>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
`

const Form = styled.form`
  display: flex;
  width: 350px;
  height: 40px;
  border-radius: 10px;
  position: relative;
`
const SearchInput = styled.input`
  position: absolute;
  top: 0p;
  left: 0;
  border: none;
  outline: none;
  background: #f4f6fa;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  font-size: 17px;
  padding-left: 50px;
`

const SearchIconDiv = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
`
const Button = styled.button`
  border: none;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 40px;
  background: #1778f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  gap: 0.5rem;
`

const ButtonText = styled.span`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
`
const AvatarWrapper = styled.div``
const Dropdown = styled.div`
  background-color: white;
  position: absolute;
  right: 0;
  top: 60px;
  padding: 2rem;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.05);
`
const DropdownItem = styled.div`
  padding: 1rem 2rem;
  border: 1px solid grey;
  border-radius: 10px;
  &:hover {
    background-color: #f4f6fa;
  }
`
