import React, {forwardRef, useState} from 'react';
import {View, ScrollView, ScrollViewProps} from 'react-native';

interface CarouselProps extends ScrollViewProps {
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = forwardRef<
  ScrollView,
  ScrollViewProps
>(({children, ...rest}, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = event.nativeEvent.contentOffset.x / slideWidth;
    setActiveIndex(currentIndex);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        ref={ref}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        {...rest}>
        {children}
      </ScrollView>
    </View>
  );
});
