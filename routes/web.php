<?php

use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;


Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Sajo',
        'frameworks' => [
            'laravel', 'vue', 'Inertia'
        ]
    ]);
});



Route::get('/users', function (Request $request) {
    return Inertia::render('Users/Index', [
        'users' => User::query()
            ->when($request->input('search', ''), function ($query, $search) {
                $query->where('name', 'like', '%' . $search . '%');
            })
        ->paginate(10)
        ->withQueryString()
        ->through(fn($user) => [
            'id' => $user->id,
            'name' => $user->name,
        ]),

        'filters' => $request->only(['search'])
    ]);
});

Route::get('/users/create', function () {
    return Inertia::render('Users/Create');
});

Route::post('/users', function () {
    $attributes = request()->validate([
        'name' => 'required',
        'email' => 'required|email',
        'password' => 'required',
    ]);

    User::create($attributes);
    return redirect('users');
});


Route::get('/settings', function () {
    return Inertia::render('Settings');
});


Route::post('/logout', function () {
    dd('Logout');
});
