import navbar from './modules/nav'
import "../src/style.css"
import sidebar from './modules/sidebar'


const content = document.querySelector("#content")
console.log(content)
content.appendChild(sidebar.bar)
