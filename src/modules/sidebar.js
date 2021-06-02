const sidebar = (
    ()=>{
        const bar = document.createElement("div")
        bar.innerHTML=`
            <div>
                <div>
                    <img src="#" />
                    <h3>Home</h3>
                </div>
                <div>
                    <img src="#" />
                    <h3>Inbox</h3>
                </div>
                <div>
                    <img src="#" />
                    <h3>Today</h3>
                </div>
                <div>
                    <img src="#" />
                    <h3>Project</h3>
                </div>
            </div>
        `

        return {bar}
    }
)()

export default sidebar
