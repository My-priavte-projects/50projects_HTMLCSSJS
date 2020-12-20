const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    //add an event listner
    panel.addEventListener('click', () => {
        //remove all active classes 
        removeActveClasses()
        //then put active class on the one we clicked
        panel.classList.add('active')
    })
})

function removeActveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}