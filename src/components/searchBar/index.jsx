import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = (props) => {
          const { searchText, setSearchText } = props;
          return (
                    <View style={styles.container}>
                              <Icon style={styles.icon} name="arrowleft" size={30} />
                              <TextInput value={searchText} onChangeText={(value) => setSearchText(value)} placeholder='Enter text to search' style={styles.input} returnKeyType="search" />
                    </View>
          )
}

export default SearchBar

const styles = StyleSheet.create({
          container: {
                    display: 'flex',
                    width: wp(90),
                    marginTop: hp(2),
                    borderRadius: wp(6),
                    shadowColor: 'black',
                    shadowOffset: 3,
                    backgroundColor: 'white',
                    shadowRadius: 3,
                    shadowOpacity: 0.3,
                    elevation: 2,
                    flexDirection: 'row',
                    alignItems: 'center'
          },
          input: {
                    display: 'flex',
                    width: '100%',
                    paddingHorizontal: wp(5),
          },
          icon: {
                    paddingLeft: wp(3)
          }
})