/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'react-native-paper';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import * as Icons from 'react-native-feather';
import ProfileLink from '../components/ProfileLink';
import ProfileHeader from '../components/ProfileHeader';
import {useSelector} from 'react-redux';

export default function UserProfile({navigation, route}) {
  const theme = useTheme();
  const {user, token} = useSelector(state => state.auth);

  React.useEffect(() => {}, []);

  const styles = StyleSheet.create({
    LinkBody: {
      backgroundColor: 'white',
      marginTop: -30,
      padding: 24,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      flexDirection: 'column',
      flexGrow: 1,
    },
  });

  return (
    <SafeAreaView style={{backgroundColor: 'white', flexGrow: 1}}>
      <StatusBar backgroundColor={theme.colors.OjenjiMid} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Links */}

        {/* Not Login */}
        {!(user === undefined && token === undefined) ? (
          <>
            <ProfileHeader
              text1={`Hi, ${user?.first_name}`}
              text2="Have a Day!"
              photo={user?.photo_profile}
            />
            <View style={styles.LinkBody}>
              <ProfileLink
                title="Account Setting"
                navigation={navigation}
                navigationLink="AccountSetting"
                icon={<Icons.Settings color="black" height={18} width={18} />}
              />
              <ProfileLink
                title="Logout"
                navigation={navigation}
                logout={true}
                icon={<Icons.LogOut color="black" height={18} width={18} />}
              />
            </View>
          </>
        ) : (
          <>
            {/* Header */}
            <ProfileHeader
              text1="Hi, Feel free to Join"
              text2="Enjoy Your Day!"
            />
            <View style={styles.LinkBody}>
              <ProfileLink
                title="Login"
                navigation={navigation}
                navigationLink="UserLogin"
                icon={<Icons.Users color="black" height={18} width={18} />}
              />
              <ProfileLink
                title="Register"
                navigation={navigation}
                navigationLink="UserRegister"
                icon={<Icons.UserPlus color="black" height={18} width={18} />}
              />
            </View>
          </>
        )}
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 0,
            margin: 24,
            paddingVertical: 20,
            borderTopColor: theme.colors.gray15,
            borderTopWidth: 2,
            flexDirection: 'column',
          }}>
          <ProfileLink
            title="About Application"
            navigation={navigation}
            navigationLink="about"
            icon={<Icons.Info color="black" height={18} width={18} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
