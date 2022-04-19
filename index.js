const baseUrl = "https://www.boredapi.com/api/activity"

function fetchActivities() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(activityObj => console.log(activityObj))
}

fetchActivities()