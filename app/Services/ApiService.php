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

    public function searchAlbum(string $artist, string $album): array
    {

        $albumUrl = "" . env("LASTFM_URL") . "album.getinfo&api_key=" . env("LASTFM_APIKEY") . "&artist=" . $artist . "&album=" . $album . "&format=json";
        $contents = $this->apiClient->get($albumUrl)->getBody()->getContents();
        $data = json_decode($contents);

        return ["album" => $data?->album];
    }
}
