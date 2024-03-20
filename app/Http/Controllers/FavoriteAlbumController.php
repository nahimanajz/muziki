<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateAlbumRequest;
use App\Models\FavoriteAlbum;
use App\Services\TrackService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class FavoriteAlbumController extends Controller
{
    public function __construct(protected TrackService $trackServie)
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('view', FavoriteAlbum::class);


        $favAlbums = FavoriteAlbum::where("userId",  Auth::id())->with("tracks")->orderBy('created_at', 'desc')->paginate(5);
        return Inertia::render("Favorite/Albums/IndexPage", ["favoriteAlbums" => $favAlbums]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request):RedirectResponse
    {
        $this->authorize("create", FavoriteAlbum::class);
        $data = array_merge($request->all(), ["userId" => Auth::id()]);
        $album = FavoriteAlbum::create($data);
        $this->trackServie->createTrack(albumId: $album->id, tracks: $request->tracks);
        return redirect()->route("album.index"); 

    }

    /**
     * Display the specified resource.
     */
    public function show(int $favoriteAlbum):Response
    {
       $album= ["tracks"=>FavoriteAlbum::find($favoriteAlbum)->tracks];
       $this->authorize("show", FavoriteAlbum::class); 

        return Inertia::render("Favorite/Albums/TracksPage",$album );   
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAlbumRequest $request, FavoriteAlbum $favoriteAlbum)
    {
        
        $validated = $request->validated();
        $album = FavoriteAlbum::find($request->route('album'));
        $this->authorize("update", $album);
        $album->update($validated);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $albumId):RedirectResponse
    {
        $album = FavoriteAlbum::find($albumId);
        $this->authorize("delete", $album);
        $album->delete();

        return redirect()->back();
    }
}
