const baseUrl = "https://www.boredapi.com/api/activity"

//fetch request
function fetchActivities() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(activityObj => renderActivity(activityObj))
}



//callback functions

function renderActivity(activityObj) {
    console.log(activityObj)
    // console.log(activityObj.activity)
    const actContainer = document.querySelector('#activity-results')
    const activityElement = document.createElement('h4')
    activityElement.textContent = activityObj.activity
    // console.log(activityElement)
    actContainer.append(activityElement)
}

fetchActivities()
