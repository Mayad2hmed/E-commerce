import catogeryRouter from "./category/category.routes.js"
import subcatogeryRouter from "./subcategory/subcategory.routes.js"
import brandRouter from "./brand/brand.routes.js"
import productRouter from "./product/product.routes.js"
import userRouter from "./user/user.router.js"
import authRouter from "./auth/auth.router.js"
import {globalError} from "../middleware/globalError.js"
export const bootstrap=(app)=>{
    app.use(express.json())
    app.use('/api/v1',catogeryRouter)
    app.use('/api/v1',subcatogeryRouter)
    app.use('/api/v1',brandRouter)
    app.use('/api/v1',productRouter)
    app.use('/api/v1',userRouter)
    app.use('/api/v1',authRouter)



    app.use(globalError)

   app.get('/', (req, res) => res.send('Hello World!'))

}