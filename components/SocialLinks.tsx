import { Text, View, SafeAreaView, Modal, TouchableOpacity, ActivityIndicator } from 'react-native'
import Icon from './Icon';
import styles, { DARK_GRAY, WHITE, DIMENSION_HEIGHT, PRIMARY_COLOR } from '../assets/styles';
import React, { useState } from 'react'


const SocialLinks = () => {
    const [isOpenFb, setOpenFb] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const conncetWithFb = () => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)
        return (
            <SafeAreaView>
                <Modal
                    visible={isOpenFb}
                    animationType={'slide'}
                    transparent={true}
                    onRequestClose={() => { setOpenFb(!isOpenFb) }}
                >
                    <View style={styles.modal}>
                        {isLoading ?
                            <ActivityIndicator size={'large'} color={PRIMARY_COLOR} />
                            :
                            <Text>Conceted SuccessFully !</Text>
                        }
                    </View>

                </Modal>

            </SafeAreaView>
        )

    }



    return (
        <SafeAreaView>

            <View style={styles.socialLik}>
                <TouchableOpacity style={styles.fbLogo}
                    onPress={(() => {
                        setLoading(true)
                        setOpenFb(true)
                    })}
                >
                    <Icon name='ios-logo-facebook' size={28} color={WHITE} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={(() => {
                        setLoading(true)
                        setOpenFb(true)
                    })}
                    style={styles.instaLogo}>
                    <Icon name='logo-instagram' size={30} color={WHITE} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={(() => {
                        setLoading(true)
                        setOpenFb(true)
                    })}
                    style={styles.twitterLogo}>
                    <Icon name='logo-twitter' size={28} color={WHITE} />
                </TouchableOpacity>
            </View>
            {isOpenFb ?
                conncetWithFb() : null

            }
        </SafeAreaView>
    )
}


export default SocialLinks;