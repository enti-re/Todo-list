import navbar from './modules/nav'
import "../src/style.css"
import sidebar from './modules/sidebar'
import sidebarFunction from './modules/sidebarFunction'


const content = document.querySelector("#content")

content.appendChild(navbar.nav)
content.appendChild(sidebar.bar)
sidebarFunction.addProject()

// const approve = document.querySelector(".project-approve")
// const discard = document.querySelector(".project-discard")

