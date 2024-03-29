import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from 'components/Background';
import api from 'services/api';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

const SelectProvider = ({ navigation }) => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        async function loadProviders() {
            const response = await api.get('providers');
            setProviders(response.data);
        }

        loadProviders();
    }, []);

    return (
        <Background>
            <Container>
                <ProvidersList
                    data={providers}
                    keyExtractor={provider => String(provider.id)}
                    renderItem={({ item: provider }) => (
                        <Provider
                            onPress={() =>
                                navigation.navigate('SelectDateTime', {
                                    provider,
                                })
                            }
                        >
                            <Avatar
                                source={{
                                    uri: provider.avatar
                                        ? provider.avatar.url
                                        : `https://api.adorable.io/avatar/50/${provider.name}.jpg`,
                                }}
                            />
                            <Name>{provider.name}</Name>
                        </Provider>
                    )}
                />
            </Container>
        </Background>
    );
};

SelectProvider.navigationOptions = ({ navigation }) => ({
    title: 'Selecione o prestador',
    headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    ),
});

export default SelectProvider;
