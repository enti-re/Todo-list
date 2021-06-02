import logo from './images/Logo.png'

const navbar = (
    ()=>{
        
        let curr_year = new Date().getFullYear()
        const nav = document.createElement("nav")
        nav.innerHTML = 
        `<div class="nav">
            <div class="website-logo">
                <img class="logo" src="${logo}" />
                <h1>Todo App</h1>
            </div>
            <p class="copyright">Copyright © ${curr_year} <a target="_blank" href="https://github.com/enti-re/">enti-re</a></p>
        </div>
        `
        return {nav}
    }
)()

export default navbar