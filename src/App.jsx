import { TextureLoader } from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function Box() {
  const ref = useRef();
  const rate = 0.001;
  const [matcap] = useLoader(TextureLoader, ["black-n-shiney.jpg"]);
  useFrame(() => {
    ref.current.rotation.x += rate;
    ref.current.rotation.y += rate;
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.4, 256, 32]} />
      <meshMatcapMaterial matcap={matcap} color={0xff9900} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <color attach="background" args={["#171730"]} />
        <Box />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default App;
