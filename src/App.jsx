import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { XR, DefaultXRControllers, createXRStore } from '@react-three/xr';
import './App.css';

function Cube() {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function App() {
  const xrStore = createXRStore();

  const handleEnterAR = () => {
    xrStore.enterAR();
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={handleEnterAR} style={{ margin: 20, padding: 10, fontSize: 18 }}>
        Entrar en modo AR
      </button>
      <XR store={xrStore}>
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }} shadows style={{ width: '100vw', height: '100vh' }}>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Cube />
          <DefaultXRControllers />
        </Canvas>
      </XR>
    </div>
  );
}

export default App
