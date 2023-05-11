import { Router} from 'express';
import {upload} from '../libs/multer';
import * as controllerHome from '../Controllers/controllerHome';
import * as controllerGet from '../Controllers/controllerGetProduct'
import * as controllerCreateProduct from '../Controllers/controllerCreateProducts';
import * as controllerDelete from '../Controllers/controllerDelete';

const router = Router();

router.post('/createproducts', upload.fields([{ name: 'oldPrice' }, {name:'category'},{ name: 'name' }, { name: 'price' }, { name: 'description' }, { name: 'inStock' }, { name: 'guarantee' }, {name:'image'}]), controllerCreateProduct.createProducts );

router.get('/teste', controllerHome.teste);
router.get('/',controllerHome.home);
router.get('/getproductsingle/:id',controllerGet.getProductId );

router.delete('/deleteproducts/:id',controllerDelete.deleteProducts);



export default router;