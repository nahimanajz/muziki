<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArtistRequest;
use App\Http\Requests\UpdateArtistRequest;
use App\Models\FavoriteArtist;
use Exception;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

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
            $data = array_merge($request->all(), ["userId" => Auth::id()]);
            FavoriteArtist::create($data);
            return redirect("/artist");
        } catch (Exception $e) {
            dd($e);
            return redirect("/artist");
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
    public function update(UpdateArtistRequest $request, FavoriteArtist $favoriteArtist): RedirectResponse
    {

        $validated = $request->validated();
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
