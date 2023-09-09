import './App.css';
import ListCard from './Components/ListCard';
const time= ["12:30","1:30"];

const click=(e)=>{
  return(
    
  )
}

function App() {
  return (
    <div className="App">
      <button onClick={(e)=>click(e)}>Click Me TO add</button>
      {time.map((t) =>{
        return(
        <ListCard time={t} task="Message"/>
        )
      })}
    </div>
  );
}

export default App;
