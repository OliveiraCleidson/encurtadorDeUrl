if (!process.env.APP_URL && process.env.NODE_ENV === 'production') {
  throw new Error('Defina o link do APP');
}

if (!process.env.JWT_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('Defina um segredo para a aplicação');
}

const AppConfig = {
  baseUrl: process.env.APP_URL || 'www.forTest.com',
  jwtSecret: process.env.JWT_SECRET || 'secretForTest',
};

export default AppConfig;
