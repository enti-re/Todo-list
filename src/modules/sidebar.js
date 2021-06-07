import  inbox from './images/inbox.png'
import home from './images/home.png'
import calender from './images/calender.png'
import add from './images/add.png'


const sidebar = (
    ()=>{
        const bar = document.createElement("div")
        bar.classList.add("sidebar")
        
        bar.innerHTML=`
            <div class="bar-flex">
                <div class="quick-menu">
                    <div class="bar-item">
                        <img src="${home}" />
                        <h3>Home</h3>
                        </div>
                    <div class="bar-item">
                        <img src="${inbox}" />
                        <h3>Inbox</h3>
                    </div>
                    <div class="bar-item">
                        <img src="${calender}" />
                        <h3>Today</h3>
                    </div>
                    <div class="project">
                        <h2>Project</h2>
                        <div class="project-list">
                        </div>
                        <div class="add-project">
                            <h3>Add Project</h3>
                            <img class="add-project-btn" src="${add}" />
                        </div>
                        <div class="add-project-2">
                        <h3 class="hh">Enter project</h3>
                        <input class="project-input" type="text"/>
                        <div>
                        <button class="project-approve">Add</button>
                        <button class="project-discard">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        return {bar}
        
    }
)()

export default sidebar
