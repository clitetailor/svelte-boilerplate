const { scss } = require('svelte-preprocess')

module.exports = {
  preprocess: require('svelte-preprocess')([scss()])
}
