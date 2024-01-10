/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


export const HeroOverlay = () => {


    return (
        <div className='overlay'>
            <Canvas camera={ 
                {
                    position: [3,3,3],
                    rotation: [0,0,0]
                
                }}>
                {/* disable zoom and scroll in orbitcontrol */}
                <mesh position={[0,0,0]}>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh> 
               
                <ambientLight intensity={1} />
                < OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
        </div>
       
    )

}