<?php

//use App\Http\Controllers\FavoriteAlbumController;
//use App\Http\Controllers\FavoriteArtistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::apiResource("/artist", FavoriteArtistController::class);
//Route::apiResource("/album", FavoriteAlbumController::class);

//Route::get("/artist/favorite/:searchkEY", FavoriteArtistController::class); // use route resource for this task
/*
2. Artist search: users should be able to search for artists by name and view 
their basic information, including their top tracks, albums, and related 
artists. 
TODO: After integrating to react this enpoints are no longer needed
*/