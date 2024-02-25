<?php

namespace Tests\Feature\Http\Controllers;

use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class SearchControllerTest extends TestCase
{



    public function test_artist_search_page_is_rendered(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_album_search_page_is_rendered(): void
    {
        $response = $this->get('/find/album');
        $response->assertStatus(200);
    
    }


    public function test_album_search_request_on_last_fm_3_rd_party_api_is_successfull(): void
    {
        $response = $this->post('/search/album', [
            "artist" => "Cher",
            "album" => "Believe"
        ]);
        $response->assertStatus(200);
    }
    public function test_can_view_album_from_last_fm_api_with_artist_name_Cher(): void
    {
        $response = $this->post('/search/album', [
            "artist" => "Cher",
            "album" => "Believe"
        ]);
        $response->assertInertia(fn (Assert $page) => $page->component('Search/Album')->has("album")->where("album.artist", "Cher"));
    }
    public function test_artist_search_request_on_last_fm_3_rd_party_api_is_successfull(): void
    {
        $response = $this->post('/search/artist', [
            "artist" => "Cher"
        ]);
        $response->assertStatus(200);
    }
    public function test_can_view_artist_from_last_fm_api_with_artist_name_Cher(): void
    {
        $response = $this->post('/search/artist', ["artist" => "Cher"]);
        $response->assertInertia(fn (Assert $page) => $page->component('Welcome')->has("artists")->where("artists.0.listeners", "1653174"));
      
    }
}
