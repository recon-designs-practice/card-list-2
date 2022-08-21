const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())
app.use(express.json())

/**
 * Get all cards
 */
 app.get('/cards', async (req, res) => {
    try {
        const allCards = await pool.query(
            `SELECT * FROM cardtable`
        )

        res.json(allCards.rows)
    } catch (error) {
        console.error(error.message)
    }
})

/**
 * Get card by id
 */
 app.get('/cards/:id', async (req, res) => {
    try {
        const { id } = req.params
        const selectedCard = await pool.query(
            `SELECT * FROM cardtable WHERE card_id = $1`, [id]
        )

        res.json(selectedCard.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

/**
 * Add a card
 */
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

/**
 * Edit card by id
 */
app.put('/cards/:id', async (req, res) => {
    try {
        const { id } = req.params
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

        const updatedCard = await pool.query(
            `
            UPDATE cardtable
            SET card_year = $1,
                card_brand = $2,
                card_set = $3,
                card_number = $4,
                card_sn_number = $5,
                card_sn_total = $6,
                card_attributes = $7,
                player_first_name = $8,
                player_second_name = $9,
                team_city = $10,
                team_name = $11,
                team_name_short = $12
            WHERE card_id = $13
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
                team_name_short,
                id
            ]
        )

        res.json('Item updated')
    } catch (error) {
       console.error(error.message) 
    }
})

/**
 * Delete card by id
 */
app.delete('/cards/:id', async (req, res) => {
    try {
        const { id } = req.params

        const deletedCard = await pool.query(
            `
            DELETE FROM cardtable
            WHERE card_id = $1
            `,
            [
                id
            ]
        )

        res.json('Item deleted')
    } catch (error) {
        console.error(error.message)
    }
})

/**
 * Get all brands
 */
 app.get('/brands', async (req, res) => {
    const allBrands = await pool.query(
        `SELECT * FROM brandtable`
    )

    res.json(allBrands.rows)
})

/**
 * Get brand by id
 */
 app.get('/brands/:id', async (req, res) => {
    try {
        const { id } = req.params
        const selectedBrand = await pool.query(
            `SELECT * FROM brandtable WHERE brand_id = $1`, [id]
        )

        res.json(selectedBrand.rows[0])
    } catch (error) {
       console.error(error.message) 
    }
})

/**
 * Add a brand
 */
app.post('/brands', async (req, res) => {
    try {
        const { brand_name } = req.body

        const newBrand = await pool.query(
            `INSERT INTO brandtable(brand_name) VALUES ($1) RETURNING *`, [brand_name]
        )

        res.json(newBrand.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

/**
 * Edit brand by id
 */

app.put('/brands/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { brand_name } = req.body

        const updatedBrand = await pool.query(
            `
            UPDATE brandtable
            SET brand_name = $1
            WHERE brand_id = $2
            `,
            [
                brand_name,
                id
            ]
        )

        res.json('Item updated')
    } catch (error) {
        console.error(error.message)
    }
})

/**
 * Delete by id
 */
app.delete('/brands/:id', async (req, res) => {
    try {
        const { id } = req.params

        const deletedBrand =  await pool.query(
            `
            DELETE FROM brandtable
            WHERE brand_id = $1
            `,
            [
                id
            ]
        )

        res.json('Item deleted')
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001.')
})