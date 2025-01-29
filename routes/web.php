<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Sajo',
        'frameworks' => [
            'laravel', 'vue', 'Inertia'
        ]
    ]);
});



Route::get('/users', function () {
    return Inertia::render('Users', [
        'name' => 'Sajo',
    ]);
});


Route::get('/settings', function () {
    return Inertia::render('Settings');
});
