<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Track extends Model
{
    use HasFactory;

  
    public function album(): BelongsTo
    {
        return $this->belongsTo(FavoriteAlbum::class);
    }
}
