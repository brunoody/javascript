import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`escutando na portra ${port}`);
  console.log(`CTRL + CLICK em http://localhost:${port}`);
});
