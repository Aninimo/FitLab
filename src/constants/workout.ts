import { useSelector } from 'react-redux';

export const WorkoutComponent = () => {
  const walk = useSelector((state) => state.added.walk);
  
  const exerciseCount = useSelector((state) => state.added.exerciseCount);

  const totalWaterConsumed = useSelector(state => state.added.water)
  
  const Workout = [
    {
      id: 1,
      name: 'Walk',
      value: `${walk}Km`,
      icon: 'https://cdn-icons-png.flaticon.com/128/7159/7159867.png'
    },
    {
      id: 2,
      name: 'Exercise',
      value: `${exerciseCount} Total`,
      icon: 'https://cdn-icons-png.flaticon.com/128/2749/2749777.png'
    },
    {
      id: 3,
      name: 'Water',
      value: `${totalWaterConsumed}ml`,
      icon: 'https://cdn-icons-png.flaticon.com/128/315/315339.png'
    }
  ];

  return Workout;
};
