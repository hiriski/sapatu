<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Image as InterventionImage;
use Illuminate\Support\Facades\Storage;

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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\StoreImage  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreImage $request) {
        $sizes = [
            'image_sm'  => 140,
            'image_md'  => 360,
            'image_lg'  => 1000,
        ];
        $imageType = $request->image_type;
        try {
            if($requestImage = $request->file('image')) {
                $fileExtension  = $requestImage->getClientOriginalExtension();
                $reqFileName    = pathinfo(
                    $requestImage->getClientOriginalName(),
                    PATHINFO_FILENAME
                );

                $prefixFileName = time();

                /* path */
                $path = storage_path('app/public/images/');
                if($imageType !== null) {
                    $path .= $imageType . '/';
                }

                $insertValues = [
                    'image_type'  => $imageType
                ];

                // $imageModel[$column] = $fileName;
                foreach($sizes as $column => $size) {
                    
                    /* Create file name */
                    $fileName = $prefixFileName . '-' . $column . '.' . $fileExtension;
                    
                    /* Make an image */
                    $image = InterventionImage::make($requestImage->getRealPath())
                    ->resize((int) $size, null, function($constraint) {
                        $constraint->aspectRatio();
                    })->save(
                        $path . $fileName,
                        90 /* image quality */
                    );

                    $insertValues[$column] = $fileName;
                }
                $image = Image::create($insertValues);
                return new ImageResource($image);
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
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        $imagePath = 'public/images/';
        # Check existance file and delete it.
        if(Storage::disk('local')->exists($imagePath . $image->image_type . '/' . $image->image_sm)) {
            Storage::delete([
                $imagePath . $image->image_type . '/' . $image->image_sm,
                $imagePath . $image->image_type . '/' . $image->image_md,
                $imagePath . $image->image_type . '/' . $image->image_lg,
            ]);
        }
        $image->delete();
        return response()->json([
            'message'   => 'Ok'
        ]);
    }
}
