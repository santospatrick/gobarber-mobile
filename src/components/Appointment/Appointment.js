import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

const Appointment = ({ data }) => {
    return (
        <Container>
            <Left>
                <Avatar
                    source={{
                        uri: 'https://api.adorable.io/avatar/50/rocketseat.jpg',
                    }}
                />
            </Left>

            <Info>
                <Name>Patrick Santos</Name>
                <Time>em 3 horas</Time>
            </Info>

            <TouchableOpacity onPress={() => {}}>
                <Icon name="event-busy" size={20} color="#f64c75" />
            </TouchableOpacity>
        </Container>
    );
};

export default Appointment;
