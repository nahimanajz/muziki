<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FavoriteAlbum extends Model
{
    use HasFactory;
    protected $guarded=["listerners","tracks"];
    protected $casts = ["published"=>"datetime"];
    
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($album) {
            $album->tracks()->delete();
        });
    }
    
    public function tracks(): HasMany
    {
        return $this->hasMany(Track::class,"albumId");
    }
}
