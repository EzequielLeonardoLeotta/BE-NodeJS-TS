require('dotenv').config();
import server from './server/index';

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
