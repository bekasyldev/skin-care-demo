const { PrismaClient } = require("@prisma/client")

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                {name : "Golf Clubs"},
                {name : "Golf Balls"},
                {name : "Golf Bags"},
                {name : "Clothing & Rainwear"},
                {name : "Footwear"},
                {name : "Accesserios"},
            ]
        })
        console.log("succes")
    } catch (error) {
        console.log('Error seeding the database categories', error)
    }
}

main();