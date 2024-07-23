// import { API } from "aws-amplify";


// jQuery( document ).ready(function($) {
//  $("#btnSubmit").on("click", function(e){
//     e.preventDefault();
//     let formData = {};
//         $("form :input").each(function(){
//  let key = $(this)[0].name; // This is the jquery object of the input, do what you will
//  let value = $(this)[0].value;
// console.log(key, value)
// if (key.length > 0) {
//     formData[key] = value;
// }
// });
// console.log(formData)
//     }); 
// });

console.log("what happened before the Big Bang?");
const handleSubmit = (event) => {
    console.log("Does even this run? If not...");
    console.log("this is the event ", event);
  event.preventDefault();
    let formDataj = {};
        $("form :input").each(function(){
 let key = $(this)[0].name; // This is the jquery object of the input, do what you will
 let value = $(this)[0].value;
console.log(key, value)
if (key.length > 0) {
    formDataj[key] = value;
}
});
console.log(formDataj)

//   const myForm = event.target;
//   console.log("this is myForm ", myForm);
//   const formData = new FormData(myForm);
//   console.log("formData: ", formData);

delete formDataj["form-name"];
console.log("formDataj ", formDataj);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => 
        // navigate("/thank-you/")
alert("thank you"))
    .catch((error) => alert(error));
};






