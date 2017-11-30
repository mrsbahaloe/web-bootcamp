let program  = require('commander')
let api = require('marvel-api')
let marvel = api.createClient({
	publicKey: '11c3d768ff322dfae80382cefef47ea4',
	privateKey: '57991391e69570b9f21ff84a1258a8b42362d2be'
})

 
program 
	.command('avengers')
	.action(() => {
		console.log('avengers')
marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done()
})
program.parse(process.argv)

	if(!program.args.length){
	program.help()
}
