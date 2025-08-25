import { Tabs } from 'expo-router';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function TabsLayout() {

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#669bbc', tabBarShowLabel: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: () => (
                        <View className="flex-row gap-3 p-2 ">
                            <View className="rounded-xl ">
                                <Text className="m-2 text-2xl font-bold text-[#4361ee]" >HonorHall</Text>
                            </View>
                            <View className="rounded-xl">
                                <MaterialIcons name="all-inclusive" size={30} className="m-2" color="#4361ee" />
                            </View>
                            <View className="flex-row bg-[#003049] rounded-xl border p-2 gap-2">
                                <Text className="text-xl align-middle text-[#4361ee]">Ur Accounts</Text>
                                <TouchableOpacity className="bg-[#003049] rounded-xl border">
                                    <FontAwesome name="user-circle" size={30} color="#4361ee" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    headerTitle: () => (
                        <View className="flex-row gap-3 p-2 ">
                            <Text className="italic m-2 text-2xl font-bold">Explore</Text>
                        </View>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="search" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="new"
                options={{
                    headerTitle: 'Create post',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="plus-square-o" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="reel"
                options={{
                    headerTitle: 'Reel',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="video-file" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerTitle: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}
