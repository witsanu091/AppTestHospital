import React, { useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useProfileViewModel } from '../../view-models/profileViewModel';

interface Props {
    navigation: any
}

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
    const { user, loadUserProfile, saveUserProfile } = useProfileViewModel();
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
        },
    });

    useEffect(() => {
        loadUserProfile(1);
    }, []);

    useEffect(() => {
        if (user) {
            reset({
                name: user.name,
                email: user.email,
            });
        }
    }, [user]);

    const onSubmit = (data: { name: string; email: string }) => {
        if (user) {
            saveUserProfile(user.id, data);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            {/* <Text>Profile</Text>

            <Text>Name</Text>
            <Controller
                control={control}
                name="name"
                rules={{ required: 'Name is required' }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <TextInput value={value} onChangeText={onChange} style={{ borderBottomWidth: 1, marginBottom: 5 }} />
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </>
                )}
            />

            <Text>Email</Text>
            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                    },
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <TextInput value={value} onChangeText={onChange} style={{ borderBottomWidth: 1, marginBottom: 5 }} />
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </>
                )}
            /> */}

            <Button title="Save" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};


export default ProfileScreen;