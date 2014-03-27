window.addEventListener('load', function () {
	"use strict";

	init();
});

function init() {
	"use strict";

	OAuth.initialize('YOUR_KEY_HERE');

	var facebookButton = document.getElementById('load-facebook');
	facebookButton.addEventListener('click', function () {
		OAuth.popup('facebook', function(err, result) {
			showError(err);
			processFacebookResult(result);
		});
	});

    var githubButton = document.getElementById('load-github');
    githubButton.addEventListener('click', function () {
        OAuth.popup('github', function(err, result) {
            showError(err);
            processGithubResult(result);
        });
    });

	var sdButton = document.getElementById('load-7d');
	sdButton.addEventListener('click', function () {
		OAuth.popup('7digital', function(err, result) {
			showError(err);
			process7dResult(result);
		});
	});

	var dropboxButton = document.getElementById('load-dropbox');
	dropboxButton.addEventListener('click', function () {
		OAuth.popup('dropbox', function(err, result) {
			showError(err);
			processDropboxResult(result);
		});
	});

	var linkedinButton = document.getElementById('load-linkedin');
	linkedinButton.addEventListener('click', function () {
		OAuth.popup('linkedin', function(err, result) {
			showError(err);
			processLinkedinResult(result);
		});
	});
}

function showError(err) {
	"use strict";
	if (!!err) {
		for (var key in err.body) {
			alert(key);
		}
	}
}

function processFacebookResult(result) {
	"use strict";

	result.get('/me').done(function(data) {
		processFacebookData(data);
	});
}

function processFacebookData(data) {
	"use strict";

	var facebookInfo = document.getElementById('facebook-info');
	facebookInfo.innerText = data.name + ' - ' + data.email;
}

function processGithubResult(result) {
    "use strict";

    result.get('/user').done(function(data) {
        processGithubData(data);
    });
}

function processGithubData(data) {
    "use strict";

    var githubInfo = document.getElementById('github-info');
    githubInfo.innerText = data.name + ' - ' + data.email;
}

function process7dResult(result) {
	"use strict";

	console.log(result);

//	result.get('/me').done(function(data) {
//		processFacebookData(data);
//	});
}

function processDropboxResult(result) {
	"use strict";

	console.log(result);

//	result.get('/me').done(function(data) {
//		processFacebookData(data);
//	});
}

function processLinkedinResult(result) {
	"use strict";

	console.log(result);

	result.get('/v1/people/~').done(function(data) {
		processLinkedInData(data);
	});

}

function processLinkedInData(data) {
	"use strict";

	var linkedinInfo = document.getElementById('linkedin-info');
	var firstName = data.evaluate('/person/first-name', data, null, XPathResult.ANY_TYPE, null).iterateNext().textContent;
	var lastName = data.evaluate('/person/last-name', data, null, XPathResult.ANY_TYPE, null).iterateNext().textContent;
	linkedinInfo.innerText = firstName + ' ' + lastName;
	linkedinInfo.textContent = firstName + ' ' + lastName;

}