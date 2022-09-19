module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Matriculas', [
			{
				status: "confirmado",
				aluni_id: 1,
				turma_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "confirmado",
				aluni_id: 2,
				turma_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "confirmado",
				aluni_id: 3,
				turma_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "confirmado",
				aluni_id: 4,
				turma_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "cancelado",
				aluni_id: 1,
				turma_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "cancelado",
				aluni_id: 2,
				turma_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Matriculas', null, {})
	}
}
