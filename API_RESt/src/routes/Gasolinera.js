const UserModel = require('../models/Gasolinera_Mod');

module.exports = app => {

  app.get('/users/:id', (req, res) => {
    var id = req.params.id;
    UserModel.getUsuario(id,(err, data) => {
        res.status(200).json(data);
        
  
      });
  });

  app.get('/users/Log/:user', (req, res) => {
 
    var user = req.params.user;
    UserModel.getLog(user,(err, data) => {
        res.status(200).json(data);
        
  
      });
  });

  app.get('/gasolineras', (req, res) => {
    UserModel.get((err, data) => {
      res.status(200).json(data);
    });
  });


  app.post('/gasolinera/gas', (req, res) => {
    var userData = {
    
      ID: req.body.ID,
      CordenadaLog: req.body.CordenadaLog,
      CordenadaLat: req.body.CordenadaLat,
      Marca: req.body.Marca,
      Descripcion: req.body.Descripcion,
      Logo: req.body.Logo,
      Domicilio: req.body.Domicilio,
      Otros: req.body.Otros,
      Telefono: req.body.Telefono,
      Disel: req.body.Disel,
      Gregular: req.body.Gregular,
      Gpremium: req.body.Gpremium,
      //FechaRegistro: req.body.FechaRegistro,
      //Fecha: req.body.Fecha

   
    };
   
    UserModel.insertarGasolinera(userData, (err, data) => {
    try {
      if (data && data.insertId) {
// ///insertar primiso
//         var userData2 = {
//               Id:data.insertId,
//               Administrador: req.body.Administrador,
//               Cliente: req.body.Cliente,
//               Asistente: req.body.Asistente,
          
//               Chofer:req.body.Chofer
           
//             };
//         UserModel.insertUserPermisos(userData2, (err2, data2) => {

//         });
//         ///fin inserpermiso
        res.status(200).json({
          success: true,
          msg: "Se inserto correctamente",
          data: data
        });
        // res.redirect('/users/' + data.insertId);
      } else {
        res.status(500).json({
          success: false,
          msg: "Error"
        });
      }
    } catch (error) {
      
    }
     
    });
  });

  app.put('/users/:id', (req, res) => {
    const userData = {
      Id: req.params.id,
     
      pass: req.body.Password,
      Estatus:req.body.Estatus,
      Rol: req.body.Rol,
      
   
    };
    UserModel.updateUser(userData, function (err, data) {
      if (data && data.msg) {
        res.status(200).json({data});
      } else {
        res.status(500).json({
          success: false,
          msg: 'Error'
        });
      }
    });
  });

  app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    UserModel.deleteUser(id, (err, data) =>  {
      if (data && data.msg === 'deleted' || data.msg == 'not Exists') {
        res.json({
          success: 'true',
          data
        });
      } else {
        res.status(500).json({
          msg: 'Error'
        });
      }
    });
  });
};
