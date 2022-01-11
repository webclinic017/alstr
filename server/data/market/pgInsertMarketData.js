import { Pool } from "pg";

export const insertHistoricMarketData = bars => {
	// const historicBars = [...bars];

	const pool = new Pool({
		connectionString: process.env.POSTGRESQL_DB_URI,
		ssl: {
			required: true,
			rejectUnauthorized: false,
		},
	});

	bars.forEach(bar => {
		pool.query(
			`INSERT INTO bars (timestamp,open,high,low,close,volume)
    VALUES (${bar.t}, ${bar.o}, ${bar.h}, ${bar.l}, ${bar.c}, ${bar.v})`,
			(err, res) => {
				if (err) {
					console.log(">> HEROKU POSTGRESQL DB | ROW INSERTION ERROR <<");
					console.log(err);
				} else {
					console.log(res.rows);
				}
			}
		);
	});
};
