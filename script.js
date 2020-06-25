//start with a noSubmit function that prevents the default of refreshing the page so if you hit the ENTER key, it won't refresh.
function noSubmit(event){
  event.preventDefault();
}

//the rest of the code is inside this function. 
//AKA, if you hit sumbit, it does ALL the things
submit=$("#submit");
//noSubmit for the submit button
submit.click(function(sub){
sub.preventDefault();

//Collecting variables from the DOM
var fname=$("#fname").val();
var lname=$("#lname").val();
var emailSubject = $("#email-subject");
var emailMessage = $("#email-message");
var hidden = $("#hidden");
var emailPopUp = $("#email-pop-up");

//If you want, you can also interpolate the name of the topic or have them input it in the form!
var subject="Demanding change regarding ____";

//This will include everything you want the body of the email to include
var message = `My name is ${fname} ${lname} and I am demanding change.`;

//this looks really scary but I'll break it down
var emailLink=`mailto:abc@example.com?subject=${subject}&body=${message}`;

//mailto:abc.example.com
// change the email to whoever you want the email to be sent to.

//?
//this is an indicator that you are finished saying the email

//subject=${subject}
//this interpolates the varibale subject. You can also put a string here
//EX:
//subject=This is the subject

//&
//this is another indicator that you are finished with the subject line

//body=${message}
//this interpolates the varibale message. You can also put a string here
//EX:
//body=This is the message I want to send

//this takes the opacity property of the hidden variable style and changes it to 100% when the function is run.
//AKA the hidden div is invisible right now, so this will make it visible. If you made opacity O.5, it would make it look like a ghost div.
hidden.css("opacity", 1);

//this will push the subject variable to that empty div called email-subject in the HTML
emailSubject.text(subject);

//this will push the message variable to that empty div called email-message in the HTML
emailMessage.text(message);

//this puts that weird long link into the link you'll see into the href attribute of the email-pop-up <a> tag
emailPopUp.attr("href", emailLink);

//this is just to check that your code is working!
console.log(emailMessage);

});
