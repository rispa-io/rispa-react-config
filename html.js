
const { wire } = require('viperhtml')

const { Helmet } = require('react-helmet')

const renderScript = path => path ? wire()`<script src="${path}" defer></script>` : ''

const renderHtml = ({
  script = {},
}) => {
  const helmet = Helmet.renderStatic()
  return wire()`
    <!doctype html>
    <html>
      <head>
        ${[helmet.title.toString()]}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        ${[helmet.meta.toString()]}
        ${[helmet.link.toString()]}
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
}

module.exports = renderHtml
