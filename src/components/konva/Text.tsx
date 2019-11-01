import * as React from 'react';
import { Text } from 'react-konva';

export interface TextProps extends Text {
  onLoad: (params: { height: number; width: number }) => void;
}

const _Text: React.FC<TextProps> = ({ onLoad, ...rest }) => {
  const textRef = React.useRef<any>(null);

  React.useEffect(() => {
    const current = textRef.current;
    let height = 0;
    let width = 0;
    if (current) {
      height = current.height();
      width = current.width();
    }
    onLoad({ height, width });
  }, [rest]);

  return <Text {...rest} ref={textRef} />;
};

export default _Text;
