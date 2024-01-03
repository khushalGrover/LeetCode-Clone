import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
export const Hero = ({ scrolled, scrollValue }) => {

    let result;

    if (scrollValue < 150) 
    {
      result = 0;
    } 
    else if (scrollValue >= 150 && scrollValue < 250) 
    {
      result = 1;
    } 
    else if (scrollValue >= 250 && scrollValue < 350) 
    {
      result = 2;
    } 
    else if (scrollValue >= 350 && scrollValue < 450) 
    {
      result = 3;
    } if (scrollValue >= 450 && scrollValue < 550) 
    {
      result = 4;
    } if (scrollValue >= 550 && scrollValue < 650) 
    {
      result = 5;
    }

    const isEven = result % 2 === 0;

    // let myClassName;
    // if (scrolled) 
    // {
    //   // myClassName = isEven ? "overlay left" : "overlay right";
    // //   console.log(scrollValue, "scrolled, result:", result, isEven ? "even" : "odd");
    // } 
    // else 
    // {
    //   myClassName = "overlay";
    //   console.log(scrollValue, "not scrolled, result:", result);
    // }


    return (
        <div className='overlay'>
            <Canvas camera={ 
                {
                    position: [3,2,0],
                    rotation: [0,1  ,0]
                
                }}>
                {/* disable zoom and scroll in orbitcontrol */}
                <mesh position={[0, 0, -2]} scale= {isEven ?  [.01,.01 ,.01] : [1,1,1] }>
                    <boxGeometry />
                    
                    <meshNormalMaterial />
                </mesh>
                <mesh position={[0, 0, 2]} scale= {isEven ? [1,1,1] : [.01,.01 ,.01]}>
                    <boxGeometry />
                    
                    <meshNormalMaterial />
                </mesh>
                < OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
        </div>
       
    )

}