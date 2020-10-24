let sqlStrings =  {
    createTable: {
        table_items: 'CREATE TABLE IF NOT EXISTS table_items (IID INTEGER PRIMARY KEY, Name TEXT, UNIQUE(IID))',
        table_provisions: 'CREATE TABLE IF NOT EXISTS table_provisions (PID INTEGER PRIMARY KEY, IID INTEGER , Name TEXT , Energy INTEGER , Hydration INTEGER , FOREIGN KEY (IID) REFERENCES table_items (IID))',
        table_backpacks: 'CREATE TABLE IF NOT EXISTS table_backpacks (BID INTEGER PRIMARY KEY, IID INTEGER, Name Text, Inner_Grid Text, Outer_Grid Text, Size INTEGER, Storage_Efficiency REAL, Weight REAL, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        table_eyewears: 'CREATE TABLE IF NOT EXISTS table_eyewears (EwID INTEGER PRIMARY KEY, IID INTEGER, Name TEXT, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        table_secure_containers: 'CREATE TABLE IF NOT EXISTS table_secure_containers (ScID INTEGER PRIMARY KEY, IID INTEGER, Name TEXT, Inner_Grid TEXT, Size INTEGER, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        table_headsets: 'CREATE TABLE IF NOT EXISTS table_headsets (HID INTEGER PRIMARY KEY, IID INTEGER, Name TEXT, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        table_armbands: 'CREATE TABLE IF NOT EXISTS table_armbands (AbID INTEGER PRIMARY KEY, IID INTEGER, Name TEXT, Color TEXT, FOREIGN KEY (IID) REFERENCES table_items (IID))',
        table_containers: 'CREATE TABLE IF NOT EXISTS table_containers (CoID INTEGER PRIMARY KEY, IID INTEGER, Name TEXT, Inner_Grid TEXT, Outer_Grid TEXT, Storage_Efficiency REAL, Size INTEGER, FOREIGN KEY (IID) REFERENCES table_items (IID))'
    }
}

export default sqlStrings;