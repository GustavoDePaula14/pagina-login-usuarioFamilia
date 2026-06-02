const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const token = urlParams.get('token')
console.log(token)
const juntarUsuarioFamilia = async function(token) {
    const url = `https://tcc-back-q3kw.onrender.com/v1/familysync/usuario-familia/emailEnviado?token=${token}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
juntarUsuarioFamilia(token)