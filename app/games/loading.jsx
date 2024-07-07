export default function Loading() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-2 mt-4">
            {Array.from({ length: 12 }, (_, index) => (
                <div role="status" className="max-w-sm w-full h-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex flex-col">
                        {/* Simulate Image */}
                        <div className="h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
                        {/* Simulate Title */}
                        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
                        {/* Simulate Text */}
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            ))}
        </div>
    );
}