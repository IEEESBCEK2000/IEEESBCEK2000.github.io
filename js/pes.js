var setVanta = ()=>{
if (window.VANTA) {
  window.VANTA.BIRDS({
  el: ".pes",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  colorMode: "lerp"
})
}else{
  window.VANTA.BIRDS({
  el: ".pes",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  colorMode: "lerp"
}
}
setVanta()
