function camara(){
    // alert('cooo')
   navigator.mediaDevices.getUserMedia({video:true}).then((Stream) =>{
       console.log(Stream)
   });
}