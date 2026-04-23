import comics from '../script/comics.js'

function filtering(comics, filterValue) {
    const filtered = comics.filter((albo) => {
        const stringa = albo.series;
        if (stringa.includes(filterValue)) return(albo);
    })
    console.log(filtered);
    return filtered;
}

export default filtering;