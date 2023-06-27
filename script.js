//your JS code here. If required.
function prom(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello, world!");
		},1000)
	})
}

function updateHtmlElement(elementId,text){
	const element = document.getElementById('output');
	if(element){
		element.textContent = text;
	}
}

const  output = "output"
prom().then((result) => {
	updateHtmlElement(output,result)
});
