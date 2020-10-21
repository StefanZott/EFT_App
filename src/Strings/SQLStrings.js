let sqlStrings =  {
    createTable: {
        createTableItems: 'CREATE TABLE IF NOT EXISTS table_items (IID INTEGER PRIMARY KEY, name TEXT, UNIQUE(IID))',
        createTableProvisions: 'CREATE TABLE IF NOT EXISTS table_provisions (PID INTEGER PRIMARY KEY, IID INTEGER , image TEXT , name TEXT , energy INTEGER , hydration INTEGER , FOREIGN KEY (IID) REFERENCES table_items (IID))',
        createTableBackpacks: 'CREATE TABLE IF NOT EXISTS table_backpacks (BID INTEGER PRIMARY KEY, IID INTEGER, name Text, image Text, inner_grid Text, outer_grid Text, slots INTEGER, storage_efficiency REAL, weight REAL, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        createTableEyewears: 'CREATE TABLE IF NOT EXISTS table_eyewears (EwID INTEGER PRIMARY KEY, IID INTEGER, image TEXT, name TEXT, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        createTableSecureContainers: 'CREATE TABLE IF NOT EXISTS table_secure_containers (ScID INTEGER PRIMARY KEY, IID INTEGER, image TEXT, name TEXT, inner_grid TEXT, total_slots INTEGER, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        createTableHeadsets: 'CREATE TABLE IF NOT EXISTS table_headsets (HID INTEGER PRIMARY KEY, IID INTEGER, image TEXT, name TEXT, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        createTableArmbands: 'CREATE TABLE IF NOT EXISTS table_armbands (AbID INTEGER PRIMARY KEY, IID INTEGER, image TEXT, name TEXT, color TEXT, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        createTableContainers: 'CREATE TABLE IF NOT EXISTS table_containers (CoID INTEGER PRIMARY KEY, IID INTEGER, image TEXT, name TEXT, inner_dimensions TEXT, outer_dimensions TEXT, efficiency REAL, total_slots INTEGER, FOREIGN KEY (IID) REFERENCES table_items (IID))'
    },
    innerJoin: {
        backpacks: 'INNER JOIN table_backpacks as b ON i.IID = b.IID ',
        provisions: 'INNER JOIN table_provisions as p ON i.IID = p.IID ',
        eyewears: 'INNER JOIN table_eyewears as e ON i.IID = e.IID ',
        secure_containers: 'INNER JOIN table_secure_containers as s ON i.IID = s.IID ',
        headsets: 'INNER JOIN table_secure_headsets as h ON i.IID = h.IID ',
        armbands: 'INNER JOIN table_secure_armbands as a ON i.IID = a.IID ',
        containers: 'INNER JOIN table_containers as co ON i.IID = co.IID ',
    }
}

export default sqlStrings;