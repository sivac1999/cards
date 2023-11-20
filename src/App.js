import logo from './logo.svg';
import './App.css';
import Card from './Card';
function App() {
  let cars=[
    { id:1,
    name:"Maruti Suzuki",
    rating:"4.8",
     model:"Swift",
    price:"9 laks",
    typ:"Petrol veritant"
  },
  { id:2,
    name:"TATA Motors",
    rating:"4.9",
     model:"Innova ",
    price:" 30 laks",
    typ:"Petrol veritant"
  },
  { id:3,
    name:"Hyundai",
    rating:"4.8",
     model:"SUVc 10",
    price:"20 laks",
    typ:"Petrol veritant"
  },
  { id:4,
    name:"Mahindra",
    rating:"4.8",
     model:"Thar",
    price:"18 laks",
    typ:"Petrol veritant"
  },
  { id:5,
    name:"KIA",
    rating:"4.8",
     model:"KIA 4",
    price:"9 laks",
    typ:"Petrol veritant"
  },
  { id:6,
    name:"Nissan",
    rating:"4.8",
     model:"Nizcyt",
    price:"13 laks",
    typ:"Petrol veritant"
  },
  { id:7,
    name:"Renalut",
    rating:"4.8",
     model:"Gid",
    price:"9 laks",
    typ:"Petrol veritant"
  },
  { id:8,
    name:"BMW",
    rating:"4.8",
     model:"Men4",
    price:"80  laks",
    typ:"Petrol veritant"
  },
  { id:9,
    name:"AUdi",
    rating:"4.8",
     model:"Audi xl",
    price:"40 laks",
    typ:"Petrol veritant"
  },
  { id:10,
    name:"Ford",
    rating:"4.8",
     model:"Fiat",
    price:"9 laks",
    typ:"Petrol veritant"
  },
  { id:11,
    name:"Skoda",
    rating:"4.8",
     model:"Rabid",
    price:"14 laks",
    typ:"Petrol veritant"
  },
  { id:12,
    name:"Force",
    rating:"4.8",
     model:"Lectzt",
    price:"12 laks",
    typ:"Petrol veritant"
  },
  
]
  return (
    <div className="App">
      <Card details={cars} />
    </div>
  );
}

export default App;
