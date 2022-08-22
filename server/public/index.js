


const form = document.getElementById("search_form")
const output = document.getElementById("output")

form.addEventListener('keyup', event => {
    event.preventDefault()
    const search_item = form.search_box.value
    if(search_item === "" || search_item === " ") return 
    else {
        output.innerHTML = ""
        const title = document.createElement('h2')
        title.append("Results")
        output.appendChild(title)
    
        fetch("http://127.0.0.1:2022/api/search/" + search_item)
        .then(res => res.json())
        .then(data => {
            output.style.display = "flex"
            console.log(data.msg)
            if(data.data.length <= 0){
                const new_object = document.createElement('p')
                new_object.append("Nothing Found")
                output.appendChild(new_object)
            }
            else {
                data.data.forEach(item => {
                    const new_element = document.createElement('p')
                    new_element.append(item.email)
                    output.appendChild(new_element)
                })
            }
        })
        .catch(error => console.log(error.message))
    }
})

form.addEventListener('submit', event => {
    event.preventDefault()
    const search_item = form.search_box.value

    output.innerHTML = ""
    const title = document.createElement('h2')
    title.append("Results")
    output.appendChild(title)

    fetch("http://127.0.0.1:2022/api/search/" + search_item)
    .then(res => res.json())
    .then(data => {
        output.style.display = "flex"
        console.log(data.msg)
        if(data.data.length <= 0){
            const new_object = document.createElement('p')
            new_object.append("Nothing Found")
            output.appendChild(new_object)
        }
        else {
            data.data.forEach(item => {
                const new_element = document.createElement('p')
                new_element.append(item.email)
                output.appendChild(new_element)
            })
        }
    })
    .catch(error => console.log(error.message))
})