import React, { ReactNode, FC } from 'react';
import { 
  View,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  PressableProps,
  Pressable
} from 'react-native';

interface Props extends PressableProps {
    children: ReactNode
    style?: ViewStyle;
}

const ScreenContainer: FC<Props> = ({ children, style, onPress }) => {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <Pressable style={styles.safeArea} onPress={onPress}>
        <View style={styles.container}>
          {children}
        </View>
        </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default ScreenContainer;