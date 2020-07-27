import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance=new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xB2112E0607d15034aD488B6D97F99Fc0b9601c53'
);

export default instance;