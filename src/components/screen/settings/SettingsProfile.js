import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../header/CustomHeader';

export default function SettingsProfile({ navigation }) {
  const handleNotificationPress = () => {
    // Handle the notification button press here
    // For example, navigate to the notifications screen
    navigation.navigate('Notifications');
  };

  return (
    <View>
      {/* Use the custom header with title and notification icon */}
      <CustomHeader title="Home" onNotificationPress={handleNotificationPress} />

      {/* The content of your Home screen */}
      <Text>Settings Screen Content</Text>
    </View>
  );
}