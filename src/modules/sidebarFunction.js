import cross from './images/cross.png'



const sidebarFunction = (

    ()=>{

        const arr=[]

        const addProjectToList = ()=>{
            const input = document.querySelector(".project-input")
            const val = input.value
            input.value = ""
            const projectContainer = document.querySelector(".project-list")
            projectContainer.innerHTML=""
            arr.push(val)

            arr.map((item)=>{
                createList(item)
            })
        }
        
        const createList = (item)=>{
            const listItem = document.createElement("div")
            const projectContainer = document.querySelector(".project-list")
            const projectListItem = document.createElement("div")
            projectListItem.classList.add("project-list-item")
            projectListItem.innerHTML = `<h3>${item}</h3>`
            const bin = document.createElement("img")
            bin.src = `${cross}`
            projectListItem.appendChild(bin)
            listItem.appendChild(projectListItem)
            projectContainer.appendChild(listItem)
            bin.addEventListener("click",()=>{
                projectContainer.removeChild(listItem)
                const index = arr.indexOf(item)
                arr.splice(index,1)
            })
        }

        const addProject = ()=>{
            const add1 = document.querySelector(".add-project")
            const add2 = document.querySelector(".add-project-2")
            add2.style.display = "none"
            const approve = document.querySelector(".project-approve")
            const discard = document.querySelector(".project-discard")
            
            add1.addEventListener("click",()=>{
                add2.style.display = "block"
                add1.style.display = "none"
            })
            
            approve.addEventListener("click",()=>{
                add1.style.display = "grid"
                add2.style.display = "none"
                addProjectToList()
            })
            
            discard.addEventListener("click",()=>{
                const input = document.querySelector(".project-input")
                input.value=""
                add1.style.display = "grid"
                add2.style.display = "none"
            })
        }
        return {addProject}
        
    }
    )()

export default sidebarFunction