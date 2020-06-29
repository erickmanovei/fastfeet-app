import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { signOut } from '~/store/modules/auth/actions';
import Button from '~/components/Button';
import Initials from '~/components/Initials';

import { Container, ProfileContent, ImageArea, Label, Value } from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.deliveryman.name);
  const email = useSelector((state) => state.auth.deliveryman.email);
  const createdAt = useSelector((state) => state.auth.deliveryman.createdAt);

  const dataParsed = useMemo(() => {
    return format(new Date(createdAt), 'd/MM/Y');
  }, [createdAt]);

  const handleLogout = () => {
    dispatch(signOut());
  };
  return (
    <Container>
      <ProfileContent>
        <ImageArea>
          <Initials name={name} size="150" />
        </ImageArea>
        <Label>Nome Completo</Label>
        <Value>{name}</Value>
        <Label>E-mail</Label>
        <Value>{email}</Value>
        <Label>Data de Cadastro</Label>
        <Value>{dataParsed}</Value>
      </ProfileContent>
      <Button
        style={{ width: '80%', marginTop: 50 }}
        background="#FF0000"
        onPress={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
};

export default Profile;
