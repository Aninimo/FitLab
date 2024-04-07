import { gql } from '@apollo/client';

export const EXERCISES = gql`
  query{
    exercises {
     id
     name
     image{
       url
     }
     min
     kcal
     description
     video{
       url
     }
     background{
       hex
     }
   }
  }
`;

export const CATEGORIES = gql`
  query{
    categoryMeals{
      name
      meals{
        name
        image{
          url
        }
        description
        calories
        carbs
        protein
      }
    }
  }
`

export const MEALS = gql`
  query{
    meals{
      categoryMeals{
        name
      }
      image{
        url
      }
      description
      calories
      carbs
      protein
    }
  }
`
