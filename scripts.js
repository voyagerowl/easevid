var convertBtn = document.querySelector('.btn-primary');
var URLinput = document.querySelector('.form-control');

convertBtn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);
	sendURL(URLinput.value);
});

   function required(URLinput) 
   {
     if (URLinput.value.length == 0)
      { 
         alert("Please enter a video url...");  	
      }  	
      return true; 
    } 
function sendURL(URL){
window.location.href = `http://localhost:4000/download?URL=${URL}`;
}