const form = (document.getElementById('form').onsubmit = function() {
	fetch('http://localhost:8282/product/adddb', {
		
	}).then((data) => console.log(data));
});
