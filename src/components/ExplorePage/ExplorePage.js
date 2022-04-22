import { useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import './ExplorePage.css';

const ExplorePage = ({ regionalFungi, getFungi, region }) => {
  const fungi = regionalFungi.map(fungus => {
    return (
      <ListItem
        key={fungus.id}
        id={fungus.id}
        name={fungus.name}
        scientificName={fungus.scientificName}
        imageUrl={fungus.imageUrl} />
    )
  })

  useEffect(() => {
    getFungi(region);
  }, [])

  // const search = searchTerms => {
    
  // }

  return (
    <section>
      <NavBar />
      <h2>Fungus Finder</h2>
      <SearchBar />
      <div>
        {fungi}
      </div>
    </section>
  )
}

export default ExplorePage;