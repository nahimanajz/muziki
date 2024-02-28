<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FavoriteArtist>
 */
class FavoriteArtistFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->unique()->name(),
            'listeners' => fake()->numberBetween(0,1000000),
            'streamable' => fake()->numberBetween(1,2),
            'mbid' => fake()->uuid(),
            'url' => fake()->imageUrl(640, 480, 'animals', true),
        ];
    }
}
