CREATE DATABASE cardlist;

CREATE DATABASE cardbrandlist;

CREATE TABLE card(
    card_id SERIAL PRIMARY KEY,
    card_number integer,
    card_year integer,
    card_brand VARCHAR(100),
    card_set VARCHAR(200),
    card_sn_number integer,
    card_sn_total integer,
    card_attributes VARCHAR(30),
    player_first_name VARCHAR(100),
    player_second_name VARCHAR(100),
    player_team_city VARCHAR(30),
    player_team_name VARCHAR(30),
    player_team VARCHAR(3)
);

CREATE TABLE cardbrand(
    brand_id SERIAL PRIMARY KEY,
    brand_name VARCHAR(100),
    brand_year integer
);