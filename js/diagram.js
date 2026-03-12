// import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

// const scene = new THREE.Scene()

// const camera = new THREE.OrthographicCamera(
//     -window.innerWidth/2,
//     window.innerWidth/2,
//     250,
//     -250,
//     0.1,
//     1000
// )

// camera.position.z = 10

// const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true})
// renderer.setSize(window.innerWidth,500)

// document.getElementById("diagram").appendChild(renderer.domElement)

// function createLine(x1,x2,y){

//     const points = [
//         new THREE.Vector3(x1,y,0),
//         new THREE.Vector3(x2,y,0)
//     ]

//     const geometry = new THREE.BufferGeometry().setFromPoints(points)
//     const material = new THREE.LineBasicMaterial({color:0xffffff})
//     const line = new THREE.Line(geometry,material)

//     scene.add(line)

// }

// createLine(-200,200,200)
// createLine(-200,200,140)
// createLine(-200,200,80)
// createLine(-200,200,20)
// createLine(-200,200,-40)
// createLine(-200,200,-100)

// //particles
// const particles = []

// function createParticle(yStart){

//     const geometry = new THREE.CircleGeometry(3,12)
//     const material = new THREE.MeshBasicMaterial({color:0xffffff})
//     const particle = new THREE.Mesh(geometry,material)

//    particle.position.set(-200,yStart,0)
//     scene.add(particle)
//     particles.push(particle)

// }

// for(let i=0;i<8;i++){
//     createParticle(200 - i*50)
// }


// //performer
// const performerGeom = new THREE.CircleGeometry(8,20)
// const performerMat = new THREE.MeshBasicMaterial({color:0x00ffff})
// const performer = new THREE.Mesh(performerGeom,performerMat)

// performer.position.set(-120,200,0)
// scene.add(performer)

// window.addEventListener("mousemove",e=>{

// const x = (e.clientX/window.innerWidth)*200 -100

// performer.position.x = x

// })

// function animate(){
    
//     requestAnimationFrame(animate)
//     renderer.render(scene,camera)
//     particles.forEach(p=>{

//     p.position.x += 0.4

//     if(p.position.x > 200){
//         p.position.x = -200
//     }

//     })
// }

// animate()