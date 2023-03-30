import React,{useState} from 'react'
import {View, ScrollView,SafeAreaView} from 'react-native'
import {Stack,useRouter} from 'expo-router'
import {COLORS,icons,images,SIZEs} from '../constants'
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

export default function Home() {
  const router = useRouter()
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor: COLORS.lightWhite,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
       <Stack.Screen 
          options={{
            headerStyle:{backgroundColor: COLORS.lightWhite},
            headerShadowVisible:false,
            headerLeft:()=>
             (
               <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
             )
            ,
            headerRight:()=>(
              <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
            ),
          }}
       />

      
    </SafeAreaView>
  )
}
