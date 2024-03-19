<?php

namespace App\Policies;

use App\Models\FavoriteArtist;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Auth;

class FavoriteArtistPolicy
{

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user): bool
    {
        return Auth::check();
    }

    
    /**
     * Determine whether the user can create models.
     */

     public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(?User $user, FavoriteArtist $favoriteArtist): Response
    {
        return $user?->id === $favoriteArtist->userId ? Response::allow() : Response::denyAsNotFound("not allowed", 403);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, FavoriteArtist $favoriteArtist): bool
    {
        return $user->id === $favoriteArtist->userId;
    }
}
