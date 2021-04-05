<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

// resources
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;

// request
use App\Http\Requests\StoreProduct;

class ProductController extends Controller
{

    protected $itemPerPage = 25;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::paginate($this->itemPerPage);
        return new ProductCollection($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProduct $request)
    {
        $requestProduct = $request->only([
            'title', 'user_id', 'image_id', 'body', 'price', 'size', 'stock']
        );
        $requestProduct['user_id'] = auth()->id();
        $product = Product::create($requestProduct);
        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $requestProduct = $request->only([
            'title', 'image_id', 'body', 'price', 'size', 'stock'
        ]);
        $product->update($requestProduct);
        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
