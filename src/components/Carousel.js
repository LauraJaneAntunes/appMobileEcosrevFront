import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import { useTheme } from "../contexts/ThemeContext";
import { useFontSettings } from "../contexts/FontContext";

const { width } = Dimensions.get('window');

const Carousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const theme = useTheme();
  const { fontSize } = useFontSettings();

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeIndex === slides.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, slides.length]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.imageSrc}
          style={styles.image}
          resizeMode="cover"
        />
        <View
          style={[
            styles.captionContainer,
            { backgroundColor: theme.colors.overlay },
          ]}
        >
          <Text
            style={[
              styles.caption,
              { fontSize: fontSize.md, color: theme.colors.text.secondary, fontWeight: 'bold' },
            ]}
          >
            {item.caption}
          </Text>
        </View>
      </View>
    );
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item, index) => `slide-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  slide: {
    width,
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  captionContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 15,
  },
  caption: {
    textAlign: 'center',
  },
});

export default Carousel;
