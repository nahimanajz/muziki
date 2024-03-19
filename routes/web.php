<?php

use App\Http\Controllers\FavoriteAlbumController;
use App\Http\Controllers\FavoriteArtistController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Models\Track;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::controller(SearchController::class)->group(function(){
 
    Route::post('/search/artist', 'artist')->name('search.artist');
    Route::post('/search/album', 'album')->name('search.album');
    Route::get('/find/album', 'findAlbum')->name("find.album");
});


Route::middleware(["auth"])->group(function(){
    Route::resource("artist", FavoriteArtistController::class);
    Route::resource("album", FavoriteAlbumController::class);
});
Route::get("/tracks", function(){
    return Track::paginate(2);
});

require __DIR__.'/auth.php';
