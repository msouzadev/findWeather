import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect({ host: '192.168.1.2' }); // let's connect!

console.tron = Reactotron.log;
tron.clear();
