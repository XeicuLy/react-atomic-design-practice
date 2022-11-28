import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/User/UserCard';

const users = [...Array(10).keys()].map(val => {
  return {
    id: val,
    name: `XeicuLy${val}`,
    image: 'https://source.unsplash.com/v3-zcCWMjgM',
    email: '11111@aaa.com',
    tel: '012-345-6789',
    company: {
      name: '何でも株式会社',
      web: 'web.com',
    },
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
