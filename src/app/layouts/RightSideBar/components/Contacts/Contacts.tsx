import styled from 'styled-components';
import { ContactsItem } from './components/ContactsItem';
import { dummyUsers } from '../../../../assets/dummyUsers';
export const Contacts = () => {
  const contacts = dummyUsers.slice(0, 5);
  return (
    <Container>
      <Head>
        <Title>CONTACTS</Title>
        <Badge>5</Badge>
      </Head>
      <ContactsList>
        {contacts.map(contact => (
          <ContactsItem
            contactName={contact.name}
            contactImg={contact.avatar}
            unreadMessage={contact.unreadMessage}
          />
        ))}
      </ContactsList>
    </Container>
  );
};

const Container = styled.div``;

const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0 1rem;
`;
const Title = styled.span``;

const Badge = styled.span`
  display: block;
  background-color: grey;
  justify-self: flex-end;
  padding: 2px 5px;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.5px;
`;

const ContactsList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 1rem 2rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;
