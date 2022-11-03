import { Canvas } from '@react-three/fiber';
import {
  Fragment,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import './styles/index.css';

import { Environment, Html, Text } from '@react-three/drei';
import { Macbook } from './3D/Macbook';
import { Iphone } from './3D/Iphone';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const char = new SplitType('.title', { charClass: 'word1', types: 'chars' })
    .chars;
  const char2 = new SplitType('.title-2', {
    charClass: 'word-2',
    types: 'chars',
  }).chars;

  useLayoutEffect(() => {
    if (element) {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline({
          scrollTrigger: {
            start: 0,
            end: '+=33%',
            scrub: true,
          },
        });
        t1.to('.word1', {
          y: -85,
          stagger: 0.2,
        })
          .fromTo(
            '.word-2',
            { y: 85 },
            {
              y: -10,
              stagger: 0.5,
            }
          )
          .to('.word-2', { y: -85, stagger: 0.2 });
      }, '.container');

      return () => {
        ctx.revert();
      };
    }
  }, [element]);

  return (
    <Fragment>
      <Canvas
        flat
        linear
        gl={{ alpha: false }}
        dpr={Math.max(window.devicePixelRatio, 2)}
        camera={{ position: [0, 3, 10], fov: 15 }}
        id='canvas'
        style={{ position: 'fixed' }}
      >
        <Html>
          <div className='container'>
            <div ref={setElement} className='title-container'>
              <p className='title'>{'Welcome'}</p>
            </div>
            <div ref={setElement} className='title-container'>
              <p className='title-2'>{'To Apple Store'}</p>
            </div>
          </div>
        </Html>
        <Suspense fallback={null}>
          <ambientLight intensity={2} position={[1, 0, 0]} color={0xffff} />
          <directionalLight position={[1, 0, 0]} intensity={1} />

          <group>
            <Iphone rotation={[0, Math.PI / 2, 0]} />
            <Environment preset='sunset' />
          </group>
        </Suspense>

        <Suspense fallback={null}>
          <ambientLight intensity={2} position={[1, 0, 0]} color={0xffff} />
          <directionalLight position={[1, 0, 0]} intensity={1} />

          <group>
            <Macbook />
            <Environment preset='sunset' />
          </group>
        </Suspense>
      </Canvas>
    </Fragment>
  );
}

export default App;
