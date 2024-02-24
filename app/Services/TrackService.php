<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Track;

class TrackService
{

    /**
     * @param Track as array of album related tracks from lastFm api
     * @param albumId the id of the recently saved album
     * - append album id to track record
     */
    public function createTrack(int $albumId, array $tracks): void
    {

        foreach ($tracks as $track) {
            Track::create(array_merge($track, ["albumId" => $albumId]));
        }
    }
}
