import { sql } from '@vercel/postgres';

export async function fetchGames() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
  
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      // console.log('Fetching revenue data...');
      // await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql`SELECT * FROM games`;
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }

  export async function fetchGameById(id: number) {
    try {
      const data = await sql`SELECT * FROM games WHERE id = ${id}`;
  
      // If no game is found, return null
      if (data.rowCount === 0) {
        return null;
      }
  
      // Return the first game
      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error(`Failed to fetch game with id ${id}.`);
    }
  }
