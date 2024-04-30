'use client'
// GameCard.tsx
import Image from "next/image";
import { FaStar, FaRegStar } from 'react-icons/fa';
import Link from "next/link";

interface GameCardProps {
    id: number;
    title: string;
    rating: number;
    imageUrl: string;
    description: string;
    windowWidth: number;
}

export const GameCard: React.FC<GameCardProps> = ({ id, title, rating, imageUrl, description }) => {
    rating = Number(rating);
    const fullStars = Math.floor(rating);
    const partialStar = rating % 1;
    const emptyStars = 5 - Math.ceil(rating);


    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };




    return (




        <div className="max-w-52 lg:max-w-54 bg-white border-2 border-gray-200 rounded-lg shadow-none hover:shadow-2xl duration-75 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4">
                <div className="text-center">
                    <h4 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
                        {title}
                    </h4>

                    <div className="flex justify-center items-center mb-2">
                        {Array.from({ length: fullStars }).map((_, i) => (
                            <FaStar key={i} color="#ffc107" size={14} />
                        ))}
                        {partialStar > 0 && (
                            <div style={{ position: 'relative', width: '14px' }}>
                                <FaRegStar key="partial" color="#e4e5e9" size={14} />
                                <div style={{ position: 'absolute', overflow: 'hidden', width: `${14 * partialStar}px`, left: 0, top: 0 }}>
                                    <FaStar key="partial-filled" color="#ffc107" size={14} />
                                </div>
                            </div>
                        )}
                        {Array.from({ length: emptyStars }).map((_, i) => (
                            <FaRegStar key={`empty-${i}`} color="#e4e5e9" size={14} />
                        ))}
                        <span className="ml-2 text-md text-gray-600 dark:text-gray-300">
                            {typeof rating === 'number' ? rating.toFixed(1) : 'N/A'}
                        </span>
                    </div>

                </div>

                <div className="flex justify-center items-center my-3">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={200}
                        height={200}
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>

                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    {
                        // Limit the description to 70 characters
                        description.length <= 70
                            ? description
                            : (() => {
                                let truncated = description.substring(0, 70);
                                while (truncated.length > 0 && /[\s,.\d]$/.test(truncated)) {
                                    truncated = truncated.substring(0, truncated.length - 1);
                                }
                                return truncated + '...';
                            })()
                    }
                </p>


                <Link legacyBehavior href={
                    {
                        pathname: '/games/game',
                        query: { id: id,
                                title: title,
                                rating: rating,
                                img_link: imageUrl,
                                description: description
                         }
                    }

                }>
                    <a className="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-150">
                        View More
                        <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </Link>

            </div>
        </div>
    );
}