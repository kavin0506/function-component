import logo from './logo.svg';
import './App.css';
import Table from './Table';
import TableFunc from './FuncTable';
import List from './List';
import ListClass from './ClassList';
import Greet from './Greet';

function App() {
  const playerName=[
    {
    name:"bala",
    age:23,
    role:"bowler"
  },
  {
    name:"arun",
    age:23,
    role:"bowler"
  },
  {
    name:"kamesh",
    age:23,
    role:"batsman"
  },
  {
    name:"kavi",
    age:23,
    role:"allrounder"
  },
  {
    name:"prakesh",
    age:23,
    role:"bowler"
  },
]
  const userDetails=[
    {
      name:"bala",
      age:20,
      profession:"designer"
    },
    {
      name:"arun",
      age:21,
      profession:"tester"
    },{
      name:"kamesh",
      age:20,
      profession:"developer"
    },{
      name:"kavi",
      age:22,
      profession:"tester"
    }
  ]

  const sports=[
    {
      sname:"Cricket"
    },
    {
      sname:"Football"
    },{
      sname:"Kabbadi"
    },{
      sname:"Hockey"
    }
  ]
  return(
    <div className="App">
      <h2>Functional Component</h2>
      <TableFunc userData={userDetails}/>
      <h2>Class Component</h2>
      <Table team={playerName}/>
      <List sportsName={sports}/>
      <Greet use="worker" age="22"/>
    </div>
  );
}

export default App;
