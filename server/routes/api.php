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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', App\Http\Controllers\Auth\RegisterController::class);

Route::post('/login', App\Http\Controllers\Auth\LoginController::class);

Route::middleware('auth:sanctum')->group(function() {
    Route::post('/logout', function() {
        auth()->user()->currentAccessToken()->delete();  // remove only current access token
    });
});

Route::apiResource('/product', App\Http\Controllers\ProductController::class);

Route::apiResource('/order', App\Http\Controllers\OrderController::class);