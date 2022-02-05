import React,{Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers =[
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '이태주',
  'birthday': '961223',
  'gender': '남자',
  'job': '대학생'
  },
  {'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이필현',
  'birthday': '951123',
  'gender': '남자',
  'job': '프로그래머'
  },
  {'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '지민호',
  'birthday': '9511111',
  'gender': '남자',
  'job': '디자이너'
  }
]

class App extends Component {
  render(){
    return( 
      <div>
      {
        customers.map(c => {
          return <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            gender={c.gender}
            job={c.job}
          />
        })
      }
  </div>
    );
  }
}

export default App;
