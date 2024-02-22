<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteArtist extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $table="favorite_artists";
}
