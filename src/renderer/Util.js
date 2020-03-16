import { parser } from '@vuese/parser'
import store from '@/store/index'
import { PROJECTS_DIR_PATH } from '@/store/modules/projects/getter-types.js'
import { UPDATE_PROJECTS_DIR_PATH } from '@/store/modules/projects/mutation-types.js'

export default class Util {
	static fs = require('fs')
	static dirTree = require('directory-tree')

	static rootPath = './src/'
	static rootRenderPath = './src/renderer/'
	static cachePath = './src/cache/'

	static get target() {
		// return store.getters[PROJECTS_DIR_PATH]
		const storePath = store.getters[PROJECTS_DIR_PATH]
		if (storePath) {
			return storePath
		}

		const settings = this.fs.readFileSync(
			`${this.rootPath}settings.json`,
			'utf8',
		)

		if (settings) {
			const settingsAsJson = JSON.parse(settings)
			store.commit(
				UPDATE_PROJECTS_DIR_PATH,
				settingsAsJson['PROJECTS_DIR_PATH'],
			)
			return settingsAsJson[PROJECTS_DIR_PATH]
		} else {
			return ''
		}
	}

	static writeFile(string, val) {
		const path = this.rootPath + string

		console.log(path)

		this.fs.writeFile(path, val, 'utf8', err => {
			if (err) return console.log(err)
		})
		console.log('The file was saved!')
	}

	static readFile(path, callback) {
		this.fs.readFile(this.rootRenderPath + path, function read(err, data) {
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

		const regEx = /^(import.*from).*\/components\/.*$/gim
		const regFile = /(?= ).*(?= from)/i

		let options = {
			cwd: `${this.target}/${project}`,
		}

		glob('**/*.vue', options, (er, files) => {
			let obj = []
			files.forEach(file => {
				if (!file) return

				const filepath = options.cwd + '/' + file

				const readFile = this.fs.readFileSync(filepath, 'utf-8')

				const comp = parseComponent(readFile).script

				if (!comp) return

				const filename = require('path').basename(file)

				let filtered = comp.content.match(regEx)

				if (!filtered) return

				filtered = filtered.map(item => {
					return item.match(regFile)[0].slice(1)
				})

				obj.push({
					name: filename,
					code: filtered,
				})
			})

			obj = obj.filter(o => o.code)

			callback(obj)
		})
	}
}
