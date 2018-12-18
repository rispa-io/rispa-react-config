const { wire } = require('viperhtml')

const renderScript = path => path ? wire()`<script src="${path}" defer></script>` : ''
const renderLink = path => path ? wire()`<link src="${path}" rel="stylesheet" type="text/css" />` : ''

const renderHtml = ({
  css = [],
  js = {},
}) => wire()`
  <!doctype html>
  <html>
    <head>
      <title>RISPA project</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      ${[css.map(renderLink)]}
    </head>
    <body>
      <div id="content">
      </div>
      ${renderScript(js.polyfill)}
      ${renderScript(js.vendor)}
      ${js.chunks.map(renderScript)}
    </body>
  </html>
`.toString()

module.exports = renderHtml
