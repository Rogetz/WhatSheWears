// start using vercel from tommorow

/*import {sql,createClient,db} from "@vercel/postgres"

// one thing that I forgot is that vercel/postgres is actually meant for working with the vercel's postgres online and that's why it needs no configuration.
// my own copied from the vercel/postgres file
//sql.connect()
// example of an sql query

const data = await sql<LatestClothes>`
SELECT items.amount,item.name 
FROM items
JOIN customers ON items.id = customer.id
ORDER BY items.date DESC
LIMIT 5
`

// my own test.
//createClient()
//db()
*/
