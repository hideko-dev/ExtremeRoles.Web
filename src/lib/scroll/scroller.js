export function handleScroll(id) {
    const element = document.getElementById(id)
    element.scrollIntoView({behavior: 'smooth'})
}