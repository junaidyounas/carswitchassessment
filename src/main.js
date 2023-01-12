import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import SearchBar from './components/searchBar';
import { api } from './services/api';

let debounceHandler = null;

const MainScreen = () => {
          const [searchInput, setSearchInput] = useState('');
          const [data, setData] = useState({});
          const didMount = useRef(false);

          //useDebounce
          useEffect(() => {
                    console.log(didMount)
                     if (didMount.current) {
                              debounceHandler = setTimeout(() => {
                                        fetchData(searchInput);
                              }, 1000);
                              return () => {
                                        clearTimeout(debounceHandler);
                              };
                    } else {
                              didMount.current = true;
                    }
          }, [searchInput]);

          function fetchData(input) {
                    if (input !== '') {
                              console.log(`fetching data for ${input}`);
                              api.getDataByName(input).then((data) => {
                                        setData(data);
                              });
                    }
          }

          function handleInput(value) {
                    console.log(value);
                    setSearchInput(value);
          }

          // data to show
          const {
                    name= '',
                    age= '',
                    count= 0
          } = {
                    name: data.name,
                    age: data.age,
                    count: data.count
          }

          return (
                    <View style={styles.container}>
                              <SearchBar
                                        setSearchText={handleInput}
                                        searchText={searchInput}
                              />
                              <View style={styles.hr} />
                              {name ? <Text>Name: {name} </Text> : ''}
                             {age ? <Text>Age: {age} </Text> : ''}
                             {count ? <Text>Count: {count} </Text> : ''}
                    </View>
          )
}

export default MainScreen

const styles = StyleSheet.create({
          container: {
                    width: wp(100),
                    display: 'flex',
                    alignItems: 'center',
          },
          hr: {
                    height: 1,
                    width: wp(100),
                    borderWidth: 1,
                    borderColor: '#d3d3d3',
                    marginTop: hp(1.5),
                    opacity: 0.2
          }
})