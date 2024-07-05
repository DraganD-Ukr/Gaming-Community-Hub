// import { sql } from '@vercel/postgres';

// // Games data

// export async function fetchGames() {

  
//     try {
//       const data = await sql`SELECT * FROM games`;
//       return data.rows;
//     } catch (error) {
//       console.error('Database Error:', error);
//       throw new Error('Failed to fetch games data.');
//     }
//   }

//   export async function fetchGameById(id: number) {
//     try {
//       const data = await sql`SELECT * FROM games WHERE id = ${id}`;
//       // If no game is found, return null
//       if (data.rowCount === 0) {
//         return null;
//       }
//       // Return the first game
//       return data.rows[0];
//     } catch (error) {
//       console.error('Database Error:', error);
//       throw new Error(`Failed to fetch game with id ${id}.`);
//     }
//   }


  

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
