

//Print this in console as well.

console.log(`/*
* 
* Oh hello there, Mr. Hacker !! , so you want to see some code? 
* Sure thing,
* Drop an email at dev@sarthakj.me
* 
* 
*/
`);


let lastWindowWidth = document.documentElement.clientWidth;
const scrollAndResizeHandler = (e) => {
  if ((lastWindowWidth >= 560 && document.documentElement.clientWidth < 560)
    || (lastWindowWidth < 560 && document.documentElement.clientWidth >= 560)) {
    document.getElementsByClassName('nav-icon')[0].classList.remove('open');
    document.getElementById('navbar').classList.remove('shown');
    document.getElementById('navbar2').classList.add('shown');
  }
  if (document.documentElement.clientWidth < 560) {
    document.querySelectorAll('nav ul li' , 'nav2 ul li').forEach(e => (e.classList.remove('selected')));
    return;
  }
  if (document.body.scrollTop > window.innerHeight * 0.95 || document.documentElement.scrollTop > window.innerHeight * 0.95) {
    document.getElementById('navbar').classList.add('shown');
    document.getElementById('navbar2').classList.remove('shown');
  }
  else {
    document.getElementById('navbar').classList.remove('shown');
    document.getElementById('navbar2').classList.add('shown');
  }
  setSelectedNavLink();
  lastWindowWidth = document.documentElement.clientWidth;
}

const setSelectedNavLink = () => {
  let sections = ['community', 'Extra', 'projects', 'education', 'experience', 'introduction'];
  let sectionScrolls = sections.map(v => ({
    name: v,
    visible: document.getElementById(v).offsetTop <= (document.documentElement.scrollTop + 0.34 * document.documentElement.clientHeight)
  }));
  sectionScrolls.sort((a, b) => b.visible - a.visible);
  //  console.log(JSON.stringify(sectionScrolls));
  document.querySelectorAll('nav ul li' , 'nav2 ul li').forEach(e => (e.classList.remove('selected')));
  document.getElementById(`${sectionScrolls[0].name}Link`).classList.add('selected');
}

document.addEventListener('scroll', scrollAndResizeHandler);
window.addEventListener('resize', scrollAndResizeHandler);

document.getElementsByClassName('nav-icon')[0].addEventListener('click', e => {
  document.getElementsByClassName('nav-icon')[0].classList.toggle('open');
  document.getElementById('navbar').classList.toggle('shown');
  document.getElementById('navbar2').classList.toggle('shown');
});

document.querySelectorAll('nav ul li' , 'nav2 ul li').forEach(el => 
  el.addEventListener('click', function(e){
  if(document.documentElement.clientWidth < 560) {
    document.getElementsByClassName('nav-icon')[0].classList.remove('open');
    document.getElementById('navbar').classList.remove('shown');
    document.getElementById('navbar2').classList.remove('shown');
  }
}));

//document.getElementById('age').innerHTML = (new Date(new Date() - new Date('1993-12-08')).getFullYear() - 1970);


$(document).ready(function() {
  setInterval ('cursorAnimation()', 600);
})
function cursorAnimation() {
  $('#logo__cursor').animate({
      opacity: 0
  }, 'fast', 'swing').animate({
      opacity: 1
  }, 'fast', 'swing');
}





$(document).ready(function() {
	
	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[hreff^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');
	var messageCopy = 'Click to copy email address';
	var messageSuccess = 'Email address copied';
	
	mailto.append('<span class="mailto-message"></span>');
	$('.mailto-message').append(messageCopy);
	
  // Disable default action (opening your email client.)
  
	$('a[hreff^=mailto]').click(function() {
		return false; 
	})
  
  

	// On click, get href and remove 'mailto:'
	// Store email address in a variable.
	mailto.click(function() {
		var href = $(this).attr('hreff');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-message').empty().append(messageSuccess);
		setTimeout(function() {
			$('.mailto-message').empty().append(messageCopy);}, 2000); 
	});
	
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}


function ExpandShrink() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = " Read less"; 
    moreText.style.display = "inline";
  }
}





function newRedirect() {
  if (window.location.href == 'https://www.sarthakj.me/github') {
    window.location.href = "https://github.com/sarthak-1998";
  }
}