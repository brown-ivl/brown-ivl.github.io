function searchProjects() {
	// Declare variables
	var input, searchQuery, projects
	input = document.getElementById("myInput")
	searchQuery = input.value.toLowerCase()
	projects = document.getElementsByClassName("research-item")

	console.log(searchQuery)

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < projects.length; i++) {
		title = document.getElementsByClassName("research-title")[i].innerText
		author = document.getElementsByClassName("research-author")[i].innerText
		journal = document.getElementsByClassName("research-journal")[i].innerText
		year = document.getElementsByClassName("research-year")[i].innerText

		projectInfo = title + " " + author + " " + journal + " " + year
		projectInfo = projectInfo.toLowerCase()

		keepPaper = projectInfo.includes(searchQuery)

		if (keepPaper) {
			projects[i].style.display = "flex"
		} else {
			projects[i].style.display = "none"
		}
	}
}
