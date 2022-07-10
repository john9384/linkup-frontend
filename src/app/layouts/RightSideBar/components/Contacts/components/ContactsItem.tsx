import React from 'react'
import styled from 'styled-components'
import { Avatar } from './Avatar'

interface Props {
  contactName: string
  unreadMessage?: number
  contactImg: string
}

export const ContactsItem = React.memo(
  ({ contactName, unreadMessage, contactImg }: Props) => {
    return (
      <Li>
        <Avatar imgSrc={contactImg} imgAlt={contactName} />
        <Text>{contactName}</Text>

        {unreadMessage && unreadMessage > 0 ? (
          <Badge>{unreadMessage}</Badge>
        ) : null}
      </Li>
    )
  },
)

const Li = styled.li`
  margin: 1.4rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;
`

const Text = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #505d6f;
  flex-grow: 1;
`

const Badge = styled.span`
  display: block;
  background-color: red;
  justify-self: flex-end;
  padding: 2px 5px;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.5px;
`
