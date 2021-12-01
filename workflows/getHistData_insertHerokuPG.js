import { getBarsInRange } from "../alpaca/data/getBarsInRange";
import { insertHistoricMarketData } from "../storage/db_postgresql/insertHistoricMarketData";
import { Pool } from "pg";

export const get_and_store_historical_market_data = async () => {
	let bars;

	const pool = new Pool({
		connectionString: process.env.POSTGRESQL_DB_URI,
		ssl: {
			required: true,
			rejectUnauthorized: false,
		},
	});

	// -- get bars from Alpaca
	bars = await getBarsInRange();

	// -- create new bars table in Heroku
	pool.query(
		`DROP TABLE IF EXISTS bars;
  CREATE TABLE bars(
    id SERIAL PRIMARY KEY,
    timestamp DATE NOT NULL,
    open DECIMAL NOT NULL,
    high DECIMAL NOT NULL,
    low DECIMAL NOT NULL,
    close DECIMAL NOT NULL,
    volume DECIMAL NOT NULL
  )`,
		(err, res) => {
			if (err) {
				console.log(">> HEROKU POSTGRESQL DB | TABLE CREATION ERROR <<");
				console.log(err);
			} else {
				console.log(res.rows);
			}
		}
	);
	// -- insert bars into PostgreSQL db
	insertHistoricMarketData(bars);
	// -- run select statement to verify inserted bars
};
