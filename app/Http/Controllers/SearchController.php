<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\ApiService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

/**
 * 1. return search screens artist or album
 * 2. handle album and artist search
 * 3. handle search artist and album post request
 */

class SearchController extends Controller
{

    public function __construct(protected ApiService $apiService)
    {
    }

    public function findAlbum(): Response
    {
        return Inertia::render('Search/Album');
    }
    public function artist(Request $request): Response
    {


        $this->validate($request, [
            "artist" => "required"
        ]);
        $artist = $request->artist;
        $response = $this->apiService->searchArtist($artist);
        if (Auth::check()) {
            return Inertia::render("Artists", $response);
        }
        return Inertia::render("Welcome", $response);
    }
    public function album(Request $request): Response
    {
        $this->validate($request, [
            "album" => "required",
            "artist" => "required"
        ]);

        $response = $this->apiService->searchAlbum(artist: $request->artist, album: $request->album);
        return Inertia::render("Search/Album", $response);
    }
}
