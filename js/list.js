let txt = document.querySelector("[type='text']")

let btn = document.querySelector('[type="button"]')

let lists = document.querySelector(".lists")

let rem_all = document.querySelector(".remove-all")

let achieve_sound = document.querySelector(".achieve-sound")

btn.addEventListener("click" , () => {
    if(txt.value !== "") {
        let list = document.createElement("li")
        list.innerHTML = txt.value
        list.classList.add("list")

        let span =  document.createElement("span")
        span.innerHTML = "&#x2715;"
        span.className = "del"
        list.appendChild(span)

        lists.appendChild(list)

        achievedDel(list)

        removeAll(list)
        
        storeData()
    }
    
    txt.value = "";
})



function addStoredToPage() {
    lists.innerHTML = localStorage.getItem("data");
}

addStoredToPage();


function storeData() {
    localStorage.setItem("data" , lists.innerHTML)
}

function achievedDel(task) {
    task.addEventListener("click", (e) => {
        if(e.target.classList.contains("list")) {
            e.target.classList.toggle("achieved")

            if(e.target.classList.contains("achieved")) {
                achieve_sound.play();
            }

            storeData()
        } else if(e.target.classList.contains("del")) {
            e.target.parentElement.remove()
            storeData();
        }
    })
}

let allLists = document.querySelectorAll("ul li")



function removeAll(taskRem) {
    rem_all.addEventListener("click" , () => {
        taskRem.remove();
        localStorage.clear();
    })
}

allLists.forEach(list => {
    achievedDel(list)
    removeAll(list)
})

let darkLight = document.querySelector(".dark-light")

let darkChange = document.querySelector(".dark-light .bullet")

let dark_span = document.querySelector(".dark-light .dark-span")

darkLight.addEventListener("click" , () => {
    darkLight.classList.toggle("active")

    if(darkLight.classList.contains("active")) {
        addActive();
    } else {
        removeActive();
    }

    localStorage.setItem("dark-light-mode" , darkLight.classList.item(1));
})

if(darkLight.classList.contains("dark-light")) {
    darkLight.classList.add(localStorage.getItem("dark-light-mode"))
    darkLight.classList.remove("null");
    
    if(darkLight.classList.contains(localStorage.getItem("dark-light-mode"))) {
        addActive();
    }
}

function addActive() {
    darkChange.classList.add("active")
    dark_span.classList.add("active")
    document.body.classList.add("active")
}

function removeActive() {
    darkChange.classList.remove("active")
    dark_span.classList.remove("active")
    document.body.classList.remove("active")
}


//Gooood Jooob