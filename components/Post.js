import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, 
    TouchableWithoutFeedback, Image, TextInput, Dimensions} from 'react-native';
  
const post = (props) => {
    let {post} = props;
    return (
        <TouchableWithoutFeedback>
            <View
                style = {
                    {
                        marginBottom: 10,
                        flexDirection: 'row',
                    }
                }
            >

            <Image
                source = {
                    {
                        uri: post.thumb
                    }
                }
                style = {
                    {
                        height: 120,
                        width: 150
                    }
                }
            />

            <View
                style = {
                    {
                        flexWrap: 'wrap',
                        flex: 1,
                        marginLeft: 15,
                        justifyContent: 'space-between'
                    }
                }
            >
                <Text
                    style = {
                        {
                            fontSize: 22
                        }
                    }
                >
                    {post.title}
                </Text>
                <View
                    style = {
                        {
                            flexDirection: 'row'
                        }
                    }
                >
                    <Text
                        style = {
                            {
                                fontSize: 16,
                                color: '#02737b',
                                marginRight: 5
                            }
                        }
                    >{post.ncc}</Text>
                    <Text
                        style = {
                            {
                                fontSize: 16,
                                color: 'grey',
                                marginRight: 5,
                                marginLeft: 5
                            }
                        }
                    >{post.time} giờ</Text>
                    <Text
                        style = {
                            {
                                fontSize: 16,
                                color: 'grey',
                                marginLeft: 5,
                                marginRight: 5
                            }
                        }
                    >{post.comment} </Text>
                    <View>
                        <Image
                            source = {
                                require('../assets/images/ic_comment.png')
                            }
                            style = {
                                {
                                    width: 16,
                                    height: 16
                                }
                            }
                        />
                    </View>
                </View>
            </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default post;