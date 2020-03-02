import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { storage } from 'redux-persist/lib/storage';
import * as S from './styles';

export default function Dashboard() {
  return (
    <S.Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>May, 31</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <S.Time past>
          <strong>08:00</strong>
          <span>Marshal Neves</span>
        </S.Time>
        <S.Time available>
          <strong>09:00</strong>
          <span>Available</span>
        </S.Time>
        <S.Time>
          <strong>10:00</strong>
          <span>Marshal Neves</span>
        </S.Time>
        <S.Time>
          <strong>11:00</strong>
          <span>Marshal Neves</span>
        </S.Time>
      </ul>
    </S.Container>
  );
}
