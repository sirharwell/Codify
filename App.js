import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,

} from 'react-native';

class App extends React.Component {
  state = { artist: '', title: '' }

  render() {
    const { artist, title } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Dotify
        </Text>
        <Text style={styles.label}>Artist</Text>
        <TextInput
          value={artist}
          style={styles.input}
          onChangeText={ (artist) => this.setState({ artist }) }
        />
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={ (title) => this.setState({ title }) }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#50C878',
    justifyContent: 'flex-start',
    paddingTop: 80,
  },
  input: {
    height: 50,
    fontSize: 25,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 5,
    backgroundColor: '#fff',
  },
  label: {
    marginLeft: 5,
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
  }
});



export default App
