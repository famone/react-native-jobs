import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '@/constants'

const jobTypes = ['Fulltime', 'Parttime', 'Contractor']

const Welcome = () => {

  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Fulltime')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Famzayka</Text>
        <Text style={styles.welcomeMessage}>Find your pergect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='What are you looking for'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
           renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            > 
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>


    </View>
  )
}

export default Welcome