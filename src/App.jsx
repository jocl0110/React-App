import * as React from 'react';



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

  const [searchTerm, setSearchTerm] = React.useState('Redux');

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

  function Search (props) {
    const {search, onSearch} = props;

    const handleChange = (event) => {
      props.onSearch(event)
    }

    return (
      <div>
        <label htmlFor='search'>Search: </label>
        <input
         id='search'
         type='text'
        onChange={onSearch}
        value={props.search} 
        />
        <p>Searching for <strong>{props.searchTerm}</strong></p>
      </div>
    );
  }

  function List(props) {
  return (
    <div>
      <ul>
        {props.list.map(function (item) {
          return (
              <Item key={item.objectID} item={item} />
          )
        })}
      </ul>
    </div>
   );
    }


    const Item = (props) => (
      <li>
        <span>
          <a href={props.item.url}>{props.item.title}</a>
          </span>
          <span> {props.item.author}</span>
          <span> Comments: {props.item.num_comments}</span>
          <span> Points: {props.item.points}</span>
      </li>
    );

export default App;