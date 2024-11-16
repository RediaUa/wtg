import React, { useState } from 'react';
import { Text } from 'react-native';
import ScreenContainer from '@components/core/containers/ScreenContainer';
import { generateRandomColor } from '@utils/colors'

export default function App() {
  const [color, setColor] = useState(() => generateRandomColor())
  const handleScreenPress = () => {
    setColor(generateRandomColor())
  }

  return (
      <ScreenContainer onPress={handleScreenPress} style={{ backgroundColor: color }}>
          <Text>Hello there!</Text>
      </ScreenContainer>
  );
}
