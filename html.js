
const { wire } = require('viperhtml')

const renderScript = path => path ? wire()`<script src="${path}" defer></script>` : ''

const renderHtml = ({
  title,
  meta,
  link,
  script = {},
}) => wire()`
  <!doctype html>
  <html>
    <head>
      ${[title]}
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      ${[meta]}
      ${[link]}
    </head>
    <body>
      <div id="content">
      </div>
      ${renderScript(script.polyfill)}
      ${renderScript(script.vendor)}
      ${script.chunks.map(renderScript)}
    </body>
  </html>
`.toString()

module.exports = renderHtml
