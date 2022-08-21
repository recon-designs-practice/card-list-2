CREATE DATABASE cardlist;

CREATE TABLE cardtable(
    card_id SERIAL PRIMARY KEY,
    card_year integer,
    card_brand text,
    card_set text,
    card_number integer,
    card_sn_number integer,
    card_sn_total integer,
    card_attributes text[],
    player_first_name text,
    player_second_name text,
    team_city text,
    team_name text,
    team_name_short text
);

-- CREATE DATABASE cardbrandlist;

CREATE TABLE brandtable(
    brand_id SERIAL PRIMARY KEY,
    brand_name text
);