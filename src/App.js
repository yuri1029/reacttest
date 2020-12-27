import React, { Component } from 'react';
import './App.css';
import Customer from "./components/Customer";

const customers = [
    {
    'id': 'yr',
    'image': 'https://placeimg.com/64/64/1',
    'name': '고유리',
    'age': '29',
    'gender': '여자',
    'live':'경기도'
},
{
    'id': 'dy',
    'image': 'https://placeimg.com/64/64/2',
    'name': '김도엽',
    'age': '25',
    'gender': '남자',
    'live':'경기도'
},
{
    'id': 'wc',
    'image': 'https://placeimg.com/64/64/3',
    'name': '정우철',
    'age': '33',
    'gender': '남자',
    'live':'서울시'
},
]

class App extends Component {
    render() {
        return(
          <div>
              {
                  customers.map(c => {  //map을 사용할 때는 반드시 key값 정의
                      return(
                          <Customer
                              key={c.id}
                              id={c.id}
                              image={c.image}
                              name={c.name}
                              age={c.age}
                              gender={c.gender}
                              live={c.live}
                           />
                      )
                  })
              }
          </div>
        );
    }
}

export default App;
