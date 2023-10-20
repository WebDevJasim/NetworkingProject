import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {create} from 'react-test-renderer';

export default function api() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.map(post => {
          return (
            <View>
              <Text style={styles.title}>{post.title}</Text>
              <Text>{post.body}</Text>
            </View>
          );
        })
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
