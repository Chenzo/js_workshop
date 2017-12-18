//using polyfill promise from https://github.com/lahmatiy/es6-promise-polyfill


function aPromise() {
	return new Promise( resolve => {
		setTimeout( () => {
		  outputText('2 seconds passed');
		  resolve('i get passed to the then');
		}, 2000);
	  });
  }
  
  function outputText(theT) {
	  document.getElementById('output').value = document.getElementById('output').value + theT +"\n";
  }
  
  function runMeFirst() {
	  outputText("run me first function fired");
	aPromise().then( (value) => {
	  outputText("then this: " + value);
	});
	outputText('I run even though were waiting on aPromise()');
  }


var callback = function(){
	runMeFirst();
};

if (document.readyState === "complete" || 	(document.readyState !== "loading" && !document.documentElement.doScroll)) {
	callback();
} else {
	document.addEventListener("DOMContentLoaded", callback);
}