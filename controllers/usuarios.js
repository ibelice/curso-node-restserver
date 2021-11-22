const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
    const {q, nombre = 'No name', apikey} = req.query;

    res.json({
        msg: 'get api - controlador',
        q,
        nombre,
        apikey,
    });
  }

  const usuariosPost = (req, res = response) => {
      const {edad, nombre} = req.body;
    
    res.json({
        msg: 'post api - usuariosPost',
        nombre,
        edad
    });
  };

  const usuariosPut = (req, res = response) => {
      const id = req.params.id;
    res.json({
        msg: 'put api - usuariosPut',
        id
    });
  };

  const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch api - usuariosPatch'
    });
  };

  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete api - usuariosDelete'
    });
  };


  module.exports = {
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosPatch,
      usuariosDelete
  }