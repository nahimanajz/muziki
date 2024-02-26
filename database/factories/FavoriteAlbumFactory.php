<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FavoriteAlbum>
 */
class FavoriteAlbumFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => "Cher",
            "artist" => rand(10000, 91931),
            "url" => rand("0", "1"),
            "playCount" => rand(10000, 91931),
            "published" => fake()->dateTime(),
        ];
    }
}
