const inputTitle = document.getElementById('activity-title')
const inputDescription = document.getElementById('activity-description')
const inputImage = document.getElementById('activity-image')
const buttonAddActivity = document.getElementById('button')

const boxActivities = document.querySelector('.box-collection')

class Activity {
    constructor({id, title, description, urlImage}) {
        this.id = id
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
    }
}


class Repository {
    constructor() {
        this.activities = []
        this.id = 0;
    }

    getAllActivities = () => {
        return this.activities
    }

    createActivity = (objActivity) => {
        this.id++
        const activity = new Activity({id: this.id, ...objActivity});
        this.activities.push(activity)
    }

    deleteActivity = (id) => {
        this.activities = this.activities.filter(activity => activity.id !== id)
    }
}

const repositoryActivities = new Repository()



buttonAddActivity.addEventListener('click', (event) => {
    event.preventDefault()
    
    const objActivity = {
        title: inputTitle.value,
        description: inputDescription.value,
        urlImage: inputImage.value
    }

    let isCompleted = objActivity.title && objActivity.description && objActivity.urlImage

    if( isCompleted ) {
        repositoryActivities.createActivity(objActivity)
    } else (
        alert('Completa todos los campos correctamente por favor.')
    )

    if(repositoryActivities.activities.length > 0) {
        boxActivities.innerHTML = ''
        showAllActivities()
    }

    inputTitle.value = ''
    inputDescription.value = ''
    inputImage.value = ''
})

function showAllActivities() {
    let allActivities = repositoryActivities.getAllActivities()
    const activitiesList = allActivities.map(activity => createActivityCard(activity))
    
    activitiesList.forEach((activity) => {
        boxActivities.appendChild(activity)
    })
}


function createActivityCard(objActivity) {
    const {id, title, description, urlImage} = objActivity

    const card = document.createElement('div')
    card.className = 'card'
    card.id = id
    const imgElement = document.createElement('img')
    imgElement.className = 'card-img'
    imgElement.src = urlImage
    const titleElement = document.createElement('h3')
    titleElement.className = 'card-title'
    titleElement.innerText = title
    const descriptionElement = document.createElement('p')
    descriptionElement.className = 'card-description'
    descriptionElement.innerText = description
    const deleteButton = createDeleteButton()
    deleteButton.addEventListener('click', () => {
        repositoryActivities.deleteActivity(id)
        boxActivities.innerHTML = ''
        showAllActivities()
    })

    card.appendChild(imgElement)
    card.appendChild(titleElement)
    card.appendChild(descriptionElement)
    card.appendChild(deleteButton)
    
    return card
}

const createDeleteButton = () => {
    const btnCircle = document.createElement('div')
    btnCircle.className = 'delete-button-container'
    const icon = document.createElement('img')
    icon.src = '../public/img/deleteIcon.svg'
    icon.className = 'delete-icon'
    
    btnCircle.appendChild(icon)

    return btnCircle
}

module.exports = {
    Activity,
    Repository
}