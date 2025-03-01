// async function buscarDadosGithub(user) {
//     try {
//         const response = await fetch(`http://api.github.com/users/${user}`)
//         const body = await response.json()

//         console.log(body)
//     } catch(error) {
//         console.log(error)
//     }
// }
// buscarDadosGithub("AveiaPodre")


// const user = ""
// fetch(`http://api.github.com/users/${user}`)
//     .then(response => {
//         return response.json()
//     })
//     .then(body => {
//         console.log(body)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("fim")
//     })


const user = "raffaelfernandes "
const buscarDadosGithub = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`http://api.github.com/users/${user}`)
                .then(response => {
                    return response.json()
                })
                .then(body => {
                    console.log(body)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    console.log("fim")
                })
        }, 1000)
    })
}

buscarDadosGithub(user)