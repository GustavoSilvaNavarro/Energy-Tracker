import 'dotenv/config';
import serverConnection from './server/server';

const { app } = serverConnection;

app.listen(app.get('port'), () => {
  console.log(`Express Server 🚀 running on PORT ${app.get('port')} - Worker ${process.pid}`);
});
