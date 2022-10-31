module.exports = {
	name: 'ping',
	description: 'Ping!',
	commandOptions: null,
	global: true,
	execute(interaction) {
		
		client.api.interactions(interaction.id, interaction.token).callback.post({data: {
			type: 4,
			data: {
					content: `<a:network:977123820970311691> Pong: ${client.ws.ping}ms!`
				}
			}
		})
	},
};
