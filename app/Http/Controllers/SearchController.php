<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\AlbumSearchRequest;
use App\Http\Requests\ArtistSearchRequest;
use App\Services\ApiService;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

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


    public function artist(ArtistSearchRequest $request): Response
    {
       $request->validated();
        $response = $this->apiService->searchArtist($request->artist);

        if (Auth::check()) {
            return Inertia::render("Artists", $response);
        }
        return Inertia::render("Welcome", $response);
    }


    public function album(AlbumSearchRequest $request): Response
    {
        $request->validated();
        try {
            $response = $this->apiService->searchAlbum(artist: $request->artist, album: $request->album);
            return $this->inertiaPage($response);
        } catch (Throwable $exception) {
            return   $this->inertiaPage(["message" => "Album not found"]);
        }
    }

    private function inertiaPage($response): Response
    {
        return Inertia::render("Search/Album", $response);
    }
}
