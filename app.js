const express = require('express');
const app = express();
const ejs = require('ejs')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const blogRouter = require('./src/routers/blogRouter')

app.use(expressLayouts);
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './src/views'))

app.use('/', blogRouter)
app.use('/blog', blogRouter)

app.listen(3000, () => {
    console.log("3000")
}
)