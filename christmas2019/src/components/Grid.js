import React, { useState, useEffect }  from 'react';
import DrawerBox from './DrawerBox';

const Grid = () => {
  const [offices, updateOffices] = useState([
    {
      id: 'el1',
      name: 'Atlanta',
      total: 0
    },
    {
      id: 'el2',
      name: 'Bogotá',
      total: 0
    },
    {
      id: 'el3',
      name: 'Brooklyn',
      total: 0
    },
    {
      id: 'el4',
      name: 'Chicago',
      total: 0
    },
    {
      id: 'el5',
      name: 'D.C.',
      total: 0
    },
    {
      id: 'el6',
      name: 'Detroit',
      total: 0
    },
    {
      id: 'el7',
      name: 'London',
      total: 0
    },
    {
      id: 'el8',
      name: 'Oakland',
      total: 0
    },
    {
      id: 'el9',
      name: 'Singapore',
      total: 0
    },
    {
      id: 'el10',
      name: 'Toronto',
      total: 0
    },
    {
      id: 'el11',
      name: 'Tokio',
      total: 0
    },
    {
      id: 'el12',
      name: 'Medellín',
      total: 0
    },
    {
      id: 'el13',
      name: 'L.A.',
      total: 0
    }
  ]);
  
  return (
    <div className="grid">
      <div className="wrapper">
        { offices.map( drawerBox => (
          <DrawerBox key={drawerBox.id} drawerBox={drawerBox} />
        ))}
      </div>
  </div>
  )
};
 
export default Grid;
