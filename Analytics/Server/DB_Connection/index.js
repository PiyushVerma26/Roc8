import mongoose from "mongoose";

const connectionObj = {};

async function connectDb() {
  if (connectionObj.isConnected) {
    const styles = `
    \x1b[48;5;226m\x1b[30m\x1b[1m Already Connected \x1b[0m
  `;
    console.log(styles);
    return;
  }
  try {
    const dbConnect = await mongoose.connect(
      `${process.env.MONGO_URI}/analytics`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    connectionObj.isConnected = dbConnect.connections[0].readyState;

    const styles = `
    \x1b[48;5;226m\x1b[30m\x1b[1m DataBase Connected \x1b[0m
  `;
    console.log(styles);
  } catch (error) {
    const styles = `
    \x1b[48;5;196m\x1b[37m\x1b[1m Error in Connected to DataBase \x1b[0m
  `;
    console.error(styles);
    process.exit(1);
  }
}

export default connectDb;
