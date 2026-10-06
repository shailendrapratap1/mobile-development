import { ActivityIndicator, FlatList, StyleSheet, Text, View, useColorScheme, Image } from 'react-native'
import React, { useEffect, useState } from 'react';

interface User {
    login: { uuid: string };
    name: { first: string; last: string };
    email: string;
    picture: { large: string };
}

const profilegallery = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const colorScheme = useColorScheme();

    useEffect(() => {
        fetch('https://randomuser.me/api?results=10')
            .then((response) => response.json())
            .then((data) => setUsers(data.results))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size={"large"} color={"#fff"} />
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View
            style={[
                styles.container,
                colorScheme === 'dark' ? styles.darkBg : styles.lightBg
            ]}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.login.uuid}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.picture.large }} style={styles.image} />
                        <Text style={styles.text}>{item.name.first} {item.name.last}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                    </View>
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    )
}

export default profilegallery

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
    darkBg: {
        backgroundColor: '#121212',
    },
    lightBg: {
        backgroundColor: '#f5f5f5',
    },
})
