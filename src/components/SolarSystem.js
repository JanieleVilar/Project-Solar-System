import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planet, index) => (<PlanetCard
          key={ index }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
