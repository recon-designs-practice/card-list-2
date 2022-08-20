const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())
app.use(express.json())

// create a card
app.post('/cards', async (req, res) => {
    try {
        const {
            card_year,
            card_brand,
            card_set,
            card_number,
            card_sn_number,
            card_sn_total,
            card_attributes,
            player_first_name,
            player_second_name,
            team_city,
            team_name,
            team_name_short
        } = req.body

        const newCard = await pool.query(
            `INSERT INTO cardtable(
                card_year,
                card_brand, 
                card_set,
                card_number,
                card_sn_number,
                card_sn_total,
                card_attributes,
                player_first_name,
                player_second_name,
                team_city,
                team_name,
                team_name_short
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8,
                $9,
                $10,
                $11,
                $12
            ) RETURNING *
            `,
            [
                card_year,
                card_brand,
                card_set,
                card_number,
                card_sn_number,
                card_sn_total,
                card_attributes,
                player_first_name,
                player_second_name,
                team_city,
                team_name,
                team_name_short
            ]
        )

        res.json(newCard.rows[0])

    } catch (error) {
        console.error(error.message)
    }
})

// create a brand

// get all cards

// get all brands

// get a card

// get a brand

// edit a card

// edit a brand

// delete a card

// delete a brand

app.listen(5001, () => {
    console.log('Server is listening on port 5001.')
})