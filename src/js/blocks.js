

export function redSquare() {
    let rs = document.createElement("div")
    rs.classList.add("red-square")
    rs.setAttribute("draggable", "true")
    return rs
}

export function button(text = "press", action = () => (console.log("Default Action"))) {
    let btn = document.createElement("button")
    btn.classList.add("btn","unselectable")
    btn.appendChild(document.createTextNode(text))
    btn.addEventListener("click", () => action())
    
    return btn
}


export function comment(text = "press") {
    let comment = document.createElement("div")
    comment.appendChild(document.createTextNode(text))
    comment.classList.add("unselectable")
    return comment
}

export function photo(url) {
    let pp = document.createElement('img')
    pp.setAttribute('src', url)
    return (pp)
}

export function cont(kids = []) {
    let div = document.createElement("div")
    kids.forEach(c => div.appendChild(c))
    return div
}

export function loading() {
    let loading = document.createElement("div")
    loading.classList.add("loading")
    return loading
}