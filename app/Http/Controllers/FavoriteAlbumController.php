<?php

namespace App\Http\Controllers;

use App\Models\FavoriteAlbum;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class FavoriteAlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Artists", [
            "favoriteArtists" => FavoriteAlbum::where("userId", "=", Auth::user()->id),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
