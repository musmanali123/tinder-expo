import { View, TouchableOpacity, TextInput, Text, FlatList, SafeAreaView, Modal, ActivityIndicator } from "react-native"
import styles, { BLACK, DARK_GRAY, DIMENSION_HEIGHT, DIMENSION_WIDTH, GRAY, PRIMARY_COLOR } from "../assets/styles"
import { Icon } from "../components"
import Entypo from "@expo/vector-icons/Entypo";
import React, { useState, useRef } from 'react';
import DEMO from '../assets/data/demo'
import UserSearchData from "../components/UserSearchData";

const SearchProfile = () => {
    const [data, setData] = useState(DEMO)
    const [searchText, setsearchText] = useState("")
    const [isOpenModal, setIsOpenModal] = useState(false)

    const onSearch = (text: string) => {
        if (text == '') {
            setData(DEMO)
        } else {

            let tempData = data.filter((item) => {
                return item.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) > -1;
            })
            setData(tempData)
        }
    }


    const openModal = () => {
        return (
            <SafeAreaView>
                <Modal
                    visible={isOpenModal}
                    animationType={'slide'}
                    transparent={true}
                    onRequestClose={() => { setIsOpenModal(!isOpenModal) }}
                >
                    <View style={{
                        width: "80%",
                        alignSelf: 'center',
                        marginTop: DIMENSION_HEIGHT * 0.3,
                        backgroundColor: "white",
                        borderRadius: 20,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View style={{ borderBottomWidth: 1, width: "100%", }}>
                            <TouchableOpacity
                                onPress={() => {
                                    let tempData = data.sort((a, b) => a.name > b.name ? 1 : -1);
                                    setData(tempData);
                                    setIsOpenModal(false)
                                }}
                            >
                                <Text
                                    style={{
                                        padding: 10,
                                        paddingHorizontal: 15,
                                        fontSize: 20,
                                        fontWeight: '700',
                                    }}>Sort By a-z</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ borderBottomWidth: 1, width: "100%", }}>
                            <TouchableOpacity
                                onPress={() => {
                                    let tempDataMale = data.filter((a)=>{
                                        return a.gender === 'male'
                                    })
                                    setData(tempDataMale)
                                    setIsOpenModal(false)
                                }}
                            >
                                <Text
                                    style={{
                                        padding: 10,
                                        paddingHorizontal: 15,
                                        fontSize: 20,
                                        fontWeight: '700',
                                    }}>Sort By Male</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: "100%", }}>
                            <TouchableOpacity
                               onPress={() => {
                                let tempsortFemale = data.filter((b)=>{
                                    return b.gender === 'female'
                                })
                                setData(tempsortFemale)
                                setIsOpenModal(false)
                            }}
                            >
                                <Text
                                    style={{
                                        padding: 10,
                                        paddingHorizontal: 15,
                                        fontSize: 20,
                                        fontWeight: '700',
                                    }}>Sort By Female</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>

            </SafeAreaView>
        )

    }
    return (
        <View style={{
            paddingTop: 50,
            marginHorizontal: 10
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity>
                    <Icon
                        name="chevron-back"
                        size={25}
                        color={BLACK}
                        style={{
                            paddingLeft: 8,
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        padding: 5,
                        flexDirection: "row",
                        alignItems: 'center',
                        borderColor: BLACK,
                        borderWidth: 1.2,
                        borderRadius: 10,
                        width: DIMENSION_WIDTH * 0.7

                    }}
                >
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        alignItems: "center"
                    }}>
                        <Icon
                            name="ios-search"
                            size={18}
                            color={BLACK}
                            style={{ paddingLeft: 6 }}
                        />
                        <TextInput
                            placeholder="Search here"
                            placeholderTextColor={GRAY}
                            autoCapitalize="none"
                            style={{ paddingLeft: 13, }}
                            value={searchText}
                            onChangeText={(text) => {
                                onSearch(text)
                                setsearchText(text)
                            }}
                        />
                    </View>

                    {searchText != "" ?
                        <TouchableOpacity
                            onPress={() => {
                                onSearch('')
                                setsearchText('')
                            }}
                        >
                            <Entypo
                                name={"cross"}
                                size={18}
                                color={BLACK}
                                style={{ paddingRight: 2 }}
                            />
                        </TouchableOpacity>
                        : null}
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setIsOpenModal(true)
                    }}
                    style={{
                        padding: 10,
                    }}>
                    <Icon name="filter" size={20} color={DARK_GRAY} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: 20 }}>
                <FlatList
                    initialNumToRender={20}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => {
                        return (
                            <>
                                <UserSearchData image={item.item.image} name={item.item.name} />
                            </>
                        )
                    }}
                />
            </View>
            {isOpenModal ? openModal() : null}
        </View>
    )
}

export default SearchProfile;