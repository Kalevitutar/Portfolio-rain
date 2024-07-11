jQuery( document ).ready(function($) {
 $("#btnSubmit").on("click", function(e){
    e.preventDefault();
    let formData = {};
        $("form :input").each(function(){
 let key = $(this)[0].name; // This is the jquery object of the input, do what you will
 let value = $(this)[0].value;
console.log(key, value)
if (key.length > 0) {
    formData[key] = value;
}
});
console.log(formData)
    }); 

 
});







