<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;


class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
    /**
     * Handle Google login
     */
    public function redirectToGoogle(): RedirectResponse
    {
        return Socialite::driver("google")->redirect();
    }
    /**
     * Handle Google callback and manage user data
     */
    public function handleGoogleCallback():Response
    {
        $googleUser = Socialite::driver("google")->user();
        $user = User::firstOrNew([
            "name" => $googleUser->name,
            "email" => $googleUser->email,
            "google_id" =>(int) $googleUser->id,
            
        ]);
        $user->save();
        Auth::login($user);
     
        return Inertia::render('Dashboard');
    }
}
