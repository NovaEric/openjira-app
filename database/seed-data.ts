
interface SeedData { entries: SeedEntry[] };

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
};


export const seedData: SeedData = {
    entries: [
        {
            description: 'Lorem ipsum dolor sit amet,',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'consectetur adipiscing elit,',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: 'completed',
            createdAt: Date.now() - 100000
        }
    ]
}