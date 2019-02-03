const slugify = require('transliteration').slugify

module.exports = pluginConfig => {
  return {
    // https://vuepress.vuejs.org/plugin/option-api.html#extendpagedata
    extendPageData ($page) {
      // $page.path was encoded by VuePress already.
      // Make sure original so I decode it once.
      const originPagePath = decodeURIComponent($page.path)

      // https://github.com/andyhu/transliteration#slugifystr-options
      const options = Object.assign({}, pluginConfig, { ignore: ['/', '.'] })

      $page.path = slugify(originPagePath, options)
    }
  }
}
