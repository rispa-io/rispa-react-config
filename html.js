const { wire } = require('viperhtml')
const serialize = require('serialize-javascript')

const renderScript = path => path ? wire()`<script src="${path}" defer></script>` : ''

const renderLink = path => path ? wire()`<link src="${path}" rel="stylesheet" type="text/css" />` : ''

const renderInitialState = state => state ? `<script>
  // <![CDATA[
  window.RISPA_INITIAL_STATE=${serialize(state, { isJSON: true })};
  // ]]>
</script>` : ''

const renderHtml = (assets, { content, state }) => wire()`
  <!doctype html>
  <html>
    <head>
      <title>RISPA project</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      ${assets.css.map(renderLink)}
    </head>
    <body>
      <div id="content">${[content]}</div>
      ${[renderInitialState(state)]}
      ${assets.js.vendors.map(renderScript)}
      ${assets.js.chunks.map(renderScript)}
    </body>
  </html>
`.toString()

module.exports = renderHtml
