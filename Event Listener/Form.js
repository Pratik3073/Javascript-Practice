console.log("it works");

const wes = document.querySelector('.wes');
wes.addEventListener('click', function (e) {
  e.preventDefault();
  const shouldchangethepage = confirm('this website is malicious');
  if (shouldchangethepage) {
    window.location = e.currentTarget.href;
  }
});


const signupform = document.querySelector('[name="signup"]');

signupform.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e);

  
  console.log(e.currentTarget.elements.name.value);
});
