<?php

namespace App\Policies;

use App\Models\FavoriteAlbum;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class FavoriteAlbumPolicy
{
   
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user): bool
    {
        return Auth::check();
    }

    /**
     * Determine whether the user can album tracks.
     */
    public function show(User $user): bool
    {
        return Auth::check();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return Auth::check();
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, FavoriteAlbum $favoriteAlbum): bool
    {
        return $user->id === $favoriteAlbum->userId;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, FavoriteAlbum $favoriteAlbum): bool
    {
        return $user->id === $favoriteAlbum->userId;
    }

   
}
