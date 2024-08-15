import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn } from 'react-native-reanimated'; 

const Login = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View className='bg-white h-full w-full'>
                <StatusBar style='light' />
                <Animated.Image entering={FadeIn.delay(200).duration(10000).springify().} className="h-[110%] w-full absolute" source={require('../assets/images/background.png')} />

                <View className='flex-row justify-around w-full absolute'>
                    <Animated.Image entering={FadeIn.delay(200).duration(10000).springify().damping(3)} className='h-[110] w-[43]' source={require('../assets/images/light.png')} />
                    <Animated.Image entering={FadeIn.delay(200).duration(10000).springify().damping(3)}className='h-[160] w-[65]' source={require('../assets/images/light.png')} />
                </View>

                <View className='h-full w-full flex flex-col gap-y-20 mt-32'>
                    <View className='flex items-center'>
                        <Text className='text-white font-bold tracking-wider text-5xl'>
                            Login
                        </Text>
                    </View>

                    <View className='flex items-center mx-4 space-y-4'>
                        <View className='bg-black/5 p-3 rounded-2xl w-full'>
                            <TextInput 
                                placeholder='Matricule' 
                                placeholderTextColor={'gray'} 
                                secureTextEntry={true} 
                            />
                        </View>

                        <View className='bg-black/5 p-3 rounded-2xl w-full'>
                            <TextInput 
                                placeholder='Password' 
                                placeholderTextColor={'gray'} 
                                secureTextEntry={true} 
                            />
                        </View>

                        <View className='w-full'>
                            <TouchableOpacity className='flex items-center p-5 rounded-full bg-sky-500 w-full'>
                                <Text className='text-white text-bold text-xl'>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View className='flex-row gap-x-3 justify-center'>
                            <Text>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity>
                                <Text className='text-sky-400'>
                                    Signup
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;