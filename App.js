
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, 
  TouchableWithoutFeedback, Image, TextInput, Dimensions,
  ScrollView
} from 'react-native';
import Post from './components/Post';

let posts = [
  {
    thumb: 'https://znews-photo-td.zadn.vn/w480/Uploaded/qhj_rwsabuimsb/2018_07_31/thumn.jpg',
    title: 'Thời tiết ngày 1/8: Sài Gòn nắng nóng 34 độ C',
    ncc: 'Zing',
    time: 15,
    comment: 757
  },
  {
    thumb: 'https://znews-photo-td.zadn.vn/w480/Uploaded/qhj_rwsabuimsb/2018_07_31/thumn.jpg',
    title: 'Sài Gòn mưa liên tục 10 ngày đầu tháng 8 ',
    ncc: 'Zing',
    time: 17,
    comment: 750
  },
  {
    thumb: 'https://znews-photo-td.zadn.vn/w210/Uploaded/neg_ofnwzyr/2018_07_31/buyt1_zing.jpg',
    title: 'TP.HCM đề xuất mở 30 tuyến xe buýt mini đặc biệt',
    ncc: 'Zing',
    time: 12,
    comment: 570
  }
]

export default class App extends Component {

  showPosts = (posts) => {
    return posts.map((post, i) => {
      return (
        <Post
          post = {post}
          key = {i}
        />
      )
    })
  }

  render() {
    let screen = Dimensions.get('screen');
    return (
      <View style={styles.container}>
        <View
          style = {
            {
              height: 94,
              backgroundColor: '#02737b',
              flexDirection: 'column-reverse'
            }
          }
        >
          <View
            style = {
              {
                height: 40,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 18,
                marginRight: 18,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            }
          >
            <View
              style = {
                {
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  backgroundColor: '#015253',
                  flex: 1,
                  borderRadius: 8
                }
              }
            >
              <Image
                source = {require('./assets/images/ic_search.png')}
                style = {
                  {
                    margin: 5
                  }
                }
              />
              <TextInput
                style = {
                  {
                    fontSize: 18,
                    color: '#fff',
                    flex: 1,
                    paddingRight: 10
                  }
                }
                placeholder = 'Tìm kiếm'
                placeholderTextColor = '#fff'
              />
            </View>
            <TouchableWithoutFeedback>
              <View
                style = {
                  {
                    marginLeft: 18
                  }
                }
              >
                <Text
                  style = {
                    {
                      color: '#fff',
                      fontSize: 20
                    }
                  }
                >Đóng</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <ScrollView>  
        <View
           style = {
             {
               backgroundColor: '#fff',
               marginTop: 12,
               marginBottom: 12,
               paddingTop: 20,
               paddingBottom: 20
             }
           }
        >
          <Text
            style = {
              {
                textTransform: 'uppercase',
                fontSize: 18,
                color: 'gray',
                marginBottom: 10,
                marginLeft: 18
              }
            }
          >Tìm nhanh
          </Text>
          <View
            style = {
              {
                alignSelf: 'center',
                flexDirection: 'row',
                width: screen.width - 36,
                flexWrap: 'wrap',
              }
            }
          >
            <Text
              style = {
                {
                  fontSize: 16,
                  color: 'grey',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#cdcdcd',
                  padding: 8,
                  flex: 0,
                  marginTop: 10,
                  marginRight: 10
                }
              }
            >tỉnh ủy</Text>
            <Text
              style = {
                {
                  fontSize: 16,
                  color: 'grey',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#cdcdcd',
                  padding: 8,
                  flex: 0,
                  marginTop: 10,
                  marginRight: 10
                }
              }
            >bà mẹ việt nam anh hùng</Text>
            <Text
              style = {
                {
                  fontSize: 16,
                  color: 'grey',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#cdcdcd',
                  padding: 8,
                  flex: 0,
                  marginTop: 10,
                  marginRight: 10
                }
              }
            >tại nạn</Text>
            <Text
              style = {
                {
                  fontSize: 16,
                  color: 'grey',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#cdcdcd',
                  padding: 8,
                  flex: 0,
                  marginTop: 10,
                  marginRight: 10
                }
              }
            >cho biết</Text>
            <Text
              style = {
                {
                  fontSize: 16,
                  color: 'grey',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#cdcdcd',
                  padding: 8,
                  flex: 0,
                  marginTop: 10,
                  marginRight: 10
                }
              }
            >Vũ Thành Long</Text> 
          </View>   
        </View>

          <View
              style = {
                {
                  backgroundColor: '#fff',
                }
              }
          >
            <Text
              style = {
                {
                  textTransform: 'uppercase',
                  fontSize: 18,
                  color: 'gray',
                  marginBottom: 20,
                  marginTop: 20,
                  marginLeft: 18
                }
              }
            >Nóng 24h
            </Text>
              <View
                style = {
                  {
                    width: screen.width - 36,
                    alignSelf: 'center',
                  }
                }
              >
                {this.showPosts(posts)}
                <TouchableWithoutFeedback>
                  <View
                    style = {
                      {
                        flexDirection: 'row',
                        justifyContent: 'center',
                        padding: 15
                      }
                    }
                  >
                    <Text
                      style = {
                        {
                          color: 'grey',
                          fontSize: 16
                        }
                      }
                    >
                      Đọc thêm
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
          </View>
          </ScrollView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeedf3'
  }
});
