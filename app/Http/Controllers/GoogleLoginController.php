<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;
use Throwable;

class GoogleLoginController extends Controller
{


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function handleGoogleCallback(): RedirectResponse
    {

        $googleUser = Socialite::driver("google")->user();
        $user = User::where("email", $googleUser?->email)->first();
        $verifiedUser = $this->verifyUser($user, $googleUser);

        Auth::login($verifiedUser);

        return redirect("/dashboard");
    }

    /**
     * @param User $user current user instance
     * @param $googleUser user data from google auth response
     * @return User created or verified user instance
     */
    private function verifyUser($user, $googleUser):User
    {
        if (!$user) {

            $user = User::firstOrNew([
                "name" => $googleUser?->name,
                "email" => $googleUser?->email,
                "password" => $googleUser?->id,

            ]);
            $user->save();
        }
        return $user;
    }
}
