<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Models\Product;
use Carbon\Carbon;
use App\Models\Image;
use Image as InterventionImage;

// resources
use App\Http\Resources\Image as ImageResource;
use App\Http\Resources\ImageCollection;

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
            if($requestImage = $request->file('image')) {
                $fileExtension  = $requestImage->getClientOriginalExtension();
                $reqFileName    = pathinfo(
                    $requestImage->getClientOriginalName(),
                    PATHINFO_FILENAME
                );
                // $fileName = $reqFileName . '.' . $fileExtension;

                /* Define extension file */
                $EXTENSION_IMAGE = "jpg";

                /* path */
                $path = storage_path('app/public/images/products/');

                $modelImage = new Image;

                foreach($sizes as $key => $value) {
                    /* Make an image */
                    $image = InterventionImage::make($requestImage->getRealPath())
                        ->resize((int) $value, null, function($constraint) {
                            $constraint->aspectRatio();
                        });

                    /* Create file name */
                    $fileName = time() . '-' . $key . '.' . $fileExtension;

                    /* Save file */
                    $image->save($path . $fileName, 90);

                    $modelImage[$key] = $value;
                    return new ImageResource($modelImage);
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
