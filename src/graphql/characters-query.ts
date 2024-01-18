import { gql } from '@apollo/client';

const CHARACTERS_QUERY = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        image
        name
        status
        origin {
          name
        }
        location {
          name
        }
        species
        type
        gender
      }
    }
  }
`;

export default CHARACTERS_QUERY;
