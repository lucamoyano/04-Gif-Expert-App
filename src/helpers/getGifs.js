
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=SmvmfuDDF1I4NQL8gUSX472657dEBYi3`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    //Creo un nuevo objeto con los datos que necesito
    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //? para preguntar si trae que lo utilice
        }
    })

   return gifs;
}