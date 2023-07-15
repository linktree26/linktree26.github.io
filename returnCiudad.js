

// const position = navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onError, opciones);
// console.log(position);



document.addEventListener("DOMContentLoaded", () => {
    navigator.geolocation.getCurrentPosition(onLocation,onErrLocation);
});


const onLocation = (location) =>{
    console.log(location)
};

const onErrLocation = (err) =>{

};