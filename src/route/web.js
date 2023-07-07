import express from "express";
import userController from "../controllers/userController";
import topProductsController from "../controllers/topProductsController"
import productsController from "../controllers/productsController"
import paymentController from "../controllers/paymentController"
import reviewController from "../controllers/reviewController"
import productDetailController from "../controllers/productDetailController"
import statusOrderController from "../controllers/statusOrderController"
import slidesController from "../controllers/slidesController"

const router = express.Router();

const initWebRoutes = (app) => {

    //api user
    router.post('/api/signIn', userController.handleSignIn)
    router.post('/api/signUp', userController.handleSignUp)
    router.get('/api/get-info-user', userController.handleGetInfoUser)
    router.get('/api/get-all-info-user', userController.handleGetAllInfoUser)
    router.get('/api/get-search-member', userController.handleGetSearchMember)
    router.post('/api/post-delete-member-admin', userController.handleDeleteAdmin)

    // api product
    router.get('/api/top-product', topProductsController.handleTopProduct)
    router.post('/api/add-Product', productsController.handleAddProduct)
    router.get('/api/get-list-product', productsController.handleGetProduct)
    router.get('/api/get-info-product', productsController.handleGetInfoProduct)
    router.post('/api/post-edit-info-product', productsController.handlePostEditInfoProduct)
    router.get('/api/get-search-product', productsController.handleGetSearchProduct)
    router.get('/api/get-smartphone', productsController.handleGetSmartphone)

    // api product detail
    router.post('/api/post-add-product-detail', productDetailController.handlePostAddProductDetail)
    router.get('/api/get-info-product-detail', productDetailController.handleGetInfoProductDetail)
    router.get('/api/get-all-product-detail', productDetailController.handleGetAllProductDetail)
    router.post('/api/post-edit-info-product-detail', productDetailController.handleEditInfoProductDetail)

    // api type product
    router.get('/api/get-list-product-type', productsController.handleGetProductType)
    router.post('/api/post-add-product-type', productsController.handlePostAddProductTye)
    router.put('/api/put-edit-info-product-type', productsController.handlePostEditProductType)

    // api group product
    router.get('/api/get-list-product-group', productsController.handleGetProductGroup)
    router.post('/api/post-add-product-group', productsController.handlePostAddProductGroup)
    router.put('/api/put-edit-info-product-group', productsController.handlePostEditProductGroup)

    // api order
    router.get('/api/get-info-bill', productsController.handleGetInfoBill)
    router.post('/api/get-info-oderDetail', productsController.handleGetInfoOderDetail)
    router.get('/api/get-status-order', statusOrderController.handleGetAllStatusOrder)
    router.get('/api/get-info-oder', paymentController.handleGetInfoOder)
    router.get('/api/get-info-oder-detail', paymentController.handleGetInfoOrderDetail)
    router.put('/api/put-has-received', paymentController.handleHasReceived)
    router.put('/api/put-confirm-order', paymentController.handleConfirmOrder)
    router.post('/api/post-delete-order', paymentController.handleDeleteOrder)

    // api payment
    router.post('/api/post-payment', paymentController.handlePostPayment)

    // api review
    router.post('/api/post-review', reviewController.handlePostReview)
    router.get('/api/get-show-review', reviewController.handleShowReview)
    router.get('/api/get-info-review-not-response', reviewController.handleInfoReviewNotResponse)
    router.get('/api/get-info-review-user', reviewController.handleGetReviewUser)
    router.put('/api/put-check-review-user', reviewController.handleCheckedReviewUser)

    // api version product
    router.post('/api/post-add-version-product', productsController.handleAddVersionProduct)
    router.get('/api/get-info-version-product', productsController.handleGetInfoVersionProduct)
    router.put('/api/put-edit-version-product', productsController.handleEditVersion)
    router.post('/api/post-delete-version-product', productsController.handleDeleteVersionProduct)

    // api slides
    router.get('/api-get-list-slides', slidesController.handleGetListSlides)
    router.post('/api-post-add-slides', slidesController.handlePostAddSlides)
    router.post('/api-post-delete-slides', slidesController.handlePostDeleteSlides)

    return app.use("/", router);
}

module.exports = initWebRoutes;