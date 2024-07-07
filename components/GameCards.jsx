import { GameCard } from "@/components/GameCard";
import { fetchGames } from "../app/lib/data";


const games = await fetchGames();

export default async function GameCards() {
    return (
            /* Game Cards Loop */ 
    
        games.map((game, index) => (
            <GameCard
                id={game.game_id}
                key={index}
                title={game.title}
                rating={game.rating}
                imageUrl={`/games_img/${game.img_link}`}
                description={game.description}
                windowWidth={120}
            />
        ))
    
    )

}