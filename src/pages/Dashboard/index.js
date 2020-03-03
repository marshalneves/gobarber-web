import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
  getDay,
  getYear,
  getMonth,
  getHours,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import * as S from './styles';
import api from '~/services/api';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, "MMM', 'd"), [date]);

  function checkIfDatesAreEquals(date1, date2) {
    const date1f = new Date(
      getYear(date1),
      getMonth(date1),
      getDay(date1),
      getHours(date1),
      0,
      0,
      0
    );

    const date2f = new Date(
      getYear(date2),
      getMonth(date2),
      getDay(date2),
      getHours(date2),
      0,
      0,
      0
    );
    return isEqual(date1f, date2f);
  }

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      // Recupera a time zone do navegador
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = range.map(hour => {
        // Converte hora com 0 minutos e 0 segundos
        const fullDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(fullDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(s => {
            return checkIfDatesAreEquals(parseISO(s.date), compareDate);
          }),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

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
        {schedule.map(time => (
          <S.Time key={time.time} past={time.past} avilable={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Available'}
            </span>
          </S.Time>
        ))}
      </ul>
    </S.Container>
  );
}
