import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from "react-native";

export default class PostCard extends Component {
  render() {
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              post: this.props.post
            })
          }
        >
        <View style ={styles.container}>
          <View style ={styles.cardContainer}>
            <View style ={styles.authorContainer}>
                <View style ={styles.authorImageContainer}>
                    <Image source ={require("../assets/profile_img.png")} style ={styles.profileImage}></Image>
                </View>
                <View style ={styles.authorNameContainer}>
                    <Text style ={styles.authorNameText}>{this.props.post.author}</Text>
                </View>
            </View>
            <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
            <View style ={styles.captionContainer}>
                <Text style ={styles.captionText}>{this.props.post.caption}</Text>
            </View>
            <View style ={styles.actionContainer}>
                <View style ={styles.likeButton}>
                    <Ionicons name ={"heart"} size ={30} color ={"white"}/> 
                    <Text style ={styles.likeText}>12K</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: { 
    margin: RFValue(13), 
    backgroundColor: "#2f345d", 
    borderRadius: RFValue(20) 
  },
  authorImageContainer: { 
    resizeMode: "contain", 
    width: "95%", 
    alignSelf: "center", 
    height: RFValue(250) 
  },
  authorContainer: { 
    fontSize: RFValue(25), 
    color: "white" 
  },
  profileImage: {
    resizeMode: "contain", 
    width: Dimensions.get("window").width-60, 
    height: 250, 
    borderRadius: 10
  },
  authorNameContainer: { 
    paddingLeft: RFValue(20), 
    justifyContent: "center" 
  },
  authorNameText: { 
    fontSize: RFValue(18), 
    color: "white" 
  },
  captionText: { 
    fontSize: 13, 
    color: "white", 
    paddingTop: RFValue(10) 
  },
  actionContainer: { 
    justifyContent: "center", 
    alignItems: "center", 
    padding: RFValue(10) 
  },
  likeButton: { 
    width: RFValue(160), 
    height: RFValue(40), 
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection: "row", 
    backgroundColor: "#eb3948", 
    borderRadius: RFValue(30) 
  },
  likeText: { 
    color: "white", 
    fontSize: RFValue(25), 
    marginLeft: RFValue(5) 
  }
});
