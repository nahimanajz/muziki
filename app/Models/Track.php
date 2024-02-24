<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Track extends Model
{
    use HasFactory;

    protected $fillable = ["albumId", "name","duration", "url"];
    public $timestamps =false;

    public function favoriteAlbum(): BelongsTo
    {
        return $this->belongsTo(FavoriteAlbum::class,"albumId");
    }
}
