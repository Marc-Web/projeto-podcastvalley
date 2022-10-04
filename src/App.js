import Home from './pages/Home';
import podcasts from './podcastvalley_data.json';

function App() {
  return (
    <div>
      <Home podcasts={podcasts}/>
    </div>
  );
}

export default App;
