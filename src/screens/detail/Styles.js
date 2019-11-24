import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import metrics from '../../utils/Metrics';

const window = Dimensions.get('window');
module.exports = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignItems: 'center',
    },

    toolbar_items: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    label_text: {
        color: colors.primary,
        fontSize: 16,
        marginVertical:10
    },
    contentTextStyle:{
        //flex: 1,
        fontSize: 14,
        color: colors.darkGrey,
        textAlign: 'left',

    },
    sectionViewStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:  metrics.screenHeight * (5 / 820),
    }
});
