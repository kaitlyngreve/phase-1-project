const baseUrl = "https://www.boredapi.com/api/activity"

//fetch request
function fetchActivities() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(activityObj => renderAllActivities(activityObj))
}



//callback functions

function renderAllActivities(activityObj) {
    const actContainer = document.querySelector('#activity-results')
    activityObj.forEach(actKey => {
    const actTitle = document.createElement('p')
    actTitle.textContent = actKey.activity
    console.log(actTitle)
    })
}

fetchActivities()