// src/seeders/202309240001-create-locations.js
export const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('locations', [
        {
            name: 'Praia de Copacabana',
            address: 'Rio de Janeiro, Brasil',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Central Park',
            address: 'Nova Iorque, EUA',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Torre Eiffel',
            address: 'Paris, França',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]);
};

export const down = async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('locations', null, {});
};
