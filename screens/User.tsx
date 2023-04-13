import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View ,BackHandler, YellowBox, ImageBackground} from "react-native"
import styles, { WHITE } from "../assets/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon, ProfileItem } from "../components";
import SocialLinks from "../components/SocialLinks";

const User = ({route}) => {
const navigation = useNavigation()

console.log('route',route?.params?.item);


    return(
       <View>
        <ImageBackground
         source={route?.params?.item?.image}
         style={styles.photo}
        >
            <View style={styles.top}>
            <TouchableOpacity
            onPress={()=>{navigation.goBack()}}
            >
              <Icon
                name="chevron-back"
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ProfileItem
        isOnline={route?.params?.item?.isOnline}
          matches={route?.params?.item?.match}
          name={route?.params?.item?.name}
          age={route?.params?.item?.age}
          location={route?.params?.item?.location}
          info1={route?.params?.item?.info1}
          info2={route?.params?.item?.info2}
          info3={route?.params?.item?.info3}
          info4={!route?.params?.item?.isOnline ? route?.params?.item?.info4: 'Online now'}
        />
        <SocialLinks/>
       </View>
    )
} 

export default User;