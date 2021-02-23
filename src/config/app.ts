if (!process.env.APP_URL) {
  throw new Error('Defina o link do APP');
}

const AppConfig = {
  baseUrl: process.env.APP_URL,
};

export default AppConfig;
