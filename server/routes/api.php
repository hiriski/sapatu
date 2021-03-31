<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function() {
    return response()->json([
        'project_name'  => 'SapatuProject',
        'message'       => 'Application is Running..',
    ]);
});

Route::post('/register', App\Http\Controllers\Auth\RegisterController::class);

Route::post('/login', App\Http\Controllers\Auth\LoginController::class);

Route::middleware('auth:sanctum')->group(function() {

    Route::post('/logout', function() {
        auth()->user()->currentAccessToken()->delete();  // remove only current access token
    });

    // products route
    Route::apiResource('/product', App\Http\Controllers\ProductController::class);
    
    // order route
    Route::apiResource('/order/item', App\Http\Controllers\OrderItemController::class);

    Route::apiResource('/order', App\Http\Controllers\OrderController::class);
    
    // receipt route
    Route::apiResource('/receipt', App\Http\Controllers\ReceiptController::class);
    
    // image route
    Route::apiResource('/image', App\Http\Controllers\ImageController::class);

});