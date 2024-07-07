import dotenv from 'dotenv';
dotenv.config();


const apiUrl = 'http://localhost:8080';

// Games data
export async function fetchGames() {


    try {
      const response = await fetch(`${apiUrl}/game/all`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'cache' : 'no-store'
        },
      
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch games data.');
    }
  }

  export async function fetchGameById(id) {

    try {
      const response = await fetch(`${apiUrl}/games/${id}`);
      const data = await response.json();
      // If no game is found, return null
      if (data.rowCount === 0) {
        return null;
      }
      return data.rows;

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error(`Failed to fetch game with id ${id}.`);
    }
  }


  export async function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


  

//   // Events data

//   export async function fetchEvents() {
  
//     try {
//       const data = await sql`SELECT * FROM events`;
//       return data.rows;
//     } catch (error) {
//       console.error('Database Error:', error);
//       throw new Error('Failed to fetch events data.');
//     }
//   }
