const migrations = [
    {
        version: 0,
        up: (schema) => {
            const newSchema = {
                ...schema,
                version: 0,
            };
            return newSchema;
        },
    },
    {
        version: 1,
        up: (schema) => {
            const newSchema = {
                ...schema,
                version: 1,
                state_type: 'str',
                halt_if_type: 'str',
                halt_if_compare: 'is',
                updateIntervalUnits: 'seconds',
            };
            return newSchema;
        },
    },
];

module.exports = migrations;
