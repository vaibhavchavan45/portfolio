var typed = new Typed('.auto-type', {
    strings: ["Web developer","Front-end developer","Mern stack developer"],
    typeSpeed: 150,
    backspeed:150,
    loop:true
  });

  var typed = new Typed('.auto-type2', {
    strings: ["Web developer","Front-end developer","Mern stack developer"],
    typeSpeed: 150,
    backspeed:150,
    loop:true
  });

  $(document).ready(function(){
      $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
      });
      //toggle menu/navbar script
      $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
      })
  });

  function download(){
    var pdfUrl='Resume/Vaibhav Chavan new.pdf';

    var link=document.createElement('a');

    link.href=pdfUrl;

    link.download='Vaibhav Chavan new.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }


  function composeEmail() {
    // Email address to send the email to
    var emailAddress = "chavanvaibhav54321@gmail.com";
    // Subject of the email
    var subject = "Job oportunity";

    // Construct the mailto URL
    var mailtoUrl = "mailto:" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject);

    // Open the default email client with the pre-populated email address and subject
    window.location.href = mailtoUrl;
}