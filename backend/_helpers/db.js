// db.js

const config = require('config.json');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    const { host, port, user, password, database } = config.database;
    // Create a Sequelize instance
    const sequelize = new Sequelize(database, user, password, { 
        dialect: 'mysql',
                  host: host,
                  port : port,
        dialectOptions: {
            dateStrings: true,
            typeCast: true
        },
        timezone: '+00:00' // Set timezone to UTC
    });

    // Init models and add them to the exported db object
    db.Account = require('../accounts/account.model')(sequelize);
    db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);
    db.Department = require('../departments/department.model')(sequelize);
    db.Employee = require('../employees/employee.model')(sequelize);
    db.Workflow = require('../workflows/workflow.model')(sequelize);
    db.Request = require('../requests/request.model')(sequelize);

    // Define relationships
    // Account-RefreshToken
    db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
    db.RefreshToken.belongsTo(db.Account);

    // Account-Employee (one-to-one)
    db.Account.hasOne(db.Employee, { foreignKey: 'userId' });
    db.Employee.belongsTo(db.Account, { foreignKey: 'userId' });

    // Department-Employee (one-to-many)
    db.Department.hasMany(db.Employee);
    db.Employee.belongsTo(db.Department);

    // Employee-Workflow (one-to-many)
    db.Employee.hasMany(db.Workflow, { onDelete: 'CASCADE'});
    db.Workflow.belongsTo(db.Employee);

    // Employee-Request (one-to-many)
    db.Employee.hasMany(db.Request, { onDelete: 'CASCADE'});
    db.Request.belongsTo(db.Employee);

    // Sync all models with database
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully.");
}