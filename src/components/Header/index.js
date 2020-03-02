import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import * as S from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <S.Container>
      <S.Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <S.Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Marshal Neves"
            />
          </S.Profile>
        </aside>
      </S.Content>
    </S.Container>
  );
}
