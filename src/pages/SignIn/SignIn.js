import React from 'react';
import { Text } from 'react-native';
import Background from 'components/Background';
import Input from 'components/Input';
import Button from 'components/Button';

const SignIn = () => {
    return (
        <Background>
            <Text>signin</Text>
            <Input
                style={{ marginTop: 30 }}
                icon="call"
                placeholder="Digite seu nome"
            />
            <Button>Entrar</Button>
        </Background>
    );
};

export default SignIn;
