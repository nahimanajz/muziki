<?php

namespace App\Http\Controllers;


use App\Models\FavoriteArtist;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;


class FavoriteArtistController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $favArtists = FavoriteArtist::where("userId",  Auth::id())->orderBy('created_at', 'desc')->get();
        return Inertia::render("Artists", ["favoriteArtists" => $favArtists]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {

        try {
            $request->validate([
                "name" => "required|string|unique:favorite_artists"
            ]);

            FavoriteArtist::create(array_merge($request->all(), ["userId" => $request->user()->id]));
            return redirect("/artist")->with("message", "Favorite artist is saved");
        } catch (Exception $e) {
            return redirect("artist")->with("error", $e->getMessage());
        }
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
    public function update(Request $request, FavoriteArtist $favoriteArtist): RedirectResponse
    {

        $validated = $request->validate([
            "name" => "required|string",
            "listeners" => "required",
            "mbid" => "nullable",
            "streamable" => "required",
            "url" => "url:http,https|required",

        ]);

        $artist = FavoriteArtist::find($request->route('artist'));
        $artist->update($validated);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $artistId): RedirectResponse
    {
        $artist = FavoriteArtist::find($artistId);
        $artist->delete();
        return redirect()->back();
    }
}
