import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import * as S from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          {
            addSuffix: true,
          }
        ),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);
    setNotifications(
      notifications.map(notification =>
        notification._id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  }

  return (
    <S.Container>
      <S.Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </S.Badge>

      <S.NotificationList visible={visible}>
        <S.Scroll>
          {notifications.map(notification => (
            <S.Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  onClick={() => handleMarkAsRead(notification._id)}
                  type="button"
                >
                  Check as read
                </button>
              )}
            </S.Notification>
          ))}
        </S.Scroll>
      </S.NotificationList>
    </S.Container>
  );
}
