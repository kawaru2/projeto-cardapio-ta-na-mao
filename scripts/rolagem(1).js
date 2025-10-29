 const escolhas = document.querySelectorAll(".escolha")
    escolhas.forEach(tags => {
    tags.addEventListener("click", (e) => {
        e.preventDefault()
        
        const listWord = tags.textContent.toLocaleLowerCase().split(" ")

        if(listWord.join('') === 'voltarproinício') {
            const local = document.querySelector('.info')
            local.scrollIntoView({behavior: 'smooth'})
            return;
        }
        
        if (listWord.length > 1) {
            const palavra = listWord[1].charAt(0).toUpperCase() + listWord[1].slice(1).toLowerCase()
            const novaPalavra = document.querySelector(`#${listWord[0] + palavra}`)
            novaPalavra.scrollIntoView({behavior: "smooth"})
            return;
        }

        const n = tags.textContent.toLowerCase()
        const a = document.querySelector(`#${n}`)

        // if (novaPalavra === 'voltarproinicio'){}

        a.scrollIntoView({behavior: "smooth"})

    })
})