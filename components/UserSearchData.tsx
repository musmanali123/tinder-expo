import { View, Image, Text } from "react-native"
import styles, { DARK_GRAY, PRIMARY_COLOR } from "../assets/styles";

interface UserSearchDataProps {image:any,name:String}

const UserSearchData = ({ image, name }:UserSearchDataProps): JSX.Element => (
    <View style={{ paddingHorizontal: 10, paddingTop: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        <View
            style={{
                width: 56,
                height: 56,
                borderRadius: 56 / 2,
                borderColor: PRIMARY_COLOR,
                borderWidth: 1.3
            }}
        >
            <Image source={image} style={{ width: 50, height: 50, borderRadius: 25, top: 2, left: 2 }} />
        </View>
        <Text style={{ fontSize: 18, paddingHorizontal: 10, fontWeight: '700' }}>{name}</Text>
    </View>
)

export default UserSearchData;