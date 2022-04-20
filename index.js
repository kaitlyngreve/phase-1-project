const baseUrl = "https://www.boredapi.com/api/activity"
let urlParamters = '';
const btn = document.getElementById('generator-button');
//fetch request
function fetchActivities() {
    fetch(baseUrl + urlParamters)
    .then(resp => resp.json())
    .then(activityObj => renderActivity(activityObj))
}


//callback functions

function renderActivity(activityObj) {
    // console.log(activityObj)
    // console.log(activityObj.activity)
    const actContainer = document.querySelector('#activity-results')
    const activityElement = document.createElement('h4')
    activityElement.textContent = activityObj.activity
    // console.log(activityElement)
    actContainer.append(activityElement)
    // btn.addEventListener('click', (e) => {handleClick(e, activityObj)})
}
//  function handleClick(e) {
//     //  console.log(handleClick)
//  }





// mouse over event

// btn.addEventListener('mouseover', function(e) {
//     e.target.style.backgroundColor = '#FFC300';
// })

// btn.addEventListener('mouseout', function(e) {
//     e.target.style.backgroundColor = 'tomato';
// })

// grab the button
const form = document.getElementById("activity-filter-form")

// add event listener to the button
form.addEventListener('submit', handleSubmitForm)


// write function for the handleSubmit
function handleSubmitForm(e) {
    e.preventDefault()
    // console.log(e.target.value)
    const radios = document.getElementsByClassName('radio')
    console.log(Array.from(radios))
    const filterActivity = Array.from(radios).find(btn => {
        if(btn.checked === true) {
            return btn.value
        } 
    }).value
    console.log(filterActivity.value)
    fetch(`http://www.boredapi.com/api/activity?type=${filterActivity}`)
    .then(resp => resp.json())
    .then(activityObj => renderActivity(activityObj))

}
// invoke function
fetchActivities()

