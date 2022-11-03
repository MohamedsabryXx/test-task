import { useState, useEffect } from 'react';
import * as THREE from 'three';

function VideoText({ clicked, ...props }) {
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/flip-0.webm',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
      autoplay: true,
      playsinline: true,
    })
  );
  useEffect(() => {
    video.play();
  }, [video, clicked]);

  return (
    <group>
      <mesh {...props}>
        <planeGeometry />
        <meshPhongMaterial>
          <videoTexture
            attach='map'
            args={[video]}
            format={THREE.RGBAFormat}
            encoding={THREE.sRGBEncoding}
          />
        </meshPhongMaterial>
      </mesh>
    </group>
  );
}

export default VideoText;
