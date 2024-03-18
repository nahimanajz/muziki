<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('favorite_artists', function (Blueprint $table) {
            $table->id();
            $table->foreignId("userId");
            $table->string("name");
            $table->integer("listeners");
            $table->boolean("streamable");

            $table->uuid("mbid")->nullable();
            $table->string("url");
            $table->string("image")->default(env("DEFAULT_IMAGE"));
            $table->timestamps();

            $table->foreign("userId")->references("id")->on("users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favorite_artists');
    }
};
