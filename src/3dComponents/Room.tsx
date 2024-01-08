/* eslint-disable @typescript-eslint/consistent-type-imports */
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ReactNode } from 'react';

interface RoomProps {
  children?: ReactNode;
}

export default function Room(props: RoomProps): JSX.Element {
  const { nodes, materials } = useGLTF('assets/models/Room_002.glb') as any;
  return (
    // eslint-disable-next-line prettier/prettier
    
    <Canvas>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.defaultMaterial010.geometry}
          material={materials['diaram1_1011.001']}
        />
        <mesh
          geometry={nodes.defaultMaterial003.geometry}
          material={materials['pc_1013.001']}
        />
        <mesh
          geometry={nodes.defaultMaterial001.geometry}
          material={materials['Polka_1002.001']}
        />
        <mesh
          geometry={nodes.defaultMaterial005.geometry}
          material={materials['ramka_1014.001']}
        />
        <mesh
          geometry={nodes.defaultMaterial004.geometry}
          material={materials['sit_1015.001']}
        />
        <mesh
          geometry={nodes.defaultMaterial009.geometry}
          material={materials['Stoo1_1004.001']}
        />
        <mesh
          geometry={nodes.defaultMaterial002.geometry}
          material={materials['tv_1001.001']}
        />
      </group>
    </Canvas>
  );
}

useGLTF.preload('assets/models/Room_002.glb');
