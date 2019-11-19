import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from 'components/Background';

import { updateProfileRequest } from 'store/modules/user/actions';
import { signOut } from 'store/modules/auth/actions';
import {
    Container,
    Title,
    Separator,
    Form,
    FormInput,
    SubmitButton,
    LogoutButton,
} from './styles';

const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const oldPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setOldPassword('');
        setPassword('');
        setConfirmPassword('');
    }, [profile]);

    function handleSubmit() {
        dispatch(
            updateProfileRequest({
                name,
                email,
                oldPassword,
                password,
                confirmPassword,
            }),
        );
    }

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Background>
            <Container>
                <Title>Meu perfil</Title>

                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome completo"
                        onSubmitEditing={() => emailRef.current.focus()}
                        returnKeyType="next"
                        onChangeText={setName}
                        value={name}
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => oldPasswordRef.current.focus()}
                        onChangeText={setEmail}
                        value={email}
                    />

                    <Separator />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua senha atual"
                        ref={oldPasswordRef}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                        onChangeText={setOldPassword}
                        value={oldPassword}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua nova senha"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={() =>
                            confirmPasswordRef.current.focus()
                        }
                        onChangeText={setPassword}
                        value={password}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Confirmação de senha"
                        ref={confirmPasswordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                    />

                    <SubmitButton onPress={handleSubmit}>
                        Atualizar perfil
                    </SubmitButton>
                    <LogoutButton onPress={handleLogout}>
                        Sair do GoBarber
                    </LogoutButton>
                </Form>
            </Container>
        </Background>
    );
};

Profile.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="person" size={20} color={tintColor} />
    ),
};

export default Profile;
