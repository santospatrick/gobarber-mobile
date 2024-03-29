import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import Background from 'components/Background';

import Appointment from 'components/Appointment';
import api from 'services/api';
import { Container, Title, List } from './styles';

const Dashboard = ({ isFocused }) => {
    const [appointments, setAppointments] = useState([]);

    async function loadAppointments() {
        const response = await api.get('appointments');
        setAppointments(response.data);
    }

    useEffect(() => {
        if (isFocused) {
            loadAppointments();
        }
    }, [isFocused]);

    async function handleCancel(id) {
        const response = await api.delete(`appointments/${id}`);
        setAppointments(
            appointments.map(item =>
                item.id === id
                    ? { ...item, canceled_at: response.data.canceled_at }
                    : item,
            ),
        );
    }

    return (
        <Background>
            <Container>
                <Title>Agendamentos</Title>
                <List
                    data={appointments}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <Appointment
                            onCancel={() => handleCancel(item.id)}
                            data={item}
                        />
                    )}
                />
            </Container>
        </Background>
    );
};

Dashboard.navigationOptions = {
    tabBarLabel: 'Agendamentos',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="event" size={20} color={tintColor} />
    ),
};

export default withNavigationFocus(Dashboard);
