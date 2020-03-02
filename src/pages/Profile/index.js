import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as UserActions from '~/store/modules/user/actions';
import * as AuthActions from '~/store/modules/auth/actions';
import AvatarInput from './AvatarInput';
import * as S from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(UserActions.updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(AuthActions.signOut());
  }

  return (
    <S.Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Full Name" />
        <Input name="email" placeholder="Email address" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Password" />
        <Input type="password" name="password" placeholder="New password" />
        <Input
          type="password"
          name="confirmNewPassword"
          placeholder="Confirm password"
        />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Exit GoBarber
      </button>
    </S.Container>
  );
}
