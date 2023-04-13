import React from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import { Icon, Message } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY, MsgColor } from "../assets/styles";
import { useNavigation } from "@react-navigation/native";

const Messages = ({  }) => {
  const navigation = useNavigation()
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <View style={styles.top}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={DEMO}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor:item.isOnline ? "":MsgColor
                }}
                onPress={() => {
                  navigation.navigate('User', { item: item })
                }}
              >
                <Message
                  image={item.image}
                  name={item.name}
                  lastMessage={item.message}
                />
              </TouchableOpacity>
            )
          }
          }
        />
      </View>
    </ImageBackground>
  )
};

export default Messages;
