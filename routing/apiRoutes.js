const tableData = require('../data/tableData.js')
const waitingData = require('../data/waitingData.js')

module.exports = function(app){
    app.get("/api/tables", function(req, res) {
        res.json(tableData);
      });
      
      app.get("/api/waiting", function(req, res) {
        res.json(waitingData);
      });
    
      app.post("api/tables", function(req, res){
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
          }
          else {
            waitListData.push(req.body);
            res.json(false);
          }
      })
}
console.log('api routes hit')