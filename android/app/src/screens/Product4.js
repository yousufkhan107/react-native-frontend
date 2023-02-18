import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import Icons from "react-native-vector-icons/Ionicons"
import Iconss from "react-native-vector-icons/MaterialIcons"
import Iconsss from "react-native-vector-icons/Entypo"

const Product4 = () => {

    return<>


        <View style={styles.navhead}>

            <View style={{ display: "flex", flexDirection: "row" }}>
                <Iconsss name="flower" size={50} color={"#0D986A"} style={{ paddingTop: 10, paddingLeft: 10 }} />
                <Text style={styles.navtext}>plantify</Text>
            </View>
        </View>
        
        <View style={[styles.card, { backgroundColor: "#B2E28D" , marginTop:70, height:400}]}>
                    <Image style={{ position: "absolute", top: 7, right: 0, width: 150, height: 200 }} source={require("./Layer8.png")} />

                    <Text style={styles.texthead}> Air purifier</Text>
                    <Text style={[styles.textmain, { fontSize: 25 }]} > bird's nest fern</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.text} >$300</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 32, marginLeft: 24 }}>
                        <Text style={styles.text2} >Size 5'4</Text>
                        </View>

                        
                    </View>
                    <Text style={styles.headingtext}>plant bio</Text>
                    <Text style={styles.headingtext2}>We are very pleased to annouce that the Impact Factor for 
                        Plant Biology is 3.877, making the journal 58/238 in the 
                        Plant Science Category - thank you to all our authors and reveiwers on this achievement.
                    </Text>
                </View>


    </>
}
export default Product4;


const styles = StyleSheet.create({
    sucessfully: {

        color: "blue",
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold"

    },
    imgsty: {
        width: "100%",
        height: "10%"
    },

    shadow: {
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderRadius: 20,
        height: 50,
        margin: 10,
        paddingLeft: 20,
        display: "flex",
        flexDirection: "row"


    },
    navigation: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8
    },
    card: {

        height: 220,
        paddingTop: 50,
        paddingLeft: 10,
        position: "relative",
        margin: 10,
        borderRadius: 25
    },
    textmain: {
        color: "#002140",
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",


    }, texthead: {
        color: "#002140",
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold",

        marginBottom: 5
    }, text: {
        color: "#002140",
        fontSize: 25,
        marginTop: 35
        , fontWeight: "bold"
    },text2: {
        color: "#002140",
        fontSize: 25,
       fontWeight: "bold"
    }
    , lines: {
        color: "#002140",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "capitalize"

    },
    footer: {
        borderTopWidth: 2.5,
        height: 300,
        marginTop: 30,
        borderColor: "#0D986A"

    }, footext: {
        color: "#002140",
        fontSize: 25,
        textAlign: "center",
        padding: 10,
        textTransform: "capitalize",
    }, navtext: {
        paddingTop: 25,
        paddingLeft: 25,
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 22,
        display: "flex",
        alignIitems: "center",
        textAlign: "center",
        letterSpacing: 0.1,
        textTransform: "uppercase",
        color: "#002140",
    },headingtext:{
        margin:5,
        marginTop:30,
     
        color:"black",
        fontSize:28,
        fontWeight:"bold",
        textTransform:"capitalize"
    },headingtext2:{
        margin:5,
       
        color:"black",
        fontSize:15,
        fontWeight:"bold",
        textTransform:"capitalize"
    }
})