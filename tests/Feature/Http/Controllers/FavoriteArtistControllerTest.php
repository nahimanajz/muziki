<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\FavoriteArtist;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class FavoriteArtistControllerTest extends TestCase
{


    public function test_artists_page_get_opened_with_artists_list_to_authenticated_users()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get("/artist");

        $response->assertStatus(200)->assertInertia(fn(Assert $page)=>$page->component("Artists")->has("favoriteArtists"));
    }


    public function test_artists_page_redirect_to_login_page_due_to_unauthenticated_users()
    {
        $response = $this->get("/artist");

        $response->assertRedirect("/login");
    }

 
    public function test_save_artist_by_authenticated_user()
    {
        $user = User::factory()->create();
        $artist = [
            "userId" => $user->id,
            "name" => "Cher",
            "listeners" => rand(10000, 91931),
            "stream" => rand("0", "1"),
            "image" => fake()->imageUrl(640, 480, 'animals', true),
            "mbid" => fake()->uuid(),
            "url" => fake()->url(),
        ];

       
        $response = $this->actingAs($user)->post("/artist", $artist);
        
        $response->assertRedirect("/artist")->assertStatus(302);

    }
    

    public function test_delete_artist_by_authenticated_user()
    {

        $user = User::factory()->create();
       
        $artist = FavoriteArtist::factory()->create(["userId" => $user->id]);
        $response = $this->actingAs($user)->delete("/artist/{$artist->id}");
       
        $response->assertStatus(302);
       $this->assertDatabaseCount("favorite_artists", 0);

    }
    
   
    public function test_update_artist_by_authenticated_user()
    {
        $user = User::factory()->create();
       
        $artist = FavoriteArtist::factory()->create(["userId" => $user->id]);
        $response = $this->actingAs($user)->patch("/artist/{$artist->id}");
       
        $response->assertStatus(302);

    }
  
    public function test_save__by_unauthenticated_user_then_redirect_to_login()
    {

        $user = User::factory()->create();
    
        $artist =[
            "userId" => $user->id,
            "name" => "Cher",
            "listeners" => rand(10000, 91931),
            "stream" => rand("0", "1"),
            "image" => fake()->imageUrl(640, 480, 'animals', true),
            "mbid" => fake()->uuid(),
            "url" => fake()->url(),
        ];
        $response = $this->post("/artist",$artist);
        $response->assertRedirect("/login");
    }

    public function test_update__by_unauthenticated_user_then_redirect_to_login()
    {
        $user = User::factory()->create();
       
        $artist = FavoriteArtist::factory()->create(["userId" => $user->id]);
        $response = $this->patch("/artist/{$artist->id}");
       
        $response->assertStatus(302)->assertRedirect("/login");

    }
   
    public function test_delete__by_unauthenticated_user_then_redirect_to_login()
    {
        $user = User::factory()->create();
       
        $artist = FavoriteArtist::factory()->create(["userId" => $user->id]);
        $response = $this->delete("/artist/{$artist->id}");
       
        $this->assertDatabaseCount("favorite_artists", 1);
        $response->assertStatus(302)->assertRedirect("/login");

    }
}
