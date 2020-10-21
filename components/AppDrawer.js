import { Switch } from 'react-native-paper';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SwitchScreen from './SwitchScreen'
import  CustomSideBarMenu from './CustomSideBarMenu'

export const AppDrawer = createDrawerNavigator({
        Home:{
            screen:SwitchScreen
        }
    },
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:'Home'
    },
)