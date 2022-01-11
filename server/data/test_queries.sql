-- Drop the table if it already exists
DROP TABLE IF EXISTS bars;
-- Create a new table called 'customers'
CREATE TABLE bars(
    id SERIAL PRIMARY KEY,
    close DECIMAL NOT NULL,
    high DECIMAL NOT NULL,
    low DECIMAL NOT NULL,
    open DECIMAL NOT NULL,
    timestamp DATE NOT NULL,
    volume DECIMAL NOT NULL
);
-- insert test data into bars table
INSERT INTO bars (close,high,low,open,timestamp,volume)
VALUES
    (48.43,48.93,48.295,48.8,'2021-06-01T04:00:00Z',1842460),
    (48.62,50,47.46,50,'2021-06-02T04:00:00Z',2407166),
    (48.98,49.59,48.25,48.68,'2021-06-03T04:00:00Z',1509958),
    (48.05,49.83,47.8,49.83,'2021-06-04T04:00:00Z',1469170),
    (47.17,48.01,46.79,47.8,'2021-06-07T04:00:00Z',1454477)
    
SELECT * FROM bars