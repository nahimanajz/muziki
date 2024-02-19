<?php

declare(strict_types=1);

namespace App\Services;

use GuzzleHttp\Client;


class ApiService
{

    public function __construct(protected Client $apiClient)
    {
    }
    public function searchArtist(string $artist): array
    {
        $url = "" . env("LASTFM_URL") . "artist.search&artist=" . $artist . "&api_key=" . env("LASTFM_APIKEY") . "&format=json";

        $response = $this->apiClient->get($url)->getBody()->getContents();
        $contents = json_decode($response);
        $data = $contents?->results?->artistmatches?->artist;

        return ["artists" => $data];
    }
    
    public function searchAlbum(string $album): array
    {
        $albumUrl = "" . env("LASTFM_URL") . "album.search&album=" . $album . "&api_key=" . env("LASTFM_APIKEY") . "&format=json";
        $response = $this->apiClient->get($albumUrl)->getBody()->getContents();
        $contents = json_decode($response);
        $data = $contents?->results?->albummatches?->album;

        return ["albums" => $data];
    }
}
