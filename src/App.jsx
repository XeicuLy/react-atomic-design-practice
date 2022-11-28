import { BrowserRouter } from 'react-router-dom';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/User/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { HeaderOnly } from './components/templates/HeaderOnly';

const user = {
  name: 'XeicuLy',
  image: 'https://source.unsplash.com/v3-zcCWMjgM',
  email: '11111@aaa.com',
  tel: '012-345-6789',
  company: {
    name: '何でも株式会社',
    web: 'web.com',
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>ボタン</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
};
export default App;
