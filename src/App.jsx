import * as React from 'react';


const useStorageState = (key, initialState) =>{
  const [value, setValue] = React.useState(
    localStorage.getItem(key || initialState)
  );
  
  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])
  return [value, setValue]
}

function App() {


  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
  }, {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
  }
  ];


  const [searchTerm, setSearchTerm] = useStorageState(
    'search',
    'React'
  );


  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value);
  }


  const searchedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} searchTerm={searchTerm}/>

      <hr />

      <List list={searchedStories} />
    </div> 
  );
}

  function Search ({search, onSearch, searchTerm}) {

    const handleChange = (event) => {
        onSearch(event)
    }
    return (
      <div>
        <label htmlFor='search'>Search: </label>
        <input
         id='search'
         type='text'
        onChange={handleChange}
        value={search} 
        />
        <p>Searching for <strong>{searchTerm}</strong></p>
      </div>
    );
  }

  function List({list}) {
  return (
    <div>
      <ul>
        {list.map((item) => {

          return (
              <Item key={item.objectID} item={item} />
          )
        })}
      </ul>
    </div>
   );
    }


    const Item = ({item}) => (
      <li>
        <span>
          <a href={item.url}>{item.title}</a>
          </span>
          <span> {item.author}</span>
          <span> Comments: {item.num_comments}</span>
          <span> Points: {item.points}</span>
      </li>
    );

export default App;