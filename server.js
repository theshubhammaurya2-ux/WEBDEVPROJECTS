import app from "./api/index.js";

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
