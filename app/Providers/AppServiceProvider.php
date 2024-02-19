<?php

namespace App\Providers;

use App\Services\ApiService;
use Illuminate\Support\ServiceProvider;
use \GuzzleHttp\Client;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //TODO: uncomment if api service is not available
        // $this->app->singleton(ApiService::class, function($app) {
        //     return new ApiService($app);
        // });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
