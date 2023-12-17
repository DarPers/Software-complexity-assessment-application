const express = require('express');
const userRouter = require('./routes/user_route');
const authRouter = require('./routes/auth_route');
const assesmentRouter = require('./routes/assesment_route');
const projectRouter = require('./routes/project_route');
const cors = require('cors'); 

const PORT = process.env.PORT || 8888;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', userRouter);
app.use('/auth', authRouter);
app.use('/assesment', assesmentRouter);
app.use('/projects', projectRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))