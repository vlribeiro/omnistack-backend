const express = require(`express`);
const multer = require(`multer`);
const multerConfig = require(`./config/multer`);
const BoxController = require(`./controlers/BoxController`);
const FileController = require(`./controlers/FileController`);

var routes = express.Router();

routes.post(`/boxes`, BoxController.store);
routes.get(`/boxes/:id`, BoxController.show);
routes.post(`/boxes/:id/files`, multer(multerConfig).single(`file`), FileController.store);

module.exports = routes;
