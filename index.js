const colorSchemeEl = document.getElementById('color-scheme')

function renderJsonData(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const colorArray = data.colors
        for (let colorUnit of colorArray) {
            colorSchemeEl.innerHTML += `
                    <div class="column">
                        <div id="${colorUnit.hex.value}" class="color-box"></div>
                        <p id="hex-value">${colorUnit.hex.value}</p>
                    </div>
                    `
            document.getElementById(`${colorUnit.hex.value}`).style.backgroundColor = `${colorUnit.hex.value}`
        }
    })
    }

document.getElementById('request-btn').addEventListener('click', () => {
    let url = "https://www.thecolorapi.com/scheme?"
    const hexColor = document.getElementById('color').value
    const color = hexColor.split('#').join('') //API query string # not required
    const colorMode = document.getElementById('color-mode').value
    url += `hex=${color}&mode=${colorMode}`
    colorSchemeEl.innerHTML = ""
    renderJsonData(url)
                
})

