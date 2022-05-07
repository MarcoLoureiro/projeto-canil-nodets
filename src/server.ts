import express,{Request,Response, urlencoded} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import IndexRoutes from './routes/index';


const server = express();
dotenv.config();

server.set('view engine','mustache');
server.engine('mustache',mustache());

server.set('views',path.join(__dirname,'./views'));
server.use(express.static(path.join(__dirname,'../public')));

server.use(urlencoded({extended:true}));

server.use(IndexRoutes);
server.use((req:Request,res:Response)=>{
    res.render('pages/404');
})

server.listen(process.env.SERVER_PORT);
