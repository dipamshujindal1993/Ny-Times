import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import metrics from '../../utils/Metrics';

const window = Dimensions.get('window');
module.exports = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    newsHeadlineView: {
        flex:1,
        width: window.width,


    },
    titleTextStyle:{
        fontSize: 15,
        color: colors.darkGrey,
        textAlign: 'left',
        marginVertical: metrics.screenHeight * (5 / 820),
    },
    contentTextStyle:{
        //flex: 1,
        fontSize: 12,
        color: colors.grey,
        textAlign: 'left',

    },
    roundViewStyle:{
        height:  metrics.screenWidth * (50 / 375),
        width:  metrics.screenWidth * (50 / 375),
        borderRadius: metrics.screenWidth * (25 / 375),
        backgroundColor: colors.grey,
        alignSelf: 'center',
    },
    sectionViewStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:  metrics.screenHeight * (5 / 820),
    }


});
