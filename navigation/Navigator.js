import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";


const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    DetailScreen: {screen: DetailScreen}
}, {
    defaultNavigationOptions: stackNavigatorOptions
})

export default createAppContainer(AppNavigator);