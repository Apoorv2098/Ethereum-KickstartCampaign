const routes = require('next-routes')();

routes.add('/campaigns/new','/campaigns/new');
//1. : means this is variable value i.e whenever campaigns/spmething comes go to show page
// 2. where to go if first link appear
routes.add('/campaigns/:address','/campaigns/show');
routes.add('/campaigns/:address/requests','/campaigns/requests/index');
routes.add('/campaigns/:address/requests/new','/campaigns/requests/new');

module.exports=routes;