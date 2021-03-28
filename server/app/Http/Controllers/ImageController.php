<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Models\Product;
use Carbon\Carbon;
use Image;

// resources
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;

// Request
use App\Http\Requests\StoreImage;


class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return ProductCollection($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\StoreImage  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreImage $request) {

        $sizes = [
            'image_sm'  => 200,
            'image_md'  => 400,
            'image_lg'  => 1000,
        ];

        try {
            if($image = $request->file('image')) {
                $exts = $image->getClientOriginalExtension();
                $reqFileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
                
                $path = storage_path('app/public/images/products');

                $foo = Image::make($image->getRealPath());
                $foo->save($path, 80, 'jpg');
                dd('OK');
                foreach($sizes as $key => $value) {
                }
            } 
        } catch(Exception $exception) {
            return response()->json([
                'message'  => $exception->getMesssage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
