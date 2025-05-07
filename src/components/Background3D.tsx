// components/Background3D.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, Float, Sparkles } from "@react-three/drei";

const LogoModel = () => {
  try {
    const { scene } = useGLTF("/models/logo.glb");
    return <primitive object={scene} scale={2.5} />;
  } catch (error) {
    console.error("Error loading GLTF model:", error);
    return null;
  }
};

const Background = () => (
  <Canvas
    style={{ position: "fixed", top: 0, left: 0, zIndex: -10 }}
    camera={{ position: [0, 0, 5], fov: 50 }}
  >
    <ambientLight intensity={0.6} />
    <directionalLight position={[3, 2, 1]} intensity={1.5} />
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <LogoModel />
    </Float>
    <Sparkles count={150} size={3} speed={0.5} color="#00ffff" />
    <Environment preset="sunset" background />
  </Canvas>
);

export default Background;
