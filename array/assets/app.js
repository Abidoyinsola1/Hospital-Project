const navigation = [
    { menu: "Home", link: "http://home.com" },
    { menu: "About", link: "http://about.com" },
    { menu: "Blog", link: "http://blog.com" },
    { menu: "Contact", link: "http://contact.com" }
]


let navbar = navigation.map((nav) => {

    const list = document.createElement('li')
    const anchorTag = document.createElement('a')
    const ulist = document.querySelector('ul')

    ulist.appendChild(list)
    list.appendChild(anchorTag)
    anchorTag.textContent = nav.menu
    anchorTag.setAttribute('href', nav.link)
    anchorTag.setAttribute('target', '_blank')
})
