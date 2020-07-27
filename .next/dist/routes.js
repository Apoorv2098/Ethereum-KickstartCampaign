'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new');
//1. : means this is variable value i.e whenever campaigns/spmething comes go to show page
// 2. where to go if first link appear
routes.add('/campaigns/:address', '/campaigns/show');
routes.add('/campaigns/:address/requests', '/campaigns/requests/index');
routes.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE0QixBQUE1QjtBQUNBO0FBQ0E7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLHVCQUFpQyxBQUFqQztBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsZ0NBQTBDLEFBQTFDO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxvQ0FBOEMsQUFBOUM7O0FBRUEsT0FBTyxBQUFQLFVBQWUsQUFBZiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXBwb3J2L0tpY2tzdGFydCJ9