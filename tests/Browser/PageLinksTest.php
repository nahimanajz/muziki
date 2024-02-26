<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class PageLinksTest extends DuskTestCase
{
    use DatabaseTruncation;

    /**
     * A Dusk test example.
     */
    public function test_redirection_to_albums_page(): void
    {
        $user = User::factory()->create([
            'email' => 'jz@example.com',
        ]);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)->visit('/albums')->assertPathIs('/albums');
        });
    }


    public function test_redirection_to_search_albums_page(): void
    {
        $user = User::factory()->create([
            'email' => 'jz@example.com',
        ]);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)->visit('/find/album')->assertPathIs('/find/album');
        });
    }



    public function test_redirection_to_artist_page()
    {
        $user = User::factory()->create([
            'email' => 'jz@example.com',
        ]);
        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)->visit("/artist")->assertPathIs('/artist')->assertPathIsNot("/artists");
        });
    }
    public function test_redirection_to_login_page()
    {
        $user = User::factory()->create([
            'email' => 'jz@example.com',
        ]);
        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)->visit("/login")->assertPathIs('/login');
        });
    }

    public function test_redirection_to_register_page()
    {
        $user = User::factory()->create();
        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit("/register")->assertPathIs('/register');
        });
    }
}
