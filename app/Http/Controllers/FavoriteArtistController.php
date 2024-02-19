<?php

namespace App\Http\Controllers;

use App\Models\FavoriteArtist;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FavoriteArtistController extends Controller
{
    public function __construct()
    {
        //$this->auth();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
        return Inertia::render("artists")->middleware(["auth"]);
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
    public function show(FavoriteArtist $favoriteArtist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FavoriteArtist $favoriteArtist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FavoriteArtist $favoriteArtist)
    {
        //
    }
    //     implement the artist and album search functionalities using Laravel’s built
// in controllers and resource routes. A
//TODO: search album by name
// public function searchAlbums(string $album):string[]{

// }

}
