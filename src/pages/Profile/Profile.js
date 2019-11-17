import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from 'components/Background';

const Profile = () => {
    return (
        <Background style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>profile</Text>
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
