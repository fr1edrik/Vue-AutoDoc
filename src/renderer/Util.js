import { parser } from '@vuese/parser'
import store from '@/store/index'
import { PROJECTS_DIR_PATH } from '@/store/modules/projects/getter-types.js'

export default class Util {
	static fs = require('fs')
	static dirTree = require('directory-tree')
	static root = './src/renderer/'
	static cachePath = '/cache/'

	static get target() {
		return store.getters[PROJECTS_DIR_PATH]
	}

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
		let map = this.dirTree(this.target + '/' + project + '/src/components/', {
			extensions: /\.(vue)$/,
		})

		const newObject = {
			root: map.children.filter(item => item.type === 'file'),
			dirs: map.children.filter(item => item.type === 'directory'),
		}

		forFile(newObject)
	}

	static getProjectNames(callback) {
		this.readDir(this.target, res => callback(res))
	}

	static parseComponent(path) {
		const source = this.fs.readFileSync(path, 'utf-8')
		// console.log(source)
		try {
			return parser(source)
		} catch (e) {
			console.error(e)
		}
	}

	static fetchRelation(project, callback) {
		let glob = require('glob')
		const { parseComponent } = require('vue-sfc-parser')

		let options = {
			cwd: `${this.target}${project}`,
		}

		glob('**/*.vue', options, (er, files) => {
			let obj = []
			files.forEach(file => {
				const filepath = options.cwd + '/' + file

				const readFile = this.fs.readFileSync(filepath, 'utf-8')

				const comp = parseComponent(readFile).script
				const filename = require('path').basename(file)

				obj.push({
					name: filename,
					code: comp,
				})
			})

			callback(obj)
		})
	}
}
