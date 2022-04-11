import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1649402288002_290';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.security={
    csrf:{
      enable:false,
    }
  }
  config.session={
    key:"PENG_AAA",
    maxAge:1000*60,
    renew:true
  }
  config.mongoose={
    client:{
     url:'mongodb://eggTs:eggTs@127.0.0.1:27017/Test',
      options:{},
    }
    //url:process.env.mongod
  }

  config.redis={
    host:'127.0.0.1',
    port:'6379'
  }

  config.nsq={
    topic:'topic_demmo',
    channel:'egg_channel',
    nsqHostReader:"127.0.0.1:4161",
    nsqHostWrite:"127.0.0.1",
    writePort:4150
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
