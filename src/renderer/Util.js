export default class Util {
	static fs = require('fs')
	static glob = require('glob')
	static root = './src/renderer/'
	static cachePath = '/cache/cache.txt'

	static target = 'E:/_Projects/_template/Electron/Projects/'

	static componentsPath = 'monimo/src/components'

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

	static walkPath(project = '', forFile) {
		const pat = '**/components/**/*.vue'

		const options = {
			cwd: this.target + project,
		}

		this.glob(pat, options, (err, files) => {
			if (err) {
				console.log(err)
			} else {
				const remapped = files.map(path => {
					const remBegin = /(src\/components\/)/

					return path.split(remBegin)[2]
				})
				forFile(remapped)
				// files.forEach(file => {
				// 	this.fs.readFile(file, function(err, data) {
				// 		if (err) {
				// 			console.log(err)
				// 		} else {
				// 			forFile(data.toString())
				// 		}
				// 	})
				// })
			}
		})
	}

	static getProjectNames(callback) {
		this.readDir(this.target, res => callback(res))
	}
}
