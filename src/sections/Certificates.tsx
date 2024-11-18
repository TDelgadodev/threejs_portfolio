import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Text, Html, PerspectiveCamera } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { Certificate } from '../types';

const certificates: Certificate[] = [
  {
    name: 'React Developer',
    issuer: 'Udacity',
    date: '2023',
    image:'/assets/certificates/certificate-1.jpg',
  },
  {
    name: 'Three.js Journey',
    issuer: 'Bruno Simon',
    date: '2024',
    image: '/assets/certificates/certificate-2.webp',
  },
];

const CertificateObject = ({ certificate, index, totalCertificates, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  const texture = useLoader(THREE.TextureLoader, certificate.image) as THREE.Texture;

  useFrame(() => {
    if (meshRef.current && textRef.current) {
      const angle = (index / totalCertificates) * Math.PI * 2;
      const radius = 5;
      meshRef.current.position.x = Math.sin(angle) * radius;
      meshRef.current.position.z = Math.cos(angle) * radius;
      meshRef.current.rotation.y = -angle + Math.PI / 2;
      textRef.current.rotation.y = -angle + Math.PI / 2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} onClick={onClick}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Text
        ref={textRef}
        position={[0, -1, 0]} 
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {certificate.name}
      </Text>
    </group>
  );
};

const CertificatesCarousel = ({ onSelectCertificate }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rotateTo = (index) => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: -index * ((Math.PI * 2) / certificates.length),
        duration: 1,
        ease: 'power2.inOut',
      });
      setSelectedIndex(index);
    }
  };

  return (
    <group ref={groupRef}>
      {certificates.map((cert, index) => (
        <CertificateObject
          key={cert.name}
          certificate={cert}
          index={index}
          totalCertificates={certificates.length}
          onClick={() => {
            rotateTo(index);
            onSelectCertificate(cert);
          }}
        />
      ))}
    </group>
  );
};

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section className="w-full h-screen text-white-600">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <CertificatesCarousel onSelectCertificate={setSelectedCertificate} />
      </Canvas>
      {selectedCertificate && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg">
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-bold text-white">{selectedCertificate.name}</h3>
            <p className="text-gray-300">{selectedCertificate.issuer}</p>
            <p className="text-gray-400">{selectedCertificate.date}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setSelectedCertificate(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
