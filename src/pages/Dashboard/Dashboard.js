import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from 'components/Background';

const Dashboard = () => {
    return (
        <Background style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>dashboard</Text>
        </Background>
    );
};

Dashboard.navigationOptions = {
    tabBarLabel: 'Agendamentos',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="event" size={20} color={tintColor} />
    ),
};

export default Dashboard;
