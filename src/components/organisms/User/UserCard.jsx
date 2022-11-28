import styled from 'styled-components';
import { Card } from '../../atoms/card/Card';
import { UserIcon } from '../../molecules/user/UserIcon';

export const UserCard = ({ user }) => {
  return (
    <Card>
      <UserIcon image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.company.web}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  dt {
    margin-bottom: 5px;
  }
  dd {
    margin-bottom: 10px;
    overflow-wrap: break-word;
  }
`;
