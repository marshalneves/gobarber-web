import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import * as S from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, "MMM', 'd"), [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <S.Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
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
