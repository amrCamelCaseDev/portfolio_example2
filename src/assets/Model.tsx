import * as THREE from "three";
import  { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Beard: THREE.SkinnedMesh;
    Body: THREE.SkinnedMesh;
    Cube: THREE.SkinnedMesh;
    Eye_outer: THREE.SkinnedMesh;
    Eye_pupil: THREE.SkinnedMesh;
    Eye_pupil_Inner: THREE.SkinnedMesh;
    Eyebrow: THREE.SkinnedMesh;
    Lower_Lessa: THREE.SkinnedMesh;
    Lower_Teeth: THREE.SkinnedMesh;
    Mouth: THREE.SkinnedMesh;
    pants: THREE.SkinnedMesh;
    shirt: THREE.SkinnedMesh;
    Shoes: THREE.SkinnedMesh;
    Tongue: THREE.SkinnedMesh;
    Upper_Lashes: THREE.SkinnedMesh;
    Upper_Lessa: THREE.SkinnedMesh;
    Upper_Teeth: THREE.SkinnedMesh;
    rootx: THREE.Bone;
    c_eye_targetx: THREE.Bone;
  };
  materials: {
    hair: THREE.MeshStandardMaterial;
    skin: THREE.MeshStandardMaterial;
    ["shoes lace"]: THREE.MeshStandardMaterial;
    ["eye white"]: THREE.MeshStandardMaterial;
    ["eye outer"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    mouth: THREE.MeshStandardMaterial;
    shoes: THREE.MeshStandardMaterial;
    pants: THREE.MeshStandardMaterial;
    shirt: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Waving";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;}

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/Me 2.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
  actions?.Waving?.play();});
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="root">
          <skinnedMesh
            name="Beard"
            geometry={nodes.Beard.geometry}
            material={materials.hair}
            skeleton={nodes.Beard.skeleton}
          />
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.skin}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials["shoes lace"]}
            skeleton={nodes.Cube.skeleton}
          />
          <skinnedMesh
            name="Eye_outer"
            geometry={nodes.Eye_outer.geometry}
            material={materials["eye white"]}
            skeleton={nodes.Eye_outer.skeleton}
          />
          <skinnedMesh
            name="Eye_pupil"
            geometry={nodes.Eye_pupil.geometry}
            material={materials["eye outer"]}
            skeleton={nodes.Eye_pupil.skeleton}
          />
          <skinnedMesh
            name="Eye_pupil_Inner"
            geometry={nodes.Eye_pupil_Inner.geometry}
            material={materials.Material}
            skeleton={nodes.Eye_pupil_Inner.skeleton}
          />
          <skinnedMesh
            name="Eyebrow"
            geometry={nodes.Eyebrow.geometry}
            material={materials.hair}
            skeleton={nodes.Eyebrow.skeleton}
          />
          <skinnedMesh
            name="Lower_Lessa"
            geometry={nodes.Lower_Lessa.geometry}
            material={materials.mouth}
            skeleton={nodes.Lower_Lessa.skeleton}
          />
          <skinnedMesh
            name="Lower_Teeth"
            geometry={nodes.Lower_Teeth.geometry}
            material={materials["eye white"]}
            skeleton={nodes.Lower_Teeth.skeleton}
          />
          <skinnedMesh
            name="Mouth"
            geometry={nodes.Mouth.geometry}
            material={materials.shoes}
            skeleton={nodes.Mouth.skeleton}
          />
          <skinnedMesh
            name="pants"
            geometry={nodes.pants.geometry}
            material={materials.pants}
            skeleton={nodes.pants.skeleton}
          />
          <skinnedMesh
            name="shirt"
            geometry={nodes.shirt.geometry}
            material={materials.shirt}
            skeleton={nodes.shirt.skeleton}
          />
          <skinnedMesh
            name="Shoes"
            geometry={nodes.Shoes.geometry}
            material={materials.shoes}
            skeleton={nodes.Shoes.skeleton}
          />
          <skinnedMesh
            name="Tongue"
            geometry={nodes.Tongue.geometry}
            material={materials.mouth}
            skeleton={nodes.Tongue.skeleton}
          />
          <skinnedMesh
            name="Upper_Lashes"
            geometry={nodes.Upper_Lashes.geometry}
            material={materials.hair}
            skeleton={nodes.Upper_Lashes.skeleton}
          />
          <skinnedMesh
            name="Upper_Lessa"
            geometry={nodes.Upper_Lessa.geometry}
            material={materials.mouth}
            skeleton={nodes.Upper_Lessa.skeleton}
          />
          <skinnedMesh
            name="Upper_Teeth"
            geometry={nodes.Upper_Teeth.geometry}
            material={materials["eye white"]}
            skeleton={nodes.Upper_Teeth.skeleton}
          />
          <primitive object={nodes.rootx} />
          <primitive object={nodes.c_eye_targetx} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Me 2.glb");