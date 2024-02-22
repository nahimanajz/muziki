<?php

namespace App\Http\Controllers;


use App\Models\FavoriteArtist;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class FavoriteArtistController extends Controller
{
    public function __construct()
    {
        //$this->auth();
    }
    /**
     * Display a listing of the resource.
     */
    public function index():Response
    {
       $favArtists = FavoriteArtist::where("userId",  Auth::id())->get();
       return Inertia::render("Artists", ["favoriteArtists" =>$favArtists]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request):Response
    {
        //TODO:add validation using form request
        FavoriteArtist::create(array_merge($request->all(), ["userId" => $request->user()->id ?? 1]));
        return Inertia::render("Artists");
        
    }

    /**
     * Display the specified resource.
     */
    public function show(FavoriteArtist $favoriteArtist)
    {
       // return
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FavoriteArtist $favoriteArtist)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $artistId):RedirectResponse
    {
        $artist = FavoriteArtist::find($artistId);
        $artist->delete();
        return redirect()->back();
      
    }
   

}
