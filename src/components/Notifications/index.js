import React from 'react';

import { MdNotifications } from 'react-icons/md';
import * as S from './styles';

export default function Notifications() {
  return (
    <S.Container>
      <S.Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </S.Badge>

      <S.NotificationList>
        <S.Scroll>
          <S.Notification unread>
            <p>You has a new schedulle... </p>
            <time>2 days ago</time>
            <button type="button">Check as read</button>
          </S.Notification>
          <S.Notification>
            <p>You has a new schedulle... </p>
            <time>2 days ago</time>
            <button type="button">Check as read</button>
          </S.Notification>
          <S.Notification>
            <p>You has a new schedulle... </p>
            <time>2 days ago</time>
            <button type="button">Check as read</button>
          </S.Notification>
          <S.Notification>
            <p>You has a new schedulle... </p>
            <time>2 days ago</time>
            <button type="button">Check as read</button>
          </S.Notification>
          <S.Notification>
            <p>You has a new schedulle... </p>
            <time>2 days ago</time>
            <button type="button">Check as read</button>
          </S.Notification>
          <S.Notification>
            <p>You has a new schedulle... </p>
            <time>2 days ago</time>
            <button type="button">Check as read</button>
          </S.Notification>
          <S.Notification>
            <p>You has a new schedulle... </p>
            <time>2 days ago</time>
            <button type="button">Check as read</button>
          </S.Notification>
          <S.Notification>
            <p>You has a new schedulle... </p>
            <time>2 days ago</time>
            <button type="button">Check as read</button>
          </S.Notification>
        </S.Scroll>
      </S.NotificationList>
    </S.Container>
  );
}
