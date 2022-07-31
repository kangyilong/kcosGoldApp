import React from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';

export default function MyTabBar({ state, descriptors, navigation, position }: any) {
    return <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
        {state.routes.map((route: any, index: number) => {
            const { options } = descriptors[route.key];
            const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
            const isFocused = state.index === index;

            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    // The `merge: true` option makes sure that the params inside the tab screen are preserved
                    navigation.navigate({ name: route.name, merge: true });
                }
            };

            const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            };

            return (
                <TouchableOpacity
                    key={route.key}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{ flex: 1 }}
                >
                    <Animated.Text style={{ color: '#333' }}>
                        { label }
                    </Animated.Text>
                </TouchableOpacity>
            );
        })}
    </View>
}