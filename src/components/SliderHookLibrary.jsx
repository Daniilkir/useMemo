import {useSlider} from 'react-use';
import React from 'react';

const SliderHookLibrary = () => {
    const ref = React.useRef(null);
    const {isSliding, value, pos, length} = useSlider(ref);
  
    return (
      <div>
        <div ref={ref} style={{ position: 'relative' }}>
          <p style={{ textAlign: 'center', color: isSliding ? 'red' : 'green' }}>
            {Math.round(value * 100)}%
          </p>
          <div style={{ position: 'absolute', left: pos }}>🎚</div>
        </div>
      </div>
    );
  };

  export default SliderHookLibrary