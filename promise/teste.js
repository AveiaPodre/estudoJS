const userName = 'AveiaPodre'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
