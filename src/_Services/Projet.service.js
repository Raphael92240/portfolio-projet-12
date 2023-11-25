import listeprojet from '@/Assets/Api/projetgallery.json';


let getAllProjet = () => {
    return listeprojet
}

let getProjet = async (id) => {
    console.log(id)
    const projet = await listeprojet.find(projet => projet.id === id)
    console.log(projet)
    return projet
}


export const ProjetService = {
    getAllProjet, getProjet
}

export default ProjetService