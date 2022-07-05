import exprees from 'express'
import '../configurations/config_env'
import router from '../routes/person.routes'

const app = exprees()

app.use(exprees.json())
app.use('/api/persons', router)

export { app }