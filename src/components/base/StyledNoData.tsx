import * as React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Themes } from 'assets/themes';
import StyledText from './StyledText';
import TouchableRipple from './StyledTouchable';

interface StyledListNoDataProps {
    text?: string;
    canRefresh?: boolean;
    loading?: boolean;
    onRefresh?(): any;
    customStyle?: StyleProp<ViewStyle>;
    customStyleText?: StyleProp<TextStyle>;
}

const NO_DATA_TEXT = 'No data';
const RELOAD = 'Reload';

const StyledNoData: React.FunctionComponent<StyledListNoDataProps> = (props: StyledListNoDataProps) => {
    return (
        <View style={[styles.container, props.customStyle]}>
            {props.loading ? (
                <View style={{ alignItems: 'center' }}>
                    <ActivityIndicator />
                </View>
            ) : (
                <StyledText customStyle={props.customStyleText}>{props.text || NO_DATA_TEXT}</StyledText>
            )}
            {!!props.canRefresh && !props.loading ? (
                <TouchableRipple onPress={props.onRefresh}>
                    <StyledText customStyle={styles.textReload}>{RELOAD}</StyledText>
                </TouchableRipple>
            ) : (
                <View />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    text: {
        fontWeight: '600',
        fontSize: 14,
        color: Themes.COLORS.primary,
        textAlign: 'center',
    },
    textReload: {
        margin: 12,
        color: Themes.COLORS.primary,
    },
});

export default StyledNoData;
