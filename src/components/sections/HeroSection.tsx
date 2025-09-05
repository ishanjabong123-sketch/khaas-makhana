import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Award, Users } from 'lucide-react';
import * as THREE from 'three';
import heroImage from '@/assets/hero-makhana.jpg';

// 3D Makhana component
function MakhanaSeeds() {
  const seeds = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <group>
      {seeds.map((_, index) => {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 6;
        const z = (Math.random() - 0.5) * 8;
        
        return (
          <Float
            key={index}
            position={[x, y, z]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            speed={1 + Math.random() * 2}
            rotationIntensity={0.5}
            floatIntensity={0.8}
          >
            <mesh castShadow>
              <sphereGeometry args={[0.15 + Math.random() * 0.1, 16, 16]} />
              <meshStandardMaterial 
                color={new THREE.Color().setHSL(0.12, 0.2, 0.9)} 
                roughness={0.1}
                metalness={0.1}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

// 3D Scene component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      <Center>
        <Float speed={0.5} rotationIntensity={0.2} floatIntensity={1}>
          <Text3D
            font="/fonts/Inter_Bold.json"
            size={0.8}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[0, 1, 0]}
          >
            Premium Makhana
            <meshStandardMaterial color="#2D4A2D" metalness={0.3} roughness={0.4} />
          </Text3D>
        </Float>
      </Center>
      
      <MakhanaSeeds />
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
    </>
  );
}

const HeroSection = () => {
  const stats = [
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                From Bihar to the{" "}
                <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                  World
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-white/90 font-medium">
                Premium Makhana Exporters
              </h2>
              <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                Delivering the finest quality fox nuts from the fertile lands of Purnia, Bihar. 
                Trusted by international buyers for premium organic makhana with global export standards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-accent group">
                Get Bulk Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                View Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 3D Scene */}
          <div className="hidden lg:block h-[600px] relative">
            <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm">
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <Suspense fallback={null}>
                  <Scene />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;