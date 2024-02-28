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
        Schema::create('favorite_albums', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("artist");
            $table->foreignId("userId");
            $table->string("url");
            $table->integer("playCount");
            $table->dateTime("published");
            $table->timestamps();

            $table->foreign("userId")->references("id")->on("users");


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favorite_albums');
    }
};
