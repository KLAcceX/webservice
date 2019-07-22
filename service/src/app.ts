import express from "express";
import { Routes } from "./routes/appRoutes";

class App {

    public app: express.Application;
    public mongoose = require('mongoose');
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/webservice';

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
    	this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
    	this.mongoose.Promise = global.Promise;
    	this.mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
    }

}

export default new App().app;