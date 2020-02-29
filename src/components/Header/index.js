import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo-purple.svg';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <S.Profile>
            <div>
              <strong>Marshal Neves</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Marshal Neves"
            />
          </S.Profile>
        </aside>
      </S.Content>
    </S.Container>
  );
}
