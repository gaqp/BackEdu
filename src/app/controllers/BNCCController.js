const { BNCCs } = require('../models');
class BNCCController {
    async list(req, res) {
        try {
          const BNCC = await BNCCs.findAll();
          return res.json(BNCC);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }
    
      async store(req, res) {
        try {
                BNCCs.create(req.body).then(result=>{
                    res.status(200).json(result)
                })
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }
    
      async update(req, res) {
        try {
          
            const BNCC = await BNCCs.findByPk(req.params.id);
            await BNCC.update(req.body);
            return res.json({ BNCC });
          
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }
    
      async destroy(req, res) {
        try {
            
                const BNCC = await BNCCs.findByPk(req.params.id);
                console.log("FOUND BNCC: " + req.params.id);
                await BNCC.destroy();
                console.log("TRYING TO DESTROY");
                return res.json();
            
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      }
}

module.exports = new BNCCController();