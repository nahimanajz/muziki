<?php

namespace App\Http\Controllers;

use App\Models\FavoriteAlbum;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;


class FavoriteAlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $favAlbums = FavoriteAlbum::where("userId",  Auth::id())->orderBy('created_at', 'desc')->get();
        return Inertia::render("Album", ["favoriteAlbums" => $favAlbums]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request):RedirectResponse
    {
        $data = array_merge($request->all(), ["userId" => Auth::id()]);
        FavoriteAlbum::create($data);
        return redirect()->route("albums.index"); 

    }

    /**
     * Display the specified resource.
     */
    public function show(FavoriteAlbum $favoriteAlbum)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FavoriteAlbum $favoriteAlbum)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FavoriteAlbum $favoriteAlbum)
    {
        //
    }
}
