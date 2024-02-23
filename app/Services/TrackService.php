<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Track;

class TrackService
{


    public function createTrack(int $albumId, Track $track): array
    {
        Track::create(array_merge($track, ["albumId" => $albumId]));
        return ["message" => "track created successfully"];
    }
}
