let startButton = document.querySelector("#startButton")
startButton.addEventListener('click',displayForm)

let closeButton = document.getElementById('close-button')
closeButton.addEventListener('click',hideForm)

let addTask = document.querySelector("#addTask")
addTask.addEventListener('click', displayTaskDetails)




function displayForm(){
    let form = document.getElementById('form-container')
    form.style.opacity = 1
}

function hideForm(){
    let form = document.getElementById('form-container')
    form.style.opacity = 0
}




class TaskDetails{

    constuctor(title,date,priority,note){
        this.title = title,
        this.date = date,
        this.priority = priority,
        this.note = note
    }

    Title(){
        let title = document.getElementById('title')
        this.title = title.value
        return this.title
    }

    Date(){
        let date = document.getElementById('date')
        this.date = date.value

        return this.date
    }

    Priority(){
        let priority = document.getElementById('priority')
        this.priority = priority.value

        return this.priority
    }

    Note(){
        let note = document.getElementById('notes')
        this.note = note.value

        return this.note
    }

}



let taskDOM = {

    taskDetails(taskTitle,taskDate,taskPriority,taskNote){
        
        let ongoingTask = document.getElementById('ongoing-tasks-card')
        let completedTask = document.getElementById('completed-tasks-card')

       let taskCard = document.createElement('div')
       taskCard.setAttribute('id','taskCard')

       let tasktitle = document.createElement('p')
       tasktitle.textContent = taskTitle
       tasktitle.setAttribute('id','task-title')


       let taskdate = document.createElement('p')
       taskdate.textContent = taskDate
       taskdate.setAttribute('id','task-date')


       let taskpriority = document.createElement('div')
       taskpriority.setAttribute('id','task-priority')
       taskpriority.style.width = '16px'
       taskpriority.style.height = '16px'
       taskpriority.style.borderRadius = '10px'
       taskpriority.style.marginTop = '-32px'
       taskpriority.style.marginLeft = '5px'
       
       taskpriority.id = taskPriority

       if(taskPriority == "high"){
             taskpriority.style.backgroundColor = 'green'
             
            
       }
       else if(taskPriority == "medium"){
            taskpriority.style.backgroundColor = 'yellow'
        }
        else if(taskPriority == "low"){
            taskpriority.style.backgroundColor = 'red'
        }
        else{
             taskpriority.style.backgroundColor = 'gray'
        }

        let tasknote = document.createElement('p')
        tasknote.textContent = taskNote
        tasknote.setAttribute('id','task-note')


        let clearButton = document.createElement('button')
        clearButton.textContent = 'Clear'
        clearButton.setAttribute('id','clear-button')
      


        clearButton.addEventListener('click', () => {
            ongoingTask.removeChild(taskCard)
        })

        let completedButton = document.createElement('button')
        completedButton.textContent = 'Completed'
        completedButton.setAttribute('id','completed-button')

        completedButton.addEventListener('click',() => {
            completedTask.append(taskCard)
        })


       
        
        taskCard.appendChild(tasktitle)
        taskCard.appendChild(taskpriority)
        taskCard.appendChild(taskdate)
       
        
        taskCard.appendChild(tasknote)
        taskCard.appendChild(clearButton)
        taskCard.appendChild(completedButton)

      
        ongoingTask.appendChild(taskCard)
    }
}

function displayTaskDetails(){

    let task = new TaskDetails()

    return taskDOM.taskDetails(task.Title(),task.Date(),task.Priority(),task.Note())

}



