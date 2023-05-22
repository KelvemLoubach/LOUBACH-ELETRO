import { Router} from 'express';
import { auth } from '../middlewares/auth'
import {upload} from '../middlewares/multer';
import * as controllers from '../Controllers/index';

const router = Router();

router.post('/createproducts', auth, upload.fields([{ name: 'oldPrice' }, {name:'category'},{ name: 'name' }, { name: 'price' }, { name: 'description' }, { name: 'inStock' }, { name: 'guarantee' }, {name:'image'}]), controllers.createProducts );
router.post('/login', controllers.login)
router.post('/signup', controllers.signup);

router.get('/teste',auth, controllers.teste);
router.get('/',controllers.home);
router.get('/getproductsingle/:id',auth, controllers.getProductId );

router.delete('/deleteproducts/:id',auth, controllers.deleteProducts);

export default router;