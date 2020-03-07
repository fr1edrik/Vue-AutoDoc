export default class Util {
	static fs = require('fs')
	static root = './src/renderer/'
	static cachePath = '/cache/cache.txt'

	static target = 'E:/_Projects/_template/Electron/Projects'

	static componentsPath = 'src/components'

	static writeFile(string) {
		this.fs.writeFile(this.root + this.cachePath, string, err => {
			if (err) return console.log(err)
		})
		console.log('The file was saved!')
	}

	static readFile(path, callback) {
		this.fs.readFile(this.root + path, function read(err, data) {
			if (err) {
				throw err
			}
			const content = data

			callback(content.toString('utf8'))
		})
	}

	static readDir(path, callback) {
		this.fs.readdir(path, (err, files) => {
			if (err) {
				throw err
			}
			callback(files)
		})
	}

	static getProjectNames(callback) {
		console.log('console')
		this.readDir(this.target, res => callback(res))
	}
}
