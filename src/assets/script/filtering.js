import ProductCard from "../components/ProductCard";

export default function filtering(comics, filterValue) {
  const filtered = comics.filter((albo) => {
    const stringa = albo.series.toLowerCase();
    if (stringa.includes(filterValue.toLowerCase())) return albo;
  });
  console.log(filtered);
  return filtered;
}

