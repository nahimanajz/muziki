<?php

namespace Tests\Feature\Models;

use App\Models\FavoriteAlbum;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;
use App\Models\User;


class FavoriteAlbumTest extends TestCase
{
    use RefreshDatabase;
    public function test_albums_page_get_opened_with_albums_list_to_authenticated_users()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get("/album");

        $response->assertStatus(200)->assertInertia(fn(Assert $page)=>$page->component("Favorite/Albums/IndexPage")->has("favoriteAlbums"));
    }


    public function test_albums_page_redirect_to_login_page_due_to_unauthenticated_users()
    {
        $response = $this->get("/album");

        $response->assertRedirect("/login");
    }


    public function test_save_album_by_authenticated_user_then_redirect_to_album_list()
    {
        $user = User::factory()->create();
        $album = [
            "userId" => $user->id,
            "name" => "Cher",
            "artist" => rand(10000, 91931),
            "url" => fake()->url(),
            "playCount" => rand(10000, 91931),
            "published" => now(),
            "tracks"=> []
          
        ];

       
        $response = $this->actingAs($user)->post("/album", $album);
        
       expect($album["tracks"])->toBeArray();
       $response->assertStatus(302)->assertRedirect("/album");
    }

    public function test_update_album_by_authenticated_user_then_redirect_to_album_list()
    {
        $user = User::factory()->create();
        $data = [
            "userId" => $user->id,
            "name" => "Believe it ",
            "artist" => "Ludacris",
            "url" => fake()->url(),
            "playCount" => rand(10000, 91931),
            "published" => now()
        ];
       $album= FavoriteAlbum::factory()->create($data);
       $updatedAlbum = array_merge($data, ["artist"=> "J.cole"]);
       
       $response = $this->actingAs($user)->patch("/album/{$album->id}", $updatedAlbum);
        
       $response->assertStatus(302);
    }
    public function test_delete_album_by_authenticated_user()
    {

        $user = User::factory()->create();
       
        $album = FavoriteAlbum::factory()->create(["userId" => $user->id]);
        $response = $this->actingAs($user)->delete("/album/{$album->id}");
       
        $response->assertStatus(302);
       $this->assertDatabaseCount("favorite_albums", 0);

    }

    public function test_save_album_by_unauthenticated_user_then_redirect_to_login_page()
    {
        $user = User::factory()->create();
        $album = [
            "userId" => $user->id,
            "name" => "Cher",
            "artist" => rand(10000, 91931),
            "url" => fake()->url(),
            "playCount" => rand(10000, 91931),
            "published" => now(),
            "tracks"=> []
          
        ];

       
        $response = $this->post("/album", $album);
        $response->assertStatus(302)->assertRedirect("/login");
    }

    public function test_update_album_by_unauthenticated_user_then_redirect_to_login_page()
    {
        $user = User::factory()->create();
        $data = [
            "userId" => $user->id,
            "name" => "Believe it ",
            "artist" => "Ludacris",
            "url" => fake()->url(),
            "playCount" => rand(10000, 91931),
            "published" => now()
        ];
       $album= FavoriteAlbum::factory()->create($data);
       $updatedAlbum = array_merge($data, ["artist"=> "J.cole"]);
       
       $response = $this->patch("/album/{$album->id}", $updatedAlbum);
        
       $response->assertStatus(302)->assertRedirect("/login");
    }


    public function test_delete_album_by_unauthenticated_user_then_redirect_to_login_page()
    {

        $user = User::factory()->create();
       
        $album = FavoriteAlbum::factory()->create(["userId" => $user->id]);
        $response = $this->delete("/album/{$album->id}");
       
        $this->assertDatabaseCount("favorite_albums", 1);
        $response->assertStatus(302)->assertRedirect("/login");

    }

}
