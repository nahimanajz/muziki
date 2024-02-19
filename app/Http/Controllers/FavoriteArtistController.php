<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArtistRequest;
use App\Models\FavoriteArtist;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreArtistsRequest;

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
        //TODO:add validation using form request
        FavoriteArtist::create(array_merge($request->all(), ["userId" => $request->user()->id ?? 1]));
        //dd($request);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FavoriteArtist $favoriteArtist)
    {
        FavoriteArtist::find($favoriteArtist->id)->delete();
        return response(["message"=> "Record deleted successfully"]);
    }
    //     implement the artist and album search functionalities using Laravel’s built
    // in controllers and resource routes. A
    //TODO: search album by name
    // public function searchAlbums(string $album):string[]{

    // }

}
