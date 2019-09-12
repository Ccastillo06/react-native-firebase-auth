import React from 'react';

import { StyleSheet, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function ScreenContainer({ customStyles, children }) {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={styles.ScrollView}>
        <View style={{ ...styles.View, ...customStyles }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: '#fff' },
  ScrollView: { flex: 1 },
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default ScreenContainer;
