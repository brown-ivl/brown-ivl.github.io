function searchProjects() {
	// Declare variables
	var input, searchQuery, projects
	input = document.getElementById("searchInput")
	searchQuery = input.value.toLowerCase()
	projects = document.getElementsByClassName("research-item")
	var numResults = 0

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < projects.length; i++) {
		title = document.getElementsByClassName("research-title")[i].innerText
		author = document.getElementsByClassName("research-authors")[i].innerText
		journal = document.getElementsByClassName("research-journal")[i].innerText
		year = document.getElementsByClassName("research-year")[i].innerText

		projectInfo = title + " " + author + " " + journal + " " + year
		projectInfo = projectInfo.toLowerCase()

		keepPaper = projectInfo.includes(searchQuery)

		if (keepPaper) {
			projects[i].style.display = "flex"
			numResults++
		} else {
			projects[i].style.display = "none"
		}
	}
	let numResultsDiv = document.getElementById("num-results")
	if (numResults == projects.length) {
		numResultsDiv.innerHTML = ""
	} else if (numResults == 1) {
		numResultsDiv.innerHTML = "1 result found"
	} else {
		numResultsDiv.innerHTML = numResults.toString() + " results found"
	}
}

// reroute old hashlink pages to new url
window.onload = function () {
	const hashLink = "/#/"
	const link = window.location.href
	if (link.includes(hashLink)) {
		const newLink = link.replace("/#/", "/")
		window.location.href = newLink
	}
}
