import { Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function Index() {
  useFonts({
    "inter": require(`./../assets/fonts/Inter_24pt-Regular.ttf`),
    "inter-medium": require(`./../assets/fonts/Inter_24pt-Medium.ttf`),
    "inter-bold": require(`./../assets/fonts/Inter_24pt-Bold.ttf`),
    "inter-italic": require(`./../assets/fonts/Inter_24pt-Italic.ttf`),
    "unna": require(`./../assets/fonts/Unna-Regular.ttf`),
    "unna-italic": require(`./../assets/fonts/Unna-Italic.ttf`),
    "unna-bold": require(`./../assets/fonts/Unna-Bold.ttf`),
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontFamily:'inter-italic'}}>Edit <Text style={{fontFamily:'unna-bold'}}>app/index.tsx</Text> to edit this screen.</Text>
    </View>
  );
}
