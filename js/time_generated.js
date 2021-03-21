var page_generation_date = new Date();
var interval = 10;

function prettyTimeDifference(difference) {
	var radixes = [1000, 60, 60, 24];
	var names = ["ms", "s", "min", "h", "days"];
	var index = 0;
	while (index < radixes.length && difference >= radixes[index]) {
		difference = Math.floor(difference / radixes[index]);
		++index;
	}
	return difference.toString() + " " + names[index]
}

function nextUpdateInterval(difference) {
	var maximum_values = [1000, 1000 * 60, 1000 * 60 * 60, 1000 * 60 * 60 * 24];
	var index = maximum_values.findIndex((x) => (difference <= x))
	if (index == 0) {
		return interval
	} else if (index == -1) {
		index = maximum_values.length
	}
	return maximum_values[index - 1]
}

function updateTimeDifference(element) {
	var difference = new Date() - page_generation_date
	element.innerHTML = prettyTimeDifference(difference) + " ago";
	setTimeout(updateTimeDifference, nextUpdateInterval(difference), element)
}

updateTimeDifference(document.getElementById("time_difference"));
document.getElementById("page_generation").setAttribute("title", "Page generated at " + page_generation_date.toLocaleString());
