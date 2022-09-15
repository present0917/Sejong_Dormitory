import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const FindScreen = () => {
  const [Id, PutId] = React.useState(null);
  const [Pwd, PutPwd] = React.useState(null);
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        marginTop: 100,
      }}>
      <Text style={Styles.FindID}>아이디 찾기</Text>
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <TextInput
          style={Styles.FindIdBox}
          PutId={PutId}
          value={Id}
          placeholder="아이디 입력"
          placeholderTextColor="#808080"
          keyboardType="url"
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={Styles.SearchBox}>
          <Text style={Styles.SearchID}>조회하기</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 100}}>
        <Text style={Styles.FindPwd}>비밀번호 찾기</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TextInput
            style={Styles.FindPwdBox}
            PutId={PutId}
            value={Id}
            placeholder="아이디 입력"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
          <TextInput
            style={Styles.FindPwdBox}
            PutPwd={PutPwd}
            value={Pwd}
            placeholder="비밀번호 입력"
            placeholderTextColor="#808080"
            keyboardType="url"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={Styles.SearchBox}>
            <Text style={Styles.SearchID}>조회하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  FindID: {
    fontSize: 25,
    fontFamily: 'Inter-SemiBold',
    alignItems: 'center',
    marginLeft: 40,
  },
  FindIdBox: {
    width: 310,
    height: 45,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  FindPwd: {
    fontSize: 25,
    fontFamily: 'Inter-SemiBold',
    alignItems: 'center',
    marginLeft: 40,
  },
  FindPwdBox: {
    width: 310,
    height: 45,
    margin: 2,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  SearchBox: {
    backgroundColor: '#4B5965',
    width: 200,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'center',
  },
  SearchID: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
    color: 'white',
  },
});

export default FindScreen;
