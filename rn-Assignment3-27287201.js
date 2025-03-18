import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, FlatList } from "react-native";
import Feather from '@expo/vector-icons/Feather';

const elements = [
  {
    id: 1,
    title: "Exercise",
    subTitle: "12 Tasks",
    image: require('./assets/Exercise.png'),
  },
  {
    id: 2,
    title: "Study",
    subTitle: "12 Tasks",
    image: require('./assets/study.png'),
  },
  {
    id: 3,
    title: "Code",
    subTitle: "12 Tasks",
    image: require('./assets/study.png'),
  },
  {
    id: 4,
    title: "Cook",
    subTitle: "12 Tasks",
    image: require('./assets/study.png'),
  },
  {
    id: 5,
    title: "Hobby",
    subTitle: "12 Tasks",
    image: require('./assets/Exercise.png'),
  }
];

const ongoingTasks = [
  { id: 1, name: "Mobile App Development" },
  { id: 2, name: "Web Development" },
  { id: 3, name: "Push Ups" },
  { id: 4, name: "Jogging" },
  { id: 5, name: "Frying" },
  { id: 6, name: "Running" },
  { id: 7, name: "Skipping" },
  { id: 8, name: "Saucing" },
  { id: 9, name: "Swimming" },
  { id: 10, name: "Hibachi" },
  { id: 11, name: "Walking" },
  { id: 12, name: "Squats" },
  { id: 13, name: "Bench Press" },
  { id: 14, name: "Sliding" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hello , Devs</Text>
          <Text style={styles.subText}>14 tasks today</Text>
        </View>
        <View style={styles.profileIcon}>
          <Image source={require('./assets/person.png')} style={styles.profileImage} />
        </View>
      </View>

      <View style={styles.searchFilterContainer}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={16} color="black" style={styles.searchIcon} />
          <TextInput
            placeholder='Search'
            style={styles.input}
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.filterIcon}>
          <Image source={require('./assets/Group 2.png')} style={styles.filterImage} />
        </View>
      </View>

      <Text style={styles.categories}>Categories</Text>
      <FlatList
        data={elements}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            <Image source={item.image} style={styles.categoryImage} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.ongoingTitle}>Ongoing Tasks</Text>
      <FlatList
        data={ongoingTasks}
        renderItem={({ item }) => (
          <View style={styles.ongoingTask}>
            <Text style={styles.ongoingText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 52,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileIcon: {
    width: 50,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  title: {
    width: 170,
    height: 37,
    fontSize: 32,
    fontWeight: '700',
  },
  subText: {
    height: 13,
    fontWeight: '500',
    fontSize: 12,
    flexWrap: 'wrap',
  },
  searchFilterContainer: {
    width: 353,
    height: 49,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 1,
    padding: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 14,
    paddingHorizontal: 10,
    width: 280,
    padding: 2,
    marginHorizontal: 23,
    height: 48,
    marginLeft: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    paddingLeft: 10,
    fontWeight: '700',
    textColor: 'black',
    flexDirection: 'row',
    marginLeft: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    paddingRight: 10,
  },
  filterIcon: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterImage: {
    width: 50,
    height: 48,
  },
  categories: {
    width: 96,
    height: 24,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: 186,
    height: 192,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 24,
    paddingLeft: 20,
    marginRight: 24,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    height: 19,
    fontSize: 16,
    fontWeight: '700',
  },
  subTitle: {
    width: 50,
    height: 14,
    fontSize: 12,
    color: "black",
  },
  categoryImage: {
    width: 151,
    height: 132,
  },
  ongoingTitle: {
    width: "auto",
    textAlign: "left",
    height: 24,
    fontWeight: '700',
    fontSize: 20,
    marginTop: 20,
  },
  ongoingTask: {
    flexDirection: 'row',
    fontWeight: '700',
    height: 128,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E8D1BA',
    borderRadius: 1,
    padding: 12,
  },
  ongoingText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
});
