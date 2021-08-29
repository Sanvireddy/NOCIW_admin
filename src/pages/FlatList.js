import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const DATA = [
  {
    img: require('../img/ad.jpg'),
    id: '1',
  },
  {
    img: require('../img/ad.jpg'),
    id: '2',
  },
  {
    img: require('../img/ad.jpg'),
    id: '3',
  },
];

const Item = ({img}) => {
  
  const [disable, setDisabled] = useState(true);
  return(<View style={styles.item}>
    <Image style={{width: 350, height: 200}} source={img} />
    <View style={styles.buttons}>
      <TouchableOpacity
        disabled={{disable}}
        onPress={() => {
          console.log(disable);
          setDisabled(!disable);
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        disabled={{disable}}
        onPress={() => {
          setDisabled(!disable);
        }}>
        <Text style={styles.buttonText}>Decline</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const Flatlist = () => {

  const renderItem = ({item}) => (
    <Item img={item.img} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffff',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 30,
  },
  buttons: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    marginHorizontal: '1%',
    minWidth: '40%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
  },
});

export default Flatlist;
