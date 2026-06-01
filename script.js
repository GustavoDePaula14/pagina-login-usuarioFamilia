const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const to_email = urlParams.get('email'); // Retorna "123"
const id = urlParams.get('id_familia'); // Retorna "eletronicos"

const juntarUsuarioFamilia = async function(to_email, id) {
    const url = `https://tcc-back-q3kw.onrender.com/v1/familysync/usuario-familia/emailEnviado?email=${to_email}&id_familia=${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
await juntarUsuarioFamilia(to_email, id)