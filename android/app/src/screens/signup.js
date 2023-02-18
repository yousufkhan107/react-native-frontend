import axios from 'axios'
import fetch from 'react-native-fetch-api'
import { useState } from "react";
import { View, Text, StyleSheet,  TextInput,  TouchableOpacity,  Alert} from "react-native";
import Iconsss from "react-native-vector-icons/Entypo"

function Signup({navigation}){
const [name , setname] = useState("")
const [email , setemail] = useState("")
const [password , setpassword] = useState("")

const logup=( )=>{
  const objToSend ={
    name,
    email,
    password
  }
   axios.post("https://average-outerwear-goat.cyclic.app/api/signup",objToSend).then((res)=>{
     console.log(res)
     Alert.alert("Successfully created an account")
     navigation.navigate("Home")
   }).catch((err)=>{
    console.log(err)
    Alert.alert("Something went wrong")
  })
   
    // if (email === "yousufazeem204@gmail.com" && password === "123456" && name === "yousuf" && phonenumber === "03122740984"  ){
    //     navigation.navigate("login")
    //     }else{
    //         Alert.alert("credential error!")
    //     }
//     let obj ={
// name,
// email,
// password,
// phonenumber
//     }
//     console.log(obj)
}
return<>
<View style={styles.navhead}>
<View style={{display:"flex",flexDirection:"row"}}>
                        <Iconsss name="flower" size={50} color={"#0D986A"}style={{paddingTop:10,paddingLeft:10}}/>
                        <Text style={styles.navtext}>plantify</Text>
                    </View>
   
</View>
  <View   style={styles.loghead1} >
       <Text style={styles.navtext1}  >Signup</Text>
       <Text style={styles.navtext2}> Masukan NISN dan password untuk memulai belajar sekarang</Text>
       </View>

       <View style={{ padding: 10, alignItems: 'center' }}>
          <TextInput onChangeText={(e) => setname(e)} style={[styles.inp, styles.shadow]} placeholder="User Name" />
        </View>
        <View style={{ padding: 10, alignItems: 'center' }}>
          <TextInput onChangeText={(e) => setemail(e)} style={[styles.inp, styles.shadow]} placeholder="Email" />
        </View>
        <View style={{ padding: 10, alignItems: 'center' }}>
          <TextInput  secureTextEntry={true} onChangeText={(e) => setpassword(e)} style={[styles.inp, styles.shadow]} placeholder="Password" />
        </View>
        
       
        
      

        <View style={{ padding: 10, alignItems: 'center' }}>
          <TouchableOpacity onPress={logup}  style={[styles.customeBtn, styles.shadow]}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>signup</Text>
          </TouchableOpacity>
        </View>

    </>
}



export default Signup;



const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 30,
    color: 'blue',
    textAlign: 'center',
    textTransform : 'uppercase',


  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  inp: {
    width: '95%',
    padding: 10,
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 10
  },
  customeBtn: {
    width: "100%",
    padding: 10,
    backgroundColor:"#0D986A",
    borderRadius: 20,
 
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },navtext1:{
    color:"#0D986A",
      fontSize:45,
   textTransform:"capitalize",
  fontWeight: 700,
  lineHeight: 22,
  letterSpacing: 0.1,
  textAlign:"center",
  paddingTop:40,
  paddingBottom:5
  },navhead:{
    height:74,
    borderBottomWidth:1,
    borderColor:"#0D986A"
   
    
  
  },
  navtext:{
    
  
    paddingTop:25,
    paddingLeft:25,
    fontSize:25,
  textTransform:"uppercase",
  fontWeight: 700,
  fontSize: 20,
  lineHeight: 22,
  display: "flex",
  alignIitems: "center",
  textAlign: "center",
  letterSpacing: 0.1,
  textTransform: "uppercase", 
  color: "#002140",
  },navtext2:{
  
    color:"#0D986A"
    , textTransform:"capitalize",
    lineHeight: 22,
    textAlign:"center",
    paddingBottom:30
  
  }
})