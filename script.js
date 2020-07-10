
function showmenu() {
	document.getElementById('header').classList.toggle('close');
}


function showsignup() {
	document.getElementById('login-signup').classList.add('shows');
	document.getElementById('triangles').style.display = "block";
	document.getElementById('child1').classList.remove('child1');
	document.getElementById('triangle').style.display = "none";
	document.getElementById('login').style.display = "none";
	document.getElementById('signup').style.display = "block";
}



function showimg(imgindex)
{
	var big = document.getElementsByClassName('big-image');
	var small = document.getElementsByClassName('small-image');
	for (var i = 0; i < big.length; i++) {
		big[i].style.display = "none";
	}
	big[imgindex].style.display = "block";

}



function showbuy() {
	document.getElementById('script-buy').style.display = "block";
}



function closebuy()
 {
	document.getElementById('script-buy').style.display = "none";	
}